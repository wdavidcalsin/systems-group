async function getDataWpHome() {
  try {
    const response = await fetch(
      "​http://localhost:3000/api/gruposistemas-home"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
