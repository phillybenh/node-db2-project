module.exports = {
    isValidPOST,
    // uniqueVIN
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
    } else if (car.Transmission && typeof car.Transmission !== "string") {
        return false
    } else if (car.TitleType && typeof car.TitleType !== "string") {
        return false
    } else {
        return true
    }
}

// To DO
// function uniqueVIN(req, res, next) {
//     actionDB.get(req.params.id)
//         .then(proj => {
//             if (proj !== null) {
//                 next();
//             } else {
//                 res.status(400).json({
//                     message: "Please use a valid action ID."
//                 })
//             }
//         })
//         .catch(error => {
//             res.status(500).json({
//                 error: "The action information could not be retrieved from middleware."
//             })
//         })
// }

// function isValidPUT(account) {
//     return Boolean(account.name || account.budget);
// }

// function isValidQuery(query) {
//     return Boolean(query.limit && query.sortby)
// }