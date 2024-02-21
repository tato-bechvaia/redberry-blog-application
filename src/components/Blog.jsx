/* eslint-disable react/prop-types */
import './Blog.css';

export const Blog = ({blog}) => {
  return (
    <>
        <div className="blog">
            <img className='blog-image' width='408px' height='328px' src={blog?.image} alt="" />
            <div className="blog-author">
                {blog?.author}
            </div>
            <div className="blog-publish-date">
                {blog?.publish_date}
            </div>
            <div className="blog-categories">
                nothing just for now
            </div>  
            <div className="blog-description">
                {blog?.description}
            </div>
            <div className="view-full-blog-button">
                სრულად ნახვა
            </div>
        </div>
    </>
  )
}
