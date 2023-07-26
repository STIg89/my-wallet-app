import { WagmiConfig } from 'wagmi';
import { Profile } from './components/Profile/Profile';
import { SendTransaction } from './components/SendTransaction/SendTransaction';
import { config } from './utils/wagmiConfig';

import { AppWrap } from './App.styled';
import { Logo } from './components/Logo/Logo';

function App() {
  return (
    <>
      <AppWrap>
        <Logo />
        <WagmiConfig config={config}>
          <Profile />
          <SendTransaction />
        </WagmiConfig>
      </AppWrap>
    </>
  );
}

export default App;
