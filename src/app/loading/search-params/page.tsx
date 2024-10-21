import { TimeoutComponent } from '../../ppr/TimeoutComponent'

type Props = {
	searchParams: Promise<{
		a: string
	}>
}
export default async function Page({ searchParams }: Props) {
	const { a } = await searchParams
	return (
		<>
			{a}
			<TimeoutComponent />
		</>
	)
}
