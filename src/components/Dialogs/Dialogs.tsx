import React from "react";
import s from './Dialogs.module.css'
import { DialogItems } from "./DialoItems/DialogsItems";
import {Messages} from "./Messages/Messages";
import {DialogsDataType, MessagesDataType, StateType} from "../../redux/state";

type DialogsMessagesType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export function Dialogs(props: DialogsMessagesType ) {

    let dialogElement = props.dialogsData
        .map((d) => <DialogItems name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData
        .map((m) => <Messages message={m.message} id={m.id}/>)
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
    </div>
}
