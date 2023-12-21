
export default function useVenues() {

  onMounted(() => {
    getAllVenues()
  })

  const venues = useState('venues', () => [
    { id: 1, type: 'pathway', area: 'Chelsea', name: 'Chelsea Academy', address: 'Lots Road, London, SW10 0AB', region: 1, parking: true, congestion: false }
  ])

  //Actions 
  function addVenue(payload) {
    console.log('addvenue')
  }
  async function getAllVenues() {
    const response = await $fetch('http://api.synco.sambasoccerschools.local/v1/venues?limit=25&service=weekly-classes').catch((error) => error.data)
    console.log(response)
  }

  return {
    venues,
    addVenue
  }
}