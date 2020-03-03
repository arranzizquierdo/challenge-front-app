import {createAction} from 'redux-actions';

export const savePhoneList = createAction('SAVE_PHONE_LIST', (result) => ({result}));
