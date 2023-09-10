import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from "@social/auth-model";
import { AuthActions } from "./auth.actions";

export interface AuthState {
    loggedIn: boolean;
    user: User;
    status: Status;
    authErrors:string[]
  }
  
  export enum Status {
    INIT = 'INIT',
    IN_PROGRESS = 'IN_PROGRESS',
  }

  export const authInitialState: AuthState = {
    loggedIn: false,
    status: Status.INIT,
    user: {
      email: '',
      token: '',
      username: '',
      bio: '',
      image: '',
    },
    authErrors:[]
  };
  export const authFeatureKey='auth'
  export const authFeature = createFeature({
    name:authFeatureKey,
    reducer:createReducer(
        authInitialState,
        on(AuthActions.registerUser,AuthActions.loginUser,(state)=>{
            return {
                ...state, status:Status.IN_PROGRESS
            }
        }),
        on(AuthActions.registerUserSuccess,AuthActions.loginUserSuccess,(state,action)=>{
            return {
                ...state, 
                status:Status.INIT,
                user:action.user,
                loggedIn:true
            }
        }),
        on(AuthActions.registerUserFailure,AuthActions.loginUserFailure,(state,{authErrors})=>{
            return {
                ...state, 
                status:Status.INIT,
                user:{bio:'',email:'',image:'',token:'',username:''},
                loggedIn:false,
                authErrors:authErrors
            }
        }),

        )
  })
  