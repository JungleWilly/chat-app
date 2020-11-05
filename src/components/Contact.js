import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

export function Contact({ name, online, avatarUrl }) {
    return (
        <div className="Contact">
            <img alt="profile" className="avatar" srcSet={avatarUrl} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <span className={online ? "status-online" : "status-offline"} />
                    <p className="status-text">{online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    );
}

Contact.prototype = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};