import "./header.css"
import { faHome, faBook, faPeopleGroup, faContactBook, faCalendarDays, faBowlFood, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
import { useState } from 'react'
// import { format } from "date-fns"
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
const Header = ({ type }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const navigate=useNavigate();
    const navigateToMenu = () => {
        navigate("/hotels");
      };
      const navigateToHome = () => {
        navigate("/");
      };
    const navigatetoLogin = ()=>
    {
        navigate("/Login");
    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem" >
                        <FontAwesomeIcon icon={faHome} />
                        <span onClick={navigateToHome}>HOME</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBook} />
                        <span onClick={navigateToMenu }>MENU</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <span>ABOUT</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faContactBook} />
                        <span>CONTACT</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTable} />
                        <span onClick={navigateToMenu }>BOOK-TABLE</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">The Flavour Of Traditions</h1>
                        <p className="haederDesc">
                            We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine dining environment.
                        </p>
                        <button className="headerBtn" onClick={navigatetoLogin}>Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBowlFood} className="headerIcon" />
                                <input type="text" placeholder="what you want to eat?"
                                    className="headerSearchInput" />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span  className="headerSearchText"><DatePicker className="date" selected ={selectedDate} onChange={date=>setSelectedDate(date)} minDate={new Date()} dateFormat='dd/MM/yyyy'  isClearable   /></span>
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPeopleGroup} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" disabled={options.adult >= 4} onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" disabled={options.children >= 6} onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={navigateToMenu } >Search</button>
                            </div>
                        </div></>}
            </div>
        </div>
    )
}
export default Header;