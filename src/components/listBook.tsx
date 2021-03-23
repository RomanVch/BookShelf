import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {bookType, deleteBookAC} from "../redux/books-reduser";
import {IconButton, Paper} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Close';
import './../App.css';
import {EditNameBook} from "./editNameBook";
import {EditAuthorBook} from "./editAuthorBook";
import defaultBook from "../img/defoltBook.png"

export const stylePaperBlock = {
    width: 300,
    minHeight: 265,
    paddingTop: 0,
    marginTop: 40,
    marginRight: 50,
    marginLeft: 50,
    minWidth: 300,
    marginBottom: 30,
    display: "flex",
    maxHeight: 300,
    flexDirection: 'column' as 'column',
}

const styleDeletButton = {
    width: 30,
    height: 30,
    marginLeft: "auto"
}

export const ListBook = () => {
    const dispatch = useDispatch()
    debugger
    const books = useSelector<AppStateType, Array<bookType>>(state => state.books)
    console.log(books)
    const onClickDelete = (id: string) => {
        dispatch(deleteBookAC(id))
    }
    return (

        <div className={"listBook"}>

            {
                books.length
                    ? books.map((b: bookType) => {

                        return <Paper key={b.id} style={stylePaperBlock} elevation={3}>
                            <IconButton style={styleDeletButton} onClick={() => onClickDelete(b.id)} aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                            <div className={"listBook__infoBlock"}>
                                <div className={"list__containerImg"}>
                                    <img className={"listBook_img"} alt={"обложка книги"}
                                         src={b.img === "" ? defaultBook : b.img}/></div>
                                <div className={"listBook__textBlock"}>
                                    <EditNameBook nameBook={b.nameBook} id={b.id}/>
                                    <EditAuthorBook authorBook={b.authorBook} id={b.id}/>
                                </div>
                            </div>

                        </Paper>
                    })
                    : <p className={"listNoBook"}>К сожалению, книг нет, добавь хотя бы одну</p>}
        </div>
    );
}
