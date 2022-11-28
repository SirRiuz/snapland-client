

import { useState } from "react"


const useCache = props => {
	const [ cacheNext,setNext ] = useState(null)
	const [ cacheData,setData ] = useState([])
	const [ cacheScroll,setScroll ] = useState(0)

	const setCacheData = props => {
		setData(() => cacheData.concat([...props.data]))
	}
	
	const setCacheNext = props => { setNext(() => props.next) }

	const setCacheScroll = props => {
		setScroll(() => props.index)
	}
	


	return { setCacheData,cacheData,cacheNext,setCacheNext,cacheScroll,setCacheScroll }

}



export default useCache