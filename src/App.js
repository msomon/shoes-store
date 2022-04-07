// import logo from './logo.svg';
import './App.css';
import Shop from './Component/Shop/Shop';

function App() {
  
  return (
    <div className="App">
    
      <h1 className='shop'> Shose Store</h1>
     <Shop></Shop>
     Question-1 => how react works :
   React is a JavaScript library .we can build dynamic and interactive web apps with ease. It fastand flexible, powerful, and has a robust developer community that rapidly growing. (DOM)mean Document Object Model is an application programming interface (API) for HTML and XML documents.DOM tree in it to speed up its manipulation. It contains different methods like getElementById to target each node and we use JS to work with the DOM.react is very helpfull for developer to develop a website .

   Question:2 => props vs state 
   props and states are very improtent element of react . Props are used to pass data from one component to another,and state is a local data storage that is local to the component only and cannot be passed to other components.when we have a piece of code that you would like to reuse, you can place that code into a function and we can use it dynamicaly .props and state save our time .
    </div>
  );
}

export default App;
