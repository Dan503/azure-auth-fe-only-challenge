import { ReactNode, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../components/AuthContext'
import { HomePage } from './HomePage'
import { SecurePage } from './SecurePage'
import { UnauthorizedPage } from './UnauthorizedPage'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route
				path="/secure"
				element={
					<SecureRoute>
						<SecurePage />
					</SecureRoute>
				}
			/>
			<Route path="/unauthorized" element={<UnauthorizedPage />} />
		</Routes>
	)
}

function SecureRoute({ children }: { children: ReactNode }) {
	const { account } = useAuthContext()
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		async function handleAuth() {
			if (!account) {
				navigate(`/unauthorized?path=${location.pathname}`, {
					replace: true,
				})
			}
		}
		handleAuth()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account])
	return children
}
