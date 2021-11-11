import React, {useCallback, useMemo, useState} from "react";


export const ExampleUseMemo = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)


    let result_a = 1
    let result_b = 1

    result_a = useMemo(() => {
        let newVal = 1
        for (let i = 1; i <= a; i++) {
            let k = 0;
            while (k < 100000000) {
                k++
            }
            newVal = newVal * i
        }
        return newVal
    }, [a])

    for (let i = 1; i <= b; i++) {
        result_b = result_b * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>

            <div>{result_a}</div>
            <div>{result_b}</div>
            <br/>
        </div>
    )
}


//----------------------*----------------------//
export const OldCounter = (props: any) => {
    console.log("New-counter")
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
    console.log("Users-UseMemo")

    return (
        <div>
            {props.users.map((us, index) => <div key={index}>{us}</div>)}
        </div>
    )
}

const Users = React.memo(OldComponentUsers)

export const NewExampleUseMemo = () => {
    const [num, setNum] = useState(0)
    const [users, setUsers] = useState(["Vasya", "Petya", "Lillia", "Denis", "Anton"])

    const countNums = () => {
        console.log("Add new user")
        setNum(num + 1)
    }
    const NewUser = () => {
        console.log("Gleba")
        const newUs = [...users, "Gleba"]
        setUsers(newUs)
    }

    const newArrayUsers = useMemo(() => {
        const newArr = users.filter(us => us.toLowerCase().indexOf("a") > -1)
        return newArr
    }, [users])


    // ------------------  useCallback --------------------------------------//
  const UseCallBackNewArrayUsers = useCallback(() => {
        users.filter(us => us.toLowerCase().indexOf("a") > -1)
    }, [users])

//----------------------------------------------------------------------------//
    return (
        <div>
            <button onClick={countNums}>+</button>
            <Counter counter={num}/>

            <button onClick={NewUser}>useMemo - new user</button>
            <Users users={newArrayUsers}/>

        </div>
    )
}
