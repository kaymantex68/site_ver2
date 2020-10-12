import React from 'react';
import classes from './Contacts.module.css';

function Contacts() {
    return (
        <div className={classes.Background}>
            <div><span className={classes.Cayman}>CAYMAN </span><span className={classes.Automation}>автоматизация</span> </div>
            <div className={classes.Phone}>
                +7 (920) 4897437
             </div>
        </div>
    )
}

export default Contacts;

