import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAIL_REQUEST,
  COURSE_DETAIL_SUCCESS,
  COURSE_DETAIL_FAIL,
} from "../constants/courseConstants";

export const courseListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return { loading: true, courses: [] };
    case COURSE_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const producDetailReducer = (
//   state = { product: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_DETAIL_REQUEST:
//       return { loading: true, state };
//     case PRODUCT_DETAIL_SUCCESS:
//       return { loading: false, product: action.payload };
//     case PRODUCT_DETAIL_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const courseDetailsReducer = (
  state = { course: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case COURSE_DETAIL_REQUEST:
      return { ...state, loading: true };
    case COURSE_DETAIL_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSE_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

