import  {useState} from 'react';
/*import './App.css';*/

import Rating, {RatingValueType} from "./Components/Rating/Rating";


import {UncontrolledRating} from "./Components/Rating/UncontrolledRating";
import {Indicator} from "./Components/Indicator/Indicator";
import {UncontrIndicator} from "./Components/Indicator/UncontrIndicator";
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import Accordion from "./Components/Accordion/Accordion";



function hello() {
    debugger;
    alert("Hello")
}

// hello();
// тип создания функции: Function Declaration
function App() {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordion, setAccordion] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(false); //hook
    let [onUnc, setOnUnc] = useState<boolean>(false); //hook
    return (
        <div className="App">


            <Indicator on={on} set={setOn}/>

            <UncontrIndicator change={setOnUnc}/> {onUnc.toString()}




            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            <Rating value={ratingValue}
                    click={setRatingValue}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordion}
                       set={()=> setAccordion(!accordion)}/>



            <UncontrolledRating/>


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

