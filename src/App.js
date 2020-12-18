import logo from './logo.svg';
import './App.css';
import PostBlurb from './components/PostBlurb/PostBlurb';
import NavContainer from './components/NavContainer/NavContainer';

function App() {
  return (
    <div className="App">
      <NavContainer />
      <PostBlurb title="First Post!" />
      <PostBlurb title="Second Post" />
      <PostBlurb title="Last Post" />
    </div>
  );
}

export default App;
