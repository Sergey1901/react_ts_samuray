import React from "react";
import s from './Posts.module.css'

export type PostsType = {
    message: string
    likeCount: number
}

export function Posts(props: PostsType) {
    return (<div>
            <div className={s.item}>
                <img
                    src='https://a-static.besthdwallpaper.com/oni-mask-samurai-girl-kiberpank-art-oboi-3840x2160-68956_54.jpg'/>
                {props.message}      </div>
            <div>{props.likeCount}</div>
        </div>
    )
}
