export async function apiCodenation() {
  var myInit = { method: 'POST' }
  const url = `https://localhost:8080/users`;
  const results = await fetch(url, myInit)
    .then((response) => response.json())
    .catch((error) => console.log(`deu algum erro: ${error}`));
  return results;
}