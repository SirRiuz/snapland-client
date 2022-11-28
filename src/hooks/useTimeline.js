

import { useEffect, useState } from "react"
import timeService from "../services/timeline"
import useCache from "./useCache"


const useTimeline = props => {
	const [ data,setData ] = useState([])
	const [ next,setNext ] = useState(null)
	const [ isLoad,setLoad ] = useState(true)
	const { 
		setCacheData,
		cacheData,
		cacheNext,
		setCacheNext,
		setCacheScroll,
		cacheScroll
	} = useCache()



	const nextPage = props => {		
		if(next !== null) {
			timeService({ next:next })
				.then((response) => {
					setData((data) => data.concat(response.data.results))
					setNext(() => response.data.next)
					if(props === null) {
						setCacheData({data:response.data.results})
						setCacheNext({ next:response.data.next })
						setCacheScroll({index:window.scrollY})
					}
				})
				.finally(() => {
					setLoad(() => false)
				})
		}
	}

	const onRequest = props => {
		timeService({ next:null, id:props })
		.then((response) => {
			setData(() => response.data.results)
			setNext(() => response.data.next)
			if(props === null) {
				setCacheData({data:response.data.results})
				setCacheNext({ next:response.data.next })
			}
		})
		.finally(() => {
			setLoad(() => false)
		})
	}

	useEffect(() => {
		if(props === null) {
			setData(() => cacheData)
			setNext(() => cacheNext)
			window.scrollTo(0,cacheScroll)
		}

		if(props === null && cacheData.length === 0 || props !== null) {
			onRequest(props)
		}


	},[props])
	
	
	return { data,nextPage,isLoad }
}

export default useTimeline