const axios = require("axios");
require("dotenv").config();
const {URLAPI} = process.env

// Construye la URL de la solicitud


const getAllMonedas = async () => {
    try {
      const response = await axios.get(URLAPI, {
        headers: {
          'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        },
      });
  
      // Axios ya parsea automáticamente la respuesta JSON
      const data = response.data.data; // Supongo que la estructura de datos que necesitas se encuentra aquí
  
      // Utiliza la función map para extraer las propiedades deseadas de cada elemento
      const monedasProcesadas = data.map((moneda) => {
        return {
          id: moneda.id,
          name: moneda.name,
          symbol: moneda.symbol,
          slug: moneda.slug,
          cmc_rank: moneda.cmc_rank,
          num_market_pairs: moneda.num_market_pairs,
          circulating_supply: moneda.circulating_supply,
          total_supply: moneda.total_supply,
          max_supply: moneda.max_supply,
          infinite_supply: moneda.infinite_supply,
          last_updated: moneda.last_updated,
          date_added: moneda.date_added,
          valor_usd: moneda.quote.USD.price, // Propiedad específica de valor en USD
        };
      });
  
      // Ordena el array por la propiedad "id"
      monedasProcesadas.sort((a, b) => a.id - b.id);
  
      return monedasProcesadas;
    } catch (error) {
      // Manejar errores si ocurren
      console.error('Error al obtener los datos de la API:', error);
      throw error; // Opcionalmente, puedes propagar el error para que se maneje en otro lugar
    }
  };
  
  

module.exports = getAllMonedas;