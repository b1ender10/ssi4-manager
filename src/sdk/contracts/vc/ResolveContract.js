const ResolveContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "codeIndexStatus",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndexVC",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resolveCodeHashIndexVC",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndexVC",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrVC",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndexVC",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashIndexStatus",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndexStatus",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrStatus",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndexStatus",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeIndexStatus",
                "type": "cell"
            },
            {
                "name": "_codeIndexVC",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECIQEABAMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA0GA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HR0GAiggghBhxNH1u+MCIIIQaBOkEbrjAgkHA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA6BOkEYzxbL/8lw+wCRMOLjAH/4ZxwIEwEI2zz5ABYEUCCCECqifhC64wIgghBGfi3UuuMCIIIQSi5P1rrjAiCCEGHE0fW64wISDwwKA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA4cTR9YzxbL/8lw+wCRMOLjAH/4ZxwLEwEI2zz5ABECMjD4Qm7jAPhG8nPU1NH4AAH4avhr2zx/+GcNEwIW7UTQ10nCAYqOgOIcDgI0cO1E0PQFiPhqiPhrgED0DvK91wv/+GJw+GMgIAOUMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5MZ+LdSzs3JcPsAkTDi4wB/+GccEBMCcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjbPFjbPPkAcMjPhkDKB8v/ydAxERUBEsjO+EvQAcnbPBcDlDD4RvLgTPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Sqon4Qs7NyXD7AJEw4uMAf/hnHBQTACj4S/hK+EP4QsjL/8s/z4PMzMntVAJwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNs8WNs8+QBwyM+GQMoHy//J0DEWFQBEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQESyM74StAByds8FwIWIYs4rbNYxwWKiuIZGAEIAds8yRoBJgHU1DAS0Ns8yM+OK2zWEszPEckaAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4bAQSIASAAKu1E0NP/0z/TADHU1NH4a/hq+GP4YgAK+Eby4EwCCvSkIPShIB8AFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECHgEAA9YABCSK7VMg4wMgwP/jAiDA/uMC8gsbAgEdAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAoDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GhoDAiggghBhxNH1u+MCIIIQaBOkEbrjAgYEA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA6BOkEYzxbL/8lw+wCRMOLjAH/4ZxkFEAEI2zz5ABMEUCCCECqifhC64wIgghBGfi3UuuMCIIIQSi5P1rrjAiCCEGHE0fW64wIPDAkHA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA4cTR9YzxbL/8lw+wCRMOLjAH/4ZxkIEAEI2zz5AA4CMjD4Qm7jAPhG8nPU1NH4AAH4avhr2zx/+GcKEAIW7UTQ10nCAYqOgOIZCwI0cO1E0PQFiPhqiPhrgED0DvK91wv/+GJw+GMdHQOUMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5MZ+LdSzs3JcPsAkTDi4wB/+GcZDRACcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjbPFjbPPkAcMjPhkDKB8v/ydAxDhIBEsjO+EvQAcnbPBQDlDD4RvLgTPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Sqon4Qs7NyXD7AJEw4uMAf/hnGREQACj4S/hK+EP4QsjL/8s/z4PMzMntVAJwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNs8WNs8+QBwyM+GQMoHy//J0DETEgBEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQESyM74StAByds8FAIWIYs4rbNYxwWKiuIWFQEIAds8yRcBJgHU1DAS0Ns8yM+OK2zWEszPEckXAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4YAQSIAR0AKu1E0NP/0z/TADHU1NH4a/hq+GP4YgAK+Eby4EwCCvSkIPShHRwAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "cf8d6c7c51fd113bbe4d1c813f16ad80ae40965f4ad08b301164bfa34e7c79a0",
};
module.exports = { ResolveContract };