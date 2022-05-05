const DidDocumentContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "pubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "init",
                "inputs": [
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidDocument",
                "inputs": [
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidStatus",
                "inputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidIssuerAddr",
                "inputs": [
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deleteDidDocument",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getDid",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "PubKey",
                                "type": "uint256"
                            },
                            {
                                "name": "issuerAddr",
                                "type": "address"
                            },
                            {
                                "name": "didDocument",
                                "type": "string"
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrDidStorage",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "PubKey",
                                "type": "uint256"
                            },
                            {
                                "name": "issuerAddr",
                                "type": "address"
                            },
                            {
                                "name": "didDocument",
                                "type": "string"
                            }
                        ],
                        "name": "didItem",
                        "type": "tuple"
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
                "components": [
                    {
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "name": "PubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    },
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "name": "_didItem",
                "type": "tuple"
            },
            {
                "name": "_addrDidStorage",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECKQEABXgAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUoBAQkiu1TIOMDIMD/4wIgwP7jAvILJQgFJwEABgL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5GQcBDtMfAds88jwJA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCQkCQIoIIIQOsul5rvjAiCCEHE8tRe74wITCgRQIIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCIIIQcTy1F7rjAhEPDQsDJjD4RvLgTPhCbuMA0ds8MNs88gAjDB4AOPhJ+EpvEscF8uBm+EnIz4UIzoBvz0DJgQCg+wADNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyACMOHgCY+EUgbpIwcN74Sm8RuvLgZPhKbxKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBfLgZPgA+EoBb1Ig+Gpxb1D4agM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAIxAeAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9S+Gr4ScjPhYjOgG/PQMmBAID7AAMoMPhG8uBM+EJu4wDU0ds8MNs88gAjEh4AWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1P4avhJyM+FiM6Ab89AyYEAgPsABFAgghAIHXztuuMCIIIQLMFDRLrjAiCCEC/UAg664wIgghA6y6XmuuMCIB0bFATeMPhCbuMA+EbycyGT1NHQ3tP/1NH4QYjIz44rbNbMzsnbPCBu8tBlIG7yf9D6QDD4SSHHBfLgZGim/mCCEBHhowC+8uBk+AD4a3AgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGSgWFQIkiG8EcG9QAW9TAW9R+GrbPPIAJx4CGNAgizits1jHBYqK4hcYAQrXTdDbPBgAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gIW7UTQ10nCAY6A4w0aIwHocO1E0PQFcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIbwT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrcSGAQPQOk9cL/5Fw4vhsgED0DvK91wv/+GJw+GMnA4ow+Eby4Ez4Qm7jANHbPCKOLSTQ0wH6QDAxyM+HIM5xzwthAsjPkr9QCDrOAW8kXjDLB8v/WcjOzM3NyXD7AJFb4uMA8gAjHCEACPhL+EoDKjD4RvLgTPhCbuMA0wfR2zww2zzyACMfHgBS+Ez4S/hK+EP4QsjL/8s/z4MBbyReMMsHy/9VMMjOzFnIzsv/zc3J7VQAWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1D4avhJyM+FiM6Ab89AyYEAgPsAA4Iw+Eby4Ez4Qm7jANHbPCGOKSPQ0wH6QDAxyM+HIM5xzwthAcjPkiB187YBbyReMMsHy//OzM3JcPsAkTDi4wDyACMiIQAo7UTQ0//TPzH4Q1jIy//LP87J7VQABPhKAFbtRNDT/9M/0wAx0wfT/9TR0PpA1FUwbwQB1NHQ+kDT/9H4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEnJgAUc29sIDAuNTMuMAAAAAwg+GHtHtk=",
    code: "te6ccgECJgEABUsAAgaK2zUlAQQkiu1TIOMDIMD/4wIgwP7jAvILIgUCJAEAAwL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5FgQBDtMfAds88jwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCEhBgIoIIIQOsul5rvjAiCCEHE8tRe74wIQBwRQIIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCIIIQcTy1F7rjAg4MCggDJjD4RvLgTPhCbuMA0ds8MNs88gAgCRsAOPhJ+EpvEscF8uBm+EnIz4UIzoBvz0DJgQCg+wADNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyACALGwCY+EUgbpIwcN74Sm8RuvLgZPhKbxKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBfLgZPgA+EoBb1Ig+Gpxb1D4agM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAIA0bAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9S+Gr4ScjPhYjOgG/PQMmBAID7AAMoMPhG8uBM+EJu4wDU0ds8MNs88gAgDxsAWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1P4avhJyM+FiM6Ab89AyYEAgPsABFAgghAIHXztuuMCIIIQLMFDRLrjAiCCEC/UAg664wIgghA6y6XmuuMCHRoYEQTeMPhCbuMA+EbycyGT1NHQ3tP/1NH4QYjIz44rbNbMzsnbPCBu8tBlIG7yf9D6QDD4SSHHBfLgZGim/mCCEBHhowC+8uBk+AD4a3AgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFiUTEgIkiG8EcG9QAW9TAW9R+GrbPPIAJBsCGNAgizits1jHBYqK4hQVAQrXTdDbPBUAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gIW7UTQ10nCAY6A4w0XIAHocO1E0PQFcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIbwT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrcSGAQPQOk9cL/5Fw4vhsgED0DvK91wv/+GJw+GMkA4ow+Eby4Ez4Qm7jANHbPCKOLSTQ0wH6QDAxyM+HIM5xzwthAsjPkr9QCDrOAW8kXjDLB8v/WcjOzM3NyXD7AJFb4uMA8gAgGR4ACPhL+EoDKjD4RvLgTPhCbuMA0wfR2zww2zzyACAcGwBS+Ez4S/hK+EP4QsjL/8s/z4MBbyReMMsHy/9VMMjOzFnIzsv/zc3J7VQAWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1D4avhJyM+FiM6Ab89AyYEAgPsAA4Iw+Eby4Ez4Qm7jANHbPCGOKSPQ0wH6QDAxyM+HIM5xzwthAcjPkiB187YBbyReMMsHy//OzM3JcPsAkTDi4wDyACAfHgAo7UTQ0//TPzH4Q1jIy//LP87J7VQABPhKAFbtRNDT/9M/0wAx0wfT/9TR0PpA1FUwbwQB1NHQ+kDT/9H4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEkIwAUc29sIDAuNTMuMAAAAAwg+GHtHtk=",
    codeHash: "52bff066b4a6fd10e6137f0f76a3642b01e277018f2eea7078997f1cdb6cea4c",
};
module.exports = { DidDocumentContract };