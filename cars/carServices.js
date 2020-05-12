module.exports = {
    isValidPOST,
    // isValidPUT,
    // isValidQuery
}

function isValidPOST(car) {
    if (!car.VIN || car.VIN.length < 17) {
        return false
    } else if (!car.Make || typeof car.Make !== "string") {
        return false
    } else if (!car.Model || typeof car.Model !== "string") {
        return false
    } else if (!car.Year || typeof car.Year !== "number") {
        return false
    } else if (!car.Mileage || typeof car.Mileage !== "number") {
        return false
    // } else if (!car.Transmission || typeof car.Transmission !== "number") {
    //     return false
    // } else if (!car.'Title Type' || typeof car.'Title Type' !== "number") {
    //     return false
    // } else {
        return true
    }
}

// function isValidPUT(account) {
//     return Boolean(account.name || account.budget);
// }

// function isValidQuery(query) {
//     return Boolean(query.limit && query.sortby)
// }