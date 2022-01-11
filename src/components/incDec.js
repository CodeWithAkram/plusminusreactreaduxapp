import React from 'react';
import { addTheNumber, minusTheNumber, multTheNumber, divideTheNumber } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';

const IncDec = () => {
    
    const myState = useSelector((state) => state.changeRuducer);
    const myMultiState = useSelector((state) => state.changeMultiRuducer);
    const dispatch = useDispatch();

    return (
        <>
            <div className="main_div">
                <div className="inner_div">
                    <h1>Welcome to React & Redux Tutorial</h1>
                    <h3>Increment & Decrement using Redux</h3>
                    <div className="input_div">
                        <i className='fas fa-minus minus' onClick={() => dispatch(minusTheNumber())}></i>
                        <input type="text" className='input_text' value={myState} />
                        <i className='fas fa-plus add' onClick={() => dispatch(addTheNumber())}></i>
                    </div>
                    
                    <h3>Multtiplication & Dividing using Redux</h3>
                    <div className="input_div">
                        <i className='fas fa-divide minus' onClick={() => dispatch(divideTheNumber())}></i>
                        <input type="text" className='input_text' value={myMultiState} />
                        <i className='fas fa-times add' onClick={() => dispatch(multTheNumber())}></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IncDec
