import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';

//trying to resolve "non serializable" issue on the console
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: {
    // Ignore these action types
    ignoredActions: ['your/action/type'],
    // Ignore these field paths in all actions
    ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    // Ignore these paths in the state
    ignoredPaths: ['items.dates'],
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice,
    middleware: customizedMiddleware,
  },
});
