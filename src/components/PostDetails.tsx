import { useParams, useNavigate } from 'react-router-dom';
import { GetPostById } from '../providers/postProvider';
import {PostInterface } from '../types/post';
import  { useEffect, useState} from 'react';

export const PostDetail = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [ postDetails, setPostDetails] = useState<PostInterface | null>(null)
  
  useEffect( () => {

    const getPostDetails = async () => {
      const response = await GetPostById(id!);

      if(response) {
        setPostDetails(response)
      }
    }

    if(id) {
      getPostDetails();
    }
    

  }, [id] )



  if (postDetails === null) return <div className="alert alert-error">Post introuvable</div>;

  return (
    <div className="max-w-2xl mx-auto card bg-base-100 shadow-2xl p-8">
      <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm mb-4">
        Retour
      </button>
      <h1 className="text-3xl font-bold capitalize mb-4 text-primary">{postDetails.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{postDetails.body}</p>
    </div>
  );
}