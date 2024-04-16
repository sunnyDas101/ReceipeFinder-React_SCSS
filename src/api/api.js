const queryStrings = {
  app_id: "5ddea22f",
  app_key: "d24195c7f8135a33e431cfa84f27deae",
};

// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=25ddea2f&app_key=d24195c7f8135a33e431cfa84f27deae

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchTabData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=5ddea22f&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
