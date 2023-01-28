import Calculator from "./components/Calculator";
import Header from "./components/Header";
import PageWrapper from "./components/layout/PageWrapper";
import ThemeChooser from "./components/ThemeChooser";

function App() {
  return (
    <PageWrapper>
      <Header />
      <ThemeChooser />
      <Calculator />
    </PageWrapper>
  );
}

export default App;
