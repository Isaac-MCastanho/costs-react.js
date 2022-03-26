import { Message } from "../../layout/menssage";
import styles from "./projects.module.css";
import { useLocation } from "react-router-dom";
import { Container } from "./../../layout/container/index";
import { LinkButton } from "./../../components/linkButton/index";
import { ProjectCard } from "./projectCard/index";
import { useState } from "react";
import { useEffect } from "react";
import { useAxios } from "./../../hooks/useAxios";
import { Loading } from "../../layout/loading";

export function Projects() {
  const [projects, setProjects] = useState([]);
  const { data, isFetching } = useAxios("http://localhost:5000/projects");
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    setProjects(data);
  }, [data]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (resp) => {
        await resp.json();
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="success" />}
      <Container customClass={"start"}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        ) : isFetching ? (
          <Loading />
        ) : (
          <p>Não há projetos Cadastrados!</p>
        )}
      </Container>
    </div>
  );
}
