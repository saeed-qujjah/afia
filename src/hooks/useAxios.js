import { useEffect, useReducer } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  isLoading: false,
  // isError: false,
  // data: null,
};

const reducerHandler = (state, action) => {
  switch (action.type) {
    case `INIT`:
      return {
        //  ...state,
          isLoading: true,
          //  isError: false 
          };
    // case `SUCCESS`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     data: action.payload,
    //   };
    // case `ERROR`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     data: action.payload,
    //   };
    default:
      return;
  }
};

export default function UseAxios() {
  const [state, dispatch] = useReducer(reducerHandler, initialState);

  const executeQuery = (url, method = "POST", requestData = null,action) => {
    if (!url) return;
    const options = {
      method,
      url,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    };
    if (requestData) {
      options.data = requestData;
    }
    console.log(options)
    dispatch({ type: `INIT` });
    axios(options)
      .then((res) => {
        action({error:false, data: res.data})
        // dispatch({ type: `SUCCESS`, payload: res.data });
      })
      .catch((error) => {
        action({error: error,data:null})
        // dispatch({ type: `ERROR`, payload: error });
      });
      return state
  };

  return { ...state, executeQuery };
}

// import { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// function useHttp() {
// //   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

//   const execute = async (url, method = "GET", requestData = null) => {
//     try {
//       setIsLoading(true);
// const options = {
//   method,
//   url,
//   headers: {
//     Authorization: "Bearer " + Cookies.get("token"),
//   },
// };

// if (requestData) {
//   options.data = requestData;
// }

//       const response = await axios(options);
//       console.log(response)
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response)
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         return `Server error: ${error.response.status} - ${error.response.data.error}`;
//       } else if (error.request) {
//         console.log(error.request)
//         // The request was made but no response was received
//         return "Network error: No response received from server";
//       } else {
//         console.log(error.message)
//         // Something happened in setting up the request that triggered an Error
//        return `Error: ${error.message}`;
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { isLoading, execute };
// }

// export default useHttp;

// import { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// function useHttp() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const execute = async (url, method = "GET", requestData = null) => {
//     try {
//       setIsLoading(true);
//       const options = {
//         method,
//         url,
//         headers: {
//           Authorization: "Bearer " + Cookies.get("token"),
//         },
//       };

//       if (requestData) {
//         options.data = requestData;
//       }

//       const response = await axios(options);
//       setData(response.data);
//       setError(null);
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         setError(
//           new Error(
//             `Server error: ${error.response.status} - ${error.response.data.error}`
//           )
//         );
//       } else if (error.request) {
//         // The request was made but no response was received
//         setError(new Error("Network error: No response received from server"));
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         setError(new Error(`Error: ${error.message}`));
//       }
//       setData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { data, isLoading, error, execute };
// }

// export default useHttp;
