import React, { useEffect, useState } from 'react'

const App2 = () => {

  const [quotes, setQuotes] = useState([])
  const [Header, setHeader] = useState([])



  const fetchQuotes = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/quotes`)
      const res = await response.json()
      console.log(res.quotes);
      setQuotes(res?.quotes)

      //setHeader(Object.keys(res?.quotes))

      console.log("cehck Hear", Object.keys(res?.quotes))

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    fetchQuotes()
  }, [])




  return (
    <div>
      <table className='border border-amber-300'>
        <thead>

          <tr>
            {
              quotes?.length>0 &&Object.keys(quotes[0]).map((key) => (

                <th key={key}>
                  {key}
                </th>

              ))
            }
          </tr>


        </thead>
        <tbody>
          {quotes.map(({ id, author, quote }) => (
            <tr>
              <td className='border border-red-300 p-2'>{id}</td>
              <td className='border border-red-300 p-2'>{quote}</td>
              <td className='border border-red-300 p-2'>{author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App2