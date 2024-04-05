import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 32px 0;
  background-color: ${colors.grey};
  font-size: 14px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
export const FooterTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`
export const FooterLinks = styled.ul`
  margin-top: 16px;
  display: flex;
`
export const Link = styled(HashLink)`
  margin-right: 8px;
  color: ${colors.lightGray};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
