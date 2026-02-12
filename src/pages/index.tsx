import {PostComponent} from '../components/PostComponent';
import {PostInterface } from '../types/post';
import { GetPostList } from '../providers/postProvider';
import  { useEffect, useState} from 'react'

export default function Index() {

  const [ postList, setPostList] = useState<PostInterface[]>([])

  useEffect( () => {

    const getPostList = async () => {
      const response = await GetPostList(20);

      if(response) {
        setPostList(response)
      }
    }

    getPostList();

  }, [] )



  return (
    <div>
      <div className="" >
        {
          (postList && postList.length > 0)&&
          (
            postList.map(post =>
              <PostComponent post={post} />
            )
          )
        }
      </div>
      
    </div>
  )
}