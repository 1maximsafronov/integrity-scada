import {combineReducers} from '@reduxjs/toolkit';
import {NameSpase} from 'const';
import {appData} from './app-data/app-data';
import {userData} from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpase.AppData]: appData,
  [NameSpase.UserData]: userData
});
