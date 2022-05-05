const DidDocumentContract = {
	abi: {
		"ABI version": 2,
		version: "2.1",
		header: ["time", "expire"],
		functions: [
			{
				name: "constructor",
				inputs: [
					{
						name: "pubKey",
						type: "uint256",
					},
					{
						name: "didDocument",
						type: "string",
					},
					{
						name: "issuerAddr",
						type: "address",
					},
				],
				outputs: [],
			},
			{
				name: "newDidDocument",
				inputs: [
					{
						name: "didDocument",
						type: "string",
					},
				],
				outputs: [],
			},
			{
				name: "newDidStatus",
				inputs: [
					{
						name: "status",
						type: "bool",
					},
				],
				outputs: [],
			},
			{
				name: "newDidIssuerPubKey",
				inputs: [
					{
						name: "pubKey",
						type: "uint256",
					},
					{
						name: "issuerAddr",
						type: "address",
					},
				],
				outputs: [],
			},
			{
				name: "deleteDidDocument",
				inputs: [],
				outputs: [],
			},
			{
				name: "getDid",
				inputs: [],
				outputs: [
					{
						components: [
							{
								name: "status",
								type: "string",
							},
							{
								name: "issuerPubKey",
								type: "uint256",
							},
							{
								name: "issuerAddr",
								type: "address",
							},
							{
								name: "didDocument",
								type: "string",
							},
						],
						name: "value0",
						type: "tuple",
					},
				],
			},
			{
				name: "getInfo",
				inputs: [],
				outputs: [
					{
						name: "addrDidStorage",
						type: "address",
					},
					{
						components: [
							{
								name: "status",
								type: "string",
							},
							{
								name: "issuerPubKey",
								type: "uint256",
							},
							{
								name: "issuerAddr",
								type: "address",
							},
							{
								name: "didDocument",
								type: "string",
							},
						],
						name: "didItem",
						type: "tuple",
					},
				],
			},
		],
		data: [
			{
				key: 1,
				name: "_id",
				type: "uint256",
			},
		],
		events: [],
		fields: [
			{
				name: "_pubkey",
				type: "uint256",
			},
			{
				name: "_timestamp",
				type: "uint64",
			},
			{
				name: "_constructorFlag",
				type: "bool",
			},
			{
				components: [
					{
						name: "status",
						type: "string",
					},
					{
						name: "issuerPubKey",
						type: "uint256",
					},
					{
						name: "issuerAddr",
						type: "address",
					},
					{
						name: "didDocument",
						type: "string",
					},
				],
				name: "_didItem",
				type: "tuple",
			},
			{
				name: "_addrDidStorage",
				type: "address",
			},
			{
				name: "_id",
				type: "uint256",
			},
		],
	},
	tvc: "te6ccgECKQEABM8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUoBAQkiu1TIOMDIMD/4wIgwP7jAvILJQYFJwLg7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPCEHA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCQkBwIoIIIQRmOCXLvjAiCCEHiYDem74wISCAM8IIIQaZqpr7rjAiCCEHE8tRe64wIgghB4mA3puuMCEA4JAyow+Eby4Ez4Qm7jANIA0ds8MNs88gAiChwCIPhJ+EpvEscF8uBmjoCOgOINCwEO+EqIb1D4agwAEGluYWN0aXZlAQ74SohvUPhqHQMmMPhG8uBM+EJu4wDR2zww2zzyACIPHAA4+En4Sm8SxwXy4Gb4ScjPhQjOgG/PQMmBAKD7AANAMPhG8uBM+EJu4wAhldP/1NHQktP/4vpA0ds8MNs88gAiERwAMPhJ+EpvEscF8uBm+EpYb1Eg+GoBb1L4agRQIIIQILLLJ7rjAiCCEC5nuIi64wIgghAuxerFuuMCIIIQRmOCXLrjAhoXFRMDKDD4RvLgTPhCbuMA1NHbPDDbPPIAIhQcACT4SfhKbxLHBfLgZvhKAW9T+GoDgDD4RvLgTPhCbuMA0ds8IY4oI9DTAfpAMDHIz4cgznHPC2EByM+SuxerFgFvJF4wzMv/zszNyXD7AJEw4uMA8gAiFhgABPhKA4gw+Eby4Ez4Qm7jANHbPCKOLCTQ0wH6QDAxyM+HIM5xzwthAsjPkrme4iLOAW8kXjDMy/9ZyM7Mzc3JcPsAkVvi4wDyACIZGAAo7UTQ0//TPzH4Q1jIy//LP87J7VQACPhL+EoEnjD4Qm7jAPhG8nMhltP/1NTR0JPT/9Ti+kDR+EGIyM+OK2zWzM7J2zwgbvLQZSBu8n/Q+kAw+EkhxwXy4GRopv5gghAR4aMAvvLgZPgA+GshKB4bBHaIcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhvBIhvUFhvU1hvUQFvUvhq2zzyACcnHRwAUPhM+Ev4SvhD+ELIy//LP8+DAW8kXjDMy/9VMMjOzFnIzsv/zc3J7VQADGFjdGl2ZQIY0CCLOK2zWMcFioriHyABCtdN0Ns8IABC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBjoDjDSMiAFTtRNDT/9M/0wAx1NP/1NHQ+kDUVTBvBAHU0dD6QNP/0fhs+Gv4avhj+GIC6HDtRND0BYhwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiG8E+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a3EhgED0DpPXC/+RcOL4bIBA9A7yvdcL//hicPhjJycACvhG8uBMAgr0pCD0oScmABRzb2wgMC41My4wAAAADCD4Ye0e2Q==",
	code: "te6ccgECJgEABKIAAgaK2zUlAQQkiu1TIOMDIMD/4wIgwP7jAvILIgMCJALg7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPB4EA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCEhBAIoIIIQRmOCXLvjAiCCEHiYDem74wIPBQM8IIIQaZqpr7rjAiCCEHE8tRe64wIgghB4mA3puuMCDQsGAyow+Eby4Ez4Qm7jANIA0ds8MNs88gAfBxkCIPhJ+EpvEscF8uBmjoCOgOIKCAEO+EqIb1D4agkAEGluYWN0aXZlAQ74SohvUPhqGgMmMPhG8uBM+EJu4wDR2zww2zzyAB8MGQA4+En4Sm8SxwXy4Gb4ScjPhQjOgG/PQMmBAKD7AANAMPhG8uBM+EJu4wAhldP/1NHQktP/4vpA0ds8MNs88gAfDhkAMPhJ+EpvEscF8uBm+EpYb1Eg+GoBb1L4agRQIIIQILLLJ7rjAiCCEC5nuIi64wIgghAuxerFuuMCIIIQRmOCXLrjAhcUEhADKDD4RvLgTPhCbuMA1NHbPDDbPPIAHxEZACT4SfhKbxLHBfLgZvhKAW9T+GoDgDD4RvLgTPhCbuMA0ds8IY4oI9DTAfpAMDHIz4cgznHPC2EByM+SuxerFgFvJF4wzMv/zszNyXD7AJEw4uMA8gAfExUABPhKA4gw+Eby4Ez4Qm7jANHbPCKOLCTQ0wH6QDAxyM+HIM5xzwthAsjPkrme4iLOAW8kXjDMy/9ZyM7Mzc3JcPsAkVvi4wDyAB8WFQAo7UTQ0//TPzH4Q1jIy//LP87J7VQACPhL+EoEnjD4Qm7jAPhG8nMhltP/1NTR0JPT/9Ti+kDR+EGIyM+OK2zWzM7J2zwgbvLQZSBu8n/Q+kAw+EkhxwXy4GRopv5gghAR4aMAvvLgZPgA+GseJRsYBHaIcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhvBIhvUFhvU1hvUQFvUvhq2zzyACQkGhkAUPhM+Ev4SvhD+ELIy//LP8+DAW8kXjDMy/9VMMjOzFnIzsv/zc3J7VQADGFjdGl2ZQIY0CCLOK2zWMcFioriHB0BCtdN0Ns8HQBC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBjoDjDSAfAFTtRNDT/9M/0wAx1NP/1NHQ+kDUVTBvBAHU0dD6QNP/0fhs+Gv4avhj+GIC6HDtRND0BYhwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiG8E+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a3EhgED0DpPXC/+RcOL4bIBA9A7yvdcL//hicPhjJCQACvhG8uBMAgr0pCD0oSQjABRzb2wgMC41My4wAAAADCD4Ye0e2Q==",
	codeHash: "b94f3aaa7784abb8893ba2705c502c52557bb62ef2a5445dbbf7d20664d1554c",
};
module.exports = {DidDocumentContract};
