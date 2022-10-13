import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-white border-0">
        <img
          src="/assets/bg4.jpg"
          className="card-img"
          alt="Background"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON FASHION
            </h5>
            <p className="card-text lead fw-2">
              CHECK OUT ALL THE FASHION TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
