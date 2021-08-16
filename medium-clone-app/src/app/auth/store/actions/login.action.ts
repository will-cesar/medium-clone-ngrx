import {createAction, props} from '@ngrx/store';

import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface';
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface';
import {LoginRequestInterface} from '../../types/login-request.interface';
import {ActionTypes} from '../action-types.enum';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
