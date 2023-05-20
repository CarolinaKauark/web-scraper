import './App.css';
import { useState } from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const categoriesList = [ 'refrigerator', 'tv', 'mobile']
  const webList = [ 'Web', 'Todas', 'Mercado Livre', 'Bucapé']

  const [webColumn, setWebColumn] = useState('');
  const [categoryColumn, setcategoryColumn] = useState('');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = {
      web: webColumn,
      category: categoryColumn,
      query: search,
    }
    fetch('http://localhost:3001/', {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then((response) => setProducts(response.json().data))
  }

  const handleSearch = () => {
    getData();
  }

  return (
    <main>
      <section>

        <div>
          <select
            data-testid="web-column-filter"
            name="web-column"
            id="web-column"
            value={ webColumn }
            // onClick={ (e) => setColumn(e.target.value) }
            onChange={ (e) => setWebColumn(e.target.value) }
          >
            {webList
              .map((item) => (
                <option
                  key={ item }
                  value={ item }
                  data-testid="category-column-filter-options"
                >
                  {item}
                </option>))}
          </select>

          <select
            data-testid="category-column-filter"
            name="category-column"
            id="category-column"
            value={ categoryColumn }
            // onClick={ (e) => setColumn(e.target.value) }
            onChange={ (e) => setcategoryColumn(e.target.value) }
          >
            {categoriesList
              .map((item) => (
                <option
                  key={ item }
                  value={ item }
                  data-testid="category-column-filter-options"
                >
                  {item}
                </option>))}
          </select>
        </div>

        <div>
          <input 
            data-testid="value-filter"
            type="search" 
            id="value-filter"
            placeholder='Qual produto você procura?' 
            value={ search } 
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            data-testid="button-filter"
            type='button'
            onClick={() => handleSearch()}
          >Search</button>
        </div>        
      </section>

      <section>
        { products.length > 0 && (
            products.map((product) => (<ProductCard product={product} />))
        )}

      </section>          

    </main>
  );
}

export default App;
