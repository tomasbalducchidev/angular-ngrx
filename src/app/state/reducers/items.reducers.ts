import { ItemModel } from '@core/models/Item.interface';
import { ItemsState } from '@core/models/Item.state';
import { createReducer, on } from '@ngrx/store';
import { loadedItems, loadItems } from '../actions/items.actions';

// import { retrievedBookList } from './books.actions';
// import { Book } from '../book-list/books.model';

export const initialState: ItemsState = {
  loading: false,
  items: []
}

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {...state, loading: true}
  }),
  on(loadedItems, (state, {items}) => {
    return {...state, loading: false, items}
  })
);
