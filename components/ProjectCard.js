import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const iconDimention = "w-4 h-4";
const ArrowRightLong = (
  <FontAwesomeIcon icon={faArrowRightLong} className={iconDimention} />
);

const ProjectCard = ({ props }) => {
  const { title, description, image, link } = props;
  return (
    <div className="pc__container">
      <div>
        <Image src={image} alt="" width={500} height={300} />
      </div>
      <div className="pcc__body">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link href={link}>
          <button>
            Read more <span>{ArrowRightLong}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
