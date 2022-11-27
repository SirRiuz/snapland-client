

import { useEffect, useState } from "react"
import { createPost, loadPostData } from '../services/post'

const usePost = props => {
	const [ post,setPost ] = useState(undefined)
	const [ load,setLoad ] = useState(true)

	const onLoadPost = props => {
		loadPostData({ id:props.id })
			.then(res => {
				setPost(() => res.data.data)
			})
	}

	const onCreatePost = props => {
		createPost({
			text:props.text,
			thread:props.id,
			files:props.files
		})
			.then(res => { console.log(res) })
	}


	useEffect(() => {
		if(props !== undefined && props.data !== null) {
			onLoadPost({ id:props.id })
		}
	},[])


	return { onCreatePost,onLoadPost,post,load }
}


export default usePost