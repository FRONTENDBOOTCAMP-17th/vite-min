import './style.css';

const sections = ['header', 'banner', 'about', 'download', 'qna', 'apply', 'footer'];

async function loadSection(name) {
  const el = document.getElementById(name);
  const res = await fetch(`/sections/${name}.html`);
  el.innerHTML = await res.text();
}

sections.forEach(loadSection);
