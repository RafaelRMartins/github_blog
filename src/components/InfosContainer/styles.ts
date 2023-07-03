import styled from "styled-components";

export const CardInfos = styled.section`
position: relative;
margin-top: -100px;
width: 100%;
height: 212px;
border-radius: 10px;
background: ${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
display: flex;
padding: 32px;

  img{
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin-left: 8px;
    margin-right: 32px;
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const GitName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 8px;

  h2{
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  a{
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme['blue']};
    text-decoration: none;
    
    &:hover{
      border-bottom: 2px solid ${(props) => props.theme['blue']};
    }
  }
`

export const Description = styled.div`
  margin-top: 8px;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
`

export const InfoList = styled.ul`
  display: flex;
  gap: 24px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style-type: none;
  }
`
