"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LoadingBarComponent from "@/components/LoadingBarComponent";

export default function BlogPage() {
  let progress = 0;
  const [blogs, setBlogs] = useState([]); // All blogs from API
  const [visibleBlogs, setVisibleBlogs] = useState([]); // Blogs currently shown
  const [loading, setLoading] = useState(true); // Show spinner initially
  const [loadingMore, setLoadingMore] = useState(false); // Spinner for infinite scroll
  const [page, setPage] = useState(1); // Page count
  const loadMoreTrigger = useRef(null);
 progress=40;
  useEffect(() => {
    // Fetch all blogs once on initial load
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setVisibleBlogs(data.slice(0, 9)); // Load first 9 blogs
        setLoading(false); // Hide initial spinner
      })
      .catch(() => setLoading(false)); // Ensure it hides even on error
    }, []);
    progress=100;

  // Infinite Scroll Effect
  useEffect(() => {
    if (!blogs.length || visibleBlogs.length >= blogs.length) return; // Stop if all blogs are loaded

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore) {
          loadMore();
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (loadMoreTrigger.current) observer.observe(loadMoreTrigger.current);

    return () => observer.disconnect();
  }, [visibleBlogs, blogs, loadingMore]);

  // Load More Blogs
  const loadMore = () => {
    if (loadingMore || visibleBlogs.length >= blogs.length) return; // Stop if already loading or all blogs are loaded

    setLoadingMore(true);

    setTimeout(() => {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        const newBlogs = blogs.slice(0, nextPage * 9); // Load 9 more blogs

        setVisibleBlogs(newBlogs);
        setLoadingMore(false);
        return nextPage;
      });
    }, 1000);
  };

  return (
    <main className="p-6">
          <LoadingBarComponent progress={progress} />
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>

      {/* Show Spinner Initially When Loading */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}

      {/* Blog List (Only Show When Not Initially Loading) */}
      {!loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleBlogs.map((blog) => (
              <div key={blog.slug} className="p-4 border rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <Link href={`/blog/${blog.slug}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Infinite Scroll Spinner (Only if More Blogs Exist) */}
          {loadingMore && visibleBlogs.length < blogs.length && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            </div>
          )}

          {/* Infinite Scroll Trigger */}
          <div ref={loadMoreTrigger} className="h-10 mt-10"></div>
        </>
      )}
    </main>
  );
}
