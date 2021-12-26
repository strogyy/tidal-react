import React from "react";
import Main from "./Components/main/Main.jsx";
import Secondary from "./Components/secondary/Secondary.jsx";
import Footer from "./Components/footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Main logo="TIDAL" />
      <Secondary />
      <Footer />
    </div>
  );
};

export default App;
