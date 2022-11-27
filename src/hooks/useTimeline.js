

import { useEffect, useState } from "react"
import timeService from "../services/timeline"


const useTimeline = props => {
	const [ data,setData ] = useState([])
	const [ next,setNext ] = useState(null)


	const nextPage = props => {		
		if(next !== null) {
			timeService({ next:next })
				.then((response) => {
					setData((data) => data.concat(response.data.results))
					setNext(() => response.data.next)
					console.log(response.data)
				})
		}
	}

	useEffect(() => {
		timeService({
			next:null,
			id:props.id
		})
			.then((response) => {
				setData(() => response.data.results)
				setNext(() => response.data.next)
			})
	},[])
	
	
	return { data,nextPage }
}

export default useTimeline