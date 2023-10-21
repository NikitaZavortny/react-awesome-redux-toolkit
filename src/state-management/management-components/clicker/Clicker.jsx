import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clicksSlice} from "../../redux-toolkit/store/reducers/clicksSlice";
import { useState } from "react";

 
function Clicker() {

    const { increment, decrement } = clicksSlice.actions;
    const dispatch = useDispatch();
    const { clicks } = useSelector(state => state.clicksReducer);

    const [value, setValue] = useState("1");
    const onChange = ({ target: { value } }) => setValue(prev => /\d+/.test(Number(value)) ? value : prev);


    return (
         <div>
            <h1>{clicks}</h1>
            <button className="btn btn-primary" onClick={() => dispatch(increment(Number(value)))}>+</button>
            <button className="btn btn-primary" onClick={() => dispatch(decrement(Number(value)))}>-</button>
            <h3>Please enter the number of in\de - cremention:   <input type="number" {...{ value, onChange }} /></h3>
        </div> 
    );
}

export default Clicker;