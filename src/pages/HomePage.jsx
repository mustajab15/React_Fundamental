import posts from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

let Homepage = () => {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Halaman Blog </h1>
      <div>
        cari artikel : <input onChange={changeSearch}></input>
        {""}
      </div>
      <small>Di temukan 0 data dengan pencarian kata {search}</small>
      {posts.map(({ title, tags, date }, index) => (
        <Article {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
};

export default Homepage;
