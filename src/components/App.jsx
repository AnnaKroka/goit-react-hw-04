import { useEffect, useRef, useState } from 'react'
import s from "./App.module.css"

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/api-unsplash';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';



const App = () => {
 
const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [query, setQuery] = useState('');
const [page, setPage] = useState(0);

const [totalPages, setTotalPages] = useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalImage, setModalImage] = useState("");


useEffect(() => {
  const getData = async () => {
    if (query) {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchImages(query, page);
      setTotalPages(data.total_pages);
      // setImages(hits);
      page > 1 &&
      setTimeout(() => {
        scroll();
      }, 100);
      setImages((prev) => [...prev, ...data.results]);
    } catch {
      setIsError(true);
      } finally {
      setIsLoading(false);
      }
    }
  };

  getData();
}, [query, page]);

const imageRef = useRef();

const handleChangeQuery = (query) => {
  setQuery(query);
  setPage(1);
  setImages([]);
};

const clickLoad = () => {
  setPage(page + 1);
}

const openModal = (item) => {
  setIsModalOpen(true);
  setModalImage(item);
};

const closeModal = () => {
  setIsModalOpen(false);
};

const scroll = () => {
  imageRef.current?.childNodes?.[0] &&
    window.scrollBy({
      top: imageRef.current.childNodes[0].getBoundingClientRect().height * 2,
      left: 0,
      behavior: "smooth",
    });
  }

  return (    
      <div className={s.container}>

      <SearchBar onChangeQuery={handleChangeQuery}/>
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          modalImage={modalImage}
        ></ImageModal>
      )}
      {isError && <ErrorMessage error={isError} />}
      
      <ImageGallery
      data={images}
      openModal={openModal}
      ref={imageRef}
      ></ImageGallery>

      {isLoading && <Loader />}

      {totalPages > page && <LoadMoreBtn nextPage={clickLoad} />}
      
      <Toaster position="bottom-right" />

      </div>
  );
};

export default App
