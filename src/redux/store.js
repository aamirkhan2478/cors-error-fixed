import { configureStore } from '@reduxjs/toolkit';
import ContainerSliceReducer from './Container/Containers';
import popupSliceReducer from './popup/popup';
import searchSliceReducer from './Search/search';

export default configureStore({
  reducer: {
    popup: popupSliceReducer,
    container: ContainerSliceReducer,
    search: searchSliceReducer,
  },
});
