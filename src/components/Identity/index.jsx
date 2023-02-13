export default function Identity({ hostname, hostpicture }) {
  return (
    <div className="Logement-Details__identity">
      <p>{hostname}</p>
      <img src={hostpicture} alt="Hote" />
    </div>
  )
}
