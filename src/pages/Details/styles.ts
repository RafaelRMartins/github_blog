import styled from "styled-components";

export const DetailsContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
`

export const DetailsHeader = styled.section`
position: relative;
margin-top: -84px;
width: 100%;
border-radius: 10px;
background: ${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
display: flex;
padding: 32px;
flex-direction: column;

  nav{
    display: flex;
    justify-content: space-between;

    a{
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme['blue']};
    }
  }
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-title']};
`

export const InfoList = styled.ul`
margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 32px;
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style-type: none;
    color: ${(props) => props.theme['base-span']};
  }
`

export const DetailText = styled.div`
  padding: 40px 32px;
`