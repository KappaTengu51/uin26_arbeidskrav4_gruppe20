import { useEffect, useState } from 'react'
import client from './helpers/client'
import OleProfile from './components/OleProfile'
import FrideProfile from './components/FrideProfile'
import Jesper from './components/Jesper'
import KristofferProfile from './components/KristofferProfile'
import './styles/hovedside.css'

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
			<section>
				<OleProfile />
				<FrideProfile />
				<Jesper />
				<KristofferProfile />
			</section>

			<section className="arbeidskrav-list">
				<h3>Arbeidskravene</h3>
				<ul>
					{arbeidskravList?.map((krav) => (
						<li key={krav._id} className="arbeidskrav-item">
							<h4>{krav.assignmentname}</h4>
							<p>{krav.description}</p>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}
