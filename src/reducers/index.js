import changeRuducer from './incDecReducer';
import changeMultiRuducer from './multiDivideReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeRuducer,
    changeMultiRuducer
});

export default rootReducer;