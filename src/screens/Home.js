
import { Box } from "@mui/material"
import Newpost from "../components/Newpost"
import Timeline from "../components/Timeline"
import useNavigation from "../hooks/useNavigation"
import '../styles/Home.css'




const Home = props => {
	const { path } = useNavigation(props)
	return(
		<div className="home-screen">
			<Box
				style={{ background:'yellow'}}
				width={{ md:'750px' }}
			>
				<Timeline
					id={path}
				/>
			</Box>
		</div>
	)
}


export default Home