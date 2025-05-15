import './App.css';
import { puzzles } from './constants/puzzles';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '50px',
      paddingBottom: '50px'
    }}>
      <h1>50 React Puzzles</h1>
      {
        puzzles.map((puzzle, index) => {
          const PuzzleComponent = puzzle.component;
          return (
            <section key={index} style={{ display: 'flex', flexDirection: 'column', width: '80vw', marginBottom: '2rem'}}>
              <h2>{puzzle.title}</h2>
              <p>{puzzle.description}</p>
              <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
                <PuzzleComponent />
              </div>
            </section>
          );
        })
      }
    </div>
  );
}

export default App;
