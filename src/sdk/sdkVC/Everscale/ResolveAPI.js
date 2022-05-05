const { Account } = require('@eversdk/appkit');
const { TonClient, signerKeys, signerNone } = require('@eversdk/core')

const { ResolveContract } = require('../../contracts/vc/ResolveContract')

module.exports = {

    createAccountResolve: async (address, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(ResolveContract, {
                        address: address,
                        signer: signerNone(),
                        client: client
                    }))
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveCodeHashIndexVC: async (ResolveAccount, addressOwner) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await ResolveAccount.runLocal("resolveCodeHashIndexVC", {
                    addrOwner: addressOwner
                })
                resolve(ress.decoded.output.value0)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveIndexVC: async (ResolveAccount, addressOwner, addressVC) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await ResolveAccount.runLocal("resolveIndexVC", {
                    addrOwner: addressOwner,
                    addrVC: addressVC
                })
                resolve(ress.decoded.output.addrIndexVC)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveCodeHashIndexStatus: async (ResolveAccount, addressOwner) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await ResolveAccount.runLocal("resolveCodeHashIndexStatus", {
                    addrOwner: addressOwner
                })
                resolve(ress.decoded.output.value0)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveIndexStatus: async (ResolveAccount, addressOwner, addressStatus) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await ResolveAccount.runLocal("resolveIndexStatus", {
                    addrOwner: addressOwner,
                    addrStatus: addressStatus
                })
                resolve(ress.decoded.output.addrIndexStatus)
            } catch(er) {
                reject(er)
            }
        })
    }

}