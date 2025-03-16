import { useState } from "react";

function FavContent({ blogPosts, favBlogPosts, setFavBlogPosts }) {
  const [openPost, setOpenPost] = useState(null);

  const toggleContent = (index) => {
    setOpenPost(openPost === index ? null : index);
  };

  const removeFromFavorites = (index) => {
    const updatedFavPosts = favBlogPosts.filter((_, i) => i !== index);
    setFavBlogPosts(updatedFavPosts);  // state güncelleniyor
  };

  return (
    <>
      {/* Blog listesi yalnızca openPost === null olduğunda gösterilecek */}
      {openPost === null ? (
        <div className="flex gap-4">
          {favBlogPosts && favBlogPosts.length > 0 ? (
            favBlogPosts.map((post, index) => (
              <div className="bg-[#ac734f] rounded-2xl p-2.5 w-1/2 gap-20 flex" key={index}>
                <p>{post.title}</p>
                <button
                  className="bg-[#4b2e1e] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2"
                  onClick={() => toggleContent(index)}
                >
                  OKU
                </button>
                {/* Favorilerden çıkar butonu */}
                <button
                  className="bg-[#4b2e1e] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2"
                  onClick={() => removeFromFavorites(index)}
                >
                  FAVORİLERDEN ÇIKAR
                </button>
              </div>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      ) : (
        <div className="content-overlay">
          <div className="content-box">
            <p>{favBlogPosts[openPost].content}</p>
            <button
              className="bg-[#4b2e1e] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 transform active:translate-y-2"
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

export default FavContent;
