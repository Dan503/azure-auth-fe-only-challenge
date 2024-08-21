import { Link } from 'react-router-dom'
import { LoginButton } from '../components/LogInButton'
import { useAuthContext } from '../components/AuthContext'
import { LogoutButton } from '../components/LogOutButton'

export function HomePage() {
	const { account } = useAuthContext()
	return (
		<>
			<h1>Home page</h1>
			<p>
				<Link to="/secure">Go to secure page</Link>
			</p>
			<p>{account ? <LogoutButton /> : <LoginButton />}</p>
		</>
	)
}
