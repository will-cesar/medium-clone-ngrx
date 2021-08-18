import {Injectable} from '@angular/core';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface';
import {AuthService} from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/get-current-user';
import {PersistanceService} from 'src/app/shared/services/persistance.service';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');

        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser});
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
