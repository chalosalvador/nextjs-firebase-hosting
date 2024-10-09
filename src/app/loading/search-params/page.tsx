import { Suspense } from 'react'
import { TimeoutComponent } from '../../ppr/TimeoutComponent'
import Loading from '../loading'

type Props = {
	searchParams: {
		a: string
	}
}
export default function Page({ searchParams }: Props) {
	return (
		<Suspense fallback={<Loading />}>
			{searchParams.a}
			<TimeoutComponent />
		</Suspense>
	)
}
