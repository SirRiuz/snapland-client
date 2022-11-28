

import { useContext } from "react"
import ThreadContext from "../../../context/thread"
import ReactionBox from "./ReactionBox"
import '../../../styles/ReactionsPreview.css'
import ReactionsPreview from "./ReactionPreview"


const Reactions = props => {
	const { reaction,showReactionModal } = useContext(ThreadContext)
	const { reactionData } = useContext(ThreadContext)

	return(
		<div
			onClick={() => { if(!reaction) { showReactionModal(() => true) } }}
			className="reaction-box"
		>
			<ReactionsPreview data={props.data}/>
			{ props.data.length === 0 ? <div>x</div>:null }
			{ reactionData !== null ? <div>{reactionData.length}</div>:<div>{props.data.length}</div> }
			<ReactionBox thread={props.thread}/>
		</div>
	)
}


export default Reactions