
const uc_title = "UC Master Yodas' World Cup Football 2026 Competition"

let saber = null;
let saber_timer = null;

function add_title(name)
{
  let logo = document.createElement('div')
  logo.className = 'logo'
  let title = document.createElement('div')
  title.className = 'title'
  if (name) title.innerHTML = "<a href='index.html'>"+uc_title+"</a> - "+name
  else title.innerHTML = uc_title
  
  saber = document.createElement('saber')
  saber.id = "saber"
  saber.className = "off"

  let header = document.createElement('div')
  header.appendChild(logo)
  header.appendChild(saber)
  header.appendChild(title)
  document.body.prepend(header);
}



function saber_activate() {
  if (!saber.classList.contains('on')) {
    saber.classList.remove('off');
    saber.classList.add('on');
  }
  clearTimeout(saber_timer);
  saber_timer = setTimeout(saber_deactivate, 3000);
}

function saber_deactivate() {
  saber.classList.remove('on');
  saber.classList.add('off');
}

const events = ['mousemove', 'scroll', 'keydown', 'mousedown', 'touchstart', 'wheel'];
events.forEach(e => document.addEventListener(e, saber_activate, { passive: true }));
