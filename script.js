fetch("https://api.github.com/users/mubeentm")
    .then(res => {
        return res.json()
    })
    .then(data => {
        // console.log(data)
        document.querySelector("#followers").innerText = data.followers
        document.querySelector("#following").innerText = data.following
        document.querySelector("#repos").innerText = data.public_repos

    })