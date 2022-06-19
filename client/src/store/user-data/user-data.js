import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from 'const';
import {loadUserDocuments, loadUserLicenses, loadUserOrders, requireAuthorization, setUserData, setUserOrders} from 'store/actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  userData: null,
  userOrders: [],
  availableDocuments: [],
  availableLicenses: []
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserOrders, (state, action) => {
      state.userOrders = action.payload;
    })
    .addCase(loadUserDocuments, (state, action) => {
      state.availableDocuments = action.payload;
    })
    .addCase(loadUserLicenses, (state, action) => {
      state.availableLicenses = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setUserOrders, (state, action) => {
      state.userOrders = action.payload;
    });
});

export {userData};
