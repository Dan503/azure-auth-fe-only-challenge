import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename="/azure-auth-fe-only-challenge">
			<Router />
		</BrowserRouter>
	</StrictMode>,
)
