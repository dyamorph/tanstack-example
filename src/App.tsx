import {useQuery} from "@tanstack/react-query";
import {client} from "./shared/api/client.ts";

function App() {

  return <>
    <h1>TEst</h1>
    <Playlists />
  </>;
}

const Playlists = () => {
  const query = useQuery({
    queryKey: ['playlists'],
    queryFn: () => client.GET("/playlists")
  })

  return (
      <ul>
        {query.data?.data?.data.map((playlist) => (
          <li>{playlist.attributes.title}</li>
        ))}
      </ul>
  )
}

export default App;
