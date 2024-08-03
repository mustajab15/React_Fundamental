import { useContext } from "react";
import { GlobalContext } from "../context";

let articelStatus = ({ isNew }) => {
  return isNew && <span>"Post Baru"</span>;
};

let Article = (props) => {
  const user = useContext(GlobalContext);
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date:{props.date},tags:{props.tags.join(",")},{""}
        <articelStatus isNew={props.isNew} />
      </small>
      <div>
        <small>di tulis {user.username}</small>
      </div>
    </>
  );
};

export default Article;
