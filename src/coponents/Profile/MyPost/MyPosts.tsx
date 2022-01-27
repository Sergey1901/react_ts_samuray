import React from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export function MyPosts() {
    return (<div className={s.context}>

            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Posts message = "Hi" like='like 15'/>
                <Posts message = "How are you" like='like 25'/>

            </div>
        </div>
    )
}
