"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("")  

  useEffect(() => {
    async function fetchData() {
      try {        
        const res = await fetch("http://localhost:3000/")
        const data = await res.json()
        setMessage(data.message)
        console.log(message)
      } catch (error) {
        console.log(error)
      }}
      fetchData(); 
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
        <div>{message ? message : "Loading..."}</div>
    </div>
  )
}
