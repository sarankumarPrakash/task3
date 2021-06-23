import React, { useState } from 'react';
import './common.css';
import { Button,  FormControl, Table,  } from 'react-bootstrap';
import { BiCurrentLocation } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";
import RangePicker from "react-range-picker";


export const UserMaster = (Props) => {

    const [counter, setCounter] = useState(1);
    const [masterTable,setmasterTable]=useState('');
    let incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);

    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    if (counter >= 3) {
        incrementCounter = () => setCounter(3);
    }
    function Display(props) {
        if (props.message === 1 || props.message === 0) {
            return (<label style={{ marginLeft: '.5rem' }} >{props.message} Guest</label>)
        }
        else {
            return (<label style={{ marginLeft: '.5rem' }} >{props.message} Guests</label>)
        }
    }
    const handlevalue = (e) => setmasterTable({
        ...masterTable,
        [e.target.name]: [e.target.value],
      });

    return (
        <div className="wrapper">
            <Table>
                <thead className=".justify-content-md-center"><strong><h1>World's Fastest Growing Hotel Chain</h1></strong> </thead>
                <tbody>
                    <tr>
                        <td  className='default-placeholder'>
                            <FormControl 
                                placeholder="Around Me"
                                name="address"
                                aria-label="Search Your Keyword"
                                aria-describedby="basic-addon2"
                                onChange={handlevalue}
                            />
                            <span><BiCurrentLocation /> Near me</span>
                        </td>
                        <td > <RangePicker /></td>
                        <td className="room1" > <span> 1 Room </span>
                            <FaPlus id="button " onClick={incrementCounter} /> 
                            <Display message={counter} />
                            <span>{""}</span>
                            <FaMinus id="button" onClick={decrementCounter} />
                            </td>
                        <td className="search"><Button variant="outline-secondary" id="search-button">
                            Search
                        </Button></td>
                    </tr>
                    <tr>
                        <td className="room2">
                            <b><h3>Continue your search</h3></b>
                        </td>
                        <td className="final"><Button variant="outline-secondary">
                            <span>{masterTable.address}</span>
                            <span><b>|</b></span>
                           <span> {counter} Guests + 1 Room</span>
                           
                           
                        </Button></td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

UserMaster.prototype = {};
UserMaster.defaultProps = {};
export default UserMaster;