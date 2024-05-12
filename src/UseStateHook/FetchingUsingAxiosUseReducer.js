import React, { useReducer, useEffect } from "react";
import axios from "axios";

// **Note**
// useReducer(reducer,initalState)
// reducer(currentState,action)

const initalState = {
  loading: true,
  posts: [],
  error: '',
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        posts: action.payload,
        error: '',
      };
    case "Error":
      return {
        loading: false,
        posts: [],
        error: "Something went wrong...Please wait.......",
      };
    default:
      return currentState;
  }
};

const FetchingUsingAxiosUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d62630a63ecf47ddb0794932654a7c8b"
      )
      .then((response) => {
        dispatch({
          type: "Success",
          payload: response.data.articles,
        });
      })
      .catch((error) => {
        dispatch({
          type: "Error",
          
        });
      });
  }, []);
  return (
  <div>
<h3>This is GET from Usereducer</h3>
{
    state.loading ? 'Loading..Please wait' : (
        <div>
          { state.posts.map((post,index) => (
            <p key={index}>{post.title}</p>
          ))}
        </div>
    )
    
}
{ 
state.error ? 'Something went error while fetching data' : <p>{state.error}</p>
}
  </div>);
};

export default FetchingUsingAxiosUseReducer;
