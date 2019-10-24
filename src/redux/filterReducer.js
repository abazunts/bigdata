
const initState = {
    filter: {
        region: [{value: 'Region 1', label: 'Region 1'},{value: 'Region 2', label: 'Region 2'},{value: 'Region 3', label: 'Region 3'},{value: 'Region 4', label: 'Region 4'}],
        law: [{value: 'Law 1', label: 'Law 1'},{value: 'Law 2', label: 'Law 2'},{value: 'Law 3', label: 'Law 3'},{value: 'Law 4', label: 'Law 4'}],
        period: [{value: 'Hours', label: 'Hours'},{value: 'Day', label: 'Day'},{value: 'Month', label: 'Month'},{value: 'Year', label: 'Year'}],
        type: [{value: 'Type 1', label: 'Type 1'},{value: 'Type 2', label: 'Type 2'},{value: 'Type 3', label: 'Type 3'},{value: 'Type 4', label: 'Type 4'}],
    },
};

const FilterReducer = (state = initState, action) => {
    switch (action.type) {
        default: return state;
    }
};


export default FilterReducer;