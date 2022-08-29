import React, { useState, useEffect } from 'react';
import { BlogWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Blogs.scss';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';




const Blogs = () => {
  
  const [blogs, setBlogs] = useState([]);

 
  


  useEffect(() => {
    const query = '*[_type == "blogs"]';
    

    client.fetch(query).then((data) => {
      setBlogs(data);
    });

  }, []);

  return (
    <>
    <h2 className="head-text">Best way to <span>Learn</span> is to <span>Write</span></h2>
    <h2 className="head-text"> <span>#iwriteblog</span>
    </h2>

    <Swiper
        navigation={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
        autoplay={true}
      >

        <div className="app__flex">

        {
  blogs.map((blog) => (
    <SwiperSlide>
    <a href={blog.link} target="_blank" className="app__blog-item">
           
           <div
             className="app__blog-img app__flex"
           >
             <img src={urlFor(blog.imgurl)} alt={blog.title} />
           </div>
           <div className="app__blog-content app__flex">
             <h2 className="head-text">{blog.title}</h2>
             <p className="p-text" style={{ marginTop: 10 }}>{blog.description}</p>
             <div className="app__flex author__data">
               <img src={urlFor(blog.authorImg)} alt="" className="profile__img" />
                <h4 className="bold-text">{blog.author}</h4>
             </div>
           </div>
       </a>

</SwiperSlide>
  ))

}
        </div>
    
      </Swiper>
        </>

  );
};

export default BlogWrap(MotionWrap(Blogs, 'app__works blogs__container'),'blogs');
 

