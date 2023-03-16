import "./Movie.css";
import Navbar from "../navbar/Navbar";
import Body from "../body/Body";
const Movie = () => {
  return (
    <div className="movie">
      <div className="nav-hight">
        <Navbar />
      </div>
      <div className="all-content">
        <h3 className="title">Popular Movie</h3>
        <Body />
      </div>
    </div>
  );
};

export default Movie;
// git switch -c new-branch: git switch -c layout (I have create new branch (layout))
// git branch -a: to see list of branch.
