import Banner from "./components/icons/icon/header.svg";
// import Banner from "./components/icons/banner";
import Clipboard from "./components/icons/clipboard";
import Idea from "./components/icons/idea";
import Rewards from "./components/icons/rewards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__content">
          <h2>The Easiest Way to Bring Employees Up to Speed </h2>
          <button>hitme</button>
        </div>
        <img src={Banner} className="App-header__logo" alt="logo" />
      </header>
      <section>
        <h1>Lets cards</h1>
        <Clipboard />
        <Rewards />
        <Idea />
        <h1>Lets section body</h1>
        <h1>Lets section we here</h1>
        <h1>Lets section growth</h1>
        <h1>footer</h1>
      </section>
    </div>
  );
}

export default App;
