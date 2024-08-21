import { AccountInfo } from '@azure/msal-browser'
import { createContext, useContext } from 'react'

export interface AuthContextValue {
	account: AccountInfo | null
	setAccount: React.Dispatch<React.SetStateAction<AccountInfo | null>>
}

export const defaultAuthContext: AuthContextValue = {
	account: null,
	setAccount: () => null,
}

export const authContext = createContext<AuthContextValue>(defaultAuthContext)

export function useAuthContext() {
	return useContext(authContext)
}
