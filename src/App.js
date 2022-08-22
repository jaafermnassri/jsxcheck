import logo from './logo.svg';
import './App.css';
import NomPrenom from './component/Profile/FullName'
import Adresse from './component/Profile/Address'
import PhotoPro from './component/Profile/ProfilePhoto'
function App() {
  return (
    <div className="App">
     <NomPrenom />
     <Adresse />
     <PhotoPro />
    </div>
  );
}

export default App;
