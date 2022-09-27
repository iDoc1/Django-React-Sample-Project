import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewQuotesPage from './pages/ViewQuotesPage';
import AddQuotePage from './pages/AddQuotePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/view-quotes' element={<ViewQuotesPage />} />
            <Route path='/add-quote' element={<AddQuotePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
