import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5 ;

type RatingPropsType = {
    value: RatingValueType
    click: (ratingValue: RatingValueType) => void

}

export function Rating(props: RatingPropsType) {

        return (
            <div>
                <Star selected={props.value > 0} ratingValue={props.value} setRatingValue={() => props.click(1)}/>
                <Star selected={props.value > 1} ratingValue={props.value} setRatingValue={() => props.click(2)}/>
                <Star selected={props.value > 2} ratingValue={props.value} setRatingValue={() => props.click(3)}/>
                <Star selected={props.value > 3} ratingValue={props.value} setRatingValue={() => props.click(4)}/>
                <Star selected={props.value > 4} ratingValue={props.value} setRatingValue={() => props.click(5)}/>
            </div>
        );
}

type StarPropsType = {
    selected: boolean
    ratingValue: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}

function Star(props: StarPropsType) {
   return <span onClick={()=> {props.setRatingValue(props.ratingValue)} }>{props.selected ? <b>c.star </b> : <>c.star </>}</span>
    }



export default Rating;