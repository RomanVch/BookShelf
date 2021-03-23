import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeNameBookAC} from "../redux/books-reduser";
import {TextField} from "@material-ui/core";
import './../App.css';

type PropsType = {
    nameBook: string
    id: string
}

const styleTextField = {
    marginBottom: 8
}

export const EditNameBook = (props: PropsType) => {
    const dispatch = useDispatch()
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.nameBook);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        dispatch(changeNameBookAC(props.id, title))
        setEditMode(false);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (<>{!editMode
            ? <h2 className={"listBook__nameBook"} onDoubleClick={activateEditMode}>{props.nameBook}</h2>
            : <TextField
                fullWidth
                style={styleTextField}
                autoFocus={true}
                id="nameBookForm"
                name="nameBookForm"
                label="Название книги"
                onChange={changeTitle}
                onBlur={activateViewMode}
                value={title}
            />}
        </>
    );
}
