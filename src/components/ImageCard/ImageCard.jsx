import s from "./ImageCard.module.css"

const ImageCard = ({item, openModal}) => {
  return (
    <div className={s.container}>
  <img 
  className={s.image}
  src={item.urls.small} 
  alt={item.alt_description} 
  onClick={() => openModal(item)}
  />
    </div>
  )
}

export default ImageCard