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
                "name": "deactivate",
                "inputs": [],
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
    tvc: "te6ccgECJgEABXsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUlBAQkiu1TIOMDIMD/4wIgwP7jAvILIggFJAEABgL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5FwcBFNMfAds8+Edu8nwJA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfCEhCQIoIIIQOsul5rvjAiCCEGw1Xpm74wIRCgM8IIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCDw0LAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnIAweAJj4RSBukjBw3vhKbxG68uBk+EpvEo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcF8uBk+AD4SgFvUiD4anFvUPhqAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnIA4eAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9S+Gr4ScjPhYjOgG/PQMmBAID7AAMoMPhG8uBM+EJu4wDU0ds82zx/+GcgEB4AWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1P4avhJyM+FiM6Ab89AyYEAgPsABFAgghAIHXztuuMCIIIQKLLRALrjAiCCEC/UAg664wIgghA6y6XmuuMCHRsZEgTiMPhCbuMA+Ebyc9cN/5XU0dDT/9/U0fhBiMjPjits1szOyds8IG7y0GUgbvJ/0PpAMPhJIccF8uBkaKb+YIIQEeGjAL7y4GT4APhrcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXJRQTAiaIbwRwb1ABb1MBb1H4ats8f/hnJB4CGNAgizits1jHBYqK4hUWAQrXTdDbPBYAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gIW7UTQ10nCAYqOgOIgGAHocO1E0PQFcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIbwT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrcSGAQPQOk9cL/5Fw4vhsgED0DvK91wv/+GJw+GMkA4ww+Eby4Ez4Qm7jANHbPCKOLSTQ0wH6QDAxyM+HIM5xzwthAsjPkr9QCDrOAW8kXjDLB8v/WcjOzM3NyXD7AJFb4uMAf/hnIBoeAaSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhvBFv4S/hKJAMmMPhG8uBM+EJu4wDR2zzbPH/4ZyAcHgBY+En4Sm8SxwXy4GaCEAvrwgBy+wL4SnBvUPhq+EnIz4WIzoBvz0DJgQCA+wADhDD4RvLgTPhCbuMA0ds8IY4pI9DTAfpAMDHIz4cgznHPC2EByM+SIHXztgFvJF4wywfL/87Mzclw+wCRMOLjAH/4ZyAfHgBS+Ez4S/hK+EP4QsjL/8s/z4MBbyReMMsHy/9VMMjOzFnIzsv/zc3J7VQABPhKAFbtRNDT/9M/0wAx0wfT/9TR0PpA1FUwbwQB1NHQ+kDT/9H4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEkIwAUc29sIDAuNDkuMAAAAAwg+GHtHtk=",
    code: "te6ccgECIwEABU4AAgaK2zUiAQQkiu1TIOMDIMD/4wIgwP7jAvILHwUCIQEAAwL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5FAQBFNMfAds8+Edu8nwGA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfB4eBgIoIIIQOsul5rvjAiCCEGw1Xpm74wIOBwM8IIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCDAoIAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnHQkbAJj4RSBukjBw3vhKbxG68uBk+EpvEo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcF8uBk+AD4SgFvUiD4anFvUPhqAzgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnHQsbAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9S+Gr4ScjPhYjOgG/PQMmBAID7AAMoMPhG8uBM+EJu4wDU0ds82zx/+GcdDRsAWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1P4avhJyM+FiM6Ab89AyYEAgPsABFAgghAIHXztuuMCIIIQKLLRALrjAiCCEC/UAg664wIgghA6y6XmuuMCGhgWDwTiMPhCbuMA+Ebyc9cN/5XU0dDT/9/U0fhBiMjPjits1szOyds8IG7y0GUgbvJ/0PpAMPhJIccF8uBkaKb+YIIQEeGjAL7y4GT4APhrcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQUIhEQAiaIbwRwb1ABb1MBb1H4ats8f/hnIRsCGNAgizits1jHBYqK4hITAQrXTdDbPBMAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gIW7UTQ10nCAYqOgOIdFQHocO1E0PQFcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIbwT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrcSGAQPQOk9cL/5Fw4vhsgED0DvK91wv/+GJw+GMhA4ww+Eby4Ez4Qm7jANHbPCKOLSTQ0wH6QDAxyM+HIM5xzwthAsjPkr9QCDrOAW8kXjDLB8v/WcjOzM3NyXD7AJFb4uMAf/hnHRcbAaSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhvBFv4S/hKIQMmMPhG8uBM+EJu4wDR2zzbPH/4Zx0ZGwBY+En4Sm8SxwXy4GaCEAvrwgBy+wL4SnBvUPhq+EnIz4WIzoBvz0DJgQCA+wADhDD4RvLgTPhCbuMA0ds8IY4pI9DTAfpAMDHIz4cgznHPC2EByM+SIHXztgFvJF4wywfL/87Mzclw+wCRMOLjAH/4Zx0cGwBS+Ez4S/hK+EP4QsjL/8s/z4MBbyReMMsHy/9VMMjOzFnIzsv/zc3J7VQABPhKAFbtRNDT/9M/0wAx0wfT/9TR0PpA1FUwbwQB1NHQ+kDT/9H4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEhIAAUc29sIDAuNDkuMAAAAAwg+GHtHtk=",
    codeHash: "3881f8d6083d3f6e1bcd9655cd95ea19fcd27b86020df794b7217f3158822b81",
};
module.exports = { DidDocumentContract: DidDocumentContract };
