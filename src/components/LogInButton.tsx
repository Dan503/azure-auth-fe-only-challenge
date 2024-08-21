import { AuthResponse } from 'msal'
import { auth } from '../auth'
import { useAuthContext } from './AuthContext'

interface Props {
	onLogin?: (authResponse: AuthResponse) => void
}

export function LoginButton({ onLogin }: Props) {
	const { setAccount } = useAuthContext()
	return (
		<button
			onClick={async () => {
				try {
					if (auth.getLoginInProgress()) {
						alert(
							'There is another existing login session blocking your login attempt',
						)
					} else {
						const loginResponse = await auth.loginPopup()
						console.log({ loginResponse })
						setAccount(loginResponse.account)
						onLogin?.(loginResponse)
					}
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
