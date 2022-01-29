import React from "react";
import s from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (<div>
            <img src='https://vsthemes.org/uploads/posts/2019-02/1549949228_2019-02-12_042824.jpg'/>
            <div className={s.descriptionBlock}><a>ava + description</a></div>
        </div>
    )
}
