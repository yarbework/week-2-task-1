import logo from "./logo.svg";
import "./App.css";
import GroupMembersList from "./groupMembersList";

function App() {
  const groupMembers = [
    { name: "name1" },
    { name: "name2" },
    { name: "name3" },
    { name: "name4" },
  ];

  return (
    <div className="App">
      <h1>My App</h1>
      <GroupMembersList const members={groupMembers} />
    </div>
  );
}

export default App;
