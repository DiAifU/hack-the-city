import actionTypes from './actionTypes';

const actionCreators = {
  addRate: (farmerId, rating) => ({
    type: actionTypes.ADD_RATING,
    payload: { farmerId, rating },
  }),

  deleteRate: ratingId => ({
    type: actionTypes.DELETE_RATING,
    payload: { ratingId },
  }),
};

export { actionTypes, actionCreators };
