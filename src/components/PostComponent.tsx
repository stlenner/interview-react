import {PostInterface } from '../types/post';
import { Link } from 'react-router-dom';
export const PostComponent = (props:{post : PostInterface}) => {


    return (
        <div className="hover-3d my-12 mx-2 cursor-pointer">

            <div className="card w-96 bg-base-300 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title capitalize truncate">{props.post.title}</h2>
                    <p className="text-sm">{props.post.body.substring(0, 50)}...</p>
                    <div className="card-actions justify-end">
                    <Link to={`/post/${props.post.id}`} className="btn btn-primary btn-sm">
                        acceder au post
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}