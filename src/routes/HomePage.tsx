import { Link } from 'react-router-dom'
import { LoginButton } from '../components/LogInButton'

export function HomePage() {
	return (
		<>
			<h1>Home page</h1>
			<p>
				<Link to="/secure">Go to secure page</Link>
			</p>
			<p>
				<LoginButton />
			</p>
		</>
	)
}
