import Questions from "./Questions";
import questions from "./data.js"

const App = () => {
  return <section>
    <Questions questions={questions} />
  </section>;
};
export default App;
