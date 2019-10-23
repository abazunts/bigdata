
const SET_VALUE='SET_VALUE';

const initState = {
    filter: {
        region: [{value: 'Region 1', label: 'Region 1'},{value: 'Region 2', label: 'Region 2'},{value: 'Region 3', label: 'Region 3'},{value: 'Region 4', label: 'Region 4'}],
        law: [{value: 'Law 1', label: 'Law 1'},{value: 'Law 2', label: 'Law 2'},{value: 'Law 3', label: 'Law 3'},{value: 'Law 4', label: 'Law 4'}],
        period: [{value: 'Hours', label: 'Hours'},{value: 'Day', label: 'Day'},{value: 'Month', label: 'Month'},{value: 'Year', label: 'Year'}],
        type: [{value: 'Type 1', label: 'Type 1'},{value: 'Type 2', label: 'Type 2'},{value: 'Type 3', label: 'Type 3'},{value: 'Type 4', label: 'Type 4'}],
    },

    region: '',
    law: '',
    period: '',
    type: '',
};

const FilterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_VALUE:
            debugger
            return {...state,
                [action.field]:  action.value,
            };

        default: return state;
    }
};

export const setValue = (value, field) => ({type: SET_VALUE, value, field});

export default FilterReducer;