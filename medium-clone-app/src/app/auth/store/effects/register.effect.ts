import {Injectable} from '@angular/core';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface';
import {AuthService} from '../../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser});
          }),

          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
