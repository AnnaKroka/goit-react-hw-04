import s from "./Contact.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={s.container}>
      <div className={s.icon}>
      <RiContactsFill />
      <FaPhoneAlt />
      </div>
      <div>
      <p className={s.data}>{name}</p>
      <p className={s.data}>{number}</p>
      </div>
      <button className={s.btn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact