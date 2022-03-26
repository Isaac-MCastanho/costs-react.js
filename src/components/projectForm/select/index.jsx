import styles from "./select.module.css";
import { useEffect } from "react";

export function Select({ text, name, options, handleOnChange, value }) {
  useEffect(() => {}, [options]);
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.length <= 0 && <option>Carregando...</option>}
        {options.map((cat) => {
          return (
            <option value={cat.id} key={cat.id}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
