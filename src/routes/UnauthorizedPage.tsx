import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { LoginButton } from '../components/LogInButton'
import { useEffect } from 'react'
import { useAuthContext } from '../components/AuthContext'

export function UnauthorizedPage() {
	const { account } = useAuthContext()
	const [searchParams] = useSearchParams()
	const redirectPath = searchParams.get('path')
	const navigate = useNavigate()

	useEffect(() => {
		if (account && redirectPath) {
			navigate(redirectPath, {
				replace: true,
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account, redirectPath])

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
