import "../styles/KristofferStyles.css"

export default function KristofferProfile() {
    return (
        <section className="kristoffer-profile">
            <h2 className="kristoffer-profile__name">Kristoffer Zvirblis</h2>
            <img className="kristoffer-profile__avatar" src="./src/img/Kristoffer.jpg" alt="Kristoffer Zvirblis" />
            <a className="kristoffer-profile__email" href="mailto:kristofz@hiof.com">Send mail eller bilde :P</a>
            <p className="kristoffer-profile__studie">Bachelor i Digitale medier og design</p>
        </section>
    )
}