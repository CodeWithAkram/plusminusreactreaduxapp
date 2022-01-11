const initialState = 10;
const changeMultiRuducer = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLICATION": return state * 5;
        case "DIVIDE": return state / 5;
        default: return state;
    }
}

export default changeMultiRuducer;