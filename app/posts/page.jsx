async function getData(){
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   return res.json()
}

export default async function PostPage() {

   const posts = await getData();

   return (
      <section>
         {posts.map(post => (
            <article key={post.id}>
               <h2>{post.title}</h2>
               <p>{post.body}</p>
            </article>
         ))}
      </section>
   )
}

// export default PostPage