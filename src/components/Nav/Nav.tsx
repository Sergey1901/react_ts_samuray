import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css'

export function Nav() {
    return (  <nav className={s.nav}>
            <div className={s.item}><NavLink
                style={({ isActive }) => ({color: isActive ? '#fff': '#545e6f'})}
                to ='/profile' >Profile</NavLink></div>
            <div className={s.item}><NavLink
                style={({ isActive }) => ({color: isActive ? '#fff': '#545e6f'})}
                to='/dialogs'>Messages</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    )
}
