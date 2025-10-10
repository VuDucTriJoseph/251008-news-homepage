import Artical from "./artical";

function Articals({ articalsInfo }) {
  return (
    <div className="articals">
      {articalsInfo.map((info) => {
        <Artical articalData={info} key={info.order} />;
      })}
    </div>
  );
}
export default Articals;
