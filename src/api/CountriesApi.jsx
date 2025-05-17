export async function countryApi() {
  const response = await fetch(
    `https://restcountries.com/v3.1/all`);

  const result = response.json();
  if (response.ok) {
    return result;
  }
  throw new Error("fetch error");
}
