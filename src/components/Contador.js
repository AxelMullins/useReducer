import { useReducer } from "react";
import { ACTION } from "../reducers/contadorActions";
import { contadorReducer, initialState } from "../reducers/contadorReducer";

const Contador = ({ initialCount, initialUserInput, initialColor }) => {
  // Tomar el valor por props para reutilizar el componente
  const [state, dispatch] = useReducer(contadorReducer, {
    count: initialCount,
    userInput: initialUserInput,
    color: initialColor,
  });

  //   Tomar el valor de initialState creado en el reducer (todos los componentes van a tener el mismo initalState)
  //   const [state, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <main
      style={{
        color: state.color ? "black" : "white",
        background: state.color ? "white" : "black",
        padding: "100px",
        height: "20vh",
      }}
    >
      <h1>UseReducer</h1>
      <br />
      <input
        type="text"
        name="user"
        id="user"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <br />
      <section>
        <button
          onClick={() => dispatch({ type: ACTION.DECREMENT })}
          style={{ padding: "10px 15px" }}
        >
          -
        </button>{" "}
        <button
          onClick={() => dispatch({ type: ACTION.INCREMENT })}
          style={{ padding: "10px 15px" }}
        >
          +
        </button>
      </section>
      <br />
      <br />
      <button onClick={() => dispatch({ type: ACTION.CHANGE_COLOR })}>
        Change color
      </button>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
};

export default Contador;
