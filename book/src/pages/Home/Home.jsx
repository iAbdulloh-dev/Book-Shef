import './Home.css'
import picture1 from './img/logo.png'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Create from './Create';
import { Initcontext } from './Context';

const Home = () => {
  const [url, setUrl] = useState('http://localhost:3000/book')
  const [api, setApi] = useState([])
  const [count, setCount] = useState(0)
  const [changeInfo, setChangeinfo] = useState("");
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setApi(response.data)
      })
  }, [count + 1])
  const [creating, setCreating] = useState(false)
  function build() {
    setCreating(true)
  }

  function searching(e) {
    const searchItem = e.target.value;

    if (searchItem == "") {
      axios.get(url).then((response) => {
        setApi(response.data);
      });
    }

    else {
      const sortedItem = api.filter((value) =>
        value.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setApi(sortedItem);
    }
  }

  return (
    <Initcontext.Provider value={{ creating, setCreating, count, setCount }}>
      <div className='header'>
        <div className="header__begin">
          <img className='logo' src={picture1} alt="" />
          <input type="text" className='input__search' onChange={(e) => setChangeinfo(e.target.value)}
            value={changeInfo} placeholder='search for any training you want' />
          <FontAwesomeIcon className='icon__search' icon={faSearch} />
        </div>
        <div className="header__footer">
          <h1 className='first__title'>You've got</h1>
          <h2 className='second__title'>0 book</h2>
          <h3 className='third__title'>Your books today</h3>
          <button className='build' onClick={build}>+ Create a book</button>
          {
            creating ? <Create /> : null
          }
          {
            api.map((value) => {
              return (
                <div className="card">
                  <h2 className='title'>Raspberry Pi User Guide</h2>
                  <h1 className="title__h1">title:{value.title}</h1>
                  <h1 className='page__h1'>page:{value.page}</h1>
                  <h1 className='cover__h1'>cover:{value.cover}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </Initcontext.Provider>
  )
}

export default Home