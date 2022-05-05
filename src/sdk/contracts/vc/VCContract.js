const VCContract = {
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
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "name": "codeIndexVC",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValue",
                "inputs": [
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "destruct",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    }
                ]
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
                "name": "_codeIndexVC",
                "type": "cell"
            },
            {
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_type",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "string"
            }
        ]
    },
    tvc: "te6ccgECJQEABP0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkAu7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfB4GA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfCEhBgIoIIIQR8Yt2rvjAiCCEGHE0fW74wIMBwIoIIIQSw2T5brjAiCCEGHE0fW64wIKCAOUMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHE0fWM8Wy//JcPsAkTDi4wB/+GcgCRUBCNs8+QAYA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4ZyALFQAI+Ez4TQRQIIIQCg2OyrrjAiCCEBYmHVC64wIgghBGfi3UuuMCIIIQR8Yt2rrjAhQSEA0DJjD4RvLgTPhCbuMA0ds82zx/+GcgDhUBPPhJ+EvHBfLgZPhJ2zz4ScjPhQjOgG/PQMmBAKD7AA8BXvhL+CjbPMjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5AOjrdezs3JcPsAEQOUMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5MZ+LdSzs3JcPsAkTDi4wB/+GcgERUCcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjbPFjbPPkAcMjPhkDKB8v/ydAxGBcDKjD4RvLgTPhCbuMA1NTR2zzbPH/4ZyATFQBY+En4S8cF8uBkaKb+YIIQDuaygL7y4GQB+Gz4bfhJyM+FiM6Ab89AyYBA+wADnDD4Qm7jAPhG8nP6QZXU0dD6QN8g10rAAZPU0dDe1CDXSsABk9TR0N7U1NH4RSBukjBw3vhCuvLgZfgAVQL4a1j4bAH4bfhq2zzbPH/4Zx4WFQA0+E34TPhL+Er4Q/hCyMv/yz/Pg8zOzMzJ7VQCdPhL2zz4KNs8IPkAyM+KAEDL/8jPhYjPE40EkBfXhAAAAAAAAAAAAAAAAAABwM8WzM+Q0Wq+f8lw+wAYFwBEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQESyM74StAByds8GQIWIYs4rbNYxwWKiuIbGgEIAds8yRwBJgHU1DAS0Ns8yM+OK2zWEszPEckcAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4dAQSIASQCFu1E0NdJwgGKjoDiIB8DhnDtRND0BYj4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhriPhsiPhtgED0DvK91wv/+GJw+GMkJCQAOO1E0NP/0z/TADHU+kDU1NH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSQjABRzb2wgMC40OS4wAAA=",
    code: "te6ccgECIgEABNAABCSK7VMg4wMgwP/jAiDA/uMC8gsfAgEhAu7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfBsDA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfB4eAwIoIIIQR8Yt2rvjAiCCEGHE0fW74wIJBAIoIIIQSw2T5brjAiCCEGHE0fW64wIHBQOUMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHE0fWM8Wy//JcPsAkTDi4wB/+GcdBhIBCNs8+QAVA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4Zx0IEgAI+Ez4TQRQIIIQCg2OyrrjAiCCEBYmHVC64wIgghBGfi3UuuMCIIIQR8Yt2rrjAhEPDQoDJjD4RvLgTPhCbuMA0ds82zx/+GcdCxIBPPhJ+EvHBfLgZPhJ2zz4ScjPhQjOgG/PQMmBAKD7AAwBXvhL+CjbPMjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFgHIz5AOjrdezs3JcPsADgOUMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5MZ+LdSzs3JcPsAkTDi4wB/+GcdDhICcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjbPFjbPPkAcMjPhkDKB8v/ydAxFRQDKjD4RvLgTPhCbuMA1NTR2zzbPH/4Zx0QEgBY+En4S8cF8uBkaKb+YIIQDuaygL7y4GQB+Gz4bfhJyM+FiM6Ab89AyYBA+wADnDD4Qm7jAPhG8nP6QZXU0dD6QN8g10rAAZPU0dDe1CDXSsABk9TR0N7U1NH4RSBukjBw3vhCuvLgZfgAVQL4a1j4bAH4bfhq2zzbPH/4ZxsTEgA0+E34TPhL+Er4Q/hCyMv/yz/Pg8zOzMzJ7VQCdPhL2zz4KNs8IPkAyM+KAEDL/8jPhYjPE40EkBfXhAAAAAAAAAAAAAAAAAABwM8WzM+Q0Wq+f8lw+wAVFABEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQESyM74StAByds8FgIWIYs4rbNYxwWKiuIYFwEIAds8yRkBJgHU1DAS0Ns8yM+OK2zWEszPEckZAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4aAQSIASECFu1E0NdJwgGKjoDiHRwDhnDtRND0BYj4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhriPhsiPhtgED0DvK91wv/+GJw+GMhISEAOO1E0NP/0z/TADHU+kDU1NH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSEgABRzb2wgMC40OS4wAAA=",
    codeHash: "6a4dcc77f436026ad4f01d116735e45f1f5014490efa007cd38feebece6b8c40",
};
module.exports = { VCContract };
