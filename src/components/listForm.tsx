import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './../App.css';
import {useFormik} from "formik";
import * as yup from 'yup';
import {Button, Paper, TextField} from "@material-ui/core";
import {addBookAC} from "../redux/books-reduser";
import {UploadImg} from "./imgBook";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';



const styleFormInput = {
    marginBottom: 20,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%"
}

const styleFormButton = {
    width: 237.5,
    margin: "auto",
    marginTop: 10
}

const emails = ['username@gmail.com', 'user02@gmail.com'];


type propsType = {
    setOpenAlert: (openAlert: boolean) => void
    onClose: any
    selectedValue: any
    open: any
}

function SimpleDialog(props: propsType) {

    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const dispatch = useDispatch()
    const [img, setImg] = useState<string>("")
    const validationSchema = yup.object({
        nameBookForm: yup
            .string()
            .required('Обязательное поле'),
        authorBookForm: yup
            .string()
            .required('Обязательное поле'),

    });

    const formik = useFormik({
        initialValues: {
            nameBookForm: "",
            authorBookForm: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            dispatch(addBookAC( values.authorBookForm,values.nameBookForm, img))
            props.setOpenAlert(true)
            resetForm()
        },
    });

    const styleFormBlock = {margin: "auto", width: 300, minHeight: 310}
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <Paper style={styleFormBlock} elevation={5}>
                <form className={"form"} onSubmit={formik.handleSubmit}>
                    <h2 className={"form__header"}>Добавь книгу</h2>
                    <TextField
                        fullWidth
                        id="nameBookForm"
                        label="Название книги"
                        {...formik.getFieldProps("nameBookForm")}
                        error={formik.touched.nameBookForm && Boolean(formik.errors.nameBookForm)}
                        helperText={formik.touched.nameBookForm && formik.errors.nameBookForm}
                        style={styleFormInput}
                    />
                    <TextField
                        fullWidth
                        id="authorBookForm"
                        label="Кто автор?"
                        {...formik.getFieldProps("authorBookForm")}
                        error={formik.touched.authorBookForm && Boolean(formik.errors.authorBookForm)}
                        helperText={formik.touched.authorBookForm && formik.errors.authorBookForm}
                        style={styleFormInput}
                    />
                    <UploadImg setImg={setImg}/>
                    <Button style={styleFormButton} color="primary" variant="contained" fullWidth type="submit">
                        Добавить книгу
                    </Button>
                </form>
            </Paper>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};


export function SimpleDialogDemo(props: any) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: any) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className={"addButton"}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Добавить книгу
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}
                          setOpenAlert={props.setOpenAlert}/>
        </div>
    );
}
