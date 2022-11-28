

import { BottomScrollListener } from "react-bottom-scroll-listener"
import TimelineContext from "../context/timeline"
import useTimeline from "../hooks/useTimeline"
import ThreadItem from "./ThreadItem"



const Timeline = props => {
	const { data,nextPage,isLoad } = useTimeline(props.id)

	if(isLoad){
		return <h1>Load</h1>
	}

	return(
		<div>
			<BottomScrollListener
				onBottom={() =>{ nextPage(props.id) }}
			>
				{data.map((x,k) => (
					<div>
						<ThreadItem
							key={k}
							data={x}
						/>
					</div>
				))}
			</BottomScrollListener>
		</div>
	)
}



export default Timeline