const Title = (props) => {
  const { firstPart, secondPart } = props;

  return (
    <div className="section-title">
      <h2>
        {firstPart} <span>{secondPart}</span>
      </h2>
    </div>
  );
};
export default Title;
