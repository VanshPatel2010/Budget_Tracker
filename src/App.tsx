import React from 'react';
import './styles.css';
import BudgetTrackerNew from './components/BudgetTrackerNew';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <BudgetTrackerNew />
      </main>
    </div>
  );
};

export default App;
