import { useContext } from "react";
import styles from "./MapMovie.module.css";
import { MovieContext } from "../dataContext/DataContext";

export default function MapMovie() {
  let movieContext = useContext(MovieContext);

  if (!movieContext) {
    return <div>NO MOVIE FOUND</div>;
  }

  let { input, loading, movie } = movieContext;

  if (loading) {
    <div>Loading Please Wait.........</div>;
  }
  if (!input) {
    return (
      <div>
        <small> Input Field cannot be empty</small>
      </div>
    );
  }

  return (
    <div className={`${styles.mapMovieComp} container`}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movie.length > 0
          ? movie.map((items: any) => (
              <div className="col">
                <div className="card h-100">
                  <img src={items.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title"> {items.Title} </h5>
                    <p className="card-text">{items.Type}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">{items.Year}</small>
                  </div>
                </div>
              </div>
            ))
          : !loading && <p>No movies found. Try another title.</p>}
      </div>
    </div>
  );
}
