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
        owner: "Belial"
        // owner: {Companies: "Hell Works", User: "Belial"}
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
        owner: "Belial"
        // owner: {Companies: "Hell Works", User: "Belial"}
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
        owner: ""
        // owner: {Companies: "", User: "Test"}
    },
    {
        name: "Whip",
        quantity: 666,
        price: 666.00,
        category: "Accessory",
        SKU: 4,
        sold: 111,
        onHand: 555,
        desc: "A Red Whip",
        tags: "Hell, Weapon, Ranged",
        onFloor: 555,
        owner: "Belial"
        // owner: {Companies: "Hell Works", User: "Belial"}
    },
    {
        name: "Scythe",
        quantity: 666,
        price: 666.00,
        category: "Accessory",
        SKU: 5,
        sold: 111,
        onHand: 555,
        desc: "A Large Scythe",
        tags: "Hell, Weapon, Farming",
        onFloor: 555,
        owner: "Belial"
        // owner: {Companies: "Hell Works", User: "Belial"}
    },
    {
        name: "Cigar",
        quantity: 20,
        price: 66.60,
        category: "Tobacco",
        SKU: 666,
        sold: 10,
        onHand: 10,
        desc: "A Large Demonic Cigar",
        tags: "Hell, Tobacco, Smoking, Smoking Acessories",
        onFloor: 10,
        owner: "Belial"
        // owner: {Companies: "Hell Works", User: "Belial"}
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