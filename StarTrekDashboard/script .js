const clock = document.getElementById('clock');
const bigClock = document.getElementById('big-clock');
const stardate = document.getElementById('stardate');
const notes = document.getElementById('notes');
const clearNotes = document.getElementById('clearNotes');

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  clock.textContent = time;
  bigClock.textContent = time;
  const yearStart = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now - yearStart) / 86400000);
  stardate.textContent = `STARDATE ${now.getFullYear()}.${String(day).padStart(3, '0')}`;
}

notes.value = localStorage.getItem('captainsNotes') || '';
notes.addEventListener('input', () => localStorage.setItem('captainsNotes', notes.value));
clearNotes.addEventListener('click', () => {
  notes.value = '';
  localStorage.removeItem('captainsNotes');
});

updateClock();
setInterval(updateClock, 1000);
