import { useEffect } from "react"
import Newpost from "../components/Newpost"
import Timeline from "../components/Timeline"
import usePost from "../hooks/usePost"
import useNavigation from '../hooks/useNavigation'


const Thread = props => {
	const { post,load } = usePost({ id:props.match.params.id })
	const { path } = useNavigation(props)

	if(post === undefined) { return null }


	return(
		<div>
			<Newpost id={props.match.params.id}/>
			<h1>{post.text}</h1>
			<Timeline id={path}/>
		</div>
	)
}


export default Thread