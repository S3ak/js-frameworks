import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>This is a demo of tailwind</h1>
      </header>

      <main>
        <div className="card">
          <figure className="c-card flex m-auto bg-slate-800 rounded max-w-md">
            <img
              className="w-50 h-50"
              src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
              alt="avatar"
              width="250px"
              height="250px"
            />

            <div className="text-white">
              <h2 className="font-bold text center mt-3">John Doe</h2>

              <p className="text-center text-lg mt-5">This is a long text</p>

              <button className="rounded-sm bg-indigo-500 mt-6 text-black hover:bg-cyan-300 p-4">
                Click Me
              </button>
            </div>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default App;
