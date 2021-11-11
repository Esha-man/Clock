import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"




type ItemType = {
    title: string
    id: any
}

type SelectPropsType = {
    value: any
    onchange: (value: any) => void
    items: ItemType[]
}

 const OldSelect = (props: SelectPropsType) => {
    console.log("Custom Select")
    let [active, setActive] = useState(false)
    let [hoveredItem, setHoveredItem] = useState(props.value)

    let selectedItem = props.items.find(el => el.id === props.value)
    // let findHoveredItem = props.items.find(el => el.id === hoveredItem)

    useEffect( ()=> {
        setHoveredItem(props.value)
    }, [props.value] )

    const goStateActive = () => {setActive(!active)}




    const selectItemTo = (id: any) => {
        props.onchange(id);
        goStateActive()
    }

    const keyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if(props.items[i].id === hoveredItem){
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if(pretendentElement){
                        props.onchange(pretendentElement.id);
                        return
                    }

                }
            }
            if (!selectedItem) {
                props.onchange(props.items[0].id)
            }

        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)

        }
    }

    return (
        <div tabIndex={0} onKeyUp={keyUp}>
            <span className={styles.main} onClick={goStateActive}>{selectedItem && selectedItem.title}</span>

            {active && <div className={styles.elements}>
              
                {props.items.map(el =>
                    <div  className={styles.item + " " + (hoveredItem === el.id ? styles.active : "")}
                         onMouseEnter={()=>{setHoveredItem(el.id)}}
                         key={el.id}
                         onClick={ ()=>{selectItemTo(el.id)} }>{el.title}</div>)}


            </div>}

            <select>
                <option value={"1"}>Moscow</option>
                <option value={"2"}>Minsk</option>
                <option value={"3"}>Kiev</option>
            </select>

        </div>
    )
}

export const Select = React.memo(OldSelect)