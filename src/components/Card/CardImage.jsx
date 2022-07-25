import avatar from "../../images/avatar.png";

const CardImage = () => {
  return (
    <figure className="card-figure">
      <img src={avatar} alt="Laura Smith" />
    </figure>
  );
};

export default CardImage;
