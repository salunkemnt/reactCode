
const initialState = {
    formData: []
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FORM_DATA':
        return {
          ...state,
          formData: [...state.formData, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default reducers;
  