export default [
	{
		"group": "account",
		"action": "account_info",
		"method": "GET",
		"path": "/v1/account/info",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "app",
		"action": "app_app_list",
		"method": "GET",
		"path": "/v1/app/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "auth",
		"action": "auth_info",
		"method": "GET",
		"path": "/v1/auth/info",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "backup",
		"action": "backup_backup_list",
		"method": "GET",
		"path": "/v1/backup/list",
		"parameters": {
			"required": [],
			"optional": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier of a subscription. Only backups for this subscription object will be returned."
				}
			]
		}
	},
	{
		"group": "block",
		"action": "block_attach",
		"method": "POST",
		"path": "/v1/block/attach",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "ID of the block storage subscription to attach"
				},
				{
					"name": "attach_to_SUBID",
					"type": "integer",
					"description": "ID of the VPS subscription to mount the block storage subscription to"
				}
			],
			"optional": []
		}
	},
	{
		"group": "block",
		"action": "block_create",
		"method": "POST",
		"path": "/v1/block/create",
		"parameters": {
			"required": [
				{
					"name": "DCID",
					"type": "integer",
					"description": "DCID of the location to create this subscription in.  See /v1/regions/list"
				},
				{
					"name": "size_gb",
					"type": "integer",
					"description": "Size (in GB) of this subscription."
				}
			],
			"optional": [
				{
					"name": "label",
					"type": "string",
					"description": "Text label that will be associated with the subscription"
				}
			]
		}
	},
	{
		"group": "block",
		"action": "block_delete",
		"method": "POST",
		"path": "/v1/block/delete",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "ID of the block storage subscription to delete"
				}
			],
			"optional": []
		}
	},
	{
		"group": "block",
		"action": "block_detach",
		"method": "POST",
		"path": "/v1/block/detach",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "ID of the block storage subscription to detach"
				}
			],
			"optional": []
		}
	},
	{
		"group": "block",
		"action": "block_label_set",
		"method": "POST",
		"path": "/v1/block/label_set",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "ID of the block storage subscription."
				},
				{
					"name": "label",
					"type": "string",
					"description": "Text label that will be shown in the control panel."
				}
			],
			"optional": []
		}
	},
	{
		"group": "block",
		"action": "block_block_list",
		"method": "GET",
		"path": "/v1/block/list",
		"parameters": {
			"required": [],
			"optional": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier of a subscription. Only the subscription object will be returned."
				}
			]
		}
	},
	{
		"group": "block",
		"action": "block_resize",
		"method": "POST",
		"path": "/v1/block/resize",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "ID of the block storage subscription to resize"
				},
				{
					"name": "size_gb",
					"type": "integer",
					"description": "New size (in GB) of the block storage subscription"
				}
			],
			"optional": []
		}
	},
	{
		"group": "dns",
		"action": "dns_create_domain",
		"method": "POST",
		"path": "/v1/dns/create_domain",
		"parameters": {
			"required": [
				{
					"name": "domain",
					"type": "string",
					"description": "Domain name to create"
				},
				{
					"name": "serverip",
					"type": "string",
					"description": "Server IP to use when creating default records (A and MX)"
				}
			],
			"optional": []
		}
	},
	{
		"group": "dns",
		"action": "dns_create_record",
		"method": "POST",
		"path": "/v1/dns/create_record",
		"parameters": {
			"required": [
				{
					"name": "domain",
					"type": "string",
					"description": "Domain name to add record to"
				},
				{
					"name": "name",
					"type": "string",
					"description": "Name (subdomain) of record"
				},
				{
					"name": "type",
					"type": "string",
					"description": "Type (A, AAAA, MX, etc) of record"
				},
				{
					"name": "data",
					"type": "string",
					"description": "Data for this record"
				},
				{
					"name": "priority",
					"type": "integer",
					"description": "(only required for MX and SRV) Priority of this record (omit the priority from the data)"
				}
			],
			"optional": [
				{
					"name": "ttl",
					"type": "integer",
					"description": "TTL of this record"
				}
			]
		}
	},
	{
		"group": "dns",
		"action": "dns_delete_domain",
		"method": "POST",
		"path": "/v1/dns/delete_domain",
		"parameters": {
			"required": [
				{
					"name": "domain",
					"type": "string",
					"description": "Domain name to delete"
				}
			],
			"optional": []
		}
	},
	{
		"group": "dns",
		"action": "dns_delete_record",
		"method": "POST",
		"path": "/v1/dns/delete_record",
		"parameters": {
			"required": [
				{
					"name": "domain",
					"type": "string",
					"description": "Domain name to delete record from"
				},
				{
					"name": "RECORDID",
					"type": "integer",
					"description": "ID of record to delete (see /dns/records)"
				}
			],
			"optional": []
		}
	},
	{
		"group": "dns",
		"action": "dns_dns_list",
		"method": "GET",
		"path": "/v1/dns/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "dns",
		"action": "dns_records",
		"method": "GET",
		"path": "/v1/dns/records",
		"parameters": {
			"required": [
				{
					"name": "domain",
					"type": "string",
					"description": "Domain to list records for"
				}
			],
			"optional": []
		}
	},
	{
		"group": "dns",
		"action": "dns_update_record",
		"method": "POST",
		"path": "/v1/dns/update_record",
		"parameters": {
			"required": [
				{
					"name": "domain",
					"type": "string",
					"description": "Domain name to delete record from"
				},
				{
					"name": "RECORDID",
					"type": "integer",
					"description": "ID of record to delete (see /dns/records)"
				}
			],
			"optional": [
				{
					"name": "name",
					"type": "string",
					"description": "Name (subdomain) of record"
				},
				{
					"name": "data",
					"type": "string",
					"description": "Data for this record"
				},
				{
					"name": "ttl",
					"type": "integer",
					"description": "TTL of this record"
				},
				{
					"name": "priority",
					"type": "integer",
					"description": "(only required for MX and SRV) Priority of this record (omit the priority from the data)"
				}
			]
		}
	},
	{
		"group": "firewall",
		"action": "firewall_group_create",
		"method": "POST",
		"path": "/v1/firewall/group_create",
		"parameters": {
			"required": [],
			"optional": [
				{
					"name": "description",
					"type": "string",
					"description": "Description of firewall group."
				}
			]
		}
	},
	{
		"group": "firewall",
		"action": "firewall_group_delete",
		"method": "POST",
		"path": "/v1/firewall/group_delete",
		"parameters": {
			"required": [
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "Firewall group to delete."
				}
			],
			"optional": []
		}
	},
	{
		"group": "firewall",
		"action": "firewall_group_list",
		"method": "GET",
		"path": "/v1/firewall/group_list",
		"parameters": {
			"required": [],
			"optional": [
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "Filter result set to only contain this firewall group."
				}
			]
		}
	},
	{
		"group": "firewall",
		"action": "firewall_group_set_description",
		"method": "POST",
		"path": "/v1/firewall/group_set_description",
		"parameters": {
			"required": [
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "Firewall group to update."
				},
				{
					"name": "description",
					"type": "string",
					"description": "Description of firewall group."
				}
			],
			"optional": []
		}
	},
	{
		"group": "firewall",
		"action": "firewall_rule_create",
		"method": "POST",
		"path": "/v1/firewall/rule_create",
		"parameters": {
			"required": [
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "Target firewall group. See /v1/firewall/group_list."
				},
				{
					"name": "direction",
					"type": "string",
					"description": "Direction of rule. Possible values: \"in\"."
				},
				{
					"name": "ip_type",
					"type": "string",
					"description": "IP address type. Possible values: \"v4\", \"v6\"."
				},
				{
					"name": "protocol",
					"type": "string",
					"description": "Protocol type. Possible values: \"icmp\", \"tcp\", \"udp\", \"gre\"."
				},
				{
					"name": "subnet",
					"type": "string",
					"description": "IP address representing a subnet. The IP address format must match with the \"ip_type\" parameter value."
				},
				{
					"name": "subnet_size",
					"type": "integer",
					"description": "IP prefix size in bits."
				}
			],
			"optional": [
				{
					"name": "port",
					"type": "string",
					"description": "TCP/UDP only. This field can be an integer value specifying a port or a colon separated port range."
				}
			]
		}
	},
	{
		"group": "firewall",
		"action": "firewall_rule_delete",
		"method": "POST",
		"path": "/v1/firewall/rule_delete",
		"parameters": {
			"required": [
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "Target firewall group. See /v1/firewall/group_list."
				},
				{
					"name": "rulenumber",
					"type": "integer",
					"description": "Rule number to delete. See /v1/firewall/rule_list."
				}
			],
			"optional": []
		}
	},
	{
		"group": "firewall",
		"action": "firewall_rule_list",
		"method": "GET",
		"path": "/v1/firewall/rule_list",
		"parameters": {
			"required": [
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "Target firewall group. See /v1/firewall/group_list."
				},
				{
					"name": "direction",
					"type": "string",
					"description": "Direction of firewall rules. Possible values: \"in\"."
				},
				{
					"name": "ip_type",
					"type": "string",
					"description": "IP address type. Possible values: \"v4\", \"v6\"."
				}
			],
			"optional": []
		}
	},
	{
		"group": "iso",
		"action": "iso_iso_list",
		"method": "GET",
		"path": "/v1/iso/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "os",
		"action": "os_os_list",
		"method": "GET",
		"path": "/v1/os/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "plans",
		"action": "plans_plan_list",
		"method": "GET",
		"path": "/v1/plans/list",
		"parameters": {
			"required": [],
			"optional": [
				{
					"name": "type",
					"type": "string",
					"description": "The type of plans to return. Possible values: \"all\", \"vc2\", \"ssd\", \"vdc2\", \"dedicated\"."
				}
			]
		}
	},
	{
		"group": "plans",
		"action": "plans_plan_list_vc2",
		"method": "GET",
		"path": "/v1/plans/list_vc2",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "plans",
		"action": "plans_plan_list_vdc2",
		"method": "GET",
		"path": "/v1/plans/list_vdc2",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "regions",
		"action": "regions_region_available",
		"method": "GET",
		"path": "/v1/regions/availability",
		"parameters": {
			"required": [
				{
					"name": "DCID",
					"type": "integer",
					"description": "Location to check availability of"
				}
			],
			"optional": []
		}
	},
	{
		"group": "regions",
		"action": "regions_region_list",
		"method": "GET",
		"path": "/v1/regions/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "reservedip",
		"action": "reservedip_attach",
		"method": "POST",
		"path": "/v1/reservedip/attach",
		"parameters": {
			"required": [
				{
					"name": "ip_address",
					"type": "string",
					"description": "Reserved IP to attach to your account (use the full subnet here)"
				},
				{
					"name": "attach_SUBID",
					"type": "integer",
					"description": "Unique indentifier of the server to attach the reserved IP to"
				}
			],
			"optional": []
		}
	},
	{
		"group": "reservedip",
		"action": "reservedip_convert",
		"method": "POST",
		"path": "/v1/reservedip/convert",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "SUBID of the server that currently has the IP address you want to convert"
				},
				{
					"name": "ip_address",
					"type": "string",
					"description": "IP address you want to convert (v4 must be a /32, v6 must be a /64)"
				}
			],
			"optional": [
				{
					"name": "label",
					"type": "string",
					"description": "Label for this reserved IP"
				}
			]
		}
	},
	{
		"group": "reservedip",
		"action": "reservedip_create",
		"method": "POST",
		"path": "/v1/reservedip/create",
		"parameters": {
			"required": [
				{
					"name": "DCID",
					"type": "integer",
					"description": "Location to create this reserved IP in.  See v1/regions/list"
				},
				{
					"name": "ip_type",
					"type": "string",
					"description": "'v4' or 'v6' Type of reserved IP to create"
				}
			],
			"optional": [
				{
					"name": "label",
					"type": "string",
					"description": "Label for this reserved IP"
				}
			]
		}
	},
	{
		"group": "reservedip",
		"action": "reservedip_destroy",
		"method": "POST",
		"path": "/v1/reservedip/destroy",
		"parameters": {
			"required": [
				{
					"name": "ip_address",
					"type": "string",
					"description": "Reserved IP to remove from your account."
				}
			],
			"optional": []
		}
	},
	{
		"group": "reservedip",
		"action": "reservedip_detach",
		"method": "POST",
		"path": "/v1/reservedip/detach",
		"parameters": {
			"required": [
				{
					"name": "ip_address",
					"type": "string",
					"description": "Reserved IP to attach to your account (use the full subnet here)"
				},
				{
					"name": "detach_SUBID",
					"type": "integer",
					"description": "Unique identifier of the server to detach the reserved IP from"
				}
			],
			"optional": []
		}
	},
	{
		"group": "reservedip",
		"action": "reservedip_ip_list",
		"method": "GET",
		"path": "/v1/reservedip/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_app_change",
		"method": "POST",
		"path": "/v1/server/app_change",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "APPID",
					"type": "integer",
					"description": "Application to use. See /v1/server/app_change_list."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_app_change_list",
		"method": "GET",
		"path": "/v1/server/app_change_list",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_backup_disable",
		"method": "POST",
		"path": "/v1/server/backup_disable",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_backup_enable",
		"method": "POST",
		"path": "/v1/server/backup_enable",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_backup_get_schedule",
		"method": "POST",
		"path": "/v1/server/backup_get_schedule",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_backup_set_schedule",
		"method": "POST",
		"path": "/v1/server/backup_set_schedule",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "cron_type",
					"type": "string",
					"description": "Backup cron type. Can be one of 'daily', 'weekly', or 'monthly'."
				}
			],
			"optional": [
				{
					"name": "hour",
					"type": "integer",
					"description": "Hour value (0-23). Applicable to crons: 'daily', 'weekly', 'monthly'."
				},
				{
					"name": "dow",
					"type": "integer",
					"description": "Day-of-week value (0-6). Applicable to crons: 'weekly'."
				},
				{
					"name": "dom",
					"type": "integer",
					"description": "Day-of-month value (1-28). Applicable to crons: 'monthly'."
				}
			]
		}
	},
	{
		"group": "server",
		"action": "server_bandwidth",
		"method": "GET",
		"path": "/v1/server/bandwidth",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_create",
		"method": "POST",
		"path": "/v1/server/create",
		"parameters": {
			"required": [
				{
					"name": "DCID",
					"type": "integer",
					"description": "Location to create this virtual machine in.  See v1/regions/list"
				},
				{
					"name": "VPSPLANID",
					"type": "integer",
					"description": "Plan to use when creating this virtual machine.  See v1/plans/list"
				},
				{
					"name": "OSID",
					"type": "integer",
					"description": "Operating system to use.  See v1/os/list"
				}
			],
			"optional": [
				{
					"name": "ipxe_chain_url",
					"type": "string",
					"description": "If you've selected the 'custom' operating system, this can be set to chainload the specified URL on bootup, via iPXE"
				},
				{
					"name": "ISOID",
					"type": "string",
					"description": " If you've selected the 'custom' operating system, this is the ID of a specific ISO to mount during the deployment"
				},
				{
					"name": "SCRIPTID",
					"type": "integer",
					"description": "If you've not selected a 'custom' operating system, this can be the SCRIPTID of a startup script to execute on boot.  See v1/startupscript/list"
				},
				{
					"name": "SNAPSHOTID",
					"type": "string",
					"description": "If you've selected the 'snapshot' operating system, this should be the SNAPSHOTID (see v1/snapshot/list) to restore for the initial installation"
				},
				{
					"name": "enable_ipv6",
					"type": "string",
					"description": "'yes' or 'no'.  If yes, an IPv6 subnet will be assigned to the machine (where available)"
				},
				{
					"name": "enable_private_network",
					"type": "string",
					"description": "'yes' or 'no'. If yes, private networking support will be added to the new server."
				},
				{
					"name": "label",
					"type": "string",
					"description": "This is a text label that will be shown in the control panel"
				},
				{
					"name": "SSHKEYID",
					"type": "string",
					"description": "List of SSH keys to apply to this server on install (only valid for Linux/FreeBSD).  See v1/sshkey/list.  Seperate keys with commas"
				},
				{
					"name": "auto_backups",
					"type": "string",
					"description": "'yes' or 'no'.  If yes, automatic backups will be enabled for this server (these have an extra charge associated with them)"
				},
				{
					"name": "APPID",
					"type": "integer",
					"description": "If launching an application (OSID 186), this is the APPID to launch. See v1/app/list."
				},
				{
					"name": "userdata",
					"type": "string",
					"description": "Base64 encoded cloud-init user-data"
				},
				{
					"name": "reserved_ip_v4",
					"type": "string",
					"description": "IP address of the floating IP to use as the main IP of this server"
				},
				{
					"name": "hostname",
					"type": "string",
					"description": "The hostname to assign to this server."
				},
				{
					"name": "tag",
					"type": "string",
					"description": "The tag to assign to this server."
				},
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "The firewall group to assign to this server. See /v1/firewall/group_list."
				}
			]
		}
	},
	{
		"group": "server",
		"action": "server_create_ipv4",
		"method": "POST",
		"path": "/v1/server/create_ipv4",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_destroy",
		"method": "POST",
		"path": "/v1/server/destroy",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_destroy_ipv4",
		"method": "POST",
		"path": "/v1/server/destroy_ipv4",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "ip",
					"type": "string",
					"description": "IPv4 address to remove."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_firewall_group_set",
		"method": "POST",
		"path": "/v1/server/firewall_group_set",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. See v1/server/list."
				},
				{
					"name": "FIREWALLGROUPID",
					"type": "string",
					"description": "The firewall group to apply to this server. A value of \"0\" means \"no firewall group\". See /v1/firewall/group_list."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_get_app_info",
		"method": "GET",
		"path": "/v1/server/get_app_info",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_get_user_data",
		"method": "GET",
		"path": "/v1/server/get_user_data",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_halt",
		"method": "POST",
		"path": "/v1/server/halt",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_iso_attach",
		"method": "POST",
		"path": "/v1/server/iso_attach",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the /v1/server/list call."
				},
				{
					"name": "ISOID",
					"type": "integer",
					"description": "The ISO that will be mounted. See the /v1/iso/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_iso_detach",
		"method": "POST",
		"path": "/v1/server/iso_detach",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the /v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_iso_status",
		"method": "GET",
		"path": "/v1/server/iso_status",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the /v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_label_set",
		"method": "POST",
		"path": "/v1/server/label_set",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "label",
					"type": "string",
					"description": "This is a text label that will be shown in the control panel."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_server_list",
		"method": "GET",
		"path": "/v1/server/list",
		"parameters": {
			"required": [],
			"optional": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier of a subscription. Only the subscription object will be returned."
				},
				{
					"name": "tag",
					"type": "string",
					"description": "A tag string. Only subscription objects with this tag will be returned."
				},
				{
					"name": "label",
					"type": "string",
					"description": "A text label string. Only subscription objects with this text label will be returned."
				},
				{
					"name": "main_ip",
					"type": "string",
					"description": "An IPv4 address. Only the subscription matching this IPv4 address will be returned."
				}
			]
		}
	},
	{
		"group": "server",
		"action": "server_list_ipv4",
		"method": "GET",
		"path": "/v1/server/list_ipv4",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_list_ipv6",
		"method": "GET",
		"path": "/v1/server/list_ipv6",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_neighbors",
		"method": "GET",
		"path": "/v1/server/neighbors",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_os_change",
		"method": "POST",
		"path": "/v1/server/os_change",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "OSID",
					"type": "integer",
					"description": "Operating system to use. See /v1/server/os_change_list."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_os_change_list",
		"method": "GET",
		"path": "/v1/server/os_change_list",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reboot",
		"method": "POST",
		"path": "/v1/server/reboot",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reinstall",
		"method": "POST",
		"path": "/v1/server/reinstall",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				}
			],
			"optional": [
				{
					"name": "hostname",
					"type": "string",
					"description": "The hostname to assign to this server."
				}
			]
		}
	},
	{
		"group": "server",
		"action": "server_restore_backup",
		"method": "POST",
		"path": "/v1/server/restore_backup",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				},
				{
					"name": "BACKUPID",
					"type": "string",
					"description": "BACKUPID (see v1/backup/list) to restore to this instance"
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_restore_snapshot",
		"method": "POST",
		"path": "/v1/server/restore_snapshot",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				},
				{
					"name": "SNAPSHOTID",
					"type": "string",
					"description": "SNAPSHOTID (see v1/snapshot/list) to restore to this instance"
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reverse_default_ipv4",
		"method": "POST",
		"path": "/v1/server/reverse_default_ipv4",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "ip",
					"type": "string",
					"description": "IPv4 address used in the reverse DNS update. These can be found with the v1/server/list_ipv4 call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reverse_delete_ipv6",
		"method": "POST",
		"path": "/v1/server/reverse_delete_ipv6",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "ip",
					"type": "string",
					"description": "IPv6 address used in the reverse DNS update. These can be found with the v1/server/reverse_list_ipv6 call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reverse_list_ipv6",
		"method": "GET",
		"path": "/v1/server/reverse_list_ipv6",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reverse_set_ipv4",
		"method": "POST",
		"path": "/v1/server/reverse_set_ipv4",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "ip",
					"type": "string",
					"description": "IPv4 address used in the reverse DNS update. These can be found with the v1/server/list_ipv4 call."
				},
				{
					"name": "entry",
					"type": "string",
					"description": "reverse DNS entry."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_reverse_set_ipv6",
		"method": "POST",
		"path": "/v1/server/reverse_set_ipv6",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "ip",
					"type": "string",
					"description": "IPv6 address used in the reverse DNS update. These can be found with the v1/server/list_ipv6 or v1/server/reverse_list_ipv6 calls."
				},
				{
					"name": "entry",
					"type": "string",
					"description": "reverse DNS entry."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_set_user_data",
		"method": "POST",
		"path": "/v1/server/set_user_data",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "userdata",
					"type": "string",
					"description": "Base64 encoded cloud-init user-data"
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_start",
		"method": "POST",
		"path": "/v1/server/start",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription.  These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_upgrade_plan",
		"method": "POST",
		"path": "/v1/server/upgrade_plan",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				},
				{
					"name": "VPSPLANID",
					"type": "integer",
					"description": "The new plan. See /v1/server/upgrade_plan_list."
				}
			],
			"optional": []
		}
	},
	{
		"group": "server",
		"action": "server_upgrade_plan_list",
		"method": "GET",
		"path": "/v1/server/upgrade_plan_list",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Unique identifier for this subscription. These can be found using the v1/server/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "snapshot",
		"action": "snapshot_create",
		"method": "POST",
		"path": "/v1/snapshot/create",
		"parameters": {
			"required": [
				{
					"name": "SUBID",
					"type": "integer",
					"description": "Identifier of the virtual machine to create a snapshot from.  See v1/server/list"
				}
			],
			"optional": [
				{
					"name": "description",
					"type": "string",
					"description": "Description of snapshot contents"
				}
			]
		}
	},
	{
		"group": "snapshot",
		"action": "snapshot_destroy",
		"method": "POST",
		"path": "/v1/snapshot/destroy",
		"parameters": {
			"required": [
				{
					"name": "SNAPSHOTID",
					"type": "string",
					"description": "Unique identifier for this snapshot.  These can be found using the v1/snapshot/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "snapshot",
		"action": "snapshot_snapshot_list",
		"method": "GET",
		"path": "/v1/snapshot/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "sshkey",
		"action": "sshkey_create",
		"method": "POST",
		"path": "/v1/sshkey/create",
		"parameters": {
			"required": [
				{
					"name": "name",
					"type": "string",
					"description": "Name of the SSH key"
				},
				{
					"name": "ssh_key",
					"type": "string",
					"description": "SSH public key (in authorized_keys format)"
				}
			],
			"optional": []
		}
	},
	{
		"group": "sshkey",
		"action": "sshkey_destroy",
		"method": "POST",
		"path": "/v1/sshkey/destroy",
		"parameters": {
			"required": [
				{
					"name": "SSHKEYID",
					"type": "string",
					"description": "Unique identifier for this SSH key.  These can be found using the v1/sshkey/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "sshkey",
		"action": "sshkey_sshkey_list",
		"method": "GET",
		"path": "/v1/sshkey/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "sshkey",
		"action": "sshkey_update",
		"method": "POST",
		"path": "/v1/sshkey/update",
		"parameters": {
			"required": [
				{
					"name": "SSHKEYID",
					"type": "string",
					"description": "SSHKEYID of key to update (see /v1/sshkey/list)"
				}
			],
			"optional": [
				{
					"name": "name",
					"type": "string",
					"description": "New name for the SSH key"
				},
				{
					"name": "ssh_key",
					"type": "string",
					"description": "New SSH key contents"
				}
			]
		}
	},
	{
		"group": "startupscript",
		"action": "startupscript_create",
		"method": "POST",
		"path": "/v1/startupscript/create",
		"parameters": {
			"required": [
				{
					"name": "name",
					"type": "string",
					"description": "Name of the newly created startup script"
				},
				{
					"name": "script",
					"type": "string",
					"description": "Startup script contents"
				},
				{
					"name": "type",
					"type": "string",
					"description": "boot|pxe Type of startup script.  Default is 'boot'"
				}
			],
			"optional": []
		}
	},
	{
		"group": "startupscript",
		"action": "startupscript_destroy",
		"method": "POST",
		"path": "/v1/startupscript/destroy",
		"parameters": {
			"required": [
				{
					"name": "SCRIPTID",
					"type": "string",
					"description": "Unique identifier for this startup script.  These can be found using the v1/startupscript/list call."
				}
			],
			"optional": []
		}
	},
	{
		"group": "startupscript",
		"action": "startupscript_startupscript_list",
		"method": "GET",
		"path": "/v1/startupscript/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "startupscript",
		"action": "startupscript_update",
		"method": "POST",
		"path": "/v1/startupscript/update",
		"parameters": {
			"required": [
				{
					"name": "SCRIPTID",
					"type": "integer",
					"description": "SCRIPTID of script to update (see /v1/startupscript/list)"
				}
			],
			"optional": [
				{
					"name": "name",
					"type": "string",
					"description": "New name for the startup script"
				},
				{
					"name": "script",
					"type": "string",
					"description": "New startup script contents"
				}
			]
		}
	},
	{
		"group": "user",
		"action": "user_create",
		"method": "POST",
		"path": "/v1/user/create",
		"parameters": {
			"required": [
				{
					"name": "email",
					"type": "string",
					"description": "Email address for this user"
				},
				{
					"name": "name",
					"type": "string",
					"description": "Name for this user"
				},
				{
					"name": "password",
					"type": "Password",
					"description": "for this user"
				},
				{
					"name": "acls",
					"type": "array",
					"description": "List of ACLs that this user should have.  See /v1/user/list for information on possible ACLs"
				}
			],
			"optional": [
				{
					"name": "api_enabled",
					"type": "string",
					"description": "'yes' or 'no'. If yes, this user's API key will work on api.vultr.com.  Default is yes"
				}
			]
		}
	},
	{
		"group": "user",
		"action": "user_delete",
		"method": "POST",
		"path": "/v1/user/delete",
		"parameters": {
			"required": [
				{
					"name": "USERID",
					"type": "int",
					"description": "ID of the user to delete"
				}
			],
			"optional": []
		}
	},
	{
		"group": "user",
		"action": "user_user_list",
		"method": "GET",
		"path": "/v1/user/list",
		"parameters": {
			"required": [],
			"optional": []
		}
	},
	{
		"group": "user",
		"action": "user_update",
		"method": "POST",
		"path": "/v1/user/update",
		"parameters": {
			"required": [
				{
					"name": "USERID",
					"type": "string",
					"description": "ID of the user to update"
				}
			],
			"optional": [
				{
					"name": "email",
					"type": "string",
					"description": "New email address for this user"
				},
				{
					"name": "name",
					"type": "string",
					"description": "New name for this user"
				},
				{
					"name": "password",
					"type": "string",
					"description": "New password for this user"
				},
				{
					"name": "api_enabled",
					"type": "string",
					"description": "'yes' or 'no'. If yes, this user's API key will work on api.vultr.com"
				},
				{
					"name": "acls",
					"type": "array",
					"description": "List of ACLs that this user should have.  See /v1/user/list for information on possible ACLs"
				}
			]
		}
	}
];