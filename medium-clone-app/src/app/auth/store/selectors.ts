import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from 'src/app/shared/types/app-state.interface';
import {AuthStateInterface} from '../types/auth-state.interface';

/**
 * AppStateInterface - é a interface do state global
 * AuthStateInterface - interface do que será selecionado no selector
 **/
export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
