import styles from "./App.module.css";
import Form from "./Components/Form/Form";
import Text from "./Components/Text/Text";
function App() {
  return (
    <div className={styles.app}>
      <Text />
      <Form />
    </div>
  );
}

export default App;
