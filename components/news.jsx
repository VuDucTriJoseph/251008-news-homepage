import New from "./new";

function News({ newsInfo }) {
  // console.log(typeof newsInfo, newsInfo);
  return (
    <div className="news">
      <table className="news">
        <thead>
          <tr>
            <th>New</th>
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
