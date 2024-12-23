import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import './reset.css';

import DetailsSection from './components/DetailsSection';
import ImageSection from './components/ImageSection';

function App() {
  return (
    <div className="App row">
      <DetailsSection />
      <ImageSection />
    </div>
  );
}

export default App;
