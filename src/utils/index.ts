
export async function getCarData(){
    const header = {
        'x-rapidapi-key': 'fe755d8016msh04c9730e187ebc4p1ef351jsne8998d853b57',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const response = await fetch(url,{headers:header}).then(res => res.json()).then(data => data).catch(err => console.log(err));
    return response
}
