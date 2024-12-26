import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async (res) => {
        let result = await res.json();
        console.log(result);
        setData(result);
      })
      .catch((e) => {
        console.log(e);
      });

    setLoading(false);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div> Loading Datae</div>
      ) : (
        <table>
          <th>
            <td>Title</td>
            <td>Body</td>
          </th>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}
