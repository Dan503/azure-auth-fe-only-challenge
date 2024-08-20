import { Link } from 'react-router-dom'

export function SecurePage() {
	return (
		<>
			<h1>Secure Page</h1>
			<p>You should only be able to see this page if you are logged in</p>
			<p>
				<Link to="/">Back to home</Link>
			</p>
		</>
	)
}
