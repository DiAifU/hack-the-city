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

    case actionTypes.DELETE_RATING: {
      const { farmerId, ratingId, userKey } = action.payload;
      const farmersData = state.getIn(['farmersData'], Immutable.from([]));
      const { userKey: existingUserKey } = farmersData[farmerId].ratings[ratingId];
      if (existingUserKey !== userKey) return state;
      delete farmersData[farmerId].ratings[ratingId];
      return state.set('farmersData', farmersData);
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
