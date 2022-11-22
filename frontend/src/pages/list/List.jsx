import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import "./list.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react'
import { parseWithOptions } from 'date-fns/fp';
import { Searchitem } from '../../components/searchitem/Searchitem';

const List = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        table: 0
    });

    return (

        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label >Date</label>
                            <span><DatePicker className="date" selected={selectedDate} onChange={date => setSelectedDate(date)} minDate={new Date()} dateFormat='dd/MM/yyyy' isClearable /></span>
                        </div>
                        <div className="lsItem">
                            <label className='nopeople'>No of people</label>
                            <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Adult
                                </span>
                                <input type="number" name="" min={1} className='lsOptionInput' placeholder={options.adult} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Children
                                </span>
                                <input type="number" name="" min={0} className='lsOptionInput' placeholder={options.children} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Table
                                </span>
                                <input type="number" name="" min={1} className='lsOptionInput' placeholder={options.table} />
                            </div>
                            </div>
                        </div>
                        <button>SEARCH</button>
                    </div>
                    <div className="listResult">
                        <Searchitem/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default List;