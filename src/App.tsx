import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter title="Coffee cups" />
      <Counter title="Push-ups" start={10} />
    </div>
  );
}

export default App;