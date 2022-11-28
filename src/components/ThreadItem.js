


import '../styles/ThreadItem.css'
import ThreadContext from "../context/thread"
import { useState } from 'react'
import Reactions from './widgets/threadItem/Reactions'
import { Link } from 'react-router-dom'



const ThreadIndicator = props => {
	const DATA = [...new Array(props.size).keys()]

	if(props.size === 0){ return null }

	return(
		<div style={{ background:'pink' }}>
			<div>x</div>
			{DATA.map((x,k) => (
				<div key={k}>
					.
				</div>
			))}
			<div>x</div>
		</div>
	)
}


const Item = props => {
	const [ reaction,showReactionModal ] = useState(false)
	const [ reactionData,setReactionData ] = useState(props.data.reactionsPreview)

	return(
		<ThreadContext.Provider
			value={{
				reaction,
				showReactionModal,
				setReactionData,
				reactionData
			}}
		>
			<div {...props}>
				<Link to={"/t/"+props.data.id}>{ props.data.text }</Link>

				{/* Buttons navigation */}
				<div
					style={{
						background:'yellow',
						display:'flex',
						justifyContent:'flex-start'
					}}
				>
					{/* Reaction button */}
					<Reactions data={props.data}/>
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

			<div style={{background:'green' }}>
				<ThreadIndicator size={props.data.subThreads.length}/>
			</div>

			<div className="thread-item-area" >
				<Item data={props.data}/>
				<div className="subthread-item-area">
					{props.data.subThreads.map((x,k) => (
						<Item
							key={k}
							data={x}
						/>
					))}
				</div>
			</div>

		</div>
	)
}


export default ThreadItem