
import { Box } from "@mui/material"
import Newpost from "../components/Newpost"
import Timeline from "../components/Timeline"
import useNavigation from "../hooks/useNavigation"
import '../styles/Home.css'




const Home = props => {
	const { path } = useNavigation(props)
	return(
		<div className="home-screen">
			<Box width={{ md:'600px' }}>
				<Timeline id={path}/>
			</Box>
		</div>
	)
}


export default Home