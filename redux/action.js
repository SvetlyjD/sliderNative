import {actionLinks} from './actionType';

export function setLink(link) {
  return {
    type: actionLinks,
    link: link,
  };
}
