import './App.css';
import { FirstComponent, NamedComponent, SecondComponent } from './taskone';
import DisplayPerson from './taskthree';
import Tweet from './tasktwo';


function App() {
  return (
    <div className="App">
      <div className="taskone">
        <h1>Task One</h1>
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name={"Kayode"} />
      </div>
      <div className="tasktwo">
        <h1>Task Two</h1>
        <Tweet username={"nairamarley"} name={"Naira Marley"} date={"16/12/2020"} message={"First tweet"}  />
        <Tweet username={"davido"} name={"David Adeleke"} date={"16/12/2020"} message={"Second Tweet"}  />
        <Tweet username={"wizkid"} name={"Ayo Balogun"} date={"16/12/2020"} message={"Third Tweet"}  />
      </div>
      <div className="taskthree">
        <h1>Task Three</h1>
        <DisplayPerson />
      </div>
      <div className="taskfour">
        <h1>Task Four</h1>
        <a href="https://docs.google.com/document/d/1zTCZanxS81UnvaBOlo-fFPnKxvbKrZ6Yu066UwFFWeU/edit?usp=sharing" rel="noreferrer" target="_blank">Webpack Exdercise</a>
      </div>
    </div>
  );
}

export default App;
