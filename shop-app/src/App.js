
import './App.css';
import Counter from './components/Counter';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import { USERS } from './users';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Main page</h1>} />
        <Route path="users" element={<UserList users={USERS} />} />
        <Route path="products" element={<ProductList />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<h1>Not found page</h1>} />

      </Route>
    </Routes>
  );
}

export default App;
