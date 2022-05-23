import {
  faBoxArchive,
  faBoxOpen,
  faCrown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import SkeletonLoader from "../../components/skeletonLoaders/SkeletonLoader";
import ImagesFromFolder from "../../utils/ImagesFromFolder";

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

const Abian2018Images = ImagesFromFolder(
  require.context("/static/projects/abian2018", false, /\.(png|jpe?g|svg)$/)
);

const Projects = () => {
  return (
    <div className="projects__container">
      <div>
        <div className="pc__side_nav">
          <h2>Project Category</h2>
          <ul>
            {categories.map((category, i) => {
              const { title, icon, amount } = category;
              return (
                <li key={i}>
                  <div className="pcsn__option">
                    <>{icon}</>
                    <p>{title}</p>
                  </div>
                  <div className="pcsn__badge">
                    <span>{amount > 10 ? "10+" : amount}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pc__canvas">
          <div className="pcc__container">
            <div className="pccc__showcase">
              {/* <SkeletonLoader /> */}
              <Carousel props={Abian2018Images} />
            </div>
            <div className="pccc__suggestion">
              <h2>Suggestions</h2>
              <ul>
                <li>
                  <h3>NSU Origin</h3>
                  <p>
                    NSU Origin is a group of people whom working on skillup,
                    practice...
                  </p>
                  <Link href="/projects/nsu-origin">Read more</Link>
                </li>
                <li>
                  {/* <h3>NSU Origin</h3>
                  <p>
                    NSU Origin is a group of people whom working on skillup,
                    practice...
                  </p>
                  <Link href="/projects/nsu-origin">Read more</Link> */}
                  <SkeletonLoader />
                </li>
                <li>
                  {/* <h3>NSU Origin</h3>
                  <p>
                    NSU Origin is a group of people whom working on skillup,
                    practice...
                  </p>
                  <Link href="/projects/nsu-origin">Read more</Link> */}
                  <SkeletonLoader />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
