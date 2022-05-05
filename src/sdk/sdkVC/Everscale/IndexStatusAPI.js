const { Account } = require('@eversdk/appkit')
const { TonClient, signerKeys, signerNone } = require('@eversdk/core')

const { IndexStatusContract } = require("../../build/IndexStatusContract")


module.exports = {

    createAccountIndexStatus: async (address, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(IndexStatusContract, {
                        address: address,
                        signer: signerNone(),
                        client: client
                    }))
            } catch(er) {
                reject(er)
            }
        })
    },

    getInfo: async (IndexStatusAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await IndexStatusAccount.runLocal("getInfo")

                resolve(ress.decoded.output)
            } catch(er) {
                reject(er)
            }
        })
    }

}