import ContextProviders from "./ContextProviders/ContextProviders";
import AppMainLayout from "./Layouts/AppMainLayout/AppMainLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ContextProviders>
<Router>
        <AppMainLayout></AppMainLayout>

        </Router>
      </ContextProviders>
    </div>
  );
}

export default App;
