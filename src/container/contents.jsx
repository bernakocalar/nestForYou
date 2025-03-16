import React, { useState, useEffect } from "react";

function Contents({ blogPosts, setFavBlogPosts, favBlogPosts }) {
  const [openPost, setOpenPost] = useState(null);

  // Favorilere ekleme işlemi
  const addFavPost = (post) => {
    if (!favBlogPosts.some((favPost) => favPost.title === post.title)) {
      // Yeni postu favorilere ekle
      const updatedFavPosts = [...favBlogPosts, post];
      setFavBlogPosts(updatedFavPosts);

      // Favori postları localStorage'a kaydet
      localStorage.setItem("favBlogPosts", JSON.stringify(updatedFavPosts));
    }
  };

  // LocalStorage'dan favori yazıları al
  useEffect(() => {
    const storedFavPosts = localStorage.getItem("favBlogPosts");
    if (storedFavPosts) {
      setFavBlogPosts(JSON.parse(storedFavPosts));
    }
  }, [setFavBlogPosts]);

  // Blog içeriğini gösterme işlemi
  const toggleContent = (index) => {
    setOpenPost(openPost === index ? null : index);
  };
  return (
    <>
      {/* Blog listesi yalnızca openPost === null olduğunda gösterilecek */}
      {openPost === null ? (
        <div className="grid grid-cols-3 gap-4 mx-2.5 items-stretch	" >
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <div
                className="bg-[#ac734f] rounded-2xl p-2.5 w-1/2  text-center mt-3.5"
                key={index}
              >
                <p>{post.title}</p>
                <button
                  className="bg-[#7e492c] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2
 mr-2.5"
                  onClick={() => toggleContent(index)}
                >
                  OKU
                </button>
                <button
                  className="bg-[#7e492c] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2
 ml-2.5"
                  onClick={() => addFavPost(post)} // Favorilere ekle
                >
                  Favorilere Ekle
                </button>
              </div>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      ) : (
        <div className="flex justify-center h-[80vh] w-[80vw] p-1 mx-[10%]">
          <div className="mx-[25%]">
            <p>{blogPosts[openPost].content}</p>
            <button
              className="bg-[#7e492c] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2
"
              onClick={() => toggleContent(null)}
            >
              KAPAT
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contents;
