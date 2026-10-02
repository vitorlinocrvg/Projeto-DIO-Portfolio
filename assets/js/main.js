

function updateProfileInfo(profileData) {

    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

     const name = document.getElementById('profile.name')
    name.innerText = profileData.name
   

     const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    

     const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    

     const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:+55 ${profileData.phone}`
  

     const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto: ${profileData.email}`
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguage(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()

/* Soft Skills */

function updateSoftSkills(profileData){
        const softSkills = document.getElementById('profile.skills.softskills')
        
        softSkills.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}

/* Hard Skills */

function updateHardSkills(profileData){
        const hardSkills = document.getElementById('profile.skills.hardskills')
        
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<span><img src="${skill.logo}" > </img></span>`).join('')
}

/* Idiomas */

function updateLanguage(profileData){
        const languages = document.getElementById('profile.languages')
        
        languages.innerHTML = profileData.languages.map(language => `<li> ✓ ${language}</li>`).join('')
}

/* Portfólio */

function updatePortfolio(profileData){
        const portfolio = document.getElementById('profile.portfolio')
        
        portfolio.innerHTML = profileData.portfolio.map(project => `<li><span class="title" ${project.github ? 'class="github"' : ''}>${project.name}</span>
                                                                        <br>
                                                                        <a href="www.github.com">${project.url}</a>
                                                                    </li>
                                                                    <br>`).join('')
}


/* Experiência Profissional */

function updateProfessionalExperience(profileData){
        const professionalExperience = document.getElementById('profile.professionalExperience')
        
        professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `<li><h2>${experience.name}</h2>
                                                                                                    <p>${experience.period}</p>
                                                                                                    <p>${experience.description} </p>
                                                                                                </li>`).join('')
}

