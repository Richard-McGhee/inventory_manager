const dummyItems = [
    {
        name: "Horns",
        quantity: 2,
        price: 6.66,
        category: "Headwear",
        SKU: 1,
        sold: 0,
        onHand: 2,
        desc: "Demon Horns",
        tags: "Demon, Hell, Horns",
        onFloor: 2,
        owner: {Companies: "Hell Works", User: "Belial"}
    },
    {
        name: "Pitchfork",
        quantity: 666,
        price: 666.00,
        category: "Accessory",
        SKU: 2,
        sold: 111,
        onHand: 555,
        desc: "A Red Pitchfork",
        tags: "Hell, Weapon",
        onFloor: 555,
        owner: {Companies: "Hell Works", User: "Belial"}
    },
    {
        name: "Goat Hooves",
        quantity: 20,
        price: 606.60,
        category: "Footwear",
        SKU: 3,
        sold: 8,
        onHand: 12,
        desc: "Goat Hooves",
        tags: "Demon, Hell, Feet",
        onFloor: 4,
        owner: {Companies: "", User: "Test"}
    }
]

const dummyCompanies = [
    {
        name: "Hell Works",
        size: "Large",
        owners: "Belial"
    }
]

const dummyUser = {
    name: "Belial",
    password: "666Free",
    email: "satan@gmail.com",
    comapnies: "Hell Works"
}

export {
    dummyItems,
    dummyCompanies,
    dummyUser
}