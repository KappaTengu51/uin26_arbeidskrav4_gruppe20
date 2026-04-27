import '../styles/OleStyles.css'
import profileImage from '../img/ole.jpg'

export default function OleProfile() {
	return (
		<article className="profile-card Ole-Theme">
			<figure>
				<img src={profileImage} alt="Illusrasjon for Ole" />
			</figure>
			<h2>Ole Martin Hansen Kopperud</h2>

			<address>
				<a href="mailto:olemha@hiof.no">olemha@hiof.no</a>
			</address>
			<p>BachelorStudie: Digitale Medier og Design</p>
		</article>
	)
}
