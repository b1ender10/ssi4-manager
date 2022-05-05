const StatusVCContract = {
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
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "name": "codeIndexStatus",
                        "type": "cell"
                    },
                    {
                        "name": "sendToGas",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setStatus",
                "inputs": [
                    {
                        "name": "Status",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deactivate",
                "inputs": [],
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
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "Status",
                        "type": "uint8"
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
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
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
                "name": "_codeIndexStatus",
                "type": "cell"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_holder",
                "type": "address"
            },
            {
                "name": "_status",
                "type": "uint8"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "afd7f8d17c0dd024be2703f5669cc56998878343a40dc43f3a280e7cb6429f97",
};
module.exports = { StatusVCContract };
