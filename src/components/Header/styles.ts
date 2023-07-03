import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme['base-profile']};
  height: 296px;
  overflow: hidden;

  .RightAlign{
  position: absolute;
  top: 30px;
  right: 0;
  }

  .LeftAlign{
  position: absolute;
  top: 70px;
  left: 0;
  }
`

export const RectangleDecoration = styled.div`
  position: absolute;
  bottom: 9px;
  width: 891px;
  height: 52px;
  background: #14589C;
  filter: blur(106px);
`

export const BackgroundDecoration = styled.div`
  position: absolute;
  top: -45px;
  right: 0;
  width: 155px;
  height: 155px;
  background-color: #14589C;
  transform: rotate(15deg);
  filter: blur(184px);
`

export const RoundedBackgroundDecoration = styled.div`
  position: absolute;
  top: -117px;
  left: -117px;
  width: 236px;
  height: 236px;
  background: #14589C;
  border-radius: 236px;
  filter: blur(200px);
`

export const LogoContainer = styled.div`
  margin-top: 64px;
`