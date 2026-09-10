import { useState } from "react";


function NewTask() {
  const employees = [
    {
      id: 1,
      name: "Pooja",
      department: "IT",
      salary: 60000,
      experience: 3,
      active: true
    },
    {
      id: 2,
      name: "Rahul",
      department: "HR",
      salary: 45000,
      experience: 2,
      active: false
    },
    {
      id: 3,
      name: "Amit",
      department: "IT",
      salary: 80000,
      experience: 5,
      active: true
    },
    {
      id: 4,
      name: "Neha",
      department: "Finance",
      salary: 70000,
      experience: 4,
      active: true
    },
    {
      id: 5,
      name: "Ravi",
      department: "IT",
      salary: 55000,
      experience: 2,
      active: false
    }
  ];

  const [employee, setEmployee] = useState(employees)
  const [search, setSearch] = useState("")
  const [status, setstatus] = useState("")
  const [Open, setOpen] = useState(true)
  const [FormData, setFormData] = useState(true)

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    AllFilterSearch(value, status)
  }
  const handleclick = (e) => {
    const clickvalue = e.target.value
    setstatus(clickvalue)
    AllFilterSearch(search, clickvalue)
  }

  const AllFilterSearch = (SearchValue, Selectbutton) => {

    const FilterRecord = employees.filter((items) => {
      if (Selectbutton === "all" && SearchValue === "") {
        return items
      } else if (Selectbutton === "all" && SearchValue !== "") {
        return items.name.toLowerCase().includes(SearchValue.toLowerCase())
      }
      else if (Selectbutton === "it" && SearchValue === "") {
        return items.department.toLowerCase() === "it"
      }
      else if (Selectbutton === "it" && SearchValue !== "") {
        return items.department.toLowerCase() === "it" && items.name.toLowerCase().includes(SearchValue.toLowerCase())
      }
      else if (Selectbutton === "hr" && SearchValue === "") {
        return items.department.toLowerCase() === "hr"
      }
      else if (Selectbutton === "hr" && SearchValue !== "") {
        return items.department.toLowerCase() === "hr" && items.name.toLowerCase().includes(SearchValue.toLowerCase())
      }
      else if (Selectbutton === "finance" && SearchValue === "") {
        return items.department.toLowerCase() === "finance"
      }
      else if (Selectbutton === "finance" && SearchValue !== "") {
        return items.department.toLowerCase() === "finance" && items.name.toLowerCase().includes(SearchValue.toLowerCase())
      }
      else if (Selectbutton === "active" && SearchValue === "") {
        return items.active === true
      }
      else if (Selectbutton === "active" && SearchValue !== "") {
        return items.active === true && items.name.toLowerCase().includes(SearchValue.toLowerCase())
      }
      else if (Selectbutton === "inactive" && SearchValue === "") {
        return items.active === false
      }
      else if (Selectbutton === "inactive" && SearchValue !== "") {
        return items.active === false && items.name.toLowerCase().includes(SearchValue.toLowerCase())
      }

    })
    if (FilterRecord.length > 0) {
      setEmployee(FilterRecord)
    }

    if (Selectbutton === "[Salary Low → High]") {
      setEmployee(employees.sort((a, b) => a.salary - b.salary))
    } else if (Selectbutton === "[Salary High → Low]") {
      setEmployee(employees.sort((a, b) => b.salary - a.salary))
    }
  }

  const handleDelete = (e) => {
    const valueDelete = e.target.value
    const delteEmployee = employee.filter((e) => e.id != valueDelete)
    setEmployee(delteEmployee)

  }
  function handleSubmit(event) {
    // 1. Prevent the browser from reloading the page
    event.preventDefault(); 

    // // 2. Extract values using the FormData API
    // const formData = new FormData(event.currentTarget);
    // debugger;
    // const salary = formData.get("salary");
    // const name = formData.get("name");
    // const Department = formData.get("Department");
    // const Experience = formData.get("experience");



    setOpen(true)
    
  }

  return (
    <>
      <h1 className="bg-amber-600 p-2 text-2xl rounded">Coding Practice</h1>

      {Open ?
        <div>
          <input
            className="w-40 border border-indigo-400 h-10 m-2 rounded "
            type="text"
            onChange={(e) => handleSearch(e)}
          />
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"all"}
          >[All]</button>
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"it"}
          >[IT]</button>
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"hr"}
          > [HR]</button>
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"finance"}
          > [Finance]</button>
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"active"}
          > [Active]</button>
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"inactive"}
          > [InActive]</button>

          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"[Salary Low → High]"}
          >[Salary Low → High]</button>
          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => handleclick(e)}
            value={"[Salary High → Low]"}
          >[Salary High → Low]</button>

          <button
            className="bg-yellow-950 text-white p-2 m-2 w-20 rounded-md"
            onClick={(e) => setOpen(false)}
            value={"[+ Add Employee]"}
          >[+ Add Employee]</button>

          <div>{employee.length > 0 ? (employee.map((item) => {
            return (
              <p key={item.id} className="p-2 m-1 bg-amber-900 rounded-md text-white">
                {item.name}  |
                <span className="mx-3">{item.department}</span>
                |<span className="mx-3">{item.salary}</span>
                |<span className="mx-3">{item.experience}</span>
                |<span className="mx-3">{item.active == true ? "Active" : "InActive"}</span>
                |<button
                  className="bg-sky-400 text-white p-2 m-2 w-20 rounded-md"
                  value={item.id}
                  onClick={(e) => handleDelete(e)}
                >[Delete]</button>
              </p>
            )
          })) : <p className="p-2 m-1 bg-amber-900 rounded-md text-white">No employees found</p>}</div>
        </div>
        :
        <div>
          <form action="save" onSubmit={handleSubmit}>
            <div 
            className="bg-emerald-300 p-2 rounded-2xl m-2 flex-2 "
            >
              <label htmlFor="name"
              className="flex mt-1"
              >
                Name: -</label>
              <input 
              type="text" 
              name="name" 
              id="txtname"
               className="border border-amber-400 rounded-md p-1"
               />
               <label 
               htmlFor="Deparment"
               className="flex mt-1"
               >Deparmenet:- </label>
              <select name="Department" id="ddldepartment">
                {employee.map((item)=>(
                  <option key={item.id} value={item.id} >{item.department}</option>
                ))}
              </select>
               <label 
               htmlFor="salary"
               className="flex mt-1"
               >salary : - </label>
               <input 
               type="number" 
               name="salary" 
               id="txtsalary" 
               className="border border-amber-400 rounded-md p-1 flex"
               />

               <label 
               htmlFor="experience"
               className="flex mt-1"
               >Experience: -</label>
               <input 
               type="number" 
               name="experience" 
               id="txtexperience" 
            className="border border-amber-400 rounded-md p-1 flex"
               />

              <button
                className="bg-olive-800 text-white p-2 m-2 w-20 rounded-md"
               type="submit"
              >
                Save
              </button>
              <button
                className="bg-olive-800 text-white p-2 m-2 w-20 rounded-md"
                value={"cancel"}
                onClick={() => setOpen(true)}
              >
                Cancel
              </button>
            </div>
          </form>


        </div>}




    </>
  );
}

export default NewTask;