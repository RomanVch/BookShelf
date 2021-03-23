import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeAuthorBookAC} from "../redux/books-reduser";
import {TextField} from "@material-ui/core";
import './../App.css';


const styleTextField = {
    marginBottom: 25
}

type PropsType = {
    authorBook: string
    id: string
}


export const EditAuthorBook = (props: PropsType) => {
    const dispatch = useDispatch()
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.authorBook);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        dispatch(changeAuthorBookAC(props.id, title))
        setEditMode(false);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (<>{!editMode
            ? <p className={"listBook__authorBook"} onDoubleClick={activateEditMode}>{props.authorBook}</p>
            : <TextField
                style={styleTextField}
                fullWidth
                autoFocus={true}
                id="nameBookForm"
                name="nameBookForm"
                label="Кто автор?"
                onChange={changeTitle}
                onBlur={activateViewMode}
                value={title}
            />/*<input onBlur={activateViewMode} value={props.nameBook}></input>*/}
        </>
    );
}
