import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import persistedReducer, { RootState } from './rootReducer';

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['store']['dispatch'];
