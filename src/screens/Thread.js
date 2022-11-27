import { useEffect } from "react"
import Newpost from "../components/Newpost"
import Timeline from "../components/Timeline"
import usePost from "../hooks/usePost"



const Thread = props => {
	const { post,load } = usePost({ id:props.match.params.id })

	if(post === undefined) { return null }


	return(
		<div>
			<Newpost id={props.match.params.id}/>
			<h1>{post.text}</h1>
			<Timeline id={props.match.params.id}/>
		</div>
	)
}


export default Thread