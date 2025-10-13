import New from "./new";

function News({ newsInfo = [] }) {
  // console.log(typeof newsInfo, newsInfo);
  if (!newsInfo.length) {
    return (
      <section className="news" aria-live="polite">
        <p role="status">No news available at the moment.</p>
      </section>
    );
  }
  return (
    <div className="news" aria-labelledby="news-heading" role="region">
      <h2 id="news-heading" className="sr-only">
        Latest News
      </h2>
      <table className="news">
        <caption className="sr-only">List of news articles</caption>
        <thead>
          <tr>
            <th scope="col">New</th>
          </tr>
        </thead>
        <tbody>
          {newsInfo.map((info, index) => (
            <tr key={index}>
              <New newInfo={info} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default News;
