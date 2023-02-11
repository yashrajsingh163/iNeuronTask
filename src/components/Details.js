import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import loaderimg from '../assets/loader.gif'
import '../App.css';

function Details() {
    const navigate = useNavigate()
    let { id } = useParams(); // getting url string para
    const [mainList, setMaillist] = useState([])

    // call the api and get the data 
    const getData = async () => {
        const datafetch = axios.get('https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6');
        const stockData = await datafetch;
        filterData(stockData.data.data)
    }

    // filter the data 
    const filterData = (dataFetch) => {
        let newDta = dataFetch.filter((data) => {
            return data.id === parseInt(id)
        })
        setMaillist(newDta)
    }

    // useEffect run 
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <main className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
                    {mainList.length ?
                        mainList.map((listData) => {
                            return <div id="__next">
                                <button className="inline-flex gap-2 items-center my-3" onClick={() => navigate(-1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                    </svg>Go back</button>
                                <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
                                    <h3 className="text-2xl font-medium leading-6 text-gray-900">{listData.name} </h3>
                                    <div className="mt-3 flex flex-shrink-0">
                                        <p className={listData.color === "green" ? "bg-green-100 text-green-800" : "bg-red-100  inline-flex rounded-full px-2 text-xs font-semibold leading-5"}>{listData.tag}</p>
                                    </div><hr className="w-full border-[0.1px] border-gray-200 mt-5" />
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {mainList.length ? mainList[0].criteria.map((data) => {
                                            return <li className="flex py-4">
                                                <p className="font-medium text-gray-900">{data.text}</p>
                                            </li>
                                        })
                                            : "Loading"
                                        }
                                    </ul>
                                </div>
                            </div>
                        })
                        : <img src={loaderimg} width="80" />}
                </main>
            </div>
        </>
    )
}

export default Details