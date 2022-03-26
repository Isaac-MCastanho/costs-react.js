import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Company } from "./pages/company/";
import { Contact } from "./pages/contact/index";
import { NewProject } from "./pages/newProject/index";
import { Header } from "./layout/header/index";
import { Container } from "./layout/container/index";
import { Footer } from "./layout/footer/index";
import { Projects } from "./pages/projects";
import { Project } from "./pages/project/index";

function App() {
  return (
    <>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/newProject" element={<NewProject />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
