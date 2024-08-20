import { auth } from '../auth'

export function LoginButton() {
	return (
		<button
			onClick={async () => {
				const response = await auth.loginPopup()
				console.log({ response })
			}}
		>
			Login
		</button>
	)
}
