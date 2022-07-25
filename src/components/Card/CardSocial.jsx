import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import github from "../../images/github.svg";

const CardSocial = () => {
  return (
    <ul className="card-social">
      <li className="card-social__item">
        <a href="https://www.twitter.com" target="_blank">
          <img src={twitter} alt="Twitter Logo" />
        </a>
      </li>
      <li className="card-social__item">
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="Facebook Logo" />
        </a>
      </li>
      <li className="card-social__item">
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="Instagram Logo" />
        </a>
      </li>
      <li className="card-social__item">
        <a href="https://www.github.com" target="_blank">
          <img src={github} alt="Github Logo" />
        </a>
      </li>
    </ul>
  );
};

export default CardSocial;
