async function fetchSearch({ queryKey }) {
  const { animal, location, breed, pageNumber } = queryKey[1];
  const response = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  return response.json();
}

export default fetchSearch;
