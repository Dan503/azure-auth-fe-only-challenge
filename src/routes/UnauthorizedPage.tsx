import { Link } from 'react-router-dom'
import { LoginButton } from '../components/LogInButton'

export function UnauthorizedPage() {
	return (
		<>
			<h1>Unauthorized Page</h1>
			<p>You are not authorized to view that page</p>

			<p>
				<LoginButton />
			</p>
			<p>
				<Link to="/">Back to home</Link>
			</p>
		</>
	)
}
