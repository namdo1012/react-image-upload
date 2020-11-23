import "./App.css";
import { ImageUpload } from "./ImageUpload";
import { ImageInfo } from "./ImageInfo";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "30px 30px",
        justifyContent: "center",
      }}
    >
      <ImageUpload />
      <ImageInfo />
    </div>
  );
}

export default App;
