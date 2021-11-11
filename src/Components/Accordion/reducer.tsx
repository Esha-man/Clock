export type ActionType = {
    type: "CHANGE-STATE"
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case "CHANGE-STATE":
            let s = {...state}
            s.collapsed = !s.collapsed


            return s
        default:
            throw new Error("I don't know this action")
    }
    return state
}