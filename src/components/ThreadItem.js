


import '../styles/ThreadItem.css'
import '../styles/ThreadIndicator.css'
import ThreadContext from "../context/thread"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactionsPreview from './widgets/threadItem/Reactions'
 


const ThreadIndicator = props => {
	const DATA = [...new Array(props.size).keys()]

	if(props.size === 0){ return null }

	return(
		<div className="thread-indicator-container">
			<div className="thread-indicator-dot"/>
			{DATA.map((x,k) => (
				<div
					key={k}
					className="thread-indicator-item"
				/>
			))}
			<div className="thread-indicator-dot"/>
		</div>
	)
}


const Item = props => {
	const [ reaction,showReactionModal ] = useState(false)
	const [ reactionData,setReactionData ] = useState(null)

	return(
		<ThreadContext.Provider
			value={{
				reaction,
				showReactionModal,
				setReactionData,
				reactionData
			}}
		>
			<div {...props} className="thread-item">
				<Link className="thread-content" to={"/t/"+props.data.id}>
					<span>{ props.data.text }</span>
				</Link>
				

				{/* Reaction preview */}
				<div className="thread-reactions-preview">
					<ReactionsPreview
						data={props.data.reactionsPreview.preview}
						thread={props.data}
					/>
				</div>
			</div>
		</ThreadContext.Provider>
	)
}



const ThreadItem = props => {
	return(
		<div
			className="thread-item-container"
			{ ...props}
		>
			<div>
				<ThreadIndicator size={props.data.subThreads.length}/>
			</div>

			<div className="thread-item-area" >
				<Item data={props.data}/>
				<div className="subthread-item-area">
					{props.data.subThreads.map((x,k) => (
						<Item key={k} data={x}/>
					))}
				</div>
			</div>
		</div>
	)
}


export default ThreadItem