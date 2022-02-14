
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
      console.log(data)
      if (data['message'] === 'Confirmation') alert('Init')
      return data.json()
    })
    .then(post => {
      console.log(post.title)
    })

}
