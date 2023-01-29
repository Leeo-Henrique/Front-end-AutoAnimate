import "./App.css";
import { useEffect, useState } from "react";
import { ListTechnologies } from "./components/listTechnologies";
import API from "./api";
function App() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    API.get("/api/technology/")
      .then((res) =>
        setTechnologies(res.data.sort((a, b) => a.index - b.index))
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTechnologies(
      technologies.sort((a, b) => {
        return a.index - b.index;
      })
    );
  }, [technologies]);

  return (
    <main className="App">
      <ListTechnologies
        technologies={technologies}
        setTechnologies={setTechnologies}
      />
    </main>
  );
}

export default App;
