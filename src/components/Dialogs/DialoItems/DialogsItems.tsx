import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogsDataType = {
    name: string
    id: string
}

export const DialogItems =  (props:  DialogsDataType  ) => {
    return <div className={s.dialog}><NavLink
        to={'/dialog/' + props.id}>{props.name}</NavLink></div>
}

