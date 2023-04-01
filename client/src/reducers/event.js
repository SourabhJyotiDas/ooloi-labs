export const eventReducers = (state = { event: {}, events: [] }, action) => {
   switch (action.type) {

      case "CLEAR_ERRORS":
         return {
            ...state,
            error: null,
            success:false
         };
      case "CLEAR_MESSAGE":
         return {
            ...state,
            message: null,
            success:false

         }
      case "CREATE_EVENT_REQUEST":
         return {
            ...state,
            loading: true,
            event: {},
            success:false
         };

      case "CREATE_EVENT_SUCCESS":
         return {
            loading: false,
            event: action.payload,
            success:true
         };

      case "CREATE_EVENT_FAIL":
         return {
            ...state,
            loading: false,
            event: null,
            error: action.payload,
            success:false
         };


      case "ALL_EVENT_REQUEST":
         return {
            loading: true,
            events: [],
         };

      case "ALL_EVENT_SUCCESS":
         return {
            loading: false,
            events: action.payload,
         };

      case "ALL_EVENT_FAIL":
         return {
            ...state,
            loading: false,
            events: null,
            error: action.payload,
         };

      case "EVENT_DETAILS_REQUEST":
         return {
            loading: true,
            event: {},
         };

      case "EVENT_DETAILS_SUCCESS":
         return {
            loading: false,
            event: action.payload,
         };

      case "EVENT_DETAILS_FAIL":
         return {
            ...state,
            loading: false,
            event: null,
            error: action.payload,
         };
      case "DELETE_REQUEST":
         return {
            loading: true,
         };

      case "DELETE_SUCCESS":
         return {
            loading: false,
            message: action.payload
         };

      case "DELETE_FAIL":
         return {
            ...state,
            loading: false,
            event: null,
            error: action.payload,
         };

      default:
         return state;
   }
} 