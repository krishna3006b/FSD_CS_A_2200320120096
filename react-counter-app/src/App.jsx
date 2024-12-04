import { Routes, Route } from "react-router-dom";
const App=()=>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        
      </Routes>
    </div>
  )
}