import styled from "styled-components"

const Container = styled.div`
    position: relative;
    flex: 1;
    overflow: hidden;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 0;

    &::before {
        content: "show work";
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(1px);
        color: white;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
        z-index: 2;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.5s ease;
    border-radius: 5px;
    display: block;

    &:hover {
        transform: scale(1.1);
    }
`


const Work = ({ data }) => {
  return (
    <Container>
        <Image src={data.image} />
    </Container>
  )
}

export default Work
