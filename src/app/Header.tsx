import Link from 'next/link'
import pagePaths from './pages.json'

export function Header() {
	return (
		<header>
			<nav
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
					justifyContent: 'center',
					padding: '.5rem',
					overflow: 'scroll',
				}}
			>
				{pagePaths.map((pagePath) => (
					<Link
						key={pagePath}
						href={pagePath}
						style={{ border: '1px solid white', padding: '.5rem' }}
					>
						{pagePath}
					</Link>
				))}
			</nav>
		</header>
	)
}
