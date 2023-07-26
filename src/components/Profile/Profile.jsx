import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';

import { ProfileWrap, Wrap } from './Profile.slyled';

export function Profile() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading } = useConnect();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({
    address: `${address ? address : ''}`,
  });

  const formattedAddress =
    address?.substring(0, 5) + '...' + address?.substring(address?.length - 5);
  const connector = connectors[0];
  const balance = data?.formatted.substring(
    0,
    data?.formatted.indexOf('.') + 4
  );

  return (
    <ProfileWrap>
      {isConnected ? (
        <Wrap>
          <button onClick={disconnect}>Disconnect Wallet</button>
          <div>{formattedAddress}</div>
          <div>
            {balance} {data?.symbol}{' '}
          </div>
        </Wrap>
      ) : (
        <Wrap>
          <button
            disabled={!connector.ready}
            onClick={() => connect({ connector })}
          >
            Connect Wallet
            {!connector.ready && ' (unsupported)'}
            {isLoading && ' (connecting)'}
          </button>

          {error && <div>{error.message}</div>}
        </Wrap>
      )}
    </ProfileWrap>
  );
}
