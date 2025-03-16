import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function NewContent({ blogPosts, setBlogPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // LocalStorage'dan blogPosts'u al
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, [setBlogPosts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const updatedPosts = [...blogPosts, newPost];

    setBlogPosts(updatedPosts); // Yeni yazıyı state'e ekle

    // Yeni blog postlarını localStorage'a kaydet
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

    setTitle("");
    setContent("");
    navigate("/contents"); // Blog listesinin olduğu sayfaya yönlendir
  };

  return (
    <div className="new-content w-4/5 mx-auto pt-8">
      <h2 className="text-center text-2xl mb-4">Yeni Yazı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg mb-2">
            Başlık
          </label>
          <input
            id="title"
            type="text"
            placeholder="Yazınızın başlığını buraya girin"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-lg mb-2">
            Yazı İçeriği
          </label>
          <textarea
            id="content"
            placeholder="Yazınızın içeriğini buraya yazın"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="8"
          />
        </div>

        <button
          type="submit"
          className="bg-[#7e492c] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2
"
        >
          Yazıyı Gönder
        </button>
      </form>
    </div>
  );
}

export default NewContent;
