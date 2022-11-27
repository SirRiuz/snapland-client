

import axios from "axios"
import SETTINGS from "../settings"



const timeService = props => {
	const TIMELINE_REQUEST = SETTINGS.API_BASE_URL+SETTINGS.API_V1+'timeline/'
	const SUBTHREAD_REQUEST = SETTINGS.API_BASE_URL+SETTINGS.API_V1+`thread/sub/${props.id}/`
	const REQUEST_URL = props.id === undefined ? TIMELINE_REQUEST:SUBTHREAD_REQUEST
	return props !== undefined && props.next !== null ? axios.get(props.next):axios.get(REQUEST_URL)
}


export default timeService