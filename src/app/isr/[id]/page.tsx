import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Revalidate } from './Revalidate'
// import { Purge } from './Purge'

async function getReports() {
	return Promise.resolve(
		Array.from({ length: 1 }).map((_, i) => ({
			id: i,
			data: `${Date.now()} Report ${i}`,
		}))
	)
}

const findReport = async (id: string) =>
	(await getReports()).find((report) => report.id === Number(id))

export async function generateStaticParams() {
	return (await getReports()).map(({ id }) => ({ params: { id } }))
}

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const { data } = (await findReport(id)) || {}
	if (!data) return notFound()

	const reports = await getReports()

	return (
		<>
			<div>{JSON.stringify({ data })}</div>

			<ul style={{ display: 'grid', maxWidth: '200px', margin: '10px auto', gap: '8px' }}>
				{reports.map((report) => (
					<li key={report.id} style={{ display: 'flex', margin: '10px auto', gap: '8px' }}>
						<Revalidate reportId={report.id} />
						{/* <Purge reportId={report.id} /> */}
						<Link href={`/isr/${report.id}`}>go to /isr/{report.id}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
