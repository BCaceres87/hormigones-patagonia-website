import { useState } from 'react';
import PageHeader from '../components/page-header'
import ProjectsImage from '../assets/images/projects_background.jpg'
import ProjectCard from '../components/project-card'
import AchaoProject1 from '../assets/images/achao_project1.jpeg'
import AchaoProject2 from '../assets/images/achao_project2.jpeg'
import AchaoProject3 from '../assets/images/achao_project3.jpeg'
import PuertoOctayProject1 from '../assets/images/puerto_octay_project1.jpg'
import Wrapper from '../components/wrapper'
import LogosSection from '../components/logos-section'
import { Button } from 'antd';
import styles from './projects.module.scss'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  console.log("showAll: ", showAll);

  const allProjects = [
    {
      images: [AchaoProject1, AchaoProject2, AchaoProject3],
      title: "Cancha deportiva en Acaho, Chiloé",
      description: "Este proyecto consistió en la construcción de un espacio deportivo.",
      tags: ['Infraestructura privada', 'Proyectos Urbanos', 'Construcción Sostenible']
    },
    {
      images: [PuertoOctayProject1],
      title: "Obra en Puerto Octay",
      description: "Pavimentación con terminación en pavimento pigmentado",
      tags: ['Residencial Moderno', 'Diseño Innovador', 'Construcción Eficiente']
    },
  ];

  const projectsToDisplay = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <>
      <PageHeader 
        backgroundImage={ProjectsImage}
        title="Proyectos Destacados"
        subtitle="Explora nuestra variedad de proyectos exitosos."
      />
      <section>
        <Wrapper>
          {projectsToDisplay.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
          {allProjects.length > 2 && (
              <div className={styles.button_wrapper}>
                <Button  type="primary" onClick={() => setShowAll(!showAll)}>
                  {!showAll ? 'Ver todos los proyectos' : 'Mostrar menos'} 
                </Button>
              </div>
            )
          } 
        </Wrapper>
      </section>
      <LogosSection title="Ellos ya confían en nosotros" />
    </>
  );
};

export default Projects 