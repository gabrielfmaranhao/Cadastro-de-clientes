import RoutesComponent from "./routes";
import Global from "./styles/global";
import { UserProvider } from "./contexts/usuario";
import { ClienteProvider } from "./contexts/cliente";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <UserProvider>
      <ClienteProvider>
        <Global/>
        <RoutesComponent/>
        <ToastContainer/>
      </ClienteProvider>
    </UserProvider>
  );
}

export default App;
