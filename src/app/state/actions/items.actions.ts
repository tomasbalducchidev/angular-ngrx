import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction(
  '[Item List] Load items'
);
export const loadedItems = createAction(
  '[Item List] Load success',
  props<{ items: ItemModel[] }>()
);

// export const removeBook = createAction(
//   '[Book Collection] Remove Book',
//   props<{ bookId: string }>()
// );

// export const retrievedBookList = createAction(
//   '[Book List/API] Retrieve Books Success',
//   props<{ books: ReadonlyArray<Book> }>()
// );
