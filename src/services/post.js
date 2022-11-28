

import axios from "axios"
import SETTINGS from "../settings"


const createPost = props => {
	var formData = new FormData()
	var threadId = props.thread === undefined || props.thread === null ? '':`${props.thread}/`
	var threadFiles = props.files
	var REQUEST_URL = SETTINGS.API_BASE_URL+SETTINGS.API_V1+'thread/'+threadId
	

	for(var index = 0;index < threadFiles.files.length;index++) {
		formData.append(`file-${index}`,threadFiles.files[index])
	}

	formData.append('text',props.text)
	formData.append('countryCode','d')
	formData.append('nativeLenguaje','d')

	

	return axios.post(REQUEST_URL,formData,{
		"Content-Type": "multipart/form-data"
	})
	// return axios.post(REQUEST_URL,{
	// 	text:props.text,
	// 	countryCode:'s',
	// 	nativeLenguaje:'s'
	// })
}


const loadPostData = props => {
	const REQUEST_URL = SETTINGS.API_BASE_URL+SETTINGS.API_V1+`thread/${props.id}/`
	return axios.get(REQUEST_URL)
}


export{
	createPost,
	loadPostData
}