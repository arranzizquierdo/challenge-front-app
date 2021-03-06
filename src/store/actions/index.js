import {createAction} from 'redux-actions';

export const searchPhoneList = createAction('SEARCH_PHONE_LIST', (currentPage) => ({currentPage}));

export const savePhoneList = createAction('SAVE_PHONE_LIST', (result) => ({result}));
