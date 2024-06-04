import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchPhotos from "../../unsplash-api";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Oval } from "react-loader-spinner";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [description, setDescription] = useState("");
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchPhotos(query, page);
        if (data.total_pages === 0) {
          setError("Nothing was found. Please try another word.");
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  const handleModalOpen = ({ big, description }) => {
    setSelectedImg(big);
    setDescription(description);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImg(null);
    setDescription("");
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {error && (
        <ErrorMessage message={error} className={css.error}>
          {error}
        </ErrorMessage>
      )}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={handleModalOpen} />
      )}
      {isLoading && <Oval />}
      {photos.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleMore}>Load more</LoadMoreBtn>
      )}
      {modalIsOpen && (
        <ImageModal
          bigUrl={selectedImg}
          isOpen={modalIsOpen}
          description={description}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
