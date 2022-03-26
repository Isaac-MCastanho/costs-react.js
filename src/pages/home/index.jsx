import styles from "./home.module.css";
import savings from "../../img/savings.svg";
import { LinkButton } from "../../components/linkButton";
export function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newProject" text={"Criar Projeto"} />
      <img
        src={savings}
        alt="Imagem ilustrativa de borquinho de moedas com um personagem em cima, depositando uma moeda."
      />
    </section>
  );
}
