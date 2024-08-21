import { auth } from '../auth'
import { useAuthContext } from './AuthContext'

interface Props {
	onLogout?: () => void
}

export function LogoutButton({ onLogout }: Props) {
	const { setAccount } = useAuthContext()
	return (
		<button
			onClick={async () => {
				try {
					await auth.logout()
					setAccount(null)
					onLogout?.()
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
