import { useId } from "react";
import s from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik' 
import  * as Yup from "yup";
import { nanoid } from "nanoid";

const phoneRegex = /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;

const ContactForm = ({onAdd}) => {

  const nameFieldId = useId(); 
  const numberFieldId = useId();

  const handleSubmit = (values, options) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number
    });
		options.resetForm();
	};

  const initialValues = {
    name: '',
    number: ''
  }

  const contactSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(phoneRegex, "Number format: 000-00-00")
    .required("Required")
  });

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameFieldId}>Name</label>
          <Field className={s.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={s.error} name="name" component="span" />
          <label className={s.label} htmlFor={numberFieldId}>Number</label>
          <Field className={s.input} type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={s.error} name="number" component="span" />
          <button className={s.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm