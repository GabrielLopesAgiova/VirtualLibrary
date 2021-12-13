import React from "react";
import {AddBookButton, AddIcon} from "./styles";

export default function AddBook() {
    return(
        <li>
            <AddBookButton>
                <AddIcon />
            </AddBookButton>
        </li>
    );
}