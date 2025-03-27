import React from 'react'

const App = () => {
  const name="Vite"
  const names=["Rohit", "Mohit", "Sohit"]
  const loggedin=true;
  const styles={
    color:"red",
    fontSize:"24px"
  }
  return (
    <>
      <div className="text-5xl">Hello {name}</div>
      <p style={styles}>Hello Rohit</p>
      <ul>
        {names.map((name,index)=>(
          <li key={index}>{index} {name}</li>
        ))}
      </ul>
      {loggedin ? <div>Logged In</div> : <div>Logged Out</div>}
    </>
   
  )
}

export default App