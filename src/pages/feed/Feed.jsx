import { useForm } from "react-hook-form";
import { useGetPhotosByIdQuery, useGetPostsQuery } from "../../redux/features/api/baseApi";
const Feed = () => {
    const { register, handleSubmit } = useForm();
    // const { data, isLoading, isError } = useGetPostsQuery(); // return object
    const { data: item, isLoading, isError } = useGetPhotosByIdQuery(3);
    // const items = data?.slice(0, 50);
    console.log(item);
    if (isLoading) {
        return <p className="text-4xl font-medium text-center my-10 text-fuchsia-600">Loading....</p>
    }
    if (!isLoading & isError) {
        return <p className="text-4xl font-medium text-center my-10 text-fuchsia-600">something went wrong!</p>
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="container mx-auto">
         
        </div>
    );
};

export default Feed;