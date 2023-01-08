import styled from "styled-components"
import { useRef, useEffect } from "react"
import { Work } from "../components"
import { works } from "../assets/data"
import { Link, useParams } from "react-router-dom"


const Container = styled.section`
    width: 100vw;
`

const ArtContainer = styled.article`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px;
    position: relative;
    overflow: hidden;
`

const Info = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const ImageContainer = styled.div`
    flex: 2;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 90vh;
    object-fit: contain;
    display: block;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
    padding: 0;
    width: max-content;
    margin-bottom: 20px;
`

const Desc = styled.p`
    border-left: 4px solid darkorange;
    padding: 10px;
`

const Button = styled.button`
    width: 50%;
    margin: 15px 0;
    border: 2px solid transparent;
    outline: none;
    background-color: darkorange;
    color: white;
    padding: 15px;
    transition: background-color 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        border-color: darkorange;
        color: darkorange;
    }
`

const SubHeadingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: "";
        width: 90%;
        max-width: 720px;
        height: 2px;
        position: absolute;
        background-color: darkorange;
        z-index: 0;
    }
`

const SubHeading = styled.h2`
    font-weight: 300;
    color: gray;
    padding: 20px;
    margin: auto;
    background-color: #fff;
    z-index: 1;
`

const OtherWorks = styled.div`
`

const WorksContainer = styled.article`
    width: 100%;
    padding: 50px;
    margin-top: 50px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`

const ArtWork = () => {
    const contRef = useRef()
    const { id } = useParams()
    const data = works.filter( work => work.id === +id )[0]
    console.log(data, id , works.map(work => work.id))
    useEffect(() => { contRef.current.scrollIntoView({ behavior: "smooth"}) }, [id])

  return (
    <Container ref={contRef}>
        <ArtContainer className="artcontainer">
            <ImageContainer className="imagecontainer">
                <Image src={data?.image} />
            </ImageContainer>
            
            <Info className="info">
                <Title>My Work</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illo voluptates sunt officiis voluptatibus</Desc>
                <Button>go to post</Button>
            </Info>
        </ArtContainer>

        <OtherWorks id="works" >
            <SubHeadingContainer>
                <SubHeading>Other Works I've Done.</SubHeading>
            </SubHeadingContainer>
            
            <WorksContainer className="workcontainer">
                { 
                    works.filter( work => work.id !== +id ).map( (work, i) => <Link to={`/artwork/${work.id}`}><Work key={work.id} data={work} /></Link>)
                }
            </WorksContainer>
        </OtherWorks>
    </Container>
  )
}

export default ArtWork
