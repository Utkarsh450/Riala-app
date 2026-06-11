import BlogHeader from "../../Blog/BlogHeader";
import BlogSidebar from "../../Blog/BlogSidebar";
import BlogGrid from "../../Blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BlogHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile: sidebar collapsible ke liye stack, Desktop: side-by-side */}
        <div className="flex flex-col lg:flex-row gap-8">
          <BlogSidebar />
          <BlogGrid />
        </div>
      </div>
    </main>
  );
}