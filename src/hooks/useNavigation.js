

import { useEffect, useState } from "react"

const useNavigation = props => {
	const [ path,setPath ] = useState(null)

	useEffect(() => {
		props.history.listen((e) => {
			var THREAD_ID = e.pathname.replace('/t/','')
			THREAD_ID = THREAD_ID === '/' ? null:THREAD_ID
			setPath(() => THREAD_ID)
		})
	},[])


	return { path }
}



export default useNavigation