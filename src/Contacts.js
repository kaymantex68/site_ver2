import React from 'react';
import classes from './Contacts.module.css';
import logo from './cayman.svg'
function Contacts() {
    return (
        <div className={classes.Background}>
            <div className={classes.LogoContacts}>
                <img src={logo}></img>
            </div>
            <div><span className={classes.Automation}>автоматизация</span> </div>
            <div >
            <span className={classes.Phone}>
                +7 (920) 4897437
                </span>
             </div>
        </div>
    )
}

export default Contacts;

