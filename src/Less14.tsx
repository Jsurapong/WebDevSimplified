import useLocalStorage from "./hooks/useLocalStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";

const Less14 = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
};

export default Less14;
