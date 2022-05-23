import Image from "next/image";
import { useState } from "react";

//main function
const Carousel = ({ props }) => {
  const [step, setStep] = useState(0);
  const SLIDE_STYLES = "white min-w-full h-auto";
  const SLIDE_TRANSFORM = { transform: `translateX(-${step * 100}%)` };

  const ImageArrayLength = Object.keys(props).length - 1;

  const nextStep = () => {
    ImageArrayLength > step && setStep(step + 1);
  };
  const prevStep = () => {
    step > 0 && setStep(step - 1);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="carousel__container" style={SLIDE_TRANSFORM}>
        {Object.values(props).map((imageData, i) => {
          return (
            <div key={i} className={`carousel__slide ${SLIDE_STYLES}`}>
              <Image src={imageData} alt="" layout="responsive" />
            </div>
          );
        })}
      </div>
      <div className="carousel__navigator">
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
