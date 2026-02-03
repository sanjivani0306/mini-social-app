import { useEffect, useState } from "react";
import API from "../api";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const likePost = async (id) => {
    await API.post(`/posts/like/${id}`);
    fetchPosts();
  };

  const addComment = async (id) => {
    if (!commentText[id]) return;

    await API.post(`/posts/comment/${id}`, {
      text: commentText[id]
    });

    setCommentText({ ...commentText, [id]: "" });
    fetchPosts();
  };

  return (
    <div>
  {posts.map((p) => (
    <div key={p._id} className="card shadow-sm mb-3 border-0">
      <div className="card-body">

        {/* USER HEADER */}
        <div className="d-flex align-items-center mb-2">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#0d6efd",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              marginRight: "10px"
            }}
          >
            {p.username?.charAt(0).toUpperCase()}
          </div>

          <strong>{p.username}</strong>
        </div>

        {/* TEXT */}
        <p>{p.text}</p>

        {/* IMAGE */}
        {p.image && (
          <img
            src={p.image}
            alt="post"
            style={{
              width: "100%",
              borderRadius: "10px",
              maxHeight: "350px",
              objectFit: "cover"
            }}
          />
        )}

        {/* ACTIONS */}
        <div className="mt-3">
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => likePost(p._id)}
          >
            👍 Like ({p.likes.length})
          </button>

          <span className="text-muted">
            💬 {p.comments.length} comments
          </span>
        </div>

        {/* COMMENTS LIST */}
        <div className="mt-3">
          {p.comments.map((c, i) => (
            <div key={i} className="mb-1">
              <strong>{c.username}: </strong>
              {c.text}
            </div>
          ))}

          <input
            className="form-control mt-2"
            placeholder="Write a comment..."
            value={commentText[p._id] || ""}
            onChange={(e) =>
              setCommentText({
                ...commentText,
                [p._id]: e.target.value
              })
            }
          />

          <button
            className="btn btn-sm btn-dark mt-2"
            onClick={() => addComment(p._id)}
          >
            Comment
          </button>
        </div>

      </div>
    </div>
  ))}
</div>

  );
}

