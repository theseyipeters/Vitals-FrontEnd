// import './App.css';
import Doctor from "./components/doctor/Doctor";

function App() {
  return (
    <div className="App">
      <section className="for-sidebar"></section>
      <section>
        {/* <Dashboard head="Dashboard" /> */}
        <Doctor head="Doctor" />
      </section>
    </div>
  );
}

export default App;
