import React from 'react';

const Post = ({ params }) => {

   const { id } = params;

   return (
      <h1>Post Individual: {id}</h1>
   )
}

export default Post