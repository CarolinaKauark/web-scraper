import './App.css';
import { useState } from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const categoriesList = [ 'Categorias', 'Geladeira', 'Tv', 'Eletrodomesticos', 'Celular']
  const webList = [ 'Web', 'Todas', 'Mercado Livre', 'Buscapé']

  const [webColumn, setWebColumn] = useState('');
  const [categoryColumn, setcategoryColumn] = useState('');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const cleanState = () => {
    setWebColumn('');
    setcategoryColumn('');
    setSearch('');
  }

  const getData = async () => {

    const data = {
      web: webColumn,
      category: categoryColumn,
      query: search,
    }
    //if you are running local, please enter change this url for localhost
    fetch('https://web-scraper-nd51-git-main-carolinakauark.vercel.app/', {
      method: "POST", 
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json()).then((data) => {
      setProducts(data);
      setLoading(false)
      cleanState();
    }).catch(() => {
      setProducts([]);
      setLoading(false);
    })
  }

  const handleSearch = () => {
    
    if(!(webColumn && categoryColumn && search)) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setLoading(true);
      getData();
    }
  }

  return (
    <main class='flex-center'>
      <h1 class='logo'>Web Scraper</h1>

      <section class='section-selectors'>
        <div class='div-selectors'>
          <select
            class='input-select'
            data-testid="web-column-filter"
            name="web-column"
            id="web-column"
            value={ webColumn }
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
            class='input-select'
            data-testid="category-column-filter"
            name="category-column"
            id="category-column"
            value={ categoryColumn }
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

        <div class='div-selectors'>
          <input 
            class='input-input'
            data-testid="value-filter"
            type="search" 
            id="value-filter"
            placeholder='Qual produto você procura?' 
            value={ search } 
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            class='search-button'
            data-testid="button-filter"
            type='button'
            onClick={() => handleSearch()}
          >Search</button>
        </div>        
      </section>

      {
        errorMessage && ( <p className='loading red'>*Preencha todos os campos</p>)
      }

      { (products.length === 0 && !loading) && <div>
          <p className='loading'>Total de 0 produtos. Faça uma busca!</p>
        </div>}

      {loading && (
        <div>
          <div class='loader'></div>
          <p className='loading'>Carregando...</p>
        </div>
      )}

      <section class='card-section'>
        { products.length > 0 && (
            products.map((product, index) => (<ProductCard product={product} key={index} />))
        )}

      </section>          

    </main>
  );
}

export default App;
