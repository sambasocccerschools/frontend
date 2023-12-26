export default function useCountry() {

  const countries = useState('countries', () => [
    { id: 1, type: 'pathway', area: 'Chelsea', name: 'Chelsea Academy', address: 'Lots Road, London, SW10 0AB', region: 1, parking: true, congestion: false }
  ])

  function getCountries() {

  }

  return {
    countries,
    getCountries
  }
}