import React, {useState} from 'react'
import './System.css'
import { IoIosArrowForward } from 'react-icons/io';
import {useNavigate} from 'react-router-dom';

export default function Systems() {
    const navigate = useNavigate();

    const [systems, setSystems] = useState([
        {title: "System", selected: false},
        {title: "System", selected: false},
        {title: "System", selected: false},
        {title: "System", selected: false},
        {title: "System", selected: false},
        {title: "System", selected: false},
        {title: "System", selected: false},
    ])

    function change(index: number){
        const copy = [...systems];
        systems.map((system) => system.selected = false)
        copy[index].selected = !copy[index].selected;
        setSystems(copy)
    }
  return (
    <div className='system-container'>
        {systems.map((system, i) => 
            <div onClick={() =>{
                change(i);
                navigate(`/?index=${i}`)
            } } style={{background: system.selected ? "#A0A7AB" : "#D9D9D980"}} className='system-item'>
                <div>
                    {system.title} 
                    {i} 
                </div>
                <div>
                    <IoIosArrowForward />
                </div>
            </div>)
        }
    </div>
  )
}
