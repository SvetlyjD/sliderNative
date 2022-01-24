import { actionLinks } from "./actionType";

export function setLink(link) {
    return {
        type: actionLinks,
        payload: link,
    }
}