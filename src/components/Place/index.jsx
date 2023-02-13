export default function Place({ location, tags, title }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{location}</p>
      <ul>
        {tags.map((tag, id) => (
          <li key={id + tag}>{tag}</li>
        ))}
      </ul>
    </>
  )
}
