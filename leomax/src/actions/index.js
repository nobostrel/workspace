import {
    selectedDueDate,
    addingDiscount,
    renewTheSubscriptions,
    selectedOptions,
    surpriseCodeSubscribe
} from './Consts';

export function selectedDueDateAction(prop) {
    return {
        type: selectedDueDate,
        selectedDueDate: prop
    }
}

export function addingDiscountAction(prop) {
    return {
        type: addingDiscount,
        addingDiscount: prop
    }
}

export function renewTheSubscriptionsAction(prop) {
    return {
        type: renewTheSubscriptions,
        renewTheSubscriptions: prop
    }
}

export function selectedOptionsAction(prop) {
    return {
        type: selectedOptions,
        selectedOptions: prop
    }
}

export function surpriseCodeSubscribeAction(prop) {
    return {
        type: surpriseCodeSubscribe,
        surpriseCodeSubscribe: prop
    }
}
