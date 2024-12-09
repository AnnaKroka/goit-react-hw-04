import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({onChangeQuery}) => {
const initialValues = {
  query: '',
};
const handleSubmit = (values) => {
  if (!values.query) {
    toast ("Please, enter a search query!", {
      style: {
        color: "#ffffff",
        backgroundColor: "rgb(71, 103, 157)",
      },
    });
  } else {
  onChangeQuery(values.query);
};
}

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
         <Field
      className={s.input}
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={s.buttonSearch} type="submit">
    <IoSearch className={s.iconSearch} />
    </button>
       </Form>
  </Formik>
</header>
  )
}


export default SearchBar