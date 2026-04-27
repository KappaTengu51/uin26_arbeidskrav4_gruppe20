import { useEffect, useState } from 'react'
import client from './helpers/client'
import OleProfile from './components/OleProfile'
import FrideProfile from "./components/FrideProfile"

export default function App() {
	const [arbeidskravList, setArbeidskravList] = useState(null)

	useEffect(() => {
		async function fetchArbeidskrav() {
			const data = await client.fetch("*[_type == 'assignments']{_id, assignmentname, description}")
			setArbeidskravList(data)
		}

		fetchArbeidskrav()
	}, [])

	return (
		<>
			<h1>Gruppe 20</h1>
			<OleProfile />
			<FrideProfile />

			<section className="arbeidskrav-list">
				<h2>Arbeidskrav</h2>
				<ul>
					{arbeidskravList?.map((krav) => (
						<li key={krav.id} className="arbeidskrav-item">
							<p>{krav.description}</p>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default function App(){
    return(
        <>
        <h1>:D</h1>
        </>
    )

}