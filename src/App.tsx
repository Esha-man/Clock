import { useState } from 'react';
import './App.css';
import { Clock } from "./Components/Clock/Clock"
import { RatingValueType } from "./Components/Rating/Rating";
import { UseEffectComponent } from "./Components/UseEffect/UseEffect"
import { UncontrolledRating } from "./Components/Rating/UncontrolledRating";
import { Indicator } from "./Components/Indicator/Indicator";
import { UncontrIndicator } from "./Components/Indicator/UncontrIndicator";
import { UncontrolledAccordion } from "./Components/Accordion/UncontrolledAccordion";
import { Select } from "./Components/Select/Select";
import { PresentationComponent } from "./Components/ReactMemo/ReactMemo";
import Accordion from "./Components/Accordion/Accordion";
import { ExampleUseMemo, NewExampleUseMemo } from "./Components/UseMemo/UseMemo";
import { UseState } from "./Components/UseState/UseState";


// function hello() {
//     debugger;
//     alert("Hello")
// }

// hello();
// тип создания функции: Function Declaration
function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordion, setAccordion] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(false);
    let [onUnc, setOnUnc] = useState<boolean>(false);

    /// ------- Select Component --------///
    const [selectItem, setSelectItem] = useState("2")
    let items = [
        { title: "Moscow", id: "1" },
        { title: "Minsk", id: "2" },
        { title: "Kiev", id: "3" },
    ]
    /// ------- Select Component --------///

    return (
        <div className="App">

            <Clock />

            <UseEffectComponent />
            <UseState />

            <NewExampleUseMemo />
            <hr />
            <br />
            <ExampleUseMemo />


            <PresentationComponent />

            {/* <Accordion items={}/> */}

            <Select items={items}
                onchange={setSelectItem}
                value={selectItem} />

            <div className={"components"}>

                <Indicator on={on} set={setOn} />

                <UncontrIndicator change={setOnUnc} /> {onUnc.toString()}


                <UncontrolledAccordion titleValue={"Menu"} />
                <UncontrolledAccordion titleValue={"Users"} />

                {/* <Rating value={ratingValue}
                       click={setRatingValue}/> */}




                <UncontrolledRating />

            </div>
        </div>
    );
}

type PageTitle = {
    title: string,
}

function PageTitle(props: PageTitle) {
    console.log("PageTitle rendering")

    return (
        <h1>{props.title}</h1>
    );

}

export default App;

