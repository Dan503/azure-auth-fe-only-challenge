import { Link } from 'react-router-dom'
import { useAuthContext } from '../components/AuthContext'
import { LogoutButton } from '../components/LogOutButton'

export function SecurePage() {
	const { account: authState } = useAuthContext()
	return (
		<>
			<h1>Secure Area</h1>
			<h2>Authorized as {authState?.name}</h2>
			<p>You should only be able to see this page if you are logged in</p>
			<p>
				<Link to="/">Back to home</Link>
			</p>
			<LogoutButton />
		</>
	)
}
