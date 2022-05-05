const { Account } = require('@eversdk/appkit');
const { TonClient, signerKeys, signerNone } = require('@eversdk/core')

const { StatusVCRootContract } = require('../../contracts/vc/StatusVCRootContract')

module.exports = {
    
    createAccountStatusVCRoot: async (address, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(StatusVCRootContract, {
                        address: address,
                        signer: signerNone(),
                        client: client
                    }))
            } catch(er) {
                reject(er)
            }
        })
    },

    createStatusVC: async (statusVCRootAddress, userAccount, holder) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: StatusVCRootContract.abi },
                    call_set: {
                        function_name: "createStatusVC",
                        input: {
                            holder: holder
                        }
                    },
                    is_internal: true,
                    signer: signerNone()
                }))
    
                var ress =  await userAccount.run("sendTransaction", {
                    dest: statusVCRootAddress,
                    value: 400000000,
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

    getInfo: async (statusVCRootAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAccount.runLocal("getInfo")
                resolve(ress.decoded.output)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveCodeHashStatusVC: async (statusVCRootAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAccount.runLocal("resolveCodeHashStatusVC")
                resolve(ress.decoded.output.value0)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveStatusVC: async (statusVCRootAccount, id) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAccount.runLocal("resolveStatusVC", {
                    id: id
                })
                resolve(ress.decoded.output.addrStatusVC)
            } catch(er) {
                reject(er)
            }
        })
    }

}