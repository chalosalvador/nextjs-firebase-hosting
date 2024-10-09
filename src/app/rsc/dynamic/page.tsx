import { Suspense } from 'react'
import { RscNotCached } from '../RscNotCached'

export const dynamic = 'force-dynamic'

export default function Page() {
	return (
		<section>
			<h1>RSC Dynamic</h1>
			<Suspense fallback="Loading..">
				<RscNotCached />
			</Suspense>
		</section>
	)
}
