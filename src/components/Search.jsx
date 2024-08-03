import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        cari artikel : <input className="input input-bordered w-full max-w-xs" onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeydown}></input>
        <button className="btn btn-primary" onClick={onSearchChange}>
          Cari
        </button>
      </div>
      <small>
        Di temukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
