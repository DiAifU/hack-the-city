// © 2018 BTL GROUP LTD -  This package is licensed under the MIT license https://opensource.org/licenses/MIT
import Immutable from 'seamless-immutable';
import { cAuthConsumerCovenant, mergeCovenants } from 'interbit-covenant-tools';

import { actionTypes, actionCreators } from './actions';

const initialState = Immutable.from({
  chainMetadata: { name: 'Global Chain' },
  farmersData: [],
  userKey: '',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RATING: {
      const { farmerId, rating, userKey } = action.payload;
      const farmersData = state.getIn(['farmersData'], Immutable.from([]));
      farmersData[farmerId].ratings.push({ rating, userKey });

      return farmerId && userKey && rating ? state.set('farmersData', farmersData) : state;
    }

    case actionTypes.ADD: {
      const { number: maybeNumber } = action.payload;
      const number = Number(maybeNumber);
      const runningTotal = state.getIn(['runningTotal'], 0);

      return Number.isFinite(number) ? state.set('runningTotal', runningTotal + number) : state;
    }

    default:
      return state;
  }
};

const covenant = {
  actionTypes,
  actionCreators,
  initialState,
  reducer,
};

module.exports = mergeCovenants([covenant, cAuthConsumerCovenant]);
