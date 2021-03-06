import ContextProviders from "./ContextProviders/ContextProviders";
import AppMainLayout from "./Layouts/AppMainLayout/AppMainLayout";

function App() {
  return (
    <div className="App">
      <ContextProviders>
        <AppMainLayout></AppMainLayout>
      </ContextProviders>
    </div>
  );
}

export default App;
