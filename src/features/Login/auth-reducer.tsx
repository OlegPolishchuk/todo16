import {Dispatch} from "redux";
import { SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType } from '../../app/app-reducer'
import {authAPI, LoginParamsType} from "../../api/todolists-api";

const initialState = {
  isLoggedIn: false
}

type InitialStateType = typeof initialState;

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {

    default: return state;
  }
}


//actions

export const setIsLoggedInAC = (value: boolean) =>
  ({type: 'login/SET_IS_LOGGED_IN', value} as const)

// thunks

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatusAC('loading'))
  authAPI.login(data)
    .then(res => console.log(res))
}

//types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType
