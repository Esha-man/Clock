import React from "react";
import {useState} from "react";




export const OldCounter = (props: any) => {
    console.log("Counter")
    return (
        <div>

            {props.counter}
        </div>
    )
}

const Counter = React.memo(OldCounter)

type UsersType = {
    users: Array<string>
}

export const OldComponentUsers = (props: UsersType) => {
    console.log("Users")

  return (
      <div>
          {props.users.map( (us, index) => <div key={index}>{us}</div>)}
      </div>
  )
}


const NewComponentUsers = React.memo(OldComponentUsers)


export const PresentationComponent = () => {
    const [num, setNum] = useState(0)
    const [users, setUsers] = useState(["Masha", "Lena", "Dima", "Stepan", "Ivan"])

    const countNums = () => {
        console.log("Add Sergo")
      setNum(num + 1)
    }

const NewUser = () => {
    console.log("Pedro")
  const newUs = [...users, "Pedro"]
    setUsers(newUs)
}
// users.push("Pedro")

    return (
        <div>
            <button onClick={countNums}>+</button>
            <Counter counter={num}/>

            <button onClick={NewUser}>new user</button>
            <NewComponentUsers users={users}/>

        </div>
    )
}