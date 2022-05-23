import { faCircleDot, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import ImagesFromFolder from "../../utils/ImagesFromFolder";

const iconDimention = "w-4 h-4";
const WebsiteLink = <FontAwesomeIcon icon={faLink} className={iconDimention} />;
const CircleDot = (
  <FontAwesomeIcon icon={faCircleDot} className={iconDimention} />
);

const Abian2018Images = ImagesFromFolder(
  require.context("/static/projects/abian2018", false, /\.(png|jpe?g|svg)$/)
);
const Abian2018Features = [
  "Several Landing pages designed UI/UX maintaining design principles",
  "User authentication system",
  "Dashboard with two different view for admin and normal users",
  "Collecting Donation information, manage automatically with admin permission, storing all the important and sensitive information private",
];
const Project = () => {
  const router = useRouter();
  const slug = router.query.project;
  return (
    <div className="project__container">
      <div className="pc__canvas">
        <div className="pcc__container">
          <div className="pccc__showcase">
            <div>
              <h1>ABIAN2018FUND</h1>
              <a
                href="https://abian2018.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pcccs_link">
                  {WebsiteLink}
                  <span>Visit now!</span>
                </p>
              </a>
            </div>
            <div>
              <h3>Description</h3>
              <p>
                This is an organizational project. ABIAN2018FUND originated from
                school friends to help society without any political and
                profitible agenda.
              </p>
            </div>
            <Carousel props={Abian2018Images} />

            <div>
              <h3>My role</h3>
              <p>
                I have been working starting from requirement analysis to
                maintaining since December 2021. In this journey I have sorted
                out all the key fetures we need, made system design and
                architectural decision, implement UI/UX in frontend using
                currently most popular technologies.
              </p>
            </div>
            <div>
              <h3>Features</h3>
              <ul>
                {Abian2018Features.map((feature, i) => {
                  return (
                    <li key={i}>
                      <span>{CircleDot}</span>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3>Technologies</h3>
              <p>React, Next.js, Node JS, SCSS, etc.</p>
            </div>
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
                <h3>NSU Origin</h3>
                <p>
                  NSU Origin is a group of people whom working on skillup,
                  practice...
                </p>
                <Link href="/projects/nsu-origin">Read more</Link>
              </li>
              <li>
                <h3>NSU Origin</h3>
                <p>
                  NSU Origin is a group of people whom working on skillup,
                  practice...
                </p>
                <Link href="/projects/nsu-origin">Read more</Link>
              </li>
              <li>
                <h3>NSU Origin</h3>
                <p>
                  NSU Origin is a group of people whom working on skillup,
                  practice...
                </p>
                <Link href="/projects/nsu-origin">Read more</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
