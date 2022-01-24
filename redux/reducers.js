import {actionLinks} from './actionType';
import {initialState} from './initialState';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionLinks:
      return {link: action.link};
    default:
      return state;
  }
}
