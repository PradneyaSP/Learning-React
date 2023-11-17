import React, { useState, useEffect } from "react";

export default function App() {
  const [resource, setResource] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + resource)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [resource]);

  return (
    <div>
      <button
        onClick={() => {
          setResource("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResource("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setResource("comments");
        }}
      >
        Comments
      </button>
      <h1>{resource}</h1>
      {data.map((item) => {
        return <pre key = {item.id}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
