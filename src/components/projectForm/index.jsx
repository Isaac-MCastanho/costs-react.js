import { useState, useEffect } from "react";
import { Input } from "./input";
import styles from "./projectForm.module.css";
import { Select } from "./select";
import { SubmitButton } from "./submitButton";
import { useAxios } from "./../../hooks/useAxios";

export function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
  const { data, isFetching, error } = useAxios(
    "http://localhost:5000/categories"
  );

  useEffect(() => {
    if (!isFetching) {
      setCategories(data);
    }
  }, [data, isFetching]);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      ></Input>
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        name="budget"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      ></Input>

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
