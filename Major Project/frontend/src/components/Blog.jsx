import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Maximizing Tax Savings for the Financial Year",
      description: "Learn the best tax-saving strategies to help you optimize your tax returns and maximize deductions.",
      date: "October 15, 2024",
    },
    {
      id: 2,
      title: "Understanding the New vs Old Tax Regime",
      description: "A detailed comparison of the new and old tax regimes to help you make an informed decision.",
      date: "September 28, 2024",
    },
    {
      id: 3,
      title: "Top 10 Deductions Every Taxpayer Should Know",
      description: "A guide to the top tax deductions that can help reduce your tax liability significantly.",
      date: "September 10, 2024",
    },
    // Add more posts as needed
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
