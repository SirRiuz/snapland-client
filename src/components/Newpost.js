import { useRef } from "react"
import usePost from "../hooks/usePost"



const Newpost = props => {
	const inputRef = useRef('')
	const fileRef = useRef(null)
	const { onCreatePost } = usePost()

	const createPost = _ => {
		onCreatePost({
			text:inputRef.current.value,
			id:props.id,
			files:fileRef.current
		})
		//window.location = '/'
	}

	return(
		<div>
			<textarea ref={inputRef} placeholder="En que estas pensando?"/>
			<input
				ref={fileRef}
				type={'file'}
				multiple
				accept="image/png,image/jpeg,video/mp4"
			/>
			<button onClick={createPost}>Publicar</button>
		</div>
	)
}


export default Newpost