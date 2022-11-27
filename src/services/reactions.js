


import axios from "axios"
import SETTINGS from "../settings"



const getReactionsList = props => {
	const REQUEST_URL = SETTINGS.API_BASE_URL+SETTINGS.API_V1+'reactions/'
	return axios.get(REQUEST_URL)
}


const createReaction = props => {
	const REQUEST_URL = SETTINGS.API_BASE_URL+SETTINGS.API_V1+`reactions/${props.id}/`
	var DATA = { reaction:props.reaction }
	return axios.post(REQUEST_URL,DATA,{
		headers:{
			'Content-Type': 'application/json'
		}
	})
}



export {
	getReactionsList,
	createReaction
}

