import React from "react";
import { useRoute } from "./router";

const App = () => {
  const routing = useRoute(null);
  return <>{routing}</>;
};

export default App;
