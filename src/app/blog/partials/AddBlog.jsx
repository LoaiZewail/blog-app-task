import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { createBlog } from '../../../redux/blogsSlice';
import { useDispatch } from 'react-redux';
import { zodResolver } from "@hookform/resolvers/zod"
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const schema = z.object({
    title: z.string().min(1),
    body: z.string().min(1),
});

const AddBlog = (props) => {

    const { toast } = useToast()
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
    });

    //create blog logic
    const onSubmit = (data) => {
        dispatch(createBlog(data));
        toast({
            className: "bg-slate-900 text-slate-50",
            title: "Added successfully !",
        })
        reset();
        props.setIsAdd(false)
    };

    return (
        <Card className="my-3 p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Title:</Label>
                <Input
                    className='my-3'
                    type="text"
                    {...register('title')}
                />
                {errors.title && <p className='text-sm my-3'>{errors.title.message}</p>}
                <Label>Body:</Label>
                <Textarea
                    className='my-3'
                    {...register('body')}
                />
                {errors.body && <p className='text-sm my-3'>{errors.body.message}</p>}
                <Button
                    variant={"secondary"}
                    onClick={() => props.setIsAdd(false)}
                >
                    Cancel
                </Button>
                &nbsp;
                <Button
                    variant={"default"}
                    type="submit"
                >
                    Add
                </Button>
            </form>
        </Card>
    );
};

export default AddBlog;