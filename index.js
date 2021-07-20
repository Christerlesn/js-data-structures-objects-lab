// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(drivers, key, value){
    return Object.assign({}, drivers, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(drivers, key, value){
    return Object.assign(drivers, {[key]: value})
}

function deleteFromDriverByKey(driver, key){
    const newElement = Object.assign({}, driver) 
    delete newElement[key]
    return newElement
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}