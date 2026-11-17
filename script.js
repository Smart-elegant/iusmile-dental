
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu && navList) {
  mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

function toggleDentistInfo(btn) {
  const card = btn.closest('.dentist-card');
  const details = card.querySelector('.dentist-details');

  details.classList.toggle('show');

  if (details.classList.contains('show')) {
    btn.textContent = 'ซ่อนข้อมูล';
    btn.style.backgroundColor = '#6c757d';
  } else {
    btn.textContent = 'ดูประวัติเพิ่มเติม';
    btn.style.backgroundColor = '#007bff';
  }
}