exports.handler = function (event, context, callback) {
  /* Code for testing localhost */
  /*const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };*/

  const secretContent = `
    <h3>Welcome To the Secret Area</h3>
    <p>Here we can tel you that the sky is <strong>blue</strong>, and two plus two equal four.</p>
    `;

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascrpt") {
    callback(null, {
      statusCode: 200,
      /* Code for testing localhost */
      // headers,
      body: secretContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
      /* Code for testing localhost */
      //headers
    });
  }
};
