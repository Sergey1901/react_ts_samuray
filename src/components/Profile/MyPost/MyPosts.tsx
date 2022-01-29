import React from "react";
import {PostsArrayType} from "../../../redux/state";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export function MyPosts(props: PostsArrayType ) {

    let postElement=props.posts.map(p=><Posts message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={s.button}>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}

