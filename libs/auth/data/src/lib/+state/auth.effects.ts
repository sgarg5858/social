import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { User } from "@social/auth-model";

@Injectable()
export class AuthEffects{

    constructor(private authService:AuthService,private actions$:Actions){}

    registerUser=createEffect(()=>this.actions$.pipe(
        ofType(AuthActions.registerUser),
        exhaustMap(({user})=>this.authService.registerUser(user).pipe(
            map((user:User)=>AuthActions.registerUserSuccess({user})),
            catchError((err)=>of(AuthActions.registerUserFailure({authErrors: err.errors.body as string[]})))
        ))
    ))
}