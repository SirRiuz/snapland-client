

import { useContext } from "react"
import ThreadContext from "../../../context/thread"
import ReactionBox from "../../ReactionBox"
import '../../../styles/ReactionsPreview.css'
import SETTINGS from "../../../settings"


/*
	Vista previa de las reacciones
*/
const ReactionsPreview = props => {
	if(props.data.length === 0) { return null }
	return(
		<div className="reactions-preview-container">
			{props.data.map((x,k) => (
				<div className="preview-item">
					<div
						className="reaction-preview"
						style={{
							backgroundImage:`url(${SETTINGS.API_BASE_URL}/${x.url})`
						}}
					/>
					<div>{x.count}</div>
				</div>
			))}
		</div>
	)
}


/*
  Este componente se encarga de desplegar
	el panel de reacciones.
*/

const Reactions = props => {
	const { reaction,showReactionModal } = useContext(ThreadContext)
	const { reactionData } = useContext(ThreadContext)

	return(
		<div
			onClick={() => {
				if(!reaction) { showReactionModal(() => true) }
			}}
			style={{ background:'blue' }}
		>
			<div>{reactionData.length}</div>
			<ReactionsPreview data={reactionData.preview}/>
			<div>x</div>
			<ReactionBox thread={props.data}/>
		</div>
	)
}


export default Reactions