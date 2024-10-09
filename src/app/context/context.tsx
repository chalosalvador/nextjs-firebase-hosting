import type { ComponentType, ReactNode } from 'react'
import { createContext, useState, useEffect } from 'react'

export type ContextValue = {
	dateNow: number
	dateString: string
	number: number
}

export const INITIAL_CONTEXT_VALUE = {
	dateNow: 0,
	dateString: '',
	number: 0,
}

export const Context = createContext<ContextValue>(INITIAL_CONTEXT_VALUE)

export const withContext = <P extends object>(Component: ComponentType<P>) =>
	function ({ children, ...props }: { children: ReactNode; props?: Record<string, unknown> }) {
		const [contextValue, setContextValue] = useState(INITIAL_CONTEXT_VALUE)

		useEffect(() => {
			setContextValue({
				dateNow: Date.now(),
				dateString: new Date().toUTCString(),
				number: 0,
			})
		}, [])

		return (
			<Context.Provider value={contextValue}>
				<Component {...(props as P)}>{children}</Component>
			</Context.Provider>
		)
	}
