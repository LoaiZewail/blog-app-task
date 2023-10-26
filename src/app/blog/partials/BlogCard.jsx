import { useState } from 'react';
import { deleteBlog } from '../../../redux/blogsSlice';
import { useDispatch } from 'react-redux';
import UpdateBlog from './UpdateBlog';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useToast } from "@/components/ui/use-toast"

const BlogCard = ({ blog }) => {

    const { toast } = useToast()
    const dispatch = useDispatch();
    const [edit, setIsEdit] = useState(false);

    //delete single blog logic
    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
        toast({
            className: "bg-slate-900 text-slate-50",
            title: "Deleted successfully !",
        })
    };

    return (
        <Card className="w-full my-3 p-4" key={blog.id}>

            <h3 className='text-lg'><i>{blog.title}</i></h3>
            <p className='my-3'>{blog.body}</p>

            <Button
                variant={"default"}
                onClick={() => setIsEdit(true)}
            >
                Edit
            </Button>
            &nbsp;
            <Button
                variant={"destructive"}
                onClick={() => handleDelete(blog.id)}
            >
                Delete
            </Button>

            {edit && <UpdateBlog blog={blog} setIsEdit={(e) => setIsEdit(e)} />}

        </Card>
    );
};

export default BlogCard;
