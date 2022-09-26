import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewQuotesPage from './pages/ViewQuotesPage';
import AddQuotePage from './pages/AddQuotePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/view-quotes' element={<ViewQuotesPage />} />
            <Route path='/add-quote' element={<AddQuotePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
