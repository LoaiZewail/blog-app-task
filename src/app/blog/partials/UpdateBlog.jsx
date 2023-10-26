import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBlog } from '../../../redux/blogsSlice';
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const UpdateBlog = (props) => {

    const { toast } = useToast()
    const dispatch = useDispatch();
    const [title, setTitle] = useState(props.blog.title);
    const [body, setBody] = useState(props.blog.body);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    //update blog logic
    const handleUpdate = () => {
        const updatedBlog = {
            ...props.blog,
            title,
            body,
        };
        dispatch(updateBlog(updatedBlog));
        toast({
            className: "bg-slate-900 text-slate-50",
            title: "Updated successfully !",
        })
        props.setIsEdit(false)
    };

    return (
        <Card className="w-[100%] my-3 p-4">
            <Input
                className='my-3'
                type="text"
                value={title}
                onChange={handleTitleChange}
            />
            <Textarea
                className='my-3'
                value={body}
                onChange={handleBodyChange}
            />
            <Button
                variant={"secondary"}
                onClick={() => props.setIsEdit(false)}
            >
                Cancel
            </Button>
            &nbsp;
            <Button
                variant={"default"}
                onClick={handleUpdate}
            >
                Update
            </Button>
        </Card>
    );
};


export default UpdateBlog;
