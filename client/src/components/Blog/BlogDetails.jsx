import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearPostDetails, getPostById } from "../../redux/actions/actions";
import Error404 from "../Error404/Error404";

export default function BlogDetails() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { post_details } = useSelector((s) => s);

	useEffect(() => {
		dispatch(getPostById(id));
		return () => {
			dispatch(clearPostDetails());
		};
	}, [dispatch, id]);

	const details = post_details;

    const contentArr = details?.content?.split(" ")

	return (
		<div className="bg-slate-100">
			{details ? <div className="pt-44 pb-24 pl-8 flex flex-col w-11/12 mx-auto md:w-4/6 xl:w-1/2 2xl:w-1/3">
				{/* details's title */}
				<h2 className="flex items-center mb-2 text-2xl md:text-3xl font-bold tracking-tight lighter-blue">
                    {/* > */}
                    <img
						className="h-6 mr-1"
						src="https://res.cloudinary.com/dpxucxgwg/image/upload/v1679247513/play-blog_tctqkq.png"
		            />
					<p>{details?.title}</p>
				</h2>

                {/* date, author and tags */}
                <div className="flex items-center">
                    {/* date */}
                    <p className="text-xs md:text-sm font-normal">{details?.createdAt?.substring(0,10).replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')} &nbsp;</p>
                    
                    {/* author */}
                    {details?.author && <p>by {details?.author}</p>}

                    {/* tag */}
                    {details?.tag?.map(tag=>{
                        return <span className="text-xs md:text-sm lighter-blue font-normal uppercase underline">{tag}</span>
                    })}
                </div>

                <hr className="mt-8 text-gray-200"></hr>

                {/* image */}
                <div className="mt-6 pb-8">
                    <img className="w-full rounded-md" src={details?.image} alt="details img"/>
                </div>

                <div className="whitespace-nowrap text-clip">
                    <p className="mb-5 font-light text-black dark:text-gray-400">
						{details?.content}
					</p>
                    {/* {contentArr?.map((word, index)=>{
                        // if(word.match(/\.(jpeg|jpg|gif|png)$/)) {
                        //     return <img src={word} className="pt-8 pb-8 rounded-md h-80 w-full" alt="text img"/>
                        // }
                        // else if(word?.toLowerCase()?.startsWith("subtitle:")) {
                        //     return <h1 className="text-3xl capitalize lighter-blue pt-6">{word.substring(9)} </h1>
                        // }
                        // else {
                            return(
                                <span>{newContent}</span>
                            )
                        // }
                    })} */}
                </div>

			</div> 
            : <Error404/>}
		</div>
	);
}
