// Components for the Home page
import ImageHeader from "../../components/ImageHeader"
import LogementsList from "../../components/LogementsList"
import backgroundImage from "../../assets/img/header/big.png"

// Data
const background = backgroundImage
const text = "Chez vous, partout et ailleurs"
const imageAlt = "Image de fond du header representant des vacances"

export default function Home() {
  return (
    <>
      <ImageHeader text={text} background={background} imageAlt={imageAlt} />
      <LogementsList />
    </>
  )
}
