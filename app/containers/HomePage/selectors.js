import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const selectHome = () => state => state.get('home');

/**
 * Select the language locale
 */

const selectValueA = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('valueA')
);

const selectValueB = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('valueB')
);


const selectValueC = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('valueC')

);

const selectValueD = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('valueD')

);

const selectValueE = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('valueE')

);

export {
  selectValueA,
  selectValueB,
  selectValueC,
  selectValueD,
  selectValueE,
};
