import * as MSAL from 'msal'

const baseUri = `${window.location.origin}/azure-auth-fe-only-challenge/`

const msalConfig: MSAL.Configuration = {
	auth: {
		clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
		redirectUri: baseUri,
		// I'm using this because I'm testing with a personal microsoft account
		authority: 'https://login.microsoftonline.com/consumers',
		postLogoutRedirectUri: baseUri,
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
