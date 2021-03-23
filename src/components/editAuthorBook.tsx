import React, {useState} from 'react';
import logo from './logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {booksType, bookType, deleteBookAC} from "../redux/books-reduser";
import {Button, IconButton, Paper} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Close';
import './../App.css';

const stylePaperBlock={
    width:"30vw",
    minHeight:100,
    paddingTop:0,
    marginTop:40,
    marginRight:50,
    marginLeft:50,
    minWidth:200,
    marginBottom:30

}
type PropsType={
    nameBook:string
}


export const EditNameBook = (props:PropsType) => {
    const dispatch=useDispatch()
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);
    }
    return (<>{!editMode
            ?<h2 className={"listBook__nameBook"} onDoubleClick={activateEditMode}>{props.nameBook}</h2>
            :<input onBlur={activateViewMode} value={props.nameBook}></input>}
</>
    );
}
