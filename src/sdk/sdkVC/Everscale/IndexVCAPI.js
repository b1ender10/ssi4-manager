const { Account } = require('@eversdk/appkit')
const { TonClient, signerKeys, signerNone } = require('@eversdk/core')

const { IndexVCContract } = require("../../build/IndexVCContract")


module.exports = {

    createAccountIndexVC: async (address, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(IndexVCContract, {
                        address: address,
                        signer: signerNone(),
                        client: client
                    }))
            } catch(er) {
                reject(er)
            }
        })
    },

    getInfo: async (IndexVCAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await IndexVCAccount.runLocal("getInfo")

                resolve(ress.decoded.output)
            } catch(er) {
                reject(er)
            }
        })
    }

}