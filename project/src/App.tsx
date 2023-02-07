import RoutesComponent from "./routes";
import Global from "./styles/global";
import { UserProvider } from "./contexts/usuario";
import { ClienteProvider } from "./contexts/cliente";
function App() {
  return (
    <UserProvider>
      <ClienteProvider>
        <Global/>
        <RoutesComponent/>
      </ClienteProvider>
    </UserProvider>
  );
}

export default App;
