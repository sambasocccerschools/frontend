export default function useVenues() {
  const venues = useState('venues', () => [
    { id: 1, type: 'pathway', area: 'Chelsea', name: 'Chelsea Academy', address: 'Lots Road, London, SW10 0AB', region: 1, parking: true, congestion: false }
  ])

  //Actions 
  function addVenue(payload) {
    console.log('addvenue')
  }

  return {
    venues,
    addVenue
  }
}