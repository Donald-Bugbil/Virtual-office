import { configureStore } from '@reduxjs/toolkit';
import officeReducer from '../features/officeSlice';

export default configureStore({
  reducer: {
      offices: officeReducer
  },
})