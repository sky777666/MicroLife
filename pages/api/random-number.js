


export default (req , res) => {
  // it should NOT be a react component

  res.statusCode = 200
  
res.json({ num: Math.floor(Math.random() * 10) })

}

// http://localhost:3000/api/random-number  

