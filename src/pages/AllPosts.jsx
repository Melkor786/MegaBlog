import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getPosts().then((fetchedPosts) => {
      if (fetchedPosts) {
        setPosts(fetchedPosts.documents);
      }
    });
  }, []);

  // Filter posts written by the authenticated user
  const userPosts = posts.filter(post => post.userId === userData.$id);
  
  if (userPosts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {userPosts.map(post => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
