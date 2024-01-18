import { useForm } from "react-hook-form";
import { useGetPhotosByIdQuery, useGetPostsQuery, useSetPhotosMutation } from "../../redux/features/api/baseApi";
const Feed = () => {
    const { register, handleSubmit } = useForm();
    // const { data, isLoading, isError } = useGetPostsQuery(); // return object
    const { data: item, isLoading, isError } = useGetPhotosByIdQuery(3);
    const [setPhotos, {data:items}] = useSetPhotosMutation();
    // const items = data?.slice(0, 50);
    console.log(items);
    if (isLoading) {
        return <p className="text-4xl font-medium text-center my-10 text-fuchsia-600">Loading....</p>
    }
    if (!isLoading & isError) {
        return <p className="text-4xl font-medium text-center my-10 text-fuchsia-600">something went wrong!</p>
    }

    const onSubmit = (data) => {
       setPhotos({title:'this is photos name', body:data?.search, userId:2451});
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center my-5"> Your Feed is Here!</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full px-3">
                    <div className="relative w-full">
                        <label className="block tracking-wide text-gray-700 text-xl font-bold mb-2" >
                            Find Here....
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 relative text-gray-700 border border-gray-200 rounded py-[14px] px-4 pr-24 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name="search" type="search" {...register("search")} placeholder="search here....." />
                        <button className="text-[17px] font-medium bg-lime-700 text-white px-4 py-2 rounded hover:bg-lime-600 absolute right-1 top-10 ">Search</button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
                {/* {
                    items?.map(item => */}
                <div key={item?.id}>
                    <div className="w-full h-[250px]">
                        <img src={item?.thumbnailUrl} className="w-full h-full rounded cursor-pointer hover:bg-slate-500" alt="image" />
                    </div>
                    <h1 className="text-xl font-bold text-center mt-3">{item?.title}</h1>
                </div>
                {/* )
                } */}
            </div>
        </div>
    );
};

export default Feed;