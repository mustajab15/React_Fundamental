let articelStatus = ({ isNew }) => {
  return isNew && <span>"Post Baru"</span>;
};

let NewArticle = () => {
  return <span>"Post Baru qaqa"</span>;
};

let Article = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date:{props.date},tags:{props.tags.join(",")},{props.isNew ? "postBaru!!" : "postlama!!"}
      </small>
      <articelStatus isNew={props.isNew} />
      {props.isNew && <NewArticle />}
    </>
  );
};

export default Article;
