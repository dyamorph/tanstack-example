import "./App.css";
import {useQuery} from "@tanstack/react-query";
import {client} from "./shared/api/client.ts";

function App() {
  const query = useQuery({
    queryKey: ['playlists'],
    queryFn: () => client.GET("/playlists")
  })

  return <>TEST</>;
}

export default App;
