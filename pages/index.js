import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
const iconDimention = "w-4 h-4";
const ArrowRightLong = (
  <FontAwesomeIcon icon={faArrowRightLong} className={iconDimention} />
);

const ImportAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const TechImages = ImportAll(
  require.context("/static/techIcons", false, /\.(png|jpe?g|svg)$/)
);

const WorkingProjects = [
  {
    title: "ABIAN2018FUND",
    image: "/static/home/abian2018.png",
    link: "/projects",
    description: "This is an organizational project. ABIAN2018FUND originated from school friends to help society without any political and profitible agenda."
  },
  {
    title: "musiur",
    image: "/static/home/musiur.png",
    link: "/projects",
    description: "This is my personal Portfolio site where I will includes latest information about my skills, works and other contribution to the programming communities."
  },
  {
    title: "NSU Origin",
    image: "/static/home/nsuorigin.png",
    link: "/projects",
    description: "NSU Origin is a Group of people from North South University work together to skillup, participate in national and international compitition and enrich technological knowlege within tech anthutistic communities"
  }
]

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <section className="homeHero">
        <div>
          <h1>Welcome! This is Musiur Alam Opu a Software Engineer</h1>
          <p>
            As a Software Engineer with an eye for design and user experience, I
            craft quality software from front to back - every aspect considered.
            You can call me your Swiss Army Knife in terms of Software.
          </p>
          <div className="hh__btn__container">
            <Link href="/projects">
              <button className="btn__primary">Explore Projects</button>
            </Link>
            <Link href="/blog">
              <button className="btn__secondary">
                Read Articles<span>{ArrowRightLong}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* technologies */}
      <section className="technologies">
        <div>
          <h2>Technologies I Use Most</h2>
          <p>
          There are various technologies I have used based on project requirements. I have chosen the best technologies that I am comfortable most working with
          </p>
          <ul>
            {Object.values(TechImages).map((imageData, i) => {
              console.log(imageData);
              return (
                <li key={i}>
                  <Image src={imageData} alt="" width={80} height={80} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* projects I'am working on  */}
      <section className="workingProjects">
        <div>
          <h2>Currently Working On</h2>
          <p>These are my current working projects. You can expore my other works which includes personal, opensource and industrial projects</p>
          <button className="btn__secondary mx-auto">Explore more projects <span>{ArrowRightLong}</span></button>

          <div className="wp__projects_container">
            {
              WorkingProjects.map((projectData, i) => {
                return (
                  <ProjectCard props={projectData} key={i}/>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
