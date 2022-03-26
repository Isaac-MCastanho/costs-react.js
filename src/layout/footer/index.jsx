import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <p>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}
