import { EffectLeft } from '../../assets/EffectLeft'
import { EffectRight } from '../../assets/EffectRight'
import { Logo } from '../../assets/Logo'
import {
  BackgroundDecoration,
  HeaderContainer,
  LogoContainer,
  RectangleDecoration,
  RoundedBackgroundDecoration,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <EffectLeft />
      <EffectRight />
      <BackgroundDecoration />
      <RoundedBackgroundDecoration />
      <RectangleDecoration />
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  )
}
