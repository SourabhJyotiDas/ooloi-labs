import axios from "axios";

export const registerEvent = (eventData) => async (dispatch) => {
   try {
      dispatch({
         type: "CREATE_EVENT_REQUEST",
      })

      const config = { headers: { "Content-Type": "application/json" } }

      const { data } = await axios.post(`/api/v1/create`, eventData, config);
      // console.log(data)

      dispatch({
         type: "CREATE_EVENT_SUCCESS",
         payload: data.user
      })

   } catch (error) {
      dispatch({
         type: "CREATE_EVENT_FAIL",
         payload: error.response.data.message
      })
   }
}



export const getAllEvents = () => async (dispatch) => {
   try {
      dispatch({
         type: "ALL_EVENT_REQUEST",
      })

      const { data } = await axios.get(`/api/v1/events`);

      dispatch({
         type: "ALL_EVENT_SUCCESS",
         payload: data.events
      })

   } catch (error) {
      dispatch({
         type: "ALL_EVENT_FAIL",
         payload: error.response.data.message
      })
   }
}


export const eventDetails = (id) => async (dispatch) => {
   try {
      dispatch({
         type: "EVENT_DETAILS_REQUEST",
      })
      const { data } = await axios.get(`/api/v1/details/${id}`)
      dispatch({
         type: "EVENT_DETAILS_SUCCESS",
         payload: data.event
      })
   } catch (error) {
      dispatch({
         type: "EVENT_DETAILS_FAIL",
         payload: error.response.data.message
      })
   }
}


export const deleteEvent = (id) => async (dispatch) => {
   try {
     dispatch({
       type: "DELETE_REQUEST",
     });
 
     const { data } = await axios.delete(`/api/v1/delete/${id}`);
     dispatch({
       type: "DELETE_SUCCESS",
       payload: data.message,
     });
   } catch (error) {
     dispatch({
       type: "DELETE_FAIL",
       payload: error.response.data.message,
     });
   }
 };

 export const clearErrors = () => async (dispatch) => {
   dispatch({
         type: "CLEAR_ERRORS"
   })
}

 export const clearMessage = () => async (dispatch) => {
   dispatch({
         type: "CLEAR_MESSAGE"
   })
}