import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../redux/blogsSlice';
import BlogCard from './BlogCard';
import AddBlog from './AddBlog';
import { Loader } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BlogList = () => {

    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.data);
    const status = useSelector((state) => state.blogs.status);

    const [searchTerm, setSearchTerm] = useState('');
    const [add, setIsAdd] = useState(false);

    //fetch blogs list
    useEffect(() => {
        dispatch(fetchBlogs({ _limit: 10 }));
    }, []);

    //search and filter logic
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBlogs = blogs.filter((blog) => {
        const { title = '', author = '' } = blog;
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            title.toLowerCase().includes(searchTermLowerCase) ||
            author.toLowerCase().includes(searchTermLowerCase)
        );
    });

    return (
        <>
            {
                status != 'succeeded' ?
                    <div className="flex h-[80vh] flex-col items-center justify-center center"><Loader /></div>
                    :
                    <div className='w-full flex-col justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>

                        <Button className='my-3' onClick={() => setIsAdd(true)}>Add blog</Button>
                        {add &&
                            <div className='w-full'>
                                <AddBlog setIsAdd={(e) => setIsAdd(e)} />
                            </div>
                        }

                        <div className='block w-full'>
                            <Label>Search :</Label>
                            <Input
                                className='my-3'
                                type="text"
                                placeholder="Search by title or body ..."
                                onChange={handleSearch}
                            />
                        </div>

                        {filteredBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}

                        {searchTerm != "" && filteredBlogs.length === 0 && <div>No results found !</div>}
                    </div>
            }
        </>
    );
};

export default BlogList;