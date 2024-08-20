import * as MSAL from 'msal'

const msalConfig: MSAL.Configuration = {
	auth: {
		clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
		redirectUri: 'http://localhost:5173/azure-auth-fe-only-challenge/',
	},
	cache: {
		cacheLocation: 'sessionStorage',
	},
}

export const auth = new MSAL.UserAgentApplication(msalConfig)

// auth.handleRedirectCallback((error, response) => {
// 	if (error) {
// 		throw error
// 	}
// 	console.log(response)
// })
