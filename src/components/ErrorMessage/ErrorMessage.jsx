import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
    <div>
      <h2 className={s.errorMessage}>Something wrong! Please, reload the page...</h2>
    </div>
  )
}

export default ErrorMessage