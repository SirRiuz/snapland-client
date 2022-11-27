

import { BottomScrollListener } from "react-bottom-scroll-listener"
import useTimeline from "../hooks/useTimeline"
import ThreadItem from "./ThreadItem"



const Timeline = props => {
	const { data,nextPage } = useTimeline({ id:props.id })

	return(
		<div>
			<BottomScrollListener
				onBottom={() =>{ nextPage() }}
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