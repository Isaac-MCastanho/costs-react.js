import styles from "./../../projects/projectCard/projectCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export function ServiceCard({ id, name, cost, description, handleRemove }) {
  function remove(e) {
    e.preventDefault();
    handleRemove(id, cost);
  }
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total: </span> {`R$ ${parseFloat(cost).toFixed(2)}`}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}
