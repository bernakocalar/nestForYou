import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Contents from "./container/contents";
import NewContent from "./container/newContent";
import MainPage from "./container/mainPage";
import FavContent from "./container/favContents";
import Signing from "./container/signing";

function Example() {
  const [blogPosts, setBlogPosts] = useState([]); 
  const [favBlogPosts, setFavBlogPosts] = useState([])
 useEffect(() => {
    fetch("/posts.json") // Public klasöründeki JSON dosyasını alır
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return (
  
    <div>
      <section className="w-full bg-gradient-to-r from-[#eacab1] to-[#e2a27d] shadow-md">
  <nav className="flex justify-between items-center gap-12 p-6 text-[#4b2e1e] italic max-w-7xl mx-auto">
    <Link to="/" className="text-[#4b2e1e] no-underline text-3xl text-center transition-colors hover:text-[#8b5e3b]">
      Ana Sayfa
    </Link>
    <Link to="/contents" className="text-[#4b2e1e] no-underline text-3xl text-center transition-colors hover:text-[#8b5e3b]">
      İçerikler
    </Link>
    <Link to="/favContents" className="text-[#4b2e1e] no-underline text-3xl text-center transition-colors hover:text-[#8b5e3b]">
      MyNest
    </Link>
    <Link to="/newContent" className="text-[#4b2e1e] no-underline text-3xl text-center transition-colors hover:text-[#8b5e3b]">
      Yeni İçerik
    </Link>
    <Link
  to="/signing"
  className="bg-[#76503c] text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#6c5446] transition-all duration-300 text-xl text-center"
>
  Giriş Yap
</Link>

  </nav>
</section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contents" element={<Contents blogPosts={blogPosts}  setFavBlogPosts={setFavBlogPosts} favBlogPosts={favBlogPosts}/>} />
        <Route path="/newContent" element={<NewContent blogPosts={blogPosts} setBlogPosts={setBlogPosts} />} />
        <Route path="/favContents" element={<FavContent blogPosts={blogPosts} setFavBlogPosts={setFavBlogPosts} favBlogPosts={favBlogPosts}/>}/>
        <Route path="/signing" element = {<Signing />}/>
      </Routes>


      <div className="flex flex-col min-h-screen">
  {/* Diğer içerikler */}
  
  <footer className="w-full bg-gradient-to-r from-[#833e0a] to-[#d8b39d] shadow-md mt-auto">
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-[#4b2e1e] italic">
        {/* Kolon 1 */}
        <div>
          <h2 className="text-2xl font-semibold">Başlık 1</h2>
          <p className="mt-2">Buraya içerik ekleyebilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        {/* Kolon 2 */}
        <div>
          <h2 className="text-2xl font-semibold">Başlık 2</h2>
          <p className="mt-2">Buraya içerik ekleyebilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Kolon 3 */}
        <div>
          <h2 className="text-2xl font-semibold">Başlık 3</h2>
          <p className="mt-2">Buraya içerik ekleyebilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Kolon 4 */}
        <div>
          <h2 className="text-2xl font-semibold">Başlık 4</h2>
          <p className="mt-2">Buraya içerik ekleyebilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}

export default Example;
