import { combineReducers } from 'redux';
import contactsReducer from './constactsReducer';

const rootReducer = combineReducers({
  contactsData: contactsReducer,
});

export default rootReducer;

// state = {
//   contactsData: {contacts: [
//     {
//       name: 'Test',
//       telNumber: '+380123456789',
//       birthday: '2000-12-01',
//       isFavourite: false,
//     },
//   ],
//   isFetching: false,
//   error: null,},
// };
