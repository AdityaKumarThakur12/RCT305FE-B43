import React, { useState, useEffect, useCallback, useMemo } from "react";

const Post = React.memo(({ id, title, body, verifyPost, toggleVerify }) => {
  const backgroundColor = useMemo(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`, []);

  return (
    <div style={{ backgroundColor, padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => toggleVerify(id)}>
        {verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addPost = () => {
    if (title.trim() && body.trim()) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), title, body, verifyPost: false },
      ]);
      setTitle("");
      setBody("");
    }
  };

  const toggleVerify = useCallback((id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div>
      <h1>Timer: {timer}s</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            verifyPost={post.verifyPost}
            toggleVerify={toggleVerify}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
