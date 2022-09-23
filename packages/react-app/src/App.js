import React from 'react';
import { useEthers } from '@usedapp/core';

import { usePools } from './hooks';
import styles from './styles';
import { uniswapLogo } from './assets';
import { WalletButton, Exchange, Loader } from './components';

const App = () => {
  const { account } = useEthers();
  const { loading, pools } = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt='uniswap-logo'
            className='w-16 h-16 object-contain'
          />
          <WalletButton />
          <div className={styles.exchangeContainer}>
            <h1 className={styles.headTitle}>Uniswap 2.0</h1>
            <p className={styles.subTitle}>Exchange tokens in seconds</p>
            <div className={styles.exchangeBoxWrapper}>
              <div className={styles.exchangeBox}>
                <div className='pink_gradient' />
                <div className={styles.exchange}>
                  {account ? (
                    loading ? (
                      <Loader title='Loading pools, pleases wait!' />
                    ) : (
                      <Exchange pools={pools} />
                    )
                  ) : (
                    <Loader title='Please Connect your Wallet' />
                  )}
                </div>
                <div className='blue_gradient' />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
