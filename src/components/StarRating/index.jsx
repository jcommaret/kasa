import "./index.scss"

export default function StarRating({ count, rating }) {
  const stars = Array.from({ length: count })
  return (
    <>
      {stars.map((star, index) => {
        return (
          <div
            key={index}
            className={index < rating ? "star-active" : "star-inactive"}
          ></div>
        )
      })}
    </>
  )
}
