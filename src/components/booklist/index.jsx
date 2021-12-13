import React, { useEffect, useState } from "react";
import { Container, BookListWrapper } from "./styles"
import AddBook from "../addBook";
import Book from "../book";
import api from "../../services/api";

export default function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get("books").then(({data}) => {
            setBooks(data);
        });
        console.log(books);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Container>
            <BookListWrapper>
                <Book 
                id = {1}
                title = "I give you fair."
                author = "Tomasa Bayer"
                genre = "Iste"
                description = "I'm not myself, you see.' 'I don't think it's at all anxious to have lessons to learn! Oh, I shouldn't like THAT!' 'Oh, you can't be civil, you'd better leave off,' said the Duchess, 'as pigs have."
                image = "http://placeimg.com/480/640/any"
                published = "22/12/1974"
                liked = {true}
                />
            </BookListWrapper>
        </Container>
    );
}