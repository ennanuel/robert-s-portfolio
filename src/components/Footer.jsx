import styled from "styled-components"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"


const Container = styled.footer`
  width: 100vw;
  padding: 20px;
  background-color: #333;
  height: 120px;
`

const Copyright = styled.p`
  font-size: 14px;
  color: #ccc;
  font-weight: 300;
  text-align: center;
`

const Links = styled.div`
  width: 100%;
  max-height: 300px;
  padding: 10px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #ccc;

  &::before {
    content: "";
    position: absolute;
    width: 80vw;
    height: 2px;
    background-color: grey;
    border-radius: 2px;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: relative;
  z-index: 1;
  background-color: #333;
  color: grey;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`

const Footer = () => {
  return (
    <Container>
      <Links>
        <SocialLink><AiOutlineInstagram /></SocialLink>
        <SocialLink><AiOutlineFacebook /></SocialLink>
        <SocialLink><FiTwitter /></SocialLink>
      </Links>

      <Copyright>Copyright © All rights reserved.</Copyright>
    </Container>
  )
}

export default Footer
