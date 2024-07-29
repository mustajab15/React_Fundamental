let Props = (Props) => {
  return (
    <>
      <div>{Props.name}</div>
      <div>
        {Props.titles.map((title) => {
          return <div>{title}</div>;
        })}
      </div>
    </>
  );
};

export default Props;
