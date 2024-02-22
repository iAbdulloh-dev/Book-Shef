import { useContext, useState } from 'react'
import './Create.css'
import { Initcontext } from './Context'
import axios from 'axios'

const Create = () => {
  const [url, setUrl] = useState('http://localhost:3000/book')
  const [title, setTitle] = useState('')
  const [page, setPage] = useState('')
  const [cover, setCover] = useState('')
  const {count,setCount} = useContext(Initcontext)
  const { creating, setCreating } = useContext(Initcontext)
  function submit() {
    axios.post(url, {
      title: title,
      page: page,
      cover: cover
    })
    setCreating(false)
    setCount(count+1)
  }
  function close(){
    setCreating(false)
  }
  return (
    <div className='book'>
      <h1>create a book</h1>
      <input className='title1' onChange={(e) => setTitle(e.target.value)} type="text" placeholder='titleni kiriting' />
      <input className='page1' onChange={(e) => setPage(e.target.value)} placeholder='pageni kiriting' type="text" />
      <input className='cover1' onChange={(e) => setCover(e.target.value)} placeholder='coverni kiriting' type="text" />
      <button className='submit' onClick={submit}>submit</button>
      <button className='close' onClick={close}>close</button>
    </div>
  )
}

export default Create