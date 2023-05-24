# Web Scraper Project

A FullStack project of a product search engine that connects to the Mercado Livre and Buscapé page, using web scraping techniques.

Check the application: https://web-scraper-delta.vercel.app/

## ✏ About this project

The aim of this project is to develop a web app that allows users to choose a web page and a category to search for products. 

The backend was developed using <strong>MSC architecture</strong> - Model, Service, Controller - implemented with <strong>Node.js</strong> and <strong>ODM Mongoose</strong> to store product data.

The frontend was developed using <strong>React</strong>, <strong>RTL</strong> and <strong>CSS</strong> for style.

Please read the detailed information below 👇: 

<details>
  <summary> <strong>🛠️ Back-end</strong></summary>
  </br>
  
### Overview

For the server side, this app was build with NodeJs and express, using MSC architecture - Model, Service, Controller. The database choosen was mongoDB with ODM Mongoose. The web scraping techniques was developed using cheerio library and Jquery. Docker was used in production to build mongoDB and nodeJS image.

Deployed server: https://web-scraper-nd51-git-main-carolinakauark.vercel.app/

### 🛸 Main technologies used

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [mongoDB](https://www.mongodb.com/);
- [Mongoose(ODM)]([https://sequelize.org/](https://mongoosejs.com/));
- [Docker](https://www.docker.com/);
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [jquery](https://jquery.com/);
- [cheerio](https://cheerio.js.org/);
- [sinon](https://www.chaijs.com/plugins/sinon-chai/);
- [chai](https://www.chaijs.com/plugins/sinon-chai/);

## ⚙ How to run this project locally

<strong>1. Clone the repository and change directory to it:</strong>

- Kindly check that the current working directory is the desired one before proceeding

``` 
 git clone git@github.com:CarolinaKauark/web-scraper.git
 cd web-scraper/backend
 ```

 <strong>2. Choose your preferred development environment: Docker or Local</strong>

<details>
  <summary><strong>🐳 Using Docker</strong></summary>
  </br>

  *:warning: Ensure docker-compose is at 1.29 or higher.*

  👉 <strong> 2.1 Run services `node` e `db` using: </strong>

  ``` 
  docker-compose up -d --build
  ``` 

- These services will run a container named `web_scraper` and another called `web_scraper_db`;

- From hereafter you can run the container named `web_scraper` via CLI or run it using VSCode;

  👉 <strong>2.2 Use o comando:</strong>

  ``` 
  docker exec -it web_scraper bash
  ``` 

- This will allow you to access an interactive shell in the container created by the compose file

  👉 <strong>2.3 Install dependencies inside the container using:</strong>

  ``` 
  npm install
  ``` 
  
  👉 <strong>2.3 Run theses scripts to start the backend service:</strong>
  
  ``` 
  npm run dev
  ``` 
  
</details>

<details>
  <summary><strong> 💻 Developing locally</strong></summary>
</br>

👉 <strong>2.1 Install dependencies: </strong>

``` 
npm install
``` 

👉 <strong>2.3 Run theses scripts to start the backend service:</strong>
  
``` 
npm run dev
``` 


</details>

</details>

<details>
  <summary> <strong>🌐 Front-end</strong></summary>
  </br>
  
### Overview

The front-end was developed with React and CSS, using the TDD metodology via React Testing Library (RTL).

Website: https://web-scraper-delta.vercel.app/

### 🛸 Main technologies used

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [React](https://react.dev/);
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS);
- [Jest](https://jestjs.io/pt-BR/);
- [TDD methodology](https://www.devmedia.com.br/test-driven-development-tdd-simples-e-pratico/18533);

## ⚙ How to run this project locally

<strong>1. Clone the repository and change directory to it:</strong>

- Kindly check that the current working directory is the desired one before proceeding

``` 
 git clone git@github.com:CarolinaKauark/web-scraper.git
 cd web-scraper/frontend
 ```

<strong>2. Install dependencies: </strong>

``` 
npm install
``` 

<strong>3. Run theses scripts to start the backend service:</strong>
  
``` 
npm start
``` 

</details>

 ---
© Developed by [Carolina Kauark Fontes](https://www.linkedin.com/in/carolina-kauark-fontes/)
