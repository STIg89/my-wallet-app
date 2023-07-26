import { usePrepareSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Config = (to, amount) => {
  const { config } = usePrepareSendTransaction({
    to: to,
    value: amount ? parseEther(amount) : undefined,
    onError(error) {
      if (
        error.message.includes(
          `The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.`
        )
      ) {
        Notify.failure('Insufficient funds in the wallet', {
          position: 'center-top',
        });
        console.clear();
        return;
      }
      Notify.failure('Form filled out incorrectly', {
        position: 'center-top',
      });
      console.clear();
    },
  });
  return config;
};
