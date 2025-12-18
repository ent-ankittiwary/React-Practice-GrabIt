import { Link } from "react-router-dom";
import { MENU_API } from "./utils/constants";
const ResCard = ({ resDetail }) => {
  const { image, name, rating, cft, locality } = resDetail.info;
  // const resId = resDetail?.info?.resId;
  console.log(resDetail);
  const menuUrl = resDetail?.order?.actionInfo?.clickUrl;
  // console.log(typeof menuUrl); // to find datatype of variable in javascript use typeof <variable name>;
  // const finalUrl=`${MENU_API}${menuUrl}`;
  // console.log(finalUrl);
  return (
    <div>
      <Link to={`${menuUrl}`}>
        <div className="res-card">
          <div className="img-logo">
            <img src={image.url} alt="img-logo" />
          </div>
          <h2>{name}</h2>
          <h4>{rating.rating_text}</h4>
          <h5>{cft.text}</h5>
          <h5>{locality.name}</h5>
        </div>
      </Link>
    </div>
  );
};
export default ResCard;
