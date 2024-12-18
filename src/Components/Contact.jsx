import React, {useState} from 'react'

const Contact = () => {
  const [data, setData] = useState(30)
  const decrement = ()=>{
    if(data>0){
      setData(data-5)
      toast.success('Reduction done!')
    }else{
      toast.error('You cannot decrease below 0')
    }
  }
  const incrementhandler = ()=>{
    if(data<40){
      setData(data+10)
      toast.success('addition done successfully!')
    }else{
      toast.error('You cannot add above 40')
    }
  }
  return (
    <div className="text-center mx-auto">
      <button onClick={decrement}>Decrement</button>
      <p className="text-center py-4">{data}</p>
      <button onClick={incrementhandler}>Increment</button>
    </div>
  )
}

export default Contact