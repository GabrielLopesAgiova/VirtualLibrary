import React from "react";
import { Container, ButtonArea, Button} from "./styles";
import { IoHeart } from "react-icons/io5";

export default function Book({id, title, author, genre, description, image, published, liked}){
    return(
        <li>
            <Container>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
                <p>Description: {description}</p>
                <p>Publication date: {published}</p>

                <ButtonArea>
                    <Button liked={liked}>
                        <IoHeart />
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    );
}