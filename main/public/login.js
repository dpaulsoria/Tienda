
function login() {
  const username = document.getElementById('username_input').value
  const password = document.getElementById('password_input').value

  const apiUrl = '/api/users/login'

  console.log(username, password)
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': username,
      'password': password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data['message'] === 'Confirmation') {
        console.log('LOGIN')
      }
    })
    .catch(err => console.error(err.message))

}
