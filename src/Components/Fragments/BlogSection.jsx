import { useState} from "react";
import { blogs } from "../../Data/blogData";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const handleLoadMore = () => {
    setVisibleBlogs((prevValue) => prevValue + 6);
  }

  return (
    <section className="blog section" id="blog">
      <div className="container">
        {/* Judul Section */}
        <div className="section-title">
          <h2 className="text-seccondary!" data-aos="fade-up">
            Cerita & Inspirasi
          </h2>
          <p
            className="text-seccondary!"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Baca tips hubungan biar effort kamu makin dihargai dia.
          </p>
        </div>

        {/* Grid Blog */}
        <div className="blog-grid">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <div
              key={blog.id}
              className="blog-wrapper "
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* CARD ASLI untuk Hover */}
              <article className="blog-card">
                <Link to={`/blog/${blog.id}`}>
                  {/* Gambar & Kategori */}
                  <div className="blog-img-box">
                    <img loading="lazy" src={blog.image} alt={blog.title} />
                    <span className="blog-badge">{blog.category}</span>
                  </div>

                  {/* Konten Text */}
                  <div className="blog-content">
                    <span className="blog-date">
                      <i className="bx bx-calendar"></i> {blog.date}
                    </span>

                    <h3 className="blog-title">
                      {/* Ganti href jadi Link to */}
                      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h3>

                    <p className="blog-desc">{blog.desc}</p>

                    <span className="blog-btn">
                      Baca Selengkapnya{" "}
                      <svg
                        className="w-5.5 pt-1! group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>
        {visibleBlogs < blogs.length && (
          <div className="text-center my-12!">
            <button
              onClick={handleLoadMore}
              className="group relative inline-flex items-center gap-2! px-8! py-3! bg-[var(--bg-card)] text-white border border-white/10 rounded-full font-semibold hover:bg-[var(--primary-color)] hover:border-transparent hover:text-dark transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_var(--primary-color)]"
            >
              <span>Lihat Artikel Lainnya</span>
              <i className="bx bx-chevron-down text-xl group-hover:translate-y-1 transition-transform"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
