import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    padding: 10px;
    height: 500px;
    width: 250px;

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    img{
        height: 100px;
    }

    h2{
        color:#1e1e1e;
    }

    p{
        border-left: 3px solid #bbbbbb;
        padding-left: 10px;
        max-width: 230px;

        font-style: italic;
        align-self: start;
        font-size: 100;
    }
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    svg{
        height: 20px;
        width: 20px;
        color: ${(props) => (props.liked ? "#fb3958" : "#1e1e1e")};
    }

    &:hover{
        opacity: 0.5;
    }
`;