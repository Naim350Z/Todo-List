import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "../src/Components/form";
import DynamicDiv from "../src/Components/dynamicDiv";
import "./App.css";
import Avatar from "./assets/avatar.jpeg";

function App() {
  return (
    <div className="background">
      <div className="App">
        <div className="flex-head">
          <div className="text-content">
            <p className="titrePrincipal ">Hi Claire</p>
            <p className="titreSecondaire ">Here are your tasks for today,</p>
          </div>
          <div className="image-content">
            <img src={Avatar} alt="Avatar" className="avatar" />
          </div>
        </div>
        <DynamicDiv dyn={DynamicDiv.txt} />
        <Form />
      </div>
    </div>
  );
}

export default App;
