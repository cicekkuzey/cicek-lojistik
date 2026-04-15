(function () {
  'use strict';

  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80',
      title: 'Güvenli <span>Lojistik</span> Çözümleri',
      sub: 'Karayolu, denizyolu ve havayolu taşımacılığında 20 yılı aşkın deneyimimizle yükünüzü emin ellere teslim edin.'
    },
    {
      img: 'https://images.unsplash.com/photo-1586191582056-b7f0bb8c4b07?auto=format&fit=crop&w=1920&q=80',
      title: 'Uluslararası <span>Nakliye</span>',
      sub: '18+ ülkeye ulaşan geniş ağımız ile sınır tanımayan bir taşıma gücü.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80',
      title: 'Hızlı & <span>Güvenilir</span>',
      sub: 'Zamanında teslim, 7/24 takip ve profesyonel ekibimizle yanınızdayız.'
    }
  ];

  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slidesWrap = slider.querySelector('.slides');
  const dotsWrap = slider.querySelector('.slider-dots');

  slides.forEach((s, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${s.img}')`;
    slide.innerHTML = `
      <div class="slide-content">
        <h1>${s.title}</h1>
        <p>${s.sub}</p>
        <a href="iletisim.html" class="btn">Teklif Al</a>
      </div>
    `;
    slidesWrap.appendChild(slide);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Slayt ' + (i + 1));
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
  });

  const slideEls = slidesWrap.querySelectorAll('.slide');
  const dotEls = dotsWrap.querySelectorAll('button');
  let current = 0;
  let timer;

  function go(i) {
    current = (i + slides.length) % slides.length;
    slideEls.forEach((el, idx) => el.classList.toggle('active', idx === current));
    dotEls.forEach((el, idx) => el.classList.toggle('active', idx === current));
    restart();
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  slider.querySelector('.prev').addEventListener('click', prev);
  slider.querySelector('.next').addEventListener('click', next);

  restart();
})();
