import React from 'react';
import logo from './logo.svg';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {booksType, bookType} from "../redux/books-reduser";
import {Paper} from "@material-ui/core";
import './../App.css';

const stylePaperBlock={
    width:"30vw",
    minHeight:100,
    paddingTop:0,
    marginTop:40,
    marginLeft:50,
    minWidth:200
}

export const ListBook = () => {
    const books = useSelector<AppStateType, booksType>(state => state.books)
    return (
        <div className={"listBook"}>
            {books
                ? books.map((b: bookType) => {

                    return <Paper style={stylePaperBlock} elevation={3} >
    <h2 className={"listBook__nameBook"}>{b.nameBook}</h2>
    <p className={"listBook__authorBook"}>{b.authorBook}</p>
</Paper>
                })
                : <p>К сожелению книг добавленных книг нет,добавь хотя бы одну</p>}
        </div>
    );
}
