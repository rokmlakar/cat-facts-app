import './App.css';
import React,{useState, useEffect} from 'react';
import FactList from './FactList';
import Pagination from './Pagination';
import useLocalStorage from './useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [fact, setFact] = useState([])
  const [currentPage, setCurrentPage] = useLocalStorage("value","https://catfact.ninja/facts?limit=15")
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    
    const getData = async () => {
      setLoading(true)
      const res = await fetch(currentPage);
      const data = await res.json();
      const facts = data.data;
      setLoading(false)
      setNextPage(data.next_page_url)
      setPrevPage(data.prev_page_url)
      setFact(facts);
      console.log(data)
      setPageNum(data.current_page)
      console.log(pageNum)
      
    }
    getData();
  }, [currentPage])



  console.log(pageNum)
  function loadNextPage(){
      setCurrentPage(`${nextPage}&limit=15`)
    }

  function loadPrevPage(){
      setCurrentPage(`${prevPage}&limit=15`)
    }

  if(loading) return "Loading..."

  
  return (
    <div className='container'>
      <FactList fact = {fact}/>
      <Pagination 
      loadPrevPage = {prevPage == undefined ? null: loadPrevPage}
      loadNextPage = {nextPage ? loadNextPage : null}
       current={pageNum}
      />
    </div>

  );
    
}

export default App;
