import { forwardRef } from "react"
import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = forwardRef(function GalleryComponent(
	{ data, openModal },
	ref
  ) {
	return (
	  <ul ref={ref} className={s.imgList}>
		{data.map((item) => (
		  <li key={item.id} className={s.imgItem}>
			<ImageCard item={item} openModal={openModal} />
		  </li>
		))}
	  </ul>
	);
  });

export default ImageGallery