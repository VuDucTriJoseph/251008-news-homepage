function FirstNew({ firstNewInfo }) {
  // console.log(firstNewInfo);
  return (
    <div className="first-new">
      <picture>
        <source media="(min-width:400px)" srcSet={firstNewInfo.imgLink} />
        <img src={firstNewInfo.imgLinkMobile} alt="image first new" />
      </picture>
      <h1>{firstNewInfo.title}</h1>
      <p>{firstNewInfo.interpret}</p>
      <button>Read more</button>
    </div>
  );
}
export default FirstNew;
