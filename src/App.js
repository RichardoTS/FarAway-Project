import Form from "./modules/Form";
import Logo from "./modules/Logo";
import PackingList from "./modules/PackingList";
import Stats from "./modules/Stats";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
