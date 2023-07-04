import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  padding: 32px;
  border-radius: 10px;
  max-height: 260px;
  background: ${(props) => props.theme['base-post']};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 2px solid ${(props) => props.theme['base-post']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.3s;
  }

  .ContentsHeader {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
      text-decoration: none;
    }

    span {
      margin-top: 5px;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      white-space: nowrap;
    }
  }
`

export const TextArea = styled.p`
  margin-top: 20px;
  color: ${(props) => props.theme['base-text']};
  line-height: 148%;
  flex: 1;
  overflow: hidden;
`
