import './style.css';

const sections = ['header', 'banner', 'about', 'download', 'qna', 'download2', 'apply', 'footer'];

async function loadSection(name) {
  const el = document.getElementById(name);
  const fileName = name === 'download2' ? 'download' : name;
  const res = await fetch(`./src/sections/${fileName}.html`);
  el.innerHTML = await res.text();
}

sections.forEach(loadSection);
