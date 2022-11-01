import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate} from 'react-router-dom'
// import EditMovie from "./EditMovie"

const ListItem = ({ props }) => {
  const [view, setView] = useState(false);

  const navigate = useNavigate();

    const editMovie = () => {
      navigate('/edit')
    }

  const simpleView = () => {
    return (
      <div className="movie-simple" key={props.i}>
        <h2>{props.title}</h2>
      </div>
    );
  };


  
  const detailedView = () => {

    const editMovie = async (id) => {
      Navigate("/edit", props)
    };

    const deleteMovie = async (id)=> {
      console.log('We are about to delete!!!!!', id)
      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
          
        };
       // do our fetch stuff!!
      const data = await fetch(`/movie/${id}`, requestOptions)
       console.log('time to delete movie!!', data)
       window.location.reload()
  }


    return (
      <div className="item-container">
        <div className="top-info">
          <div className="left">
            <img
              className="image"
              src={`http://via.placeholder.com/350x500`}
              alt={`${props.title} cover`}
              height={"350px"}
            />
          </div>
          <div className="right">
            <div className="right-info">
              <h2 className="title">{props.title}</h2>
              <h4 className="release-info">{props.date_released}</h4>
              <h4 className="genre">{props.genre}</h4>
              <h4 className="length">{props.duration}</h4>
              <h3 className="tagline">
                {props.tagline !== ""
                  ? props.tagline
                  : "This movie does not have a tagline."}
              </h3>
            </div>
            <div className="item-buttons">
            <button onClick={ () => editMovie(props._id) } className="edit-movie">edit</button>
              <button onClick={ () => deleteMovie(props._id) } className="delete-movie">delete</button>
            </div>
          </div>
        </div>
        <h3 className="overview">{props.description}</h3>
      </div>
    );
  };
  return (
    <div className="view-container" onClick={() => setView(!view)}>
      {view ? detailedView() : simpleView()}
    </div>
  );
};

export default ListItem;
