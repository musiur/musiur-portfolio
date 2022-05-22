import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
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
    </>
  );
};

export default Home;
