import styled from "styled-components"
import { Link } from "react-router-dom"
import Work from "./Work"
import { works } from "../assets/data"

const Container = styled.section`
    width: 100%;
    padding: 100px 30px;
`

const TitleContainer = styled.div`
    width: 100%;
    position: relative;
    background-color: #fff;
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
    background-color: #fff;
    font-size: 40px;
    z-index: 1;
    margin-left: 10%;
    padding: 15px;
    color: grey;
    font-weight: 300;
    transform: translateX(30px);
`

const WorksContainer = styled.article`
    width: 100%;
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`

const Works = () => {
  return (
    <Container id="works">
        <TitleContainer>
            <Title>My Works.</Title>
        </TitleContainer>
        <WorksContainer className="workcontainer">
            {
            works.map( work => <Link to={`/artwork/${work.id}`} key={work.id}><Work data={work} /></Link>)
            }
        </WorksContainer>
    </Container>
  )
}

export default Works
