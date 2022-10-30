import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ListItem from "./ListItem";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/movie", {
        mode: "cors",
      });
      const jsonData = await data.json();
      console.log(jsonData);
      setMovies(jsonData);
    };
    fetchData();
  }, []);

//   console.log('fetch!!',fetchData)
  const displayMovies = movies.map((movie, i) => {
    return <ListItem props={movie} key={i} />;
  });

  return (
    <>
      <NavBar />
      <div className="movie-library">{displayMovies}</div>
    </>
  );
};

export default Home;
