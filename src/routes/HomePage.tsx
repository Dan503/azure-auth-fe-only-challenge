import { Link } from 'react-router-dom'
import { LoginButton } from '../components/LogInButton'
import { useAuthContext } from '../components/AuthContext'
import { LogoutButton } from '../components/LogOutButton'

export function HomePage() {
	const { account } = useAuthContext()
	return (
		<>
			<h1>Home page</h1>
			{account && (
				<h2>
					Welcome <strong>{account.name}</strong>!
				</h2>
			)}
			<p>
				Navigate to the <Link to="/secure">secure page</Link>
			</p>
			<p>{account ? <LogoutButton /> : <LoginButton />}</p>
		</>
	)
}
