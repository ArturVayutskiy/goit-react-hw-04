import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast.error("Please enter the text in the search field!");

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const request = evt.target.elements.topic.value.trim();
    if (request === "") {
      notify();
      return;
    }
    onSearch(request);
    evt.target.reset();
  };

  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          Search
        </button>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
