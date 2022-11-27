

import { useContext, useEffect, useState } from "react"
import ThreadContext from "../context/thread"
import { createReaction, getReactionsList } from "../services/reactions"



const useReactions = props => {
	const [ reactions,setReactions ] = useState([])
	const [ isLoad,setIsload ] = useState(true)
	const { setReactionData } = useContext(ThreadContext)

	const loadAllReactions = props => {
		getReactionsList()
		  .then(res => {
				if(reactions.length === 0) {
					setReactions(() => res.data.data)
				}
			})
			.finally(() => { setIsload(() => false) })
	}

	const create = props => {
		createReaction({ id:props.id,reaction:props.reaction })
			.then(res => {
				setReactionData(() => res.data.data.reaction)
			})
	}

	useEffect(() => {
		if(props.showModal && reactions.length === 0) {
			loadAllReactions()
		}
	},[props])


	return { isLoad,reactions,create }

}


export default useReactions