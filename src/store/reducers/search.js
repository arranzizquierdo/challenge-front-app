
const initialState = {
  searching: true,
};

export default function savePhoneList(state = initialState, action) {
  switch (action.type){
  case "SAVE_PHONE_LIST": 
  {
    const newState = {
      ...state,
      searching: false,
      phones: action.payload.result.phoneList,
      currentPage: action.payload.result.currentPage,
      totalPage: action.payload.result.totalPage,
    };
    return newState;
  }
  default:
    return state
  }
}