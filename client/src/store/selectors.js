import {NameSpase} from "const";
import {AuthorizationStatus} from "const";
import {createSelector} from 'reselect';

export const getAuthStatus = (state) => state[NameSpase.UserData].authorizationStatus;
export const isUserAuthorized = createSelector(
    getAuthStatus,
    (status) => status === AuthorizationStatus.Auth,
);
