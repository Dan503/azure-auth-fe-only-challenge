import * as MSAL from 'msal'

const baseUri = `${window.location.origin}/azure-auth-fe-only-challenge/`

const msalConfig: MSAL.Configuration = {
	auth: {
		// I would normally save this in an environment variable, the Github Pages production build is having issues with reading it though
		// This is a throw away test project so I'm ok exposing this ID. It is unique to the project
		clientId: '625af569-3c39-4e98-a97c-3a60973c09a6',
		// The environment variable version of setting clientId
		// clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
		redirectUri: baseUri,
		// I'm using this because I'm testing with a personal microsoft account
		authority: 'https://login.microsoftonline.com/consumers',
		// This is supposed to redirect back to the home page after logging out. It doesn't appear to be working.
		postLogoutRedirectUri: baseUri,
	},
	cache: {
		cacheLocation: 'sessionStorage',
	},
}

export const auth = new MSAL.UserAgentApplication(msalConfig)
