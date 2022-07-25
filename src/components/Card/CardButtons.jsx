import envelope from "../../images/envelope.svg";
import linkedin from "../../images/linkedin.svg";

const CardButtons = () => {
  return (
    <div className="card-buttons">
      <a href="#" className="btn btn--white">
        <img src={envelope} alt="" />
        Email
      </a>
      <a href="#" className="btn btn--primary">
        <img src={linkedin} alt="" />
        Linkedin
      </a>
    </div>
  );
};

export default CardButtons;
