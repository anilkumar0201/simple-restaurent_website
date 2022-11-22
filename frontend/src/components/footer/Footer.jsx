import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <h3 className="fListHeading">Quick Links</h3>
                    <li className="fListItem">Home</li>
                    <li className="fListItem">Menu</li>
                    <li className="fListItem">About Us</li>
                    <li className="fListItem">Book Table</li>
                    <li className="fListItem">Contact US</li>
                    <li className="fListItem">Privacy Policy</li>
                </ul>
                <ul className="fList">
                    <h3 className="fListHeading">Help</h3>
                    <li className="fListItem">Contact Us</li>
                    <li className="fListItem">Help Center</li>
                </ul>
                <ul className="fList">
                    <h3 className="fListHeading">Countries</h3>
                    <li className="fListItem">India</li>
                    <li className="fListItem">Canada</li>
                    <li className="fListItem">South Korea</li>
                    <li className="fListItem">Japan</li>
                    <li className="fListItem">United States</li>
                    <li className="fListItem">United Kingdom</li>
                </ul>
            </div>
            <div className="fText">Copyright @ 2022 HarNak's Cuisine</div>
        </div>
    )
}
export default Footer;