import React from 'react'
import "./mailList.css"
const MailList = () => {
    return (
        <div>
            <div className="mail">
                <h1 className="mailTitle">Get our latest recipes and expert tips right in our inbox</h1>
                <div className="mailInputContainer">
                    <input type="text" placeholder="Enter your Email here" />
                    <button>Join</button>
                </div>
            </div>
        </div>
    )
}
export default MailList;