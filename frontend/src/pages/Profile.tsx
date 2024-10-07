import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';
import { Blog } from '../hooks';
import BlogCard from '../components/BlogCard';
import AppBar from '../components/AppBar';
import BlogSketon from '../components/BlogSketon';

const Profile = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/user/33`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blog);
                setloading(false)
            })
            .catch(error => {
                console.error("Error fetching blogs", error);
            });
    }, []);


    if (loading) {
        return <div>
          <div>
            <AppBar/>
          </div>
          <div className="flex justify-center mt-5">
              <div>
               <BlogSketon/>
               <BlogSketon/>
    
               <BlogSketon/>
    
              </div>
          </div>
          </div>      
      }

    return (
        <div>
        <AppBar/>
        <div className='flex justify-center mt-5'>
            {blogs.length > 0 ? (
                blogs.map(blog => {
                    // Parse the content if it is a JSON string
                    let parsedContent;
                    try {
                        parsedContent = JSON.parse(blog.content); // Parse JSON
                    } catch (e) {
                        parsedContent = blog.content; // Fallback to raw content if parsing fails
                    }

                    // Assuming that the content contains blocks of text you want to display
                    const contentBlocks = Array.isArray(parsedContent.blocks) ? parsedContent.blocks : [];

                    return (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author?.name || "Anonymous"}
                            title={blog.title}
                            // You may want to customize how you display content blocks
                            content={contentBlocks.map((block: { data: { text: any; }; }) => block.data.text).join(' ')} // Concatenate all the block text
                            publishedDate={"2nd Feb 2024"} // Add actual date logic if needed
                        />
                    );
                })
            ) : (
                <div>No blogs found</div>
            )}
            </div>
        </div>
    );
};

export default Profile;
