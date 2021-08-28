import Navbar from "./components/Navbar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="bg-black w-full h-screen text-white p-2">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
