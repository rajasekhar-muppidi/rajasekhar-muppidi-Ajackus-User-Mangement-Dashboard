import UserTable from "./components/usertable";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50">
      <div className="bg-blue-300 text-white px-4 py-2 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">AJACKUS</div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <UserTable />
      </div>
    </div>
  );
}

export default App;
