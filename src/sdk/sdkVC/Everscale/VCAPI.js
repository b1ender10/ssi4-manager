const { Account } = require('@eversdk/appkit')
const { TonClient, signerKeys, signerNone } = require('@eversdk/core')

const { VCContract } = require('../../contracts/vc/VCContract')


module.exports = {

    createAccountVC: async (address, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(VCContract, {
                    address: address,
                    signer: signerNone(),
                    client: client
                }))
            } catch(er) {
                reject(er)
            }
        })
    },
    
    setValue: async (VCAddress, userAccount, type, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: VCContract.abi },
                    call_set: {
                        function_name: "setValue",
                        input: {
                            Type: type,
                            value: value
                        }
                    },
                    is_internal: true,
                    signer: signerNone()
                })

                var ress =  await userAccount.run("sendTransaction", {
                    dest: VCAddress,
                    value: 300000000,
                    bounce: true,
                    flags: 0,
                    payload: body
                })

                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    destruct: async (VCAddress, userAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: VCContract.abi },
                    call_set: {
                        function_name: "destruct"
                    },
                    is_internal: true,
                    signer: signerNone()
                }))

                var ress = await userAccount.run("sendTransaction", {
                    dest: VCAddress,
                    value: 100000000,
                    bounce: true,
                    flags: 0,
                    payload: body
                })
                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    getInfo: async (VCAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await VCAccount.runLocal("getInfo");
                resolve(ress.decoded.output)
            } catch(er) {
                reject(er)
            }
        })
    }

}