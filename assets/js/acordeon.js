
const triggers = document.querySelectorAll('.acordeon .trigger')

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const acordeon = trigger.closest('.acordeon');
    acordeon.classList.toggle('open');
  })
})