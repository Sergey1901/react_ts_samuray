import React from "react";
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType, PostsType} from "../../redux/state";



export function Profile(props: PostsArrayType) {
    return (<div>
            <ProfileInfo/>
        <MyPosts posts={props.posts}/>
        </div>
    )
}
