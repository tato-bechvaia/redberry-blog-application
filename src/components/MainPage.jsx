import { useEffect, useState } from "react"
import { getAllBlogs } from "../Controller";
import { Blog } from "./Blog"
import LoadingSpinner from './LoadingSpinner';

import './MainPage.css';


export const MainPage = () => {

    const [blogs, setBlogs] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogsData = await getAllBlogs();
                if(blogsData) {
                    setBlogs(blogsData?.data);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="main-page">
                {blogs ? blogs?.map(blog => 
                <div className="blog-container" key={blog?.id}>{<Blog blog={blog}/>}</div>) : <LoadingSpinner/>}
            </div>
        </>
    )
}
