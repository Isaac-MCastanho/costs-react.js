import styles from "./container.module.css";

export function Container({ children, customClass }) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}
