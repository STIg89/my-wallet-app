import { LogoWrap, Img } from './Logo.styled';
import image from '../../assets/ethereum.svg';

export const Logo = () => {
  return (
    <LogoWrap>
      <Img src={image} alt="LOGO" />
    </LogoWrap>
  );
};
