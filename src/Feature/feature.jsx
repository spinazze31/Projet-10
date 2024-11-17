function Feature({ title, description, source }) {
  return (
    <>
      <div className="feature-item">
        <img src={source} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Feature;
