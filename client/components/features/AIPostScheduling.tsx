import { useState } from 'react';
import { Calendar, Clock, Plus, Trash2 } from 'lucide-react';

interface ScheduledPost {
  id: string;
  title: string;
  date: string;
  time: string;
  status: 'posted' | 'scheduled' | 'pending';
  engagement: number;
}

export default function AIPostScheduling() {
  const [posts, setPosts] = useState<ScheduledPost[]>([
    {
      id: '1',
      title: 'Summer Collection Launch',
      date: '2024-02-20',
      time: '10:30 AM',
      status: 'posted',
      engagement: 1250,
    },
    {
      id: '2',
      title: 'New Product Announcement',
      date: '2024-02-25',
      time: '2:00 PM',
      status: 'scheduled',
      engagement: 0,
    },
  ]);

  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    date: '',
    time: '',
  });

  const handleAddPost = () => {
    if (newPost.title && newPost.date && newPost.time) {
      setPosts([
        ...posts,
        {
          id: String(posts.length + 1),
          title: newPost.title,
          date: newPost.date,
          time: newPost.time,
          status: 'pending',
          engagement: 0,
        },
      ]);
      setNewPost({ title: '', date: '', time: '' });
      setShowNewPost(false);
    }
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const statusColors = {
    posted: 'bg-green-100 text-green-700',
    scheduled: 'bg-blue-100 text-blue-700',
    pending: 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Instagram Post Scheduling
        </h3>
        <button
          onClick={() => setShowNewPost(!showNewPost)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      {/* Add New Post Form */}
      {showNewPost && (
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="space-y-4">
            <input
              type="text"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              placeholder="Post title / description"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={newPost.date}
                onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="time"
                value={newPost.time}
                onChange={(e) => setNewPost({ ...newPost, time: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={handleAddPost}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Schedule Post
            </button>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-gray-800">{post.title}</h4>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full capitalize ${statusColors[post.status]}`}>
                    {post.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.time}
                  </div>
                  {post.status === 'posted' && (
                    <div className="text-purple-600 font-semibold">
                      {post.engagement.toLocaleString()} engagements
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => deletePost(post.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <Calendar className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <p className="text-gray-600">No scheduled posts yet. Create one to get started!</p>
        </div>
      )}
    </div>
  );
}
