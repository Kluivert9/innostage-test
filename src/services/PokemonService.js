export default class PokemonService {
   apiBase = 'https://pokeapi.co/api/v2/'

  call = async (url) => {
    const requestObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept' : 'application/json'
      },
    };

    const res = await fetch(`${this.apiBase}${url}`, requestObj);
    const json = await res.json();

    return json;
  }

  getPokemonData = (page) => {
    const offset = (page - 1) * 20;

    return this.call(`pokemon/?limit=20&offset=${offset}`);
  }

  getPokemonDetailData = (id) => this.call(`pokemon/${id}`)

  getAbilityDetailData = (id) => this.call(`ability/${id}`)
}
