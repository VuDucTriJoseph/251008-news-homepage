const BASIC_URL = "/data.json";

export async function fetchData(url = BASIC_URL) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
