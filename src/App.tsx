import React from 'react';
import './App.css';
import {ListBook} from "./components/listBook";
import {SimpleDialogDemo} from "./components/listForm";
import {MessageGood} from "./components/alert";

function App() {
    const [openAlert, setOpenAlert] = React.useState(false);

    return (
        <div>
            <SimpleDialogDemo setOpenAlert={setOpenAlert}/>
            <ListBook/>
            <MessageGood openAlert={openAlert} setOpenAlert={setOpenAlert}/>
        </div>
    );
}

export default App;
