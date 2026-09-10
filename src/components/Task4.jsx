import React, { useState } from 'react'

const Task4 = () => {
  const AllStudent = [
    { id: 1, name: "Pooja", marks: 85 },
    { id: 2, name: "Rahul", marks: 45 },
    { id: 3, name: "Amit", marks: 72 },
    { id: 4, name: "Chinal", marks: 35 }
  ]
  const [student, setstudent] = useState(AllStudent);
  const [state, setState] = useState("all")
  const [Search, setSearch] = useState("")

  const handleChange = (_status) => {
 
    if (_status === "all") {
      if (Search === "") {
        setstudent(AllStudent)
      }
      else {
      const newStudent = AllStudent.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase()))
      setstudent(newStudent)
      }
    } else if (_status === "pass") {
      const newStudent = AllStudent.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase()) || e.marks >= 40)
      setstudent(newStudent)
    } else if (_status === "fail") {
      const newStudent = AllStudent.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase()) || e.marks < 40)
      setstudent(newStudent)
    }
  }

  const handleInput = (e) => {
    const filterWord = e.target.value
    if (filterWord !== "") {
      setSearch(filterWord)
      const newStudent = student.filter((e) => e.name.toLowerCase().includes(filterWord.toLowerCase()))
      setstudent(newStudent)
    }
    else {
      setstudent(AllStudent)
    }

  }
  const TotalStudent = student.length
  const passStudent = student.length
  const FailStudent = student.length


  return (
    <>
      <div className=" bg-orange-800 text-xl p-2 border border-amber-950 text-amber-300">Coading Practice</div>


      <div>
        {student.length > 0 ? student.map((item) => (
          <li className='bg-olive-500 text-amber-400 p-2 m-2 rounded ' key={item.id}>{item.name}</li>
        )) : <p className='bg-orange-600 p-2 m-1 rounded text-yellow-900'>No students found</p>}
      </div>

      <input className='border-b-emerald-500 p-1 m-2 w-40 border-2' type="text" onChange={(e) => handleInput(e)} />

      <button className='bg-amber-700 text-black px-3 rounded-md p-2 w-20'
        onClick={() => handleChange('all')}
      >
        All
      </button>
      <button className='bg-amber-700 text-black px-3 rounded-md p-2 w-20 mx-3'
        onClick={() => handleChange('pass')}
      >
        Pass
      </button>
      <button
        className='bg-amber-700 text-black px-3 rounded-md p-2 w-20 mx-3 mt-2'
        onClick={() => handleChange('fail')}
      >
        Fail
      </button>

      <h5 className='bg-amber-800 mt-3 p-2 text-md text-amber-300'>Show result</h5>

      <p>Total Student:- {TotalStudent}</p>
      <p>Passed students: -</p>
      <p>Failed students:-</p>
      <p>Average marks:- </p>
    </>

  )
}

export default Task4