import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router.tsx'
import { AuthContextProvider } from './components/AuthContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthContextProvider>
			<BrowserRouter basename="/azure-auth-fe-only-challenge">
				<Router />
			</BrowserRouter>
		</AuthContextProvider>
	</StrictMode>,
)
