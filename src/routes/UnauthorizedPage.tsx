import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { LoginButton } from '../components/LogInButton'

export function UnauthorizedPage() {
	const [searchParams] = useSearchParams()
	const redirectPath = searchParams.get('path')
	const navigate = useNavigate()

	return (
		<>
			<h1>Unauthorized Page</h1>
			<p>You are not authorized to view that page</p>

			<p>
				<LoginButton
					onLogin={() => {
						if (redirectPath) {
							navigate(redirectPath, {
								replace: true,
							})
						}
					}}
				/>
			</p>
			<p>
				<Link to="/">Back to home</Link>
			</p>
		</>
	)
}
