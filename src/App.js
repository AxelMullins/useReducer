import Contador from "./components/Contador";

function App() {
  return (
    <>
      <Contador
        initialCount={10}
        initialUserInput={"Hola"}
        initialColor={true}
      />
      <Contador
        initialCount={99}
        initialUserInput={"Chau"}
        initialColor={false}
      />
    </>
  );
}

export default App;
