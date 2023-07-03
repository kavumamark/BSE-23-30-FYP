import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppTopbar = (props) => {
    const navigate = useNavigate();
    return (
        <div className="layout-topbar">
           

            <button className="layout-menu-button p-link" onClick={props.onMenuButtonClick}>
                <i className="pi pi-bars"></i>
            </button>
            <div>
                <h2 style={{textAlign:'center' , fontFamily:'sans-serif', color:'whitesmoke'}}>GLAUCOMA DETECTION SYSTEM</h2>
            </div>

            {/* <button id="topbar-menu-button" className="p-link" onClick={props.onTopbarMenuButtonClick}>
                <i className="pi pi-ellipsis-v"></i>
            </button> */}
        </div>
    );
};

export default AppTopbar;
