import { Account } from 'msal'
import { createContext, useContext } from 'react'

export interface AuthContextValue {
	account: Account | null
	setAccount: React.Dispatch<React.SetStateAction<Account | null>>
}

export const defaultAuthContext: AuthContextValue = {
	account: null,
	setAccount: () => null,
}

export const authContext = createContext<AuthContextValue>(defaultAuthContext)

export function useAuthContext() {
	return useContext(authContext)
}
