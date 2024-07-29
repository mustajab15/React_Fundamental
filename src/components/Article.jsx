let Article = () => {
  let nama = "mustajab";
  let titles = ["Belajar React", "Belajar Next Js", "Belajar Node js"];

  return (
    <>
      <div>{nama}</div>
      <div>
        {titles.map((title) => {
          return (
            <>
              <div>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Article;
