import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://serene-tor-37529-d3e97e4830a4.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

export const PostToast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000
})

export const PostToastCenter = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 2000
})