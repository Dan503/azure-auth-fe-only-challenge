import { Account } from 'msal'
import { ReactNode, useEffect, useState } from 'react'
import { auth } from '../auth'
import { defaultAuthContext, authContext } from './AuthContext'

interface Props {
	children: ReactNode
}

// ES Lint says fast refresh only works if files only export either components or functions/variables not both
export function AuthContextProvider({ children }: Props) {
	const [account, setAccount] = useState<Account | null>(null)
	const [contextValue, setContextValue] = useState(defaultAuthContext)

	useEffect(() => {
		async function handleAuthFetch() {
			try {
				const response = await auth.getAccount()
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
