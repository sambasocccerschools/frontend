
export default function useSynco() {
  // const user = useState('user', () => { })
  // const synco = useState('syncoState', () => { })
  const email = ref("")
  const password = ref("")
  const remember = ref(false)
  // const url = computed(() => `https://api.coachpro.staging.sambasoccerschools.co.uk`);
  const url = `https://api.coachpro.staging.sambasoccerschools.co.uk`;


  async function login() {
    console.log(email.value, password.value, remember.value)
    console.log(`${url}/v1/auth/login`)
    // const { data: token } = useFetch(url + '/v1/auth/login', {
    //   email: "synco@samba.com",
    //   password: "password",
    //   remember: false
    // });
    if (email.value || password.value) {
      const response = await useFetch(`${url}/v1/auth/login`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: {
          email: email.value,
          password: password.value,
          remember: remember.value
        }
      })
      console.log(response)
    }

  }
  return {
    login,
    email,
    password,
    remember
  }
}