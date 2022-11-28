
import { useContext } from "react"
import ThreadContext from "../../../context/thread"
import SETTINGS from "../../../settings"


const ReactionsPreview = props => {
	const { reactionData } = useContext(ThreadContext)
	const DATA = reactionData === null ? props.data:reactionData.preview
	
	if(DATA.length === 0) { return null }

	return(
		<div className="reactions-preview-container">
			{DATA.map((x,k) => (
				<div className="preview-item">
					<div
						className="reaction-preview"
						style={{ backgroundImage:`url(${SETTINGS.API_BASE_URL}/${x.url})` }}
					/>
					<div>{x.count}</div>
				</div>
			))}
		</div>
	)
}


export default ReactionsPreview