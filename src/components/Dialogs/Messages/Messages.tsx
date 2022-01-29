import React from "react";
import s from './../Dialogs.module.css'
import {MessagesDataType, StateType} from "../../../redux/state";

export const Messages =  (props: MessagesDataType  ) => {
        return <div className={s.message}>{props.message}</div>
    }

