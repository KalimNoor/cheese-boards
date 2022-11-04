const {User, Cheese, Board} = require('../models')
const db = require('./db')


async function seed(){

    await db.sync() ({
        force: true 
    })


        //Insert something 
        await Cheese.bulkCreate([
            {
                name: "Parmesan",
                description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste.",
            },
            {
                name: "Pecorino",
                description:"Comes in large cylinders with a hard, yellow rind encasing a yellowish-white interior — is the best known of the genre. Similar to its cousin, Parmigiano Reggiano (parmesan), it's a hard, dry cheese good for grating. Like parmesan, pecorino is used mainly in cooking."
            },
            {
                name: "Asiago",
                description:"Asiago is a semi-hard cow's milk cheese that originated in Italy. Depending on how long this versatile cheese is aged, it can assume a variety of textures. Whether you prefer your cheese nice and smooth or enjoy a more crumbly texture, Asiago is the cheese every cheese lover can indulge in."
            },
            {
                name: "Gruyere",
                description:"Gruyère is a firm yellow Swiss cheese. It is named after the town of Gruyères in Switzerland. Gruyère is generally aged for six months or longer and is made from whole cow's milk. It features very few small eyes (or holes), an unusual characteristic for Swiss cheese."
            },
            {
                name: "Comte",
                description:"It is a semi-hard cheese, pale yellow in color, with a texture that ranges from open, supple, and grainy for younger cheeses to dense, firm, and crystalline for more aged cheeses. When aged, its flavor is nutty, smoky, fruity and sweet, while the younger cheeses are more milky and fresh tasting."
            }
    ])



    //Insert something 
    await User.bulkCreate([
        {
            name: "Dylan",
            email:"Dylan@trainline.com"
        },
        {
            name: "Kevin",
            email:"Kevin@trainline.com"
        },
        {
            name: "Bilal",
            email:"Bilal@trainline.com"
        },
        {
            name: "Gruyere",
            email:"Moses@trainline.com"
        },
        {
            name: "Anji",
            email:"Anji@trainline.com"
        }
])


    //Insert something 
    await Board.bulkCreate([
        {
            type: "Luxury",
            description:"Quality cut ",
            rating: 5
        },
        {
            type: "Quality",
            description:"Good quality",
            rating: 4
        },
        {
            type: "Medium",
            description:"medium quality",
            rating: 3
        },
        {
            type: "Budget",
            description:"Low quality",
            rating: 2
        },
        {
            type: "plastic",
            description:"poor quality",
            rating: 1
        }
])








}


//Calling the functions
seed()