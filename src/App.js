import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <MyView></MyView>
    </div>
  );
}

function MyView() {
  const myStyle = {
    'backgroundColor': "green",
    'color': 'red',
  };
  return (
    <div>
      <h3 style={myStyle}>sdaffffffffffffffasdfasdf</h3>
      <h1>hi hobbbsss</h1>
    </div>
  )
}

export default App;
