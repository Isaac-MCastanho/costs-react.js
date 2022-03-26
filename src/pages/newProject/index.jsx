import { ProjectForm } from "../../components/projectForm";
import styles from "./newProject.module.css";
import { useNavigate } from "react-router-dom";

export function NewProject() {
  const navegate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //redirect
        navegate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm
        handleSubmit={createPost}
        btnText="Criar Projeto"
      ></ProjectForm>
    </div>
  );
}
