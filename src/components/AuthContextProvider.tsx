import { ReactNode, useEffect, useState } from 'react'
import { auth } from '../auth'
import { defaultAuthContext, authContext } from './AuthContext'
import { AccountInfo } from '@azure/msal-browser'

interface Props {
	children: ReactNode
}

// ES Lint says fast refresh only works if files only export either components or functions/variables not both
export function AuthContextProvider({ children }: Props) {
	const [account, setAccount] = useState<AccountInfo | null>(null)
	const [contextValue, setContextValue] = useState(defaultAuthContext)

	useEffect(() => {
		async function handleAuthFetch() {
			try {
				const authResult = await auth
				const response = await authResult.getActiveAccount()
				setAccount(response)
			} catch {
				setAccount(null)
			}
		}
		handleAuthFetch()
	}, [])

	useEffect(() => {
		setContextValue({ account, setAccount })
	}, [account])

	return (
		<authContext.Provider value={contextValue}>
			{children}
		</authContext.Provider>
	)
}
