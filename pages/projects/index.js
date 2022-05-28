import {
  faBoxArchive,
  faBoxOpen,
  faCrown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../../components/ProjectCard";

const iconDimention = "w-4 h-4";
const Crown = <FontAwesomeIcon icon={faCrown} className={iconDimention} />;
const OpenSource = (
  <FontAwesomeIcon icon={faBoxOpen} className={iconDimention} />
);
const Others = (
  <FontAwesomeIcon icon={faBoxArchive} className={iconDimention} />
);

const categories = [
  {
    title: "Personal",
    icon: Crown,
    amount: 3,
  },
  {
    title: "Opens Source",
    icon: OpenSource,
    amount: 32,
  },
  {
    title: "Others",
    icon: Others,
    amount: 10,
  },
];

const WorkingProjects = [
  {
    title: "ABIAN2018FUND",
    image: "/static/home/abian2018.png",
    link: "/projects/abian2018",
    description:
      "This is an organizational project. ABIAN2018FUND originated from school friends to help society without any political and profitible agenda.",
  },
  {
    title: "musiur",
    image: "/static/home/musiur.png",
    link: "/projects/musiur",
    description:
      "This is my personal Portfolio site where I will includes latest information about my skills, works and other contribution to the programming communities.",
  },
  {
    title: "NSU Origin",
    image: "/static/home/nsuorigin.png",
    link: "/projects/nsu-origin",
    description:
      "NSU Origin is a Group of people from North South University work together to skillup, participate in national and international compitition and enrich technological knowlege within tech anthutistic communities",
  },
  {
    title: "ABIAN2018FUND",
    image: "/static/home/abian2018.png",
    link: "/projects/abian2018",
    description:
      "This is an organizational project. ABIAN2018FUND originated from school friends to help society without any political and profitible agenda.",
  },
  {
    title: "musiur",
    image: "/static/home/musiur.png",
    link: "/projects/musiur",
    description:
      "This is my personal Portfolio site where I will includes latest information about my skills, works and other contribution to the programming communities.",
  },
  {
    title: "NSU Origin",
    image: "/static/home/nsuorigin.png",
    link: "/projects/nsu-origin",
    description:
      "NSU Origin is a Group of people from North South University work together to skillup, participate in national and international compitition and enrich technological knowlege within tech anthutistic communities",
  },
  {
    title: "ABIAN2018FUND",
    image: "/static/home/abian2018.png",
    link: "/projects/abian2018",
    description:
      "This is an organizational project. ABIAN2018FUND originated from school friends to help society without any political and profitible agenda.",
  },
  {
    title: "musiur",
    image: "/static/home/musiur.png",
    link: "/projects/musiur",
    description:
      "This is my personal Portfolio site where I will includes latest information about my skills, works and other contribution to the programming communities.",
  },
  {
    title: "NSU Origin",
    image: "/static/home/nsuorigin.png",
    link: "/projects/nsu-origin",
    description:
      "NSU Origin is a Group of people from North South University work together to skillup, participate in national and international compitition and enrich technological knowlege within tech anthutistic communities",
  },
];

const Projects = () => {
  return (
    <div className="projects__container">
      <div>
        <div className="psc__side_nav">
          <h2>Project Category</h2>
          <ul>
            {categories.map((category, i) => {
              const { title, icon, amount } = category;
              return (
                <li key={i}>
                  <div className="pscsn__option">
                    <>{icon}</>
                    <p>{title}</p>
                  </div>
                  <div className="pscsn__badge">
                    <span>{amount > 10 ? "10+" : amount}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="psc__canvas">
          <h2>Personal Projects</h2>
          <div className="pscc_container">
            {WorkingProjects.map((projectData, i) => {
              return <ProjectCard props={projectData} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
