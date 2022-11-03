import { ItemsState } from '@core/models/Item.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items
);
export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
);
