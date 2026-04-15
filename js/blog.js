(function () {
  'use strict';

  const posts = [
    {
      date: '12 Mart 2026',
      title: 'Lojistik Sektöründe 2026 Trendleri',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Yapay zeka, otonom araçlar ve yeşil taşımacılık — 2026 yılında lojistiği şekillendirecek teknolojiler.',
      content: [
        '2026 yılı, lojistik sektörü için köklü dönüşümlerin yılı olacak. Yapay zeka destekli rota optimizasyonundan otonom tırlara kadar birçok teknoloji sektörü yeniden şekillendiriyor.',
        'Yapay zeka ve makine öğrenmesi algoritmaları, gerçek zamanlı trafik verilerini analiz ederek en verimli rotaları belirliyor. Bu sayede yakıt tasarrufu ve teslim süresinin kısaltılması mümkün oluyor.',
        'Otonom araç teknolojisi henüz ticari olarak yaygınlaşmamış olsa da pilot uygulamalar oldukça umut verici sonuçlar ortaya koyuyor. Önümüzdeki 5 yıl içinde bazı koridorlarda yarı otonom tırların yaygınlaşması bekleniyor.',
        'Blok zinciri teknolojisi ise sevkiyat takibi ve gümrük süreçlerinde şeffaflığı artırıyor. Müşteriler yüklerini anlık olarak takip edebiliyor, sahte belge riski ortadan kalkıyor.'
      ]
    },
    {
      date: '28 Şubat 2026',
      title: 'Uluslararası Karayolu Taşımacılığında Gümrük Süreçleri',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'TIR karnesi, CMR belgesi ve AB gümrük prosedürleri hakkında bilmeniz gereken her şey.',
      content: [
        'Uluslararası karayolu taşımacılığında gümrük süreçleri, sevkiyatın zamanında teslim edilmesi için hayati öneme sahiptir. Doğru belgeleme ve prosedür bilgisi olmadan sınırlarda ciddi gecikmeler yaşanabilir.',
        'TIR karnesi, Gümrük Sözleşmesi kapsamında uluslararası taşımacılık yapan araçların sınırlardan hızlı geçişini sağlar. Bu belge sayesinde her ülkede ayrı gümrük teminatı yatırmaya gerek kalmaz.',
        'CMR belgesi ise taşıma sözleşmesinin yazılı kanıtıdır ve göndericinin, alıcının ve taşıyıcının sorumluluklarını net şekilde ortaya koyar. Yükle ilgili tüm bilgileri içerir.',
        'Avrupa Birliği gümrük prosedürleri son yıllarda dijitalleşmeye önem veriyor. Elektronik beyan sistemleri sayesinde kağıt işlemleri minimize edilmiş, hızlı işlem süreleri mümkün hale gelmiştir.'
      ]
    },
    {
      date: '15 Şubat 2026',
      title: 'Soğuk Zincir Taşımacılığı Nedir?',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Gıda, ilaç ve hassas ürünlerin kontrollü sıcaklıkta taşınması — soğuk zincirin önemi.',
      content: [
        'Soğuk zincir taşımacılığı, üretimden tüketime kadar belirli bir sıcaklık aralığında korunması gereken ürünlerin taşınması sürecidir. Gıda ve ilaç sektörlerinde kritik öneme sahiptir.',
        'Taze meyve-sebzeden dondurulmuş gıdalara, aşılardan biyolojik numunelere kadar pek çok ürün soğuk zincir gerektirir. Sıcaklığın bir an için bile kontrolsüz kalması, ürünün bozulmasına yol açabilir.',
        'Modern soğuk zincir araçları GPS izleme ve sıcaklık sensörleri ile donatılmıştır. Bu sayede yolculuk boyunca sıcaklık anlık olarak izlenebilir ve müdahale edilebilir.',
        'Çiçek Lojistik olarak soğuk zincir filomuzla -25°C ile +25°C arasında kontrollü sıcaklık taşımacılığı sunuyoruz. Uluslararası HACCP standartlarına uygun hizmet veriyoruz.'
      ]
    },
    {
      date: '02 Şubat 2026',
      title: 'Denizyolu vs Havayolu: Hangisini Seçmeli?',
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Hız, maliyet, kapasite — iki taşıma modelinin avantajları ve dezavantajları.',
      content: [
        'Uluslararası sevkiyatlarda denizyolu mu yoksa havayolu mu seçilmeli? Bu soru, birçok ihracatçı ve ithalatçının kafasını kurcalar. Cevap; ürüne, bütçeye ve teslim süresine bağlıdır.',
        'Denizyolu taşımacılığı, büyük hacimli yüklerde ekonomik çözüm sunar. Konteyner başına maliyet havayoluna göre çok daha düşüktür. Ancak teslim süresi 3-6 hafta arasında değişebilir.',
        'Havayolu taşımacılığı ise hız konusunda rakipsizdir. 24-72 saat içinde yük teslim edilebilir. Fakat maliyet deniz taşımacılığına göre 5-10 kat daha yüksektir.',
        'Hangisini seçeceğinize karar verirken yükünüzün değerini, raf ömrünü ve müşteri teslim taahhüdünüzü göz önünde bulundurun. Elektronik, ilaç ve lüks ürünler genelde havayoluyla, dayanıklı tüketim malları denizyoluyla taşınır.'
      ]
    },
    {
      date: '20 Ocak 2026',
      title: 'E-ticaret Lojistiğinde Başarı İpuçları',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Son mil teslimat, iade yönetimi ve depolama — e-ticarette rekabet üstünlüğü kazanmak.',
      content: [
        'E-ticaretin hızla büyümesiyle birlikte lojistik beklentiler de değişti. Müşteriler artık aynı gün veya ertesi gün teslimat, ücretsiz kargo ve sorunsuz iade süreci istiyor.',
        'Son mil teslimat, e-ticaret lojistiğinin en kritik ve en maliyetli aşamasıdır. Şehir içi dağıtım ağı optimizasyonu, elektrikli araçların kullanımı ve akıllı rota planlaması bu maliyeti azaltabilir.',
        'İade yönetimi ise müşteri memnuniyetinde belirleyici rol oynar. Kolay iade süreci, müşteri sadakatini artırır. Ters lojistik operasyonları için özel süreçler tasarlamak gerekir.',
        'Depolama stratejisi de başarının anahtarıdır. Merkezi tek depo yerine bölgesel dağıtım merkezleri, teslim sürelerini ve maliyetleri düşürmede oldukça etkilidir.'
      ]
    },
    {
      date: '05 Ocak 2026',
      title: 'Yeşil Lojistik ve Sürdürülebilirlik',
      image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Karbon ayak izini azaltmak için elektrikli filolar, alternatif yakıtlar ve akıllı rota planlaması.',
      content: [
        'Küresel ısınma ve iklim değişikliği, lojistik sektöründe sürdürülebilirlik arayışını zorunlu kılıyor. Yeşil lojistik, çevresel etkileri minimize ederken ekonomik verimliliği de koruma hedefindedir.',
        'Elektrikli kamyonlar ve hibrit araçlar, şehir içi dağıtımda giderek daha yaygın hale geliyor. Sıfır emisyon hedefleri doğrultusunda büyük lojistik firmaları filolarını yenilemeye başladı.',
        'Alternatif yakıtlar arasında LNG, biyoyakıt ve hidrojen öne çıkıyor. Uzun yol taşımacılığında dizel motorlara kıyasla ciddi karbon tasarrufu sağlıyorlar.',
        'Akıllı rota planlaması ve yük konsolidasyonu, aynı işi daha az araçla yapma imkânı sunar. Bu sayede hem maliyetler hem de karbon emisyonu düşürülür. Çiçek Lojistik olarak sürdürülebilir taşımacılığı önceliğimiz olarak görüyoruz.'
      ]
    }
  ];

  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  posts.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'blog-card reveal';
    card.innerHTML = `
      <div class="thumb" style="background-image:url('${p.image}')"></div>
      <div class="body">
        <span class="date">${p.date}</span>
        <h3>${p.title}</h3>
        <p class="excerpt">${p.excerpt}</p>
        <span class="more">Devamını Oku →</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });

  const backdrop = document.getElementById('blogModal');
  const modalImg = backdrop.querySelector('.hero-img');
  const modalDate = backdrop.querySelector('.date');
  const modalTitle = backdrop.querySelector('h2');
  const modalBody = backdrop.querySelector('.content');
  const closeBtn = backdrop.querySelector('.close');

  function openModal(i) {
    const p = posts[i];
    modalImg.style.backgroundImage = `url('${p.image}')`;
    modalDate.textContent = p.date;
    modalTitle.textContent = p.title;
    modalBody.innerHTML = p.content.map(pp => `<p>${pp}</p>`).join('');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Re-trigger reveal observer for dynamically added cards
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
})();
