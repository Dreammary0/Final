import axios from 'axios';

axios.all([
    axios.get('https://api.github.com/users/Dreammary0')
])
    .then(response => {
        document.getElementById('text').innerText=('Login: '+ response[0].data.login+'\nDate created: '+ response[0].data.created_at);
    });


