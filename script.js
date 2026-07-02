// ===== Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hide'), 600);
});

// ===== Mobile Nav Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== Header Scroll Effect & Scroll-to-top button =====
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.04)';
  }

  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Animated Counter Stats =====
const stats = document.querySelectorAll('.hero-stats h3');
let counted = false;

function animateCounters() {
  stats.forEach(stat => {
    const target = +stat.getAttribute('data-target');
    let current = 0;
    const increment = target / 60;

    const update = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.ceil(current).toLocaleString();
        requestAnimationFrame(update);
      } else {
        stat.textContent = target.toLocaleString() + (target >= 1000 ? '+' : '+');
      }
    };
    update();
  });
}

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counted) {
      animateCounters();
      counted = true;
    }
  });
}, { threshold: 0.4 });

heroObserver.observe(document.querySelector('.hero-stats'));

// ===== Menu Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    menuCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== Add to Cart Toast =====
const addBtns = document.querySelectorAll('.add-btn');
const toast = document.getElementById('toast');
let cartCount = 0;

addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    toast.textContent = `Item added to cart! 🛒 (${cartCount})`;
    toast.classList.add('show');

    btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
    btn.style.background = '#4caf50';

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);

    setTimeout(() => {
      btn.innerHTML = 'Add <i class="fa-solid fa-plus"></i>';
      btn.style.background = '';
    }, 1500);
  });
});

// ===== Countdown Timer =====
function updateCountdown() {
  const now = new Date().getTime();
  // Set countdown target to 3 days from page load
  const target = window.countdownTarget || (window.countdownTarget = now + (3 * 24 * 60 * 60 * 1000));

  const distance = target - now;

  if (distance < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('mins').textContent = '00';
    document.getElementById('secs').textContent = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('secs').textContent = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Testimonial Slider =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
const sliderDots = document.getElementById('sliderDots');
let currentTestimonial = 0;

testimonialCards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showTestimonial(i));
  sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  testimonialCards[index].classList.add('active');
  dots[index].classList.add('active');
  currentTestimonial = index;
}

setInterval(() => {
  let next = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(next);
}, 4000);

// ===== Order Form =====
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  toast.textContent = '🎉 Order placed! We will deliver it hot & fresh soon!';
  toast.classList.add('show');
  orderForm.reset();

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
});

// ===== Smooth Scroll Active Nav Highlight =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active-link');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active-link');
    }
  });
});
