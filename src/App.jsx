import logo from "./assets/react.svg"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import ProductCard from "./productCard";
import { supabase } from './supabaseClient';

function App() {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ products, setProducts] = useState([]);
   console.log(name)
   console.log(description); 

useEffect(() => {
   getProducts();
}, [])

async function getProducts() {
try {
   const { data, error} = await supabase
     .from("products")
     .select("*")
     .limit(10)
     if(error) throw error;
     if(data != null) {
      setProducts(data);
     }
} catch(error) {
  alert(error.message)
}
}


async function createProduct() {
  try{
   const { data, error} = await supabase
      .from("products")
      .insert({
         name: name, 
         description: description
      })
      .single()
      if(error) throw error; 
      window.location.reload()
  } catch(error) {
    alert(error.message)
  }

}

console.log(products)

return (
<>
  <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4 bg-gray-50">


  <div className=" rounded-lg bg-gray-200">
  <div className="flex h-screen flex-col justify-between  bg-gray-50">
  <div className="px-4 py-3">
    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
      Logo
    </span>

    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="#"
          className="block rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-gray-700"
        >
         Product 
        </a>
      </li>


      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Billing
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Invoices
        </a>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Account </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Details
              </a>
            </li>

          

            <li>
              <form action="#">
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

 
</div>
  </div>
  <div className="h-32 rounded-lg lg:col-span-2 py-2">
  <header>
  <div className="mx-auto max-w-screen-xl px-5 py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Hi , Welcome Back!</h1>

  
      </div>

    </div>
  </div>
</header>
  <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8 pt-2 px-12">
  <div className="">
  <article className="flex items-end justify-between rounded-lg  bg-white p-6">
  <div className="flex items-center gap-2">
    <span className="hidden rounded-full bg-gray-100 p-1 text-gray-600 sm:block">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div>
      <p className="text-sm text-gray-500">Customer</p>

      <p className="text-2xl font-medium text-gray-900">240</p>
    </div>
  </div>

  <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 7.81% </span>
  </div>
</article></div>
  <div className=""><article className="flex items-end justify-between rounded-lg  bg-white p-6">
  <div className="flex items-center gap-2">
    <span className="hidden rounded-full bg-gray-100 p-1 text-gray-600 sm:block">
    <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
    </span>

    <div>
      <p className="text-sm text-gray-500">Product</p>

      <p className="text-2xl font-medium text-gray-900">24</p>
    </div>
  </div>

  <div className="inline-flex gap-3 rounded bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 6% </span>
  </div>
</article></div>
  <div className="">
  <article className="flex items-end justify-between rounded-lg  bg-white p-6">
  <div className="flex items-center gap-2">
    <span className="hidden rounded-full bg-gray-100 p-1 text-gray-600 sm:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>

    <div>
      <p className="text-sm text-gray-500">Profit</p>

      <p className="text-2xl font-medium text-gray-900">22200</p>
    </div>
  </div>

  <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 46% </span>
  </div>
</article>
  </div>
 
</div>


<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-6 px-12">
  <div className="h-85 rounded-lg bg-white lg:col-span-2">
  

      <Navbar class="px-2.5 pt-2">
     
      <div className="">
        <h1 className="text-xl px-2 font-bold text-indigo-700 ">Product Store!</h1>

  
      </div> </Navbar>
      <Container>
        <Row>
          <Col class="py-2" xs={12} md={8}>
    
          <label htmlFor="Product Name" className="block text-m pt-2 font-medium text-gray-500"> Name </label>
           
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
           <label htmlFor="Detail" className="block text-m pt-2 font-medium text-gray-500"> Detail </label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
           <div className="pt-2">
            <Button className="pt-2" onClick={() => createProduct()}>Create Product in Supabase DB</Button>
           </div>
          </Col>
        </Row>
        
        
      </Container>
  

  </div>
  
  <div className="h-100 px-2 py-4 h-32 rounded-lg bg-white">
  <span className="whitespace-nowrap rounded-full bg-purple-100 px-10 py-0.5 text-sm text-purple-700">
  # payment received
</span><br></br>
<span className="whitespace-nowrap rounded-full bg-purple-100 px-10 py-0.5 text-sm text-purple-700">
  # Material requirement 
</span><br></br>
<span className="whitespace-nowrap rounded-full bg-purple-100 px-10 py-0.5 text-sm text-purple-700">
  # Labour Contractor
</span><br></br>

  
  </div>







</div>



<div class="py-8 px-12 bg-gray-50">
<Row xs={1} lg={2} className="g-2 p">
          {products.map((product) => (
            <Col>
              <ProductCard product={product} /> {/* product={product} */}
            </Col>
          ))}
        </Row>
</div>
  </div>
</div>




     
   </>
 );
}

export default App;