const cardContainer = document.querySelector('.card-container')


fetch('https://api.github.com/users')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
        // console.log(user);
        const profileCard = document.createElement('a')
        profileCard.classList.add('profile-card')
        profileCard.innerHTML = `
        <div class="profileImg">
                <img src = "${user.avatar_url}" alt = "flag"/>
            </div>
            <div class="info">
                <h3>${user.login}</h3>
                <h5>ID:${user.id}</h5>
                <p>${user.login} is known to have a good personality... </p>
                <button>Message</button>
                <button class="firstBtn">Following</button>
            </div>
    `
        cardContainer.append(profileCard)
    })
  })


  