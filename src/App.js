import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import loaderimg from './assets/loader.gif'

function App() {

  const [stockList, setstockList] = useState([])

  const getData = async () => {
    const datafetch = axios.get('https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6');
    const stockData = await datafetch;
    setstockList(stockData.data.data)
  }

  useEffect(() => {
    getData()
  })


  return (
    <div className="flex h-screen justify-center items-center">
      <div data-testid="container" className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
        <ul role="list" className="divide-y divide-gray-200">
          {stockList.length ? stockList.map((stcokListData) => {
           return  <li key={stcokListData.id}>
              <Link className="block hover:bg-gray-50" to={`/details/`+stcokListData.id} >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex">
                        <p className="truncate font-medium text-indigo-600">{stcokListData.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-16 flex flex-shrink-0">
                    <p className={ stcokListData.color==="green"? "bg-green-100 text-green-800 rounded-full px-2 text-xs font-semibold leading-5":"bg-red-100 rounded-full px-2 text-xs font-semibold leading-5" }>{stcokListData.tag}</p>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
           
          } 
          
          )
          : <img src={loaderimg} width="80"/>
        }
        </ul>
        </div>
    </div>
  );
}

export default App;



