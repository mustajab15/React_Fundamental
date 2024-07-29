let Article = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date:{props.date},tags:{props.tags.join(",")}
      </small>
    </>
  );
};

export default Article;
