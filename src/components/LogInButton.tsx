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
					const response = await auth.loginPopup()
					console.log({ response })
					setAccount(response.account)
					onLogin?.(response)
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
