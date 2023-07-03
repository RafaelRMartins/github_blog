import styled from "styled-components";

export const HomeContainer = styled.main`

`

export const MainContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
`

export const SearchContainer = styled.div`
margin-top: 72px;
margin-bottom: 48px;

  .searchHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span{
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input{
    width: 100%;
    padding: 12px 16px;
    margin-top: 12px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder{
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const GridContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`