import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogs } from "../Data/blogData"; // Pastikan path benar

import BreadCrumbs from "../Components/Common/BreadCrumbs"; // Sesuaikan path komponen

const BlogDetailPage = () => {
  const { id } = useParams();

  // 1. Cari blog aktif
  const blog = blogs.find((b) => b.id === Number(id));

  // 2. Blog Terkait (Related)
  const relatedBlogs = blogs.filter((b) => b.id !== Number(id)).slice(0, 3);

  // 3. Scroll ke atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 4. Handle Not Found
  if (!blog) {
    return <Navigate to="/" replace />;
  }
  // --- FUNGSI HELPER UNTUK RENDER KONTEN (INI YANG SEBELUMNYA KOSONG) ---
  const renderContent = (contentData) => {
    if (!contentData) return null;

    return contentData.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className=" mb-6! paragraph-blog text-gray-300 leading-normal md:leading-relaxed">
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h3 key={index} className="text-2xl font-bold text-white mt-8! mb-4!">
              {block.text}
            </h3>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-[var(--primary-color)] step-desc pl-4 italic my-8! text-white bg-white/5 p-4! rounded-r-lg"
            >
              "{block.text}"
            </blockquote>
          );
        case "list":
          return (
            <ul
              key={index}
              className="list-disc pl-5! space-y-2! mb-6! text-gray-300"
            >
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  // 4. Handle Not Found
  if (!blog) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="blog-detail-section pt-20! md:pt-32! pb-10 md:pb-20!  md:px-8 bg-[var(--bg-dark)] min-h-screen">
      {/* Container dibuat lebih sempit (max-w-4xl) agar enak dibaca mata (tidak terlalu lebar) */}
      <div className="container mx-auto max-w-4xl">
        <BreadCrumbs />

        {/* --- ARTICLE CARD (SATU KOLOM PENUH) --- */}
        <article className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {/* 1. GAMBAR UTAMA (Full Width) */}
          <div className="w-full h-auto md:h-[300px] md:h-[500px] relative group overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent opacity-80"></div>

            {/* Kategori Badge di atas gambar */}
            <div className="absolute top-3 left-3 md:top-6 md:left-6">
              <span className="bg-[var(--primary-color)] text-dark px-4! py-1! rounded-full text-sm font-bold shadow-lg">
                {blog.category}
              </span>
            </div>
          </div>

          {/* 2. KONTEN ARTIKEL */}
          <div className="p-3! md:p-12! relative z-10">
            {/* Header Info */}
            <div className="mb-4! md:mb-8! text-center md:text-left border-b border-white/10 pb-8!">
              <h1 className="text-2xl flex text-start md:text-5xl font-bold text-white mb-6! leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3! md:gap-6! text-gray-400 text-sm">
                <div className="flex items-center gap-2!">
                  <i className="bx bx-user text-[var(--primary-color)] text-lg"></i>
                  <span>Effort.Dong</span>
                </div>
                <div className="flex items-center gap-2!">
                  <i className="bx bx-calendar text-[var(--primary-color)] text-lg"></i>
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2!">
                  <i className="bx bx-time text-[var(--primary-color)] text-lg"></i>
                  <span>5 Menit Baca</span>
                </div>
              </div>
            </div>

            {/* Isi Teks (Typography) */}
            <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed">
              <h2 className="text-2xl md:text-4xl leading-normal md:leading-relaxed font-medium text-white mb-8!">
                {blog.desc}
              </h2>

              {/* Render Konten dari Data JS */}
              {blog.content ? (
                renderContent(blog.content)
              ) : (
                <p className="text-gray-400 italic">
                  Konten artikel sedang ditulis...
                </p>
              )}

              <div className="my-8! p-6! bg-white/5 rounded-xl border-l-4 border-[var(--primary-color)]">
                <h4 className="text-white font-bold text-lg mb-2!">
                  💡 Tips Penting:
                </h4>
                <p className="italic paragraph-blog text-gray-300 m-0">
                  "Effort itu bukan tentang seberapa mahal harganya, tapi
                  seberapa tulus niatnya."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mt-8! mb-4!">
                Kenapa Harus Sekarang?
              </h3>
              <p>
                Jangan menunggu momen spesial untuk memberikan kejutan. Website
                ucapan dari Y-Cardify bisa menjadi arsip kenangan digital yang
                abadi selamanya di internet.
              </p>
            </div>

            {/* Call to Action (CTA) Box */}
            <div className="mt-12! p-8! rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-dark text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-2!">
                Tertarik Bikin Website Seperti Ini?
              </h3>
              <p className="text-white/80 mb-6!">
                Pesan sekarang dan buat dia terkesan hari ini juga.
              </p>
              <a
                href="/#products"
                className="inline-block bg-white text-dark! px-8! py-3! rounded-full font-bold hover:bg-gray-100 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Lihat Katalog Desain
              </a>
            </div>
          </div>
        </article>

        {/* --- BAGIAN BAWAH: BACA JUGA (Related) --- */}
        {relatedBlogs.length > 0 && (
          <div className="related-blogs my-10! md:my-20!">
            <h3 className="text-2xl font-bold text-white mb-8! border-l-4 border-[var(--primary-color)] pl-4!">
              Baca Artikel Lainnya
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6!">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="group block bg-[var(--bg-card)] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--primary-color)] transition-all duration-300"
                >
                  <div className="h-48! overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5!">
                    <span className="text-xs text-[var(--primary-color)] font-bold uppercase tracking-wider mb-2! block">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2! group-hover:text-[var(--primary-color)] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};;


export default BlogDetailPage;
