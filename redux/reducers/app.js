/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: APP  Reducer
 * Description: All app related state
 * * */
import types from '../types';

const { HANDLE_DROPDOWN_MENU, HANDLE_CLICK_MENU, HANDLE_CLICK_MOBILE_MENU } = types.app;
const initialState = {
    isOpenMenu: false,
    isOpenMobileMenu: false,
    selectedMenu: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_DROPDOWN_MENU:
            state = {
                ...state,
                isOpenMenu: !state.isOpenMenu,
                selectedMenu: !state.isOpenMenu === false ? null : state.selectedMenu,
            };
            return state;
        case HANDLE_CLICK_MENU:
            state = {
                ...state,
                selectedMenu:
                    action.payload === 0 && action.payload === state.selectedMenu
                        ? null
                        : action.payload,
                isOpenMenu: action.payload !== 0 ? false : state.isOpenMenu,
            };
            return state;
        case HANDLE_CLICK_MOBILE_MENU:
            state = {
                ...state,
                isOpenMobileMenu: !state.isOpenMobileMenu,
            };
            return state;
        default:
            return state;
    }
};

export default reducer;
