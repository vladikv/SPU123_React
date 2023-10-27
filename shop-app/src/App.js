
import './App.css';
import Counter from './components/Counter';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import { USERS } from './users';

function App() {
  return (
    <div className="App">
        <UserList users={USERS}/>
        <hr/>
        <ProductList/>
        <hr/>
        <Counter/>
    </div>
  );
}

export default App;
