import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, Save, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { LoadingScreen } from '../components/LoadingScreen';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string;
  category: string;
  created_at: string;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState({
    title: '',
    content: '',
    image_url: '',
    category: ''
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return;
    }

    setPosts(data || []);
    setIsLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    
    if (isEditing) {
      const { error } = await supabase
        .from('blog_posts')
        .update(currentPost)
        .eq('id', currentPost.id);

      if (error) {
        console.error('Error updating post:', error);
        return;
      }
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert([currentPost]);

      if (error) {
        console.error('Error creating post:', error);
        return;
      }
    }

    setCurrentPost({ title: '', content: '', image_url: '', category: '' });
    setIsEditing(false);
    await fetchPosts();
  }

  async function handleDelete(id: string) {
    setIsLoading(true);
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
      return;
    }

    await fetchPosts();
  }

  function handleEdit(post: BlogPost) {
    setCurrentPost(post);
    setIsEditing(true);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Admin</h1>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-[#c470f2] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#b35deb] transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            New Post
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#271043] p-6 rounded-lg mb-8">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={currentPost.title}
                onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                className="w-full bg-[#1a0b2e] border border-[#c470f2] rounded-lg px-4 py-2 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                value={currentPost.category}
                onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                className="w-full bg-[#1a0b2e] border border-[#c470f2] rounded-lg px-4 py-2 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                value={currentPost.image_url}
                onChange={(e) => setCurrentPost({ ...currentPost, image_url: e.target.value })}
                className="w-full bg-[#1a0b2e] border border-[#c470f2] rounded-lg px-4 py-2 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                value={currentPost.content}
                onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                className="w-full bg-[#1a0b2e] border border-[#c470f2] rounded-lg px-4 py-2 text-white h-32"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setCurrentPost({ title: '', content: '', image_url: '', category: '' });
                  setIsEditing(false);
                }}
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <X className="h-5 w-5" />
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#c470f2] text-white px-4 py-2 rounded-lg hover:bg-[#b35deb] transition-colors flex items-center gap-2"
              >
                <Save className="h-5 w-5" />
                {isEditing ? 'Update' : 'Create'} Post
              </button>
            </div>
          </div>
        </form>

        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#271043] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-[#c470f2] text-sm">{post.category}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 rounded-lg hover:bg-[#1a0b2e] transition-colors"
                  >
                    <Edit className="h-5 w-5 text-[#c470f2]" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 rounded-lg hover:bg-[#1a0b2e] transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
              <p className="text-gray-300 line-clamp-2">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}