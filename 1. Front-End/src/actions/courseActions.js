import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_DETAIL_REQUEST,
    COURSE_DETAIL_SUCCESS,
    COURSE_DETAIL_FAIL,
  } from "../constants/courseConstants";
  
   import axios from "axios";
  //import axios, * as others from "axios";
  
  export const listCourses = () => async (dispatch) => {
    try {
      dispatch({
        type: COURSE_LIST_REQUEST,
      });
  
      const { data } = await axios.get("/api/getallcourses");
  
      dispatch({
        type: COURSE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_LIST_FAIL,
        payload: error.message,
      });
    }
  };
  
  export const listCourseDetails = (id) => async (dispatch) => {
    try {
      dispatch({
        type: COURSE_DETAIL_REQUEST,
      });
  
      const { data } = await axios.get(`/api/coursebyid/${id}`);
  
      dispatch({
        type: COURSE_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };