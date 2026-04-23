import client from "../helpers/client"

export default function Jesper() {
  return (
    <article className="jesper">
      <h1>{p.name}</h1>
      <p>{p.email}</p>
      <img src={p.profileimage} alt="Profilbilde" />
      <p>{p.bachelor}</p>
    </article>
  )
}