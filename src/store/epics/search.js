import {ajax} from 'rxjs/ajax'
import {empty} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {combineEpics, ofType} from 'redux-observable';
import {savePhoneList, searchPhoneList} from '../actions';

const executesearchPhoneList = (action$) => action$
  .pipe(
    ofType(searchPhoneList),
    switchMap((action) => {
      return ajax({
        method: 'GET',
        url: `http://localhost:3000/phoneList`
      }).pipe(
        map((res) => res.response ? savePhoneList(res.response) : empty()),
        catchError((error) => console.log(error))
      )
    })
  )

export default combineEpics(
  executesearchPhoneList,
);