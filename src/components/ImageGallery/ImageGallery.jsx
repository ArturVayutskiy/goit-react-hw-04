import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} onClick={onImageClick} />
      ))}
    </ul>
  );
}
