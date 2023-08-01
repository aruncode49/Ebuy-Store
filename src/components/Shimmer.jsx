const Shimmer = () => {
  return (
    <div className="product-wrapper">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            style={{ width: "250px", height: "180px" }}
            className="card"
            key={index}
          >
            <div className="product-img"></div>
            <div className="product-title"></div>
            <div className="price"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
