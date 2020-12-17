import logo from './logo.svg';
import './App.css';
import PostBlurb from './components/PostBlurb/PostBlurb';

function App() {
  return (
    <div className="App">
      <PostBlurb title="First Post!" />
      <PostBlurb title="Second Post" />
      <PostBlurb title="Last Post" />
    </div>
  );
}

export default App;
