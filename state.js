const config = require('./config');
module.exports = {
    "balances": {
        [config.leader]: 0,
        "spk-cc": 0, //additional distributions
        "alloyx-cc": 0, //additional distributions
        "chisdealhd": 10000, //additional distributions
        "shmoogleosukami": 10000, //additional distributions
        "ra": 0,
        "rb": 0,
        "rc": 0,
        "rd": 0,
        "re": 0,
        "ri": 0, //in ICO account for fixed price
        "rm": 0,
        "rn": 0,
        "rr": 0
    },
    "delegations": {}, //these need to be preloaded if already on account before starting block
    "dex": {
        "hbd": {
            "tick": "0.012500", //ICO price
            "buyBook": ""
        },
        "hive": {
            "tick": "0.100000", //ICO Price
            "buyBook": ""
        }
    },
    "gov": {
        [config.leader]: 1,
        "t": 1 //total in other accounts
    },
    "markets": {
        "node": {
            [config.leader]: {
                "attempts": 0,
                "bidRate": 2000,
                "contracts": 0,
                "domain": config.mainAPI,
                "escrow": true,
                "escrows": 0,
                "lastGood": 49994100, //genesisblock
                "marketingRate": 0,
                "self": [config.leader],
                "wins": 0,
                "yays": 0
            }
        }
    },
    "pow": {
        [config.leader]: 0,
        "t": 0 //total in other accounts
    },
    "queue": {
        "0": [config.leader]
    },
    "runners": {
        [config.leader]: { //config.leader
            "g": 1, //config.mainAPI
        }
    },
    "stats": {
        "IPFSRate": 2000,
        "budgetRate": 2000,
        "currationRate": 2000,
        "delegationRate": 2000,
        "hashLastIBlock": "Genesis",
        "icoPrice": 0, //in millihive
        "interestRate": 999999999999, //mints 1 millitoken per this many millitokens in your DAO period
        "lastBlock": "",
        "marketingRate": 2500,
        "maxBudget": 1000000000,
        "ms": {
         "active_account_auths": {
            "alloyxuast": 1,
            "chisdealhd": 1,
            "shmoogleosukami": 1,
         },
         "active_threshold": 2,
         "memo_key": "STM5GCy5Vof8TDPMfGr2sd16BuXDkU62zAvjRk5zomgLpXY9sCXmY",
         "owner_key_auths": {
            "STM4xzEwbNBTXSkSTfiFK9VqMPHxsNr9SxFPrFfmrbok3AkbsG2dd": 1,
            "STM5hbWR25EGaM3btUL7F1dR529EXHmCsxixuyq5m9WBDwCvV3mQL": 1
            "STM5uRaiHKriDZfo7Wc9EiFQWAw2WgtNAt5nUAYiBWiR45WTh4ZUZ": 1
            "STM68B9PUuexyoFE8Qipr6YmYejQXRVeTkf9xtRcLvmbeGwHSoorj": 1
         },
         "owner_threshold": 2,
         "posting_account_auths": {
            "alloyxuast": 1,
            "chisdealhd": 1,
            "shmoogleosukami": 1,
         },
         "posting_threshold": 1
        },
        "MSHeld":{
            "HIVE": 1000,
            "HBD": 0
        }, 
        "nodeRate": 2000,
        "outOnBlock": 0, //amm ICO pricing
        "savingsRate": 1000,
        "interestRate": 303311,
        "tokenSupply": 100000000000 //your starting token supply
    }
}
