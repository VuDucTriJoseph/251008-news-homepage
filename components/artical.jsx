function Artical({ articalData }) {
  return (
    <article>
      <img src={articalData.imgLink} alt={`image for ${articalData.title}`} />
      <h2>{articalData.order}</h2>

      <h3>
        <a href="#">{articalData.title}</a>
      </h3>
      <p>{articalData.interpret}</p>
    </article>
  );
}
export default Artical;
