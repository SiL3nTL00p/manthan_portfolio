
const BLOGS = [
    {
        slug: "redis-as-a-beginner",
        title: "Redis: As a beginner",
        date: "2025-09-24",
        url: "https://medium.com/@manthan/redis-beginner"
    }
];

const Blogs = () => {
    const sortedBlogs = [...BLOGS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="min-h-screen bg-[#111111] text-white font-sfmono py-24 px-5 md:px-20 max-w-5xl mx-auto">
            <div className="mb-12">
                <h2 className="text-base text-gray-500 mb-8 uppercase tracking-widest">
                    // blog posts
                </h2>
                <div className="bg-[#111111] rounded-md p-6 border border-white/10 shadow-sm shadow-white/5">
                    {/* Terminal Header */}
                    <div className="mb-6 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded bg-red-500/80 inline-block"></span>
                        <span className="h-2.5 w-2.5 rounded bg-yellow-500/80 inline-block"></span>
                        <span className="h-2.5 w-2.5 rounded bg-green-500/80 inline-block"></span>
                        <span className="ml-3 text-gray-400 text-xs">manthan@portfolio:~/blogs$</span>
                    </div>

                    {/* Blog List */}
                    <div className="space-y-6">
                        {sortedBlogs.map((blog, idx) => (
                            <a
                                key={blog.slug}
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group hover:opacity-100 transition-all"
                                style={{ textDecoration: "none" }}
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500/70 text-sm group-hover:text-green-400 transition-colors">→</span>
                                        <span className="text-gray-200 group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)] transition-all">
                                            {blog.title}
                                        </span>
                                    </div>
                                    <div className="pl-4 text-xs text-gray-500">
                                        {blog.date}
                                    </div>
                                </div>
                                {idx !== sortedBlogs.length - 1 && (
                                    <div className="border-b border-white/10 my-3" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Terminal Prompt */}
                    <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
                        <span>manthan@portfolio:~/blogs$</span>
                        <span className="w-1.5 h-5 bg-green-500/60 animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
