import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { SecurePage } from './SecurePage'
import { UnauthorizedPage } from './UnauthorizedPage'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/secure" element={<SecurePage />} />
			<Route path="/unauthorized" element={<UnauthorizedPage />} />
		</Routes>
	)
}
