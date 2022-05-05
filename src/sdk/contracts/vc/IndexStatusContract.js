const IndexStatusContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "destruct",
                "inputs": [
                    {
                        "name": "sendToGas",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrStatus",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_addrStatus",
                "type": "address"
            }
        ],
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
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_addrStatus",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECGAEAAuMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUXBAQkiu1TIOMDIMD/4wIgwP7jAvILFAYFFgLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA4HA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBMTBwM6IIILo63XuuMCIIIQaLVfP7rjAiCCEHlsWVq64wIPCggDeDD4RvLgTPhCbuMA0ds8Io4jJNDTAfpAMDHIz4cgznHPC2ECyM+T5bFlas4ByM7Nzclw+wCRW+LbPH/4ZxIJEAAI+Er4SwRwMPhCbuMA+Ebyc9H4QYjIz44rbNbMzsnbPCBu8tBlIG7yf9D6QDD4SfhLxwXy4GT4APhq2zx/+GcOFwsQAhjQIIs4rbNYxwWKiuIMDQEK103Q2zwNAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeIB6O1E0NdJwgGKjmlw7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hrgED0DvK91wv/+GJw+GPiEgM4MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPH/4ZxIREAAu+Ev4SvhD+ELIy//LP8+DzgHIzs3J7VQAMPhJ+EvHBfLgZMjPhQjOgG/PQMmBAKD7AAA07UTQ0//TP9MAMfpA1NHQ+kDR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRYVABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    code: "te6ccgECFQEAArYAAgaK2zUUAQQkiu1TIOMDIMD/4wIgwP7jAvILEQMCEwLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAsEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBAQBAM6IIILo63XuuMCIIIQaLVfP7rjAiCCEHlsWVq64wIMBwUDeDD4RvLgTPhCbuMA0ds8Io4jJNDTAfpAMDHIz4cgznHPC2ECyM+T5bFlas4ByM7Nzclw+wCRW+LbPH/4Zw8GDQAI+Er4SwRwMPhCbuMA+Ebyc9H4QYjIz44rbNbMzsnbPCBu8tBlIG7yf9D6QDD4SfhLxwXy4GT4APhq2zx/+GcLFAgNAhjQIIs4rbNYxwWKiuIJCgEK103Q2zwKAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeIB6O1E0NdJwgGKjmlw7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hrgED0DvK91wv/+GJw+GPiDwM4MPhG8uBM+EJu4wD6QZXU0dD6QN/R2zzbPH/4Zw8ODQAu+Ev4SvhD+ELIy//LP8+DzgHIzs3J7VQAMPhJ+EvHBfLgZMjPhQjOgG/PQMmBAKD7AAA07UTQ0//TP9MAMfpA1NHQ+kDR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRMSABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    codeHash: "564a470343e8670f2515cdbae6fb337cd8ed1c7e38226f9b5e3a9d1baf42245a",
};
module.exports = { IndexStatusContract };
