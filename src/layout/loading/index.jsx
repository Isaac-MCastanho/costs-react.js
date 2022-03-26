import styles from "./loading.module.css";
import loading from "./../../img/loading.svg";

export function Loading() {
  return (
    <div className={styles.loading_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  );
}