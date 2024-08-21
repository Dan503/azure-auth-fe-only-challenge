import { Link } from 'react-router-dom'
import { useAuthContext } from '../components/AuthContext'

export function SecurePage() {
	const { account: authState } = useAuthContext()
	return (
		<>
			<h1>Secure Page</h1>
			<h2>Welcome {authState?.name}</h2>
			<p>You should only be able to see this page if you are logged in</p>
			<p>
				<Link to="/">Back to home</Link>
			</p>
		</>
	)
}
