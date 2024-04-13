import { useState } from 'react';
import { Title } from './Title';
import items from "./data"
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)


  const filterItems = (selection) => {
    if (selection === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === selection);
    setMenuItems(newItems);
  };


  return (
  <main>
    <section className='menu'>
      <Title     />
      <Menu menu={menuItems} />
      <Categories categ={categories} func={filterItems} />
    </section>
  </main>
)};

export default App;
