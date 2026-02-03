import { useState } from "react";
import API from "../api";

export default function CreatePost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  // convert image to base64
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const submit = async () => {
    if (!text && !image) {
      alert("Add text or image");
      return;
    }

    await API.post("/posts", {
      text,
      image
    });

    setText("");
    setImage("");

    window.location.reload();
  };

  return (
    <div className="card shadow-sm mb-3">
    <div className="card-body">
      <h6 className="fw-bold mb-2">Create Post</h6>

      <textarea
        className="form-control mb-2"
        placeholder="Share something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="file"
        className="form-control mb-3"
        accept="image/*"
        onChange={handleImage}
      />

      <button className="btn btn-primary w-100" onClick={submit}>
        Post
      </button>
    </div>
  </div>
);
}
