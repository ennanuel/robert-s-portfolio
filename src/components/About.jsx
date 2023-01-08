import styled from "styled-components"

const Container = styled.section`
    width: 100%;
    padding: 100px 30px;
    background-color: #222;
    height: 100vh;
    width: 100vw;
`

const TitleContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;

    &::before {
            content: "";
            position: absolute;
            width: 100%;
            max-width: 720px;
            height: 4px;
            border-radius: 2px;
            top: 50%;
            background-color: darkorange;
            z-index: 0;
            transform: translateY(-50%);
    }
`

const Title = styled.h2`
    position: relative;
    background-color: #222;
    font-size: 40px;
    z-index: 1;
    margin-left: 10%;
    padding: 15px;
    color: white;
    font-weight: 300;
    transform: translateX(30px);
`

const DescContainer = styled.article`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10%;
`

const Desc = styled.p`
    color: white;
    max-width: 720px;
`

const Red = styled.span`
    color: darkorange;
`

const About = () => {
  return (
    <Container id="about">
        <TitleContainer>
            <Title>About Me.</Title>
        </TitleContainer>
        <DescContainer>
            <Desc>
                My name is Robert Orgi. I'm a digital artist and I specialize in different art genres as seen on this Portfolio.<br />
                Art has always been my passion since I was a kid and with the years gone I've groomed my skill to become versatile in the art space.<br />
                I'm a keen user of <Red>Procreate</Red> and I use it whenever I want to go into a more detailed painting but for character designs I use <Red>Adobe Illustrator</Red>.
            </Desc>
        </DescContainer>
        
    </Container>
  )
}

export default About
