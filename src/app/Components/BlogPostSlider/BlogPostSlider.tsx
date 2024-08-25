"use client";

import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
// Swiper modules
SwiperCore.use([Pagination, Navigation]);

type BlogPost = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "First Blog Post",
    image: "https://th.bing.com/th/id/OIP.R7z0N-obhj3wnZKio9AERQHaGk?w=213&h=189&c=7&r=0&o=5&pid=1.7",
    excerpt: "This is the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    image: "https://th.bing.com/th/id/OIP.R7z0N-obhj3wnZKio9AERQHaGk?w=213&h=189&c=7&r=0&o=5&pid=1.7",
    excerpt: "This is the second blog post.",
  },
  {
    id: 3,
    title: "Third Blog Post",
    image: "https://th.bing.com/th/id/OIP.R7z0N-obhj3wnZKio9AERQHaGk?w=213&h=189&c=7&r=0&o=5&pid=1.7",
    excerpt: "This is the third blog post.",
  },
  {
    id: 4,
    title: "Fourth Blog Post",
    image: "https://th.bing.com/th/id/OIP.R7z0N-obhj3wnZKio9AERQHaGk?w=213&h=189&c=7&r=0&o=5&pid=1.7",
    excerpt: "This is the fourth blog post.",
  },
  {
    id: 5,
    title: "Fifth Blog Post",
    image: "/images/blog5.jpg",
    excerpt: "This is the fifth blog post.",
  },
];

const BlogPostSlider = () => {
  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <Card sx={{ minWidth: 280 }}>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BlogPostSlider;