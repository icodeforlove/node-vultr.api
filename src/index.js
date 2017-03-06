import endpoints from './endpoints';
import request from 'request-promise';
import qs from 'querystring';
import rtry from 'rtry';
import Debug from 'debug';

const debug = Debug('vultr.api');

class Vultr {
	constructor(options) {
		options = options || {};

		this.API_ROOT = 'https://api.vultr.com';
		this.API_KEY = options.key;
		this.API_VERSION = options.version || 1;

		if (!this.API_KEY) {
			throw new Error('vultr.api: "key" is required');
		}
	}

	request = rtry({retries: 10, beforeRetry: ({retry, error}) => debug(`ATTEMPT #${retry} : ${error.stack}`)},
		async function ({method, query, body, group, action}) {
			this.validate ({method, query, body, group, action});

			const url = `${this.API_ROOT}/v${this.API_VERSION}/${group}/${action}${query ? '?' + qs.stringify(query) : ''}`;

			const headers = {
				'API-Key': this.API_KEY
			};

			return await request({
				method,
				url,
				headers,
				json: true,
				form: body
			});
		}
	);

	validate ({method, query, body, group, action}) {
		let path = `/v${this.API_VERSION}/${group}/${action}`;

		let endpoint = endpoints.filter(endpoint => (
			endpoint.method === method &&
			endpoint.path === path
		)).shift();

		if (!endpoint) {
			throw Error(`vultr.api: unsupported endpoint "${method} ${path}"`)
		}

		let parameters = query || body || {};

		// check for required parameters
		let missingParameters = endpoint.parameters.required.filter(
			parameter => !parameters[parameter.name]
		);
		if (missingParameters.length) {
			throw Error(
				`vultr.api: missing parameters for endpoint "${method} ${path}"\n` +
				missingParameters.map(param => `\t${param.name} ${param.type} - ${param.description}`).join('\n')
			);
		}

		Object.keys(parameters).forEach(key => {
			let value = parameters[key];

			let match = endpoint.parameters.required.concat(endpoint.parameters.optional).filter(
				({name}) => name === key
			).shift();

			if (!match) {
				throw new Error(`vultr.api: unsupported param "${key}" for "${method} ${path}"`)
			}

			if (match.type === 'integer' && typeof value !== 'number') {
				throw new Error(`vultr.api: "${key}" needs to be a ${match.type} for "${method} ${path}"`)
			}

			if (match.type === 'string' && typeof value !== 'string') {
				throw new Error(`vultr.api: "${key}" needs to be a ${match.type} for "${method} ${path}"`)
			}

			if (match.type === 'array' && typeof value !== 'array') {
				throw new Error(`vultr.api: "${key}" needs to be a ${match.type} for "${method} ${path}"`)
			}
		});
	}

	async get (path, query) {
		let parts = path.split('/');

		return await this.request({
			method: 'GET',
			group: parts[0],
			action: parts[1],
			query
		});
	}

	async post (path, body) {
		let parts = path.split('/');

		return await this.request({
			method: 'POST',
			group: parts[0],
			action: parts[1],
			body
		});
	}
}

export default Vultr;