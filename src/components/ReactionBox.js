


import { useContext, useState } from "react"
import ThreadContext from "../context/thread"
import Masonry from '@mui/lab/Masonry';
import useReactions from "../hooks/useReaction";
import '../styles/ReactionBox.css'
import SETTINGS from "../settings";


/*
  Este es un item del palen de reacciones.
*/

const ReactionItem = props => {
	const { showReactionModal } = useContext(ThreadContext)
	const { create } = useReactions({ showModal:false })

	if(props.data === {}){ return null }

	return(
		<div
			onClick={() => {
				create({ id:props.thread,reaction:props.data.name})
				showReactionModal(() => false)
			}}
			onMouseEnter={() => {
				if(props.onFocus !== undefined) {
					props.onFocus(props.data)
				}
			}}
			className="reaction-item-container"
			style={props.style}
			{...props}
		>
			<div
				className="reaction-item"
				style={{
					backgroundImage:`url(${SETTINGS.API_BASE_URL}/${props.data.image})`
				}}
			/>
		</div>
	)
}



/*
  Este es el panel reacciones el cual permite mostrar
	la lista de todas las reacciones y poder reaccionar a 
	un hilo.
*/

const ReactionBox = props => {
	const { reaction,showReactionModal } = useContext(ThreadContext)
	const { reactions,isLoad } = useReactions({ showModal:reaction })
	const [ focusReaction,setFocus ] = useState({})
	const onCancel = _ => { showReactionModal(() => false) }

	if(!reaction) { return null }
	if(isLoad) { return <div>LOad</div> }

	return(
		<div className="reaction-container">
			<div
				className="reaction-box-screen"
				onClick={onCancel}
			/>
			<div className="reaction-box-container">

				{/* Reaction grid list */}
				<div className="box-header">
				  <Masonry columns={7}>
					  {reactions.map((x,k) => (
							<ReactionItem
								thread={props.thread.id}
								data={x}
								key={k}
								onFocus={(data) => { setFocus(() => data) }}
							/>
					  ))}
				  </Masonry>
				</div>


				{/* Reaction preview */}
				<div className="box-footer">
					<ReactionItem
						style={{ width:39}}
						data={focusReaction}
					/>
					<div>{focusReaction.name}</div>
				</div>

			</div>
		</div>
	)
}



export default ReactionBox

