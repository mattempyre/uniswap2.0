import React from 'react';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import styles from '../styles';

const Balance = () => {
  const tokenBalance = parseUnits('0.0025');
  return (
    <div className={styles.balance}>
      <p className={styles.balanceText}>
        {tokenBalance && (
          <>
            <span className={styles.balanceBold}>Balance: </span>
            {formatUnits(tokenBalance || parseUnits('0'))}
          </>
        )}
      </p>
    </div>
  );
};

export default Balance;
