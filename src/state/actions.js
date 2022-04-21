import * as types from "./action-types.js";

export const changeInput = ({ name, value }) => {
    return {
        type: types.input_change,
        payload: { name, value },
    }
}