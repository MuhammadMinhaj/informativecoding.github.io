import types from '../types';

const { HANDLE_DROPDOWN_MENU, HANDLE_CLICK_MENU, HANDLE_CLICK_MOBILE_MENU } = types.app;
const methods = {};
methods.handleDropDown = () => (dispatch) =>
    dispatch({
        type: HANDLE_DROPDOWN_MENU,
    });
methods.handleChangeSelectMenu = (value) => (dispatch) => {
    dispatch({
        type: HANDLE_CLICK_MENU,
        payload: value,
    });
};
methods.handleClickMobileMenu = () => (dispatch) => {
    dispatch({
        type: HANDLE_CLICK_MOBILE_MENU,
    });
};
export default methods;
