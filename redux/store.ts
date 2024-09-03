import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
};

const persistedReducer = persistReducer(persistConfig, accountReducer);

export const store = configureStore({
  reducer: {
    account: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
