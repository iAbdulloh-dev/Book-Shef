import './Home.css'
import picture1 from './img/logo.png'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('http://localhost:3000/book')
  const [api, setApi] = useState([])
  const [creating, setCreating] = useState(false)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setApi(response.data)
      })
  })
  return (
    <div className='header'>
      <div className="header__begin">
        <img className='logo' src={picture1} alt="" />
        <input type="text" className='input__search' placeholder='search for any training you want' />
        <FontAwesomeIcon className='icon__search' icon={faSearch} />
      </div>
      <div className="header__footer">
        <h1 className='first__title'>You've got</h1>
        <h2 className='second__title'>0 book</h2>
        <h3 className='third__title'>Your books today</h3>
        <button className='build'>+ Create a book</button>

        {
          api.map((value) => {
            return (
              <div className="card">
                <h1>title:{value.title}</h1>
                <h1>page:{value.page}</h1>
                <h1>cover:{value.cover}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home