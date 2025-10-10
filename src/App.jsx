import { useEffect, useState } from "react";

// import components
import NavBar from "../components/navBar";
import FirstNew from "../components/firstNew";
import News from "../components/news";
import Articals from "../components/articals";
import Loading from "../components/loading";

// import funtions
// import { fetchData } from "./fetchData";

function App() {
  console.log("App loaded!");
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("check useEffect work");
    const loadData = async () => {
      // const result = await fetchData("/public/data.json");
      // setData(result);

      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  // console.log(data);
  return (
    <main className="app">
      <NavBar />
      {data ? (
        <Loading />
      ) : (
        <section>
          {/* {console.log("section render")} */}
          <FirstNew firstNewInfo={data.firstNew} />
          <News newsInfo={data.news} />
          <Articals articalsInfo={data.articals} />
        </section>
      )}
    </main>
  );
}

export default App;
