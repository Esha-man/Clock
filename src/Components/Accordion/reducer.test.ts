import React from "react";
import {ActionType, reducer, StateType} from "./reducer";

test("state changed", () => {



    const state: StateType = {
        collapsed: true
    }

let newState = reducer(state, {type: "CHANGE-STATE"})

   expect(newState.collapsed).toBe(false)


})

// test("expect type of action", () => {
//
//     const state: StateType = {
//         collapsed: true
//     }
//
//    expect(
//        ()=> reducer(state, {type: "FAKE-TYPE"})
//    ).toThrowError()
//
// })