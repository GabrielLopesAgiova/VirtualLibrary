import React from "react";
import Header from "../header";
import Footer from "../footer";
import BookList from "../booklist"

import { Container } from "./styles";

export default function Layout(){
    return(
        <Container>
            <Header />
            <BookList />
            <Footer />
        </Container>
    )
}