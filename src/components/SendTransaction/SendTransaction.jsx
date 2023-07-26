import { useState } from 'react';
import {
  useSendTransaction,
  useWaitForTransaction,
  useAccount,
  useConnect,
} from 'wagmi';
import { Config } from '../../utils/transactionConfig';
import {
  FormWrap,
  InputLabel,
  RecipientInput,
  AmountInput,
  FormBtn,
  Message,
} from './SendTransaction.styled';

export function SendTransaction() {
  const { isConnected } = useAccount();
  const { connectors } = useConnect();
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const connector = connectors[0];

  const { data, sendTransaction } = useSendTransaction(Config(to, amount));

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return isConnected ? (
    <FormWrap
      onSubmit={e => {
        e.preventDefault();
        sendTransaction?.();
      }}
    >
      <InputLabel>
        Recipient:
        <RecipientInput
          aria-label="Recipient"
          onChange={e => setTo(e.target.value)}
          placeholder="0xA0Cf…251e"
          value={to}
          disabled={isLoading || isSuccess}
        />
      </InputLabel>
      <InputLabel>
        Amount:
        <AmountInput
          aria-label="Amount (ether)"
          onChange={e => setAmount(e.target.value)}
          placeholder="0.05"
          value={amount}
          type="number"
          disabled={isLoading || isSuccess}
        />
      </InputLabel>
      {!isSuccess ? (
        <FormBtn disabled={isLoading || !sendTransaction || !to || !amount}>
          {isLoading ? 'Sending...' : 'Send'}
        </FormBtn>
      ) : (
        <FormBtn
          onClick={() => {
            window.location.reload();
          }}
          type="button"
        >
          Continue
        </FormBtn>
      )}
      {isSuccess && (
        <div>
          Successfully sent {amount} ETH to {to}
        </div>
      )}
    </FormWrap>
  ) : (
    <Message>
      {connector.ready
        ? 'Please, connect wallet!'
        : `Please install the extension ${connector.name}`}
    </Message>
  );
}
