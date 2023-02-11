const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const {Character, Continent} = require('../db')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://thronesapi.com/api/v2/Characters');
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.id, 
            name: el.firstName,
            lastname: el.lastName,
            fullname: el.fullName,
            title: el.title,
            family: el.family,
            imageUrl : el.imageUrl
        };
    });
    return apiInfo;
};
const getDbInfo = async () => {
    return await Character.findAll({
        include: {
            model: Continent,
            attributes : ['name'],
            through: {
                attributes : [],
            }
        }
    })
}
const getAllCharacters = async () => {
    const  apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
}

router.get('/characters', async (req,res) => {
    const name = req.query.name
    let charactersTotal = await getAllCharacters();
    if(name){
        let characterName = await charactersTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        characterName.length ? 
        res.status(200).send(characterName) :
        res.status(404).send('No esta el personaje, Sorry!!!');
    } else {
        res.status(200).send(charactersTotal)
    }

})
// esto no lo usare aqui pero si en el pi --> busca la informacion en la api y la guarda en mi base
/*router.get('/continents', async (req, res) => {
  const continentsApi = await axios.get('https://thronesapi.com/api/v2/Characters')
  const continents = continentsApi.data.map(el => el.continent)
  const contEach = continents.map(el => {
    for(let i = 0; i< el.length; i++) return el [i]})
    contEach.forEach(el => {
        Continent.findOrCreate({
            where : { name: el}
        })
    })
    const allContinents = await Continent.findAll();
    res.send(allContinents);
    seguramente necesite unir lo que busco aqui con mi post por lo que hare ..
    sigue en linea 96
})*/

router.post('/characters', async ( req,res) => {
    const {
        name,
        lastname,
        fullname,
        title,
        family,
        image,
        createdInDb
    } = req.body

    const characterCreated = await Character.create({
        name,
        lastname,
        fullname,
        title,
        family,
        image,
        createdInDb
    })
/* let continetsDb = await Continent.findAll({
    where: {name: continents} 
})
characterCreated.addContinents(continentsDb)

    
    --> el continete lo voy a buscar en el modelo que tiene todas
    las ocupaciones . por eso la busco en mi base de datos . yo aqui no lo necesito pero en pi
    si lo hare 
*/
   res.send(characterCreated)
});

router.get('/characters/:id', async (req,res) => {
    const id = req.params.id;
    const charactersTotal = await getAllCharacters()
    if(id){
        let characterId = await charactersTotal.filter(el => el.id == id)
        characterId.length?
        res.status(200).json(characterId) :
        res.status(404).send('No encontre ese personaje')
    }
})

module.exports = router;
