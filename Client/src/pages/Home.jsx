import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-lg text-teal-600 font-semibold mt-6 inline-block hover:underline"
        >
          View all posts
        </Link>
      </div>

      {posts && posts.length > 0 && (
        <div className="recent-posts">
          <h2 className="text-3xl font-semibold text-center mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/search"
              className="text-lg text-teal-600 hover:underline"
            >
              View all posts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
