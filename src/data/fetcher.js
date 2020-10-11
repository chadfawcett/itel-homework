export default (...args) =>
  fetch(...args, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'veriphone.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_VERIPHONE_KEY
    }
  }).then((res) => res.json())
