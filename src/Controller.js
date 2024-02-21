const token = 'dbc13ef375510399c0faa3242caa2f57d7b6fbb1f7cad7a8b1c14b8a46a2a56a';

export const getAllBlogs = async function() {
    try {
        const response = await fetch('https://api.blog.redberryinternship.ge/api/blogs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if(!response.ok) {
            throw new Error('Failed to get Blogs');
        }

        const allBlogsData = await response.json();
        console.log(allBlogsData);
        return allBlogsData;
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}

export const getAllCategories = async function() {
    try {
        const response = await fetch('https://api.blog.redberryinternship.ge/api/categories', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if(!response.ok) {
            throw new Error('Failed to get Categories');
        }

        const allCategoriesData= await response.json();
        console.log(allCategoriesData);
        return allCategoriesData;
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}


