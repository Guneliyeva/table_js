// Formun submit olayını işleyen fonksiyon
function formuIsle(event) {
    event.preventDefault(); // Formun varsayılan submit işlemini engelle
  
    // Formdan 5 hücre için veri al
    const veri = ['td1', 'td2', 'td3', 'td4', 'td5']
      .map(id => document.getElementById(id).value);
  
    // Yeni satırı eklemek için genelleştirilmiş fonksiyonu çağır
    yeniSatirEkle('dinamikTablo', veri);
  
    // Formu temizle
    document.getElementById('veriFormu').reset();
  }
  
  // Yeni satır eklemek için genelleştirilmiş fonksiyon
  function yeniSatirEkle(tabloId, veri) {
    const tablo = document.getElementById(tabloId);
    const yeniSatir = tablo.insertRow(-1); // Tablonun sonuna yeni bir satır ekler
  
    // Yeni satıra 5 hücre ve ilgili verileri ekleyin
    veri.forEach(deger => {
      let hücre = yeniSatir.insertCell();
      hücre.textContent = deger;
    });

    // Yeni satıra buton hücresi ekle (5. sütun)
    let butonHücre = yeniSatir.insertCell();
    let ekleButon = document.createElement('button');
    ekleButon.textContent = 'Yeni Satır Ekle';
    ekleButon.addEventListener('click', function() {
        // Yeni satır ekleme fonksiyonunu çağır
        formuIsle(new Event('submit'));
    });
    butonHücre.appendChild(ekleButon);
  }
  
  // Form submit olayı için dinleyici ekleyin
  document.getElementById('veriFormu').addEventListener('submit', formuIsle);

  document.addEventListener('DOMContentLoaded', function() {
    tabloOlustur();

    document.getElementById('veriFormu').addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan submit işlemini engelle

        // Formdan verileri al
        const veriler = [
            document.getElementById('td1').value,
            document.getElementById('td2').value,
            document.getElementById('td3').value,
            document.getElementById('td4').value,
            document.getElementById('td5').value
        ];

        // Verilerle yeni satır ekle
        yeniSatirEkle(veriler);

        // Formu temizle
        this.reset();
    });
});

function tabloOlustur() {
    const tablo = document.createElement('table');
    tablo.setAttribute('id', 'dinamikTablo');
    tablo.style.width = '100%';
    tablo.border = '1';

    const basliklar = ['#', 'Ad', 'Soyad', 'Yaş', 'Əməliyyatlar']; // İşlem başlığı eklendi
    const thead = tablo.createTHead();
    const row = thead.insertRow();

    basliklar.forEach(baslik => {
        const th = document.createElement('th');
        th.textContent = baslik;
        row.appendChild(th);
    });

    document.getElementById('table').appendChild(tablo);
}

function yeniSatirEkle(veriler) {
    const tablo = document.getElementById('dinamikTablo');
    const satir = tablo.insertRow();
    veriler.forEach(veri => {
        const hücre = satir.insertCell();
        hücre.textContent = veri;
    });

    // Yeni satıra buton hücresi ekle (5. sütun)
    let butonHücre = satir.insertCell();
    let ekleButon = document.createElement('button');
    ekleButon.textContent = 'Yeni Satır Ekle';
    ekleButon.addEventListener('click', function() {
        // Yeni satır ekleme fonksiyonunu çağır
        formuIsle(new Event('submit'));
    });
    butonHücre.appendChild(ekleButon);
}
