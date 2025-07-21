import { useEffect } from "react";
import "./App.css";
import { client } from "./shared/api/client";

function App() {
  useEffect(() => {
    // fetch("https://musicfun.it-incubator.app/api/1.0/playlists", {
    //   headers: {
    //     'api-key': '5613ead4-6ff3-4be1-bfef-c79bb284fb72'
    //   }
    // }).then(function(response) {
    //   return response.json()
    // }).then(function(data) {
    //   console.log(data)
    // })
    client
      .GET("/playlists")
      .then((response) => response.data)
      .then((data) => console.log(data));
  }, []);

  return <>TEST</>;
}

export default App;
