import { createSelector } from 'reselect';

const getFavoritesIds = (state) => state.allIds;
const getFavoritesMap = (state) => state.byId;

export const getFavorites = createSelector(
  [getFavoritesIds, getFavoritesMap],
  (ids, byId) => (ids.map(item => byId.get(item.toString())))
);
