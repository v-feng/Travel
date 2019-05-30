
let dafaultCity = '杭州'

try {
  if (localStorage.city) {
    dafaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: dafaultCity
}
