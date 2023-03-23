import React from 'react'
import './System.css'

export default function Systems() {
    const systems = [
        "System",
        "System",
        "System",
        "System",
        "System",
        "System",
        "System",
        "System",
    ]
  return (
    <div className='system-container'>
        {systems.map((system, i) => <div className='system-item'>{system} {i}</div>)

        }
       
    </div>
  )
}
