import {PostInterface } from '../types/post';


export const GetPostList = async(limit: number) => {

    const urlPostList = "https://jsonplaceholder.typicode.com/posts/?_limit=" + limit;
    const dataPostList = await fetch(urlPostList)
      .then(response => response.json());

    return dataPostList as PostInterface[];
}

export const GetPostById = async (id: string): Promise<PostInterface> => {

  const urlPost = "https://jsonplaceholder.typicode.com/posts/" + id;
  const dataPost = await fetch(urlPost)
      .then(response => response.json());

  return dataPost as PostInterface;
};