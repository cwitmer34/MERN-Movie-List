import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ListItem from "./ListItem";

const Home = () => {
  const [movies, setMovies] = useState([]);

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
