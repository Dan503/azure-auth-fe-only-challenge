import { auth } from '../auth'
import { useAuthContext } from './AuthContext'

export function LoginButton() {
	const { setAccount } = useAuthContext()
	return (
		<button
			onClick={async () => {
				try {
					const authResult = await auth
					const loginResponse = await authResult.loginPopup()
					setAccount(loginResponse.account)
				} catch (e) {
					alert('Login failed')
					setAccount(null)
					console.error(e)
				}
			}}
		>
			Login
		</button>
	)
}
