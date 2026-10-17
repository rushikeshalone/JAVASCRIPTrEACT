import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './components/App2.jsx'
import Uncontrooled from './components/Uncontrooled.jsx'
import Task4 from './components/Task4.jsx'
import NewTask from './components/NewTask.jsx'
import Q2 from './components/Q2.jsx'
import { Q3 } from './components/Q3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <Uncontrooled / > */}
    {/* <Task4 /> */}
    {/* <NewTask /> */}
    {/* <Q2 /> */}
    <Q3 />
  </StrictMode>,
)
