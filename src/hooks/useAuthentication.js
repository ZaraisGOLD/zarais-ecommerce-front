import axios from "axios"

const useAuthentication = () => {

  const createNewUser = data => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/users`

    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const loginUser = data => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/users/login`

    axios.post(url, data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('token')
      })
  }

  return { createNewUser, loginUser }

}

export default useAuthentication