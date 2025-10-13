function FirstNew({ firstNewInfo }) {
  // console.log(firstNewInfo);
  return (
    <div className="first-new">
      <picture>
        <source media="(min-width:1199px)" srcSet={firstNewInfo.imgLink} />
        <img
          className="img"
          src={firstNewInfo.imgLinkMobile}
          alt={`Image for article: ${firstNewInfo.title}`}
          loading="lazy"
        />
      </picture>
      <h1>{firstNewInfo.title}</h1>
      <p>{firstNewInfo.interpret}</p>
      <button
        className="btn-sec"
        aria-label={`Read more about ${firstNewInfo.title}`}
        type="button"
      >
        Read more
      </button>
    </div>
  );
}
export default FirstNew;
