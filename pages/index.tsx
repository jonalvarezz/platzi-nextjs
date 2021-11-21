import { report } from 'process'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {

  const [avoList, setAvoList] = useState <TProduct[]> ([])
  const [avo, setAvo] = useState <TProduct[]> ([])

  useEffect(() => {
    window.fetch('/api/avo').then(response => response.json()).then(({data, length}) => {
      setAvoList(data)
    })
  }, [])

  useEffect(() => {
    window.fetch('/api/avo/7bcr49em').then(response => response.json()).then(({data, length}) => {
      setAvo(data)
      console.log(avo)
    })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {avoList.map((avo) =>(
        <div> {avo.image} </div>
      ))}

    <div> hola {avo} </div>
    </div>
  )
}

export default HomePage
