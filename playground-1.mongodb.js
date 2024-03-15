// create a new collection, similar to a table in sql
db.createCollection('users');

//insert one user into the collection
db.users.insertOne({
    nombres: "kenny",
    apellidos: "table",
    correo: "test@gmail.com",
    genero: "M",
    edad: 23
});

db.users.insertOne({
    nombres: "koby",
    apellidos: "test",
    correo: "testkoby@gmail.com",
    genero: "M",
});

//insert many users in the database with an array of users
db.users.insertMany([
    {
        nombres: "John",
        apellidos: "Doe",
        correo: "johndoe@gmail.com",
        genero: "M",
        edad: 25
    },
    {
        nombres: "Jane",
        apellidos: "Doe",
        correo: "janedoe@gmail.com",
        genero: "F",
        edad: 54
    },
    {
        nombres: "Jim",
        apellidos: "Bob",
        correo: "jimbob@gmail.com",
        genero: "M",
        edad: 36
    },
    {
        nombres: "Judy",
        apellidos: "Brown",
        correo: "judybrown@gmail.com",
        genero: "F",
        edad: 22
    },
    {
        nombres: "Ken",
        apellidos: "Sue",
        correo: "kensue@gmail.com",
        genero: "M",
        edad: 47
    },
    {
        nombres: "Kate",
        apellidos: "Mary",
        correo: "katemary@gmail.com",
        genero: "F",
        edad: 21
    },
    {
        nombres: "Lisa",
        apellidos: "Jones",
        correo: "lisa@gmail.com",
        genero: "F",
        edad: 23
    },
    {
        nombres: "Mark",
        apellidos: "Johnson",
        correo: "markjohnson@gmail.com",
        genero: "M",
        edad: 64
    },
    {
        nombres: "Mike",
        apellidos: "Williams",
        correo: "mike@gmail.com",
        genero: "M",
        edad: 55
    }
]);

//find all in the collection, similar to SELECT * from collection
db.users.find();

//equal to
db.users.find({ edad: { $eq: 23 } });

//negation of
db.users.find({ edad: { $ne: 23 } });

//greater than
db.users.find({ edad: { $gt: 30 } });

//lower than
db.users.find({ edad: { $lt: 30 } });

//greater than or equal
db.users.find({ edad: { $gte: 25 } });

//lower than or equal
db.users.find({ edad: { $lte: 30 } });

//all that have the values of the array
db.users.find({ edad: { $in: [54, 25, 47] } });

//all except those who have the values of the array
db.users.find({ edad: { $nin: [54, 25, 47] } });

//all that have the camp edad
db.users.find({ edad: { $exists: true } });

//all that don't have the camp edad
db.users.find({ edad: { $exists: false } });

//find with regex, similar to LIKE in sql
db.users.find({ nombres: { $regex: /^kenny/ } });

//find between two conditionals
db.users.find({
    $and:
        [
            { edad: { $gt: 20 } },
            { edad: { $lt: 40 } }
        ]
});

//delete all documents from collection
db.users.deleteMany({})

db.users.insertMany([
    {
        nombres: "Kenny",
        apellidos: "Table",
        correo: "kennytable@gmail.com",
        ciudad: "medellin",
        pais: "colombia",
        salario: 1000,
        edad: 23,
        altura: 177,
        peso: 90
    },
    {
        nombres: "John",
        apellidos: "Doe",
        correo: "johndoe@gmail.com",
        ciudad: "london",
        pais: "uk",
        salario: 1500,
        edad: 25,
        altura: 177,
        peso: 100
    },
    {
        nombres: "Jane",
        apellidos: "Doe",
        correo: "janedoe@gmail.com",
        ciudad: "paris",
        pais: "france",
        salario: 2000,
        edad: 54,
        altura: 165,
        peso: 65
    },
    {
        nombres: "Jim",
        apellidos: "Bob",
        correo: "jimbob@gmail.com",
        ciudad: "rome",
        pais: "italy",
        salario: 1200,
        edad: 36,
        altura: 180,
        peso: 90
    },
    {
        nombres: "Judy",
        apellidos: "Brown",
        correo: "judybrown@gmail.com",
        ciudad: "madrid",
        pais: "spain",
        salario: 2800,
        edad: 22,
        altura: 160,
        peso: 55
    },
    {
        nombres: "Ken",
        apellidos: "Sue",
        correo: "kensue@gmail.com",
        ciudad: "berlin",
        pais: "germany",
        salario: 2500,
        edad: 47,
        altura: 185,
        peso: 85
    },
    {
        nombres: "Kate",
        apellidos: "Mary",
        correo: "katemary@gmail.com",
        ciudad: "budapest",
        pais: "hungary",
        salario: 1300,
        edad: 21,
        altura: 168,
        peso: 60
    },
    {
        nombres: "Lisa",
        apellidos: "Jones",
        correo: "lisa@gmail.com",
        ciudad: "prague",
        pais: "czech republic",
        salario: 1700,
        edad: 23,
        altura: 170,
        peso: 70
    },
    {
        nombres: "Mark",
        apellidos: "Johnson",
        correo: "markjohnson@gmail.com",
        ciudad: "stockholm",
        pais: "sweden",
        salario: 2200,
        edad: 64,
        altura: 183,
        peso: 95
    },
    {
        nombres: "Mike",
        apellidos: "Williams",
        correo: "mike@gmail.com",
        ciudad: "vilnius",
        pais: "lithuania",
        salario: 2800,
        edad: 55,
        altura: 175,
        peso: 80
    }
])

db.users.insertOne({
    nombres: "Mohamed",
    apellidos: "Carais",
    correo: "moh@gmail.com",
    ciudad: "jaipur",
    pais: "india",
    edad: 32,
    altura: 185,
    peso: 77
})

db.users.insertMany([
    {
        nombres: "Lionel",
        apellidos: "Messino",
        correo: "messi@gmail.com",
        ciudad: "caracas",
        pais: "argentina",
        salario: 10000,
        edad: 24,
        altura: 171,
        peso: 110
    },
    {
        nombres: "Pepito",
        apellidos: "Perez",
        correo: "pepi@gmail.com",
        ciudad: "temuco",
        pais: "chile",
        salario: 1500,
        edad: 20,
        altura: 177,
        peso: 100
    }
])

//update
db.users.updateOne(
    { _id: ObjectId("65f3a76ec1878b668095b17e") },
    { $set: { salario: 3200 } }
)

db.users.find();

//1
db.users.find({ edad: { $gt: 18 } });

//2
db.users.find({
    $or:
        [
            { ciudad: { $regex: /^paris/ } },
            { ciudad: { $regex: /^london/ } }
        ]
});

//3
db.users.find({
    $and:
        [
            { salario: { $gt: 2000 } },
            { edad: { $lt: 30 } }
        ]
});

//4
db.users.find({
    $and:
        [
            { pais: { $regex: /^spain/ } },
            { salario: { $gt: 3000 } }
        ]
});

//5
db.users.find({
    $and:
        [
            { edad: { $gte: 25 } },
            { edad: { $lte: 35 } }
        ]
});

//6
db.users.find({ pais: { $ne: 'united states' } });

//7
db.users.find({
    $and:
        [
            { ciudad: { $eq: 'london' } },
            { salario: { $gt: 2500 } },
            { edad: { $gt: 30 } }
        ]
});

//8
db.users.find({
    $and:
        [
            { pais: { $eq: 'australia' } },
            { peso: { $gt: 140 } }
        ]
});

//9
db.users.find({
    $nor:
        [
            { ciudad: { $regex: /^paris/ } },
            { ciudad: { $regex: /^london/ } }
        ]
});

//10
db.users.find({
    $or:
        [
            { salario: { $lt: 2000 } },
            { edad: { $gt: 40 } }
        ]
});

//11
db.users.find({
    $and: [
        { pais: { $eq: "canadá" } },
        {
            $or: [
                { salario: { $gt: 4000 } },
                { altura: { $gt: 180 } }
            ]
        }
    ]
})

//12
db.users.find({
    $and: [
        { pais: { $eq: "italy" } },
        { edad: { $gte: 20 } },
        { edad: { $lte: 30 } }
    ]
})

//13
db.users.find({ correo: { $exists: false } });

//14
db.users.find({
    $and: [
        { pais: { $eq: "france" } },
        { salario: { $gte: 3000 } },
        { salario: { $lte: 5000 } }
    ]
})

//15
db.users.find({
    $and: [
        { pais: { $eq: "brazil" } },
        {
            $or: [
                { peso: { $lt: 120 } },
                { peso: { $gt: 140 } }
            ]
        }
    ]
})


//16
db.users.find({
    $and: [
        {
            $or: [
                { pais: { $eq: "argentina" } },
                { pais: { $eq: "chile" } }
            ]
        },
        { edad: { $lt: 25 } }
    ]
})

//17
db.users.find({
    $and: [
        {
            $nor: [
                { pais: { $eq: "spain" } },
                { pais: { $eq: "mexico" } }
            ]
        },
        { salario: { $lt: 3000 } }
    ]
})

//18
db.users.find({
    $and: [
        { pais: { $eq: "germany" } },
        {
            $or: [
                { salario: { $lt: 4000 } },
                { edad: { $gt: 35 } }
            ]
        }
    ]
})

//19
db.users.find({
    $and: [
        { pais: { $ne: "colombia" }},
        { altura: { $lt: 170 } }
    ]
})

//20
db.users.find({
    $and: [
        { pais: { $eq: "india" }},
        { salario: { $exists: false } }
    ]
})


//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