import { ThreeCircles } from "react-loader-spinner"
import s from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={s.loader}>
      <ThreeCircles
  visible={true}
  height="50"
  width="50"
  color="rgb(71, 103, 157)"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader