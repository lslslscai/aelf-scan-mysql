/**
 * @file config for prod
 * @author atom-yang
 * @date 2019-07-23
 */

module.exports = {
  sql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'aelf',
    password: 'aelf',
    database: 'aelf_main_chain',
    connectionLimit: 100
  },
  redis: {
    connection: {
      host: '127.0.0.1',
      port: 6379
    },
    keys: {
      blocksCount: 'blocks_count',
      blocksUnconfirmedCount: 'blocks_unconfirmed_count',
      txsCount: 'txs_count',
      txsUnconfirmedCount: 'txs_unconfirmed_count',
      resourceCount: 'resource_count',
      resourceUnconfirmedCount: 'resource_unconfirmed_count',
      tokenCount: 'token_count',
      LIBHeight: 'lib_height',
      bestHeight: 'best_height'
    }
  },
  scan: {
    interval: 8000,
    concurrentQueryLimit: 30,
    host: 'http://127.0.0.1:8000',
    maxInsert: 210
  },
  wallet: {
    privateKey: 'feb766a83f14cbfa6885bb0fc537f290985460949c412a463ce3f92677042977'
  },
  contracts: {
    // Token合约可以通过getContractAddressByName来获取
    token: 'AElf.ContractNames.Token',
    resource: 'AElf.ContractNames.TokenConverter',
    tokenConverter: 'AElf.ContractNames.TokenConverter'
  },
  tps: {
    minutes: 1, // minute
    interval: 60, // s, 秒
    scanInterval: 60 * 5, // s
    delayTime: 30, // s
    batchLimitTime: 60 * 10, // s
    batchDayInterval: 24 * 3600, // s
    maxQuery: 20,
    maxInsert: 200
  },
  blockApi: 'http://127.0.0.1:7101',
  mails: {
    type: 'smtp', // smtp | sendmail
    sendmailPath: '/usr/sbin/sendmail',
    user: 'scan@domain.io', // generated ethereal user
    from: 'AElf scan <aelf.scan@aelf.io>',
    to: ['test@mail.com'],
    subject: 'error happened when scanning',
    smtpConfig: {
      host: "smtp.domain.com",
      port: 465,
      secure: true,
      auth: {
        user: "monitor@domain.com",
        pass: "password",
      }
    }
  }
};
