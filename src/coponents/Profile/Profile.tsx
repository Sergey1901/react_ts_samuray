import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";

export function Profile() {
    return (<div className={s.context}>
            <img src='https://vsthemes.org/uploads/posts/2019-02/1549949228_2019-02-12_042824.jpg'/>
            <div><a>ava + description</a></div>
        <MyPosts/>
        </div>
    )
}
