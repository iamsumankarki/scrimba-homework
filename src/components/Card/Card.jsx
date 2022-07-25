import CardImage from "./CardImage.jsx";
import CardHead from "./CardHead.jsx";
import CardButtons from "./CardButtons.jsx";
import CardBody from "./CardBody.jsx";
import CardSocial from "./CardSocial.jsx";

const Card = () => {
  return (
    <div className="card">
      <CardImage />
      <CardHead />
      <CardButtons />
      <CardBody />
      <CardSocial />
    </div>
  );
};

export default Card;
