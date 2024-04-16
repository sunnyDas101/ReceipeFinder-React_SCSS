import { useState } from "react";
import "./App.scss";

import Header from "./components/header/Header";
import Tabs from "./components/tabs/Tabs";
import ReceipeList from "./components/receipeList/ReceipeList";

function App() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="App">
      <Header />
      <Tabs loader={loader} setLoader={setLoader} />
      <ReceipeList loader={loader} setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
