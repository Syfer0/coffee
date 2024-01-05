import "../css/title.css";
import "../scss/title.scss";

export function Title() {
  return (
    <div className="title col">
      <div className="title__wrapper">
        <p className="label">Best place to buy design</p>
        <h1>Coffee Mugs</h1>
        <p>
          The most versatile furniture system ever created. Designed to fit your
          life, made to move and grow.
        </p>
        <a href="#">
          <button className="btn">Explore our products</button>
        </a>
      </div>
    </div>
  );
}
