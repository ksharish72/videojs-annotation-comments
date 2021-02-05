import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./VideoPlayer";

function App() {
  
  const videoJsOptions = {
    controls: true,
    width: 600,
    height: 405,
    sources: [
      {
        src: "Vinnaithandi Varuvayaa.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="App">
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
}

export default App;
