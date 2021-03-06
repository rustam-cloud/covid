import "./App.css";
import "./resets.css";
import Header from "./Components/Header/Header";
import CardList from "./Components/CardList/CardList";
import Lang from "./Components/Lang/Lang";
import BtnTabs from "./Components/BtnTabs/BtnTabs";
import GeneralInfo from "./Components/GeneralInfo/GeneralInfo";
import Search from "./Components/Search/Search";
import TableHead from "./Components/TableHead/TableHead";

function App() {
  return (
    <div className="container">
      <Lang />
      <Header title="CORONA" />
      <BtnTabs />
      <GeneralInfo />
      <Search />
      <table>
        <thead>
          <TableHead />
        </thead>
        <CardList />
      </table>
    </div>
  );
}

export default App;
