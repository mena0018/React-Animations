import "./StateAnim.scss"
import { useTransition, animated } from "react-spring"
import { useState, useRef } from 'react';
import {v4 as uuidv4} from "uuid"


export default function StateAnim() {

  const inputRef = useRef()
  const [dataInput, setDataInput] = useState([
      {
        id: uuidv4(),
        txt: "Chopin"
      },
      {
        id: uuidv4(),
        txt: "Mozart"
      },
      {
        id: uuidv4(),
        txt: "Bach"
      },
  ])


  const preventFunc = (e) => {
    e.preventDefault();
    const newObj = { id: uuidv4(), txt: inputRef.current.value }

    setDataInput([
      ...dataInput,
      newObj
    ])

    inputRef.current.value = "";
  }


  const listTransitions = useTransition(dataInput, {
    from:  { opacity: 0, transform: "translateY(1Opx)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    keys: dataInput.map(item => item.id)
  })
  
  

  return (
    <form onSubmit={preventFunc}>
      <label htmlFor="piano"> Renseignez vos pianistes favoris</label>
      <input id="piano" type="text" ref={inputRef} />

      <ul>
        {listTransitions((style, item) => {
          return <animated.li style={style}>
            {item.txt}
          </animated.li>
        })}
      </ul>

    </form>
  )
}
