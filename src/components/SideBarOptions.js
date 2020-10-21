import React from 'react'
import './SideBarOptions.css';


function SideBarOptions({ title, Icon}) {
    return (
        <div className="sideBarOptions">
            {Icon && <Icon className="sideBarOptions_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOptions
