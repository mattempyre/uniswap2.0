import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0xBcd33A3C29B32bB46eAaCd1F2394faED9DA9b108';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/Zb2rdXgUzP3EpKLBzmdH5hznlptuZceK',
  },
};
