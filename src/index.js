// used dom elements
const introductionSection = document.querySelector('.introduction')
const weAre = document.querySelector('.we-are')
const cursor = document.querySelector('.cursor')
const purgecssStargazers = document.querySelector('#purgecss-stargazers')
const purgecssDownloads = document.querySelector('#purgecss-downloads')

// functions
const typeLetter = (letter, time) => {
  setTimeout(() => {
    weAre.textContent += letter
}, time);
}

const typeSentence = sentence => {
  let i = 0,
    time = 0
  const interval = 200
  const letters = sentence.split('')
  for (i; i < letters.length; i += 1) {
    time = (i + 1) * interval
    time += Math.random() * (2 * interval / 10) - interval
    typeLetter(letters[i], time)
  } 
}

// first visit
const isFirstVisit = localStorage.getItem('isFirstVisit') === null ? true : false
if (!isFirstVisit) {
  cursor.style.visibility = 'hidden'
  document.body.classList.remove('overflow-hidden')
  introductionSection.style.transition = "none"
  introductionSection.classList.add('transitioned')
  typeSentence('WE ARE')
} else {
  localStorage.setItem('isFirstVisit', false)
}
// trigger the transition of the introduction section on load
window.addEventListener('load', () => {
  introductionSection.classList.add('transitioned')
  if (isFirstVisit) {
    setTimeout(() => {
      typeSentence('WE ARE HUMAN')
    }, 550)
    setTimeout(() => {
      cursor.style.visibility = 'hidden'
      document.body.classList.remove('overflow-hidden')
    }, 4000)
  }
})

fetch("https://img.shields.io/github/stars/fullhuman/purgecss.json?label=Stars")
  .then(res => res.json())
  .then(res => {
    purgecssStargazers.textContent = `${res.value} stargazers`
  })
  .catch()

fetch("https://img.shields.io/npm/dt/purgecss.json")
  .then(res => res.json())
  .then(res => {
    purgecssDownloads.textContent = `${res.value} downloads`
  })
  .catch()

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});