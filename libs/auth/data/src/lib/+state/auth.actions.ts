import {createAction, props} from '@ngrx/store';
import { User } from '@social/auth-model';

const registerUser = createAction('[Register Page] Register User',props<{user:Partial<User>}>());
const registerUserSuccess = createAction('[Register API]  Success',props<{user:User}>());
const registerUserFailure = createAction('[Register API] Failure',props<{authErrors:string[]}>());

const loginUser = createAction('[Login Page] Login User',props<{user:Partial<User>}>());
const loginUserSuccess = createAction('[Login API]  Success',props<{user:User}>());
const loginUserFailure = createAction('[Login API] Failure',props<{authErrors:string[]}>());

const logout = createAction('[Auth] Logout');

export const AuthActions={
    registerUser,registerUserFailure,registerUserSuccess,
    loginUser,loginUserSuccess,loginUserFailure,logout
}