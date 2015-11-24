export const ON_MODAL_CHANGE = 'ON_MODAL_CHANGE';
export const ON_SIDE_MENU_CHANGE = 'ON_SIDE_MENU_CHANGE';
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function onSideMenuChange(isOpen) {
  return {
    type: ON_SIDE_MENU_CHANGE,
    payload: {isOpen}
  };
}

export function toggleSideMenu() {
  return {
    type: TOGGLE_SIDE_MENU
  };
}

export function onModalToggle(isOpen) {
  return {
    type: ON_MODAL_CHANGE,
    payload: {isOpen}
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}
