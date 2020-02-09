import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://dct-application-form.herokuapp.com'
})

export default axios