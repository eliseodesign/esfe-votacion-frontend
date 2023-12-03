import { URL_API } from './config';

const url = `${URL_API}/participante`;

export async function getByCodigo(codigo) {
  try {
    const response = await fetch(`${url}/${codigo}`);

    const data = await response.json();
    return data
  } catch (error) {
    // Manejar el error de la petición
    console.error(error);
  }
}
