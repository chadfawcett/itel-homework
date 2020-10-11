export default (number) =>
  fetch(`https://veriphone.p.rapidapi.com/verify?phone=${number}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'veriphone.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_VERIPHONE_KEY
    }
  }).then((res) => res.json())
