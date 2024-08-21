import { auth } from '../auth'
import { useAuthContext } from './AuthContext'

export function LogoutButton() {
	const { setAccount } = useAuthContext()
	return (
		<button
			onClick={async () => {
				try {
					const authResult = await auth
					await authResult.logoutPopup()
					setAccount(null)
				} catch (e) {
					alert('Logout failed')
					console.error(e)
				}
			}}
		>
			Logout
		</button>
	)
}
