import New from "./new";

function News({ newsInfo }) {
  return (
    <table className="news">
      <th>New</th>
      {newsInfo.map((info, index) => {
        <tr key={index}>
          <New newInfo={info} />
        </tr>;
      })}
    </table>
  );
}

export default News;
