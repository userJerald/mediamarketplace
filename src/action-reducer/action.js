export const ITEM_ACTION_ADD = "ITEM_ACTION_ADD"
export const ITEM_ACTION_REMOVE = "ITEM_ACTION_REMOVE"

export const FilterAction = {
    AddText : addItem,
    RemoveText : removeItem,
}



export function addItem () {
    return {
        type: ITEM_ACTION_ADD,
        text : 'ADD THE ITEM RIGHT NOW!!!'
    }
}

export function removeItem () {
    return {
        type: ITEM_ACTION_REMOVE,
        text : 'REMOVE THE ITEM RIGHT NOW!!!'
    }
}