exports.handler = async function(event) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': event.headers['x-api-key'],
      'anthropic-version': '2023-06-01'
    },
    body: event.body
  });
  const data = await res.json();
  return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(data)
  };
};
