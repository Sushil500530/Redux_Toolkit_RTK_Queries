import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),
    endpoints : (builder)=>({
        getPosts: builder.query({
            query:()=>'/photos'
        }),
        getPhotosById : builder.query({
            query: (id) => `/photos/${id}`,
        }),
        setPhotos: builder.mutation({
            query:(post)=>({
                url:'photos',
                method: 'POST',
                body:{post} // backend e data je type a pathabo sevabe akhane data sajai nibo......
            })
        })
    }),
});

export const {useGetPostsQuery, useGetPhotosByIdQuery, useSetPhotosMutation} = baseApi;

export default baseApi;
