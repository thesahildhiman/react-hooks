import React, { useEffect, useMemo, useState } from "react";

const DataChild = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    console.log("--fetch data--");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   filter records data computation
  const filterData = (data) => {
    console.log("--filter--");
    return data?.filter((item) => item.completed);
  };

  const memoizeFilter = useMemo(() => filterData(data), [data]); // it memoize filterData result

  const handleClick = () => setCount((c) => c + 1);

  return (
    <>
      <div>
        <h2>DataChild</h2>
      </div>

      <div>
        count: {count}
        <button onClick={handleClick}>click here</button>
      </div>

      <div>
        <ul>
          {/* {data?.map((item, idx) => {
            console.log(">>>>>");
            return <li key={idx}>{item.title}</li>;
          })}

          {filterData().map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))} */}
          {memoizeFilter?.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DataChild;
