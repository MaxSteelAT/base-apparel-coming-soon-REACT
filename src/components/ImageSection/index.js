import './style.css';
import Image from "../../assets/hero-desktop.jpg"

const ImageSection = () => {
  return (
    <div className="image-container col-md-6 col-sm-4">
      <img className='image' src={Image}></img>
    </div>
  )
}

export default ImageSection;