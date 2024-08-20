import { Link } from 'react-router-dom'
import { auth } from '../auth'

export function HomePage() {
	return (
		<>
			<p>
				<Link to="/secure">Go to secure page</Link>
			</p>
			<p>
				<button
					onClick={async () => {
						const response = await auth.loginPopup()
						console.log({ response })
					}}
				>
					Login
				</button>
			</p>
		</>
	)
}
