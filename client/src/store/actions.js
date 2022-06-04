import {createAction} from '@reduxjs/toolkit';

export const requireAuthorization = createAction(`user/requireAuthorization`);
export const setUserData = createAction(`user/setUserData`);
export const loadUserOrders = createAction(`user/loadUserOrders`);
export const loadUserDocuments = createAction(`user/loadUserDocuments`);
export const loadUserLicenses = createAction(`user/loadUserLicenses`);
export const redirectToRoute = createAction(`app/redirectToRoute`);
