import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchingUsingAxiosUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d62630a63ecf47ddb0794932654a7c8b')
      .then(response => {
        setLoading(false);
        setPosts(response.data.articles);
        setError('');
      })
      .catch(error => {
        setLoading(false);
        setPosts([]);
        setError('Something went wrong');
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <h2 className='container'>
        This is useState using Axios
      </h2>
      
      {loading ? 'Loading...' : (
        <div>
          {posts.map((post, index) => (
            <p key={index}>{post.title}</p>
          ))}
        </div>
      )}
      
      {error && <p>{error}</p>}
    </div>
  );
}

export default FetchingUsingAxiosUseState;
