import { img_300 } from "./Config";

const SingleContent = ({ id, poster, title }) => {
  return (
    <>
      <div>
        <img src={`${img_300}/${poster} `} alt="404" />
        <b>{title}</b>
        {id}
      </div>
      <div>
        <h1>SingleContent</h1>
      </div>
    </>
  );
};
export default SingleContent;
