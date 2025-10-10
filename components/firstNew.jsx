function FirstNew({ firstNewInfo }) {
  return (
    <div className="first-new">
      <img src={firstNewInfo.imgLink} alt="image first new" />
      <h1>{firstNewInfo.title}</h1>
      <p>{firstNewInfo.interpret}</p>
      <button>Read more</button>
    </div>
  );
}
export default FirstNew;
