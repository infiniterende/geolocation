import IPForm from './components/IPForm';
import {Container} from 'react-bootstrap';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <h2>Find Geolocation of IP Address</h2>
    <IPForm />
    </Container>
  );
}

export default App;
