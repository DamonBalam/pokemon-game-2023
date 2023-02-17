import pokemonApi from "../../../src/api/pokemonApi";

describe('pokemonApi', () => { 

    test('Axios debe de estar configurado con el api de pokemon', () => { 
        expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon');
     })
 })