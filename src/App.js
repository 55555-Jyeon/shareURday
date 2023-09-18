import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import ContextProvider from "./context/ctxPost";

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
