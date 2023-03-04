// // Beden Kitle Endeksi Uygulaması

// let kilo = Number(prompt("Kilonuzu giriniz."));
// let boy =  Number(prompt("Boyunuzu metre cinsinden giriniz."));
// let sonuç = kilo/(boy*2);

// if(sonuç < 18.5){
//     console.log("İdeal kilonun altında");
// }else if (sonuç >= 18.5 && sonuç<=24.9){
//     console.log("İdeal kilonun altında");
// }else if (sonuç >= 25 && sonuç<=29.9){
//     console.log("İdeal kiloda");
// }else if (sonuç >= 30 && sonuç<=39.9){
//     console.log("İdeal kilonun üstünde");
// }else if (sonuç >= 40){
//     console.log("İdeal kilonun çok üstünde");
// }

/***********************************************************************************************/

// // Benzin istasyonu

// let dizel = 24.53, benzin = 22.25, lpg = 11.1;
// const yeniSatir = "\r\n";

// const yakitMetni = "1-Dizel" + yeniSatir
// + "2-Benzin" + yeniSatir
// + "3-lpg" + yeniSatir
// + "yakıt türünü seçiniz";

// let yakitTipi = prompt(yakitMetni);
// if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){

// let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
// let bakiye = Number(prompt("Bakiyenizi giriniz"));

//     if(yakitTipi==1){
//         let odenecekTutar = dizel*yakitLitresi;
//         if(odenecekTutar < bakiye){
//             alert("Yakıt alma işlemi başarılı..");
//         }else{
//             alert("Bakiyeniz yeterli değildir" + yeniSatir
//             + "Ödenecek tutar : " + odenecekTutar + yeniSatir
//             + "Bakiye : " + bakiye + yeniSatir
//             + "Eksik tutar : " + (odenecekTutar-bakiye));
//         }
//     }else if(yakitTipi==2){
//         let odenecekTutar = benzin*yakitLitresi;
//         if(odenecekTutar < bakiye){
//             alert("Yakıt alma işlemi başarılı..");
//         }else{
//             alert("Bakiyeniz yeterli değildir" + yeniSatir
//             + "Ödenecek tutar : " + odenecekTutar + yeniSatir
//             + "Bakiye : " + bakiye + yeniSatir
//             + "Eksik tutar : " + (odenecekTutar-bakiye));
//         }
//     }else if(yakitTipi==3){
//         let odenecekTutar = lpg*yakitLitresi;
//         if(odenecekTutar < bakiye){
//             alert("Yakıt alma işlemi başarılı..");
//         }else{
//             alert("Bakiyeniz yeterli değildir" + yeniSatir
//             + "Ödenecek tutar : " + odenecekTutar + yeniSatir
//             + "Bakiye : " + bakiye + yeniSatir
//             + "Eksik tutar : " + (odenecekTutar-bakiye));
//         }
//     }
//     }else{
//         alert("Lütfen geçerli bir yakıt tipi seçiniz.")
//     }

/***********************************************************************************************/

// // ATM uygulaması

// let bakiye = 1000;
// const yeniSatir = "\r\n";
// let metin = "1-Bakiye Görüntüleme"+yeniSatir
// +"2-Para Çekme"+yeniSatir
// +"3-Para Yatırma"+yeniSatir
// +"4-çıkış"+yeniSatir
// +"Lütfen bir değer seçiniz";

// let secim = prompt(metin);
// switch(secim){
//     case "1": 
//         alert("Bakiyeniz : " + bakiye);
//         break;
//     case "2":
//         let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
//         if(cekilecekTutar<bakiye){
//             bakiye = bakiye - cekilecekTutar;
//             alert("Kalan bakiye : " + bakiye);
//         }else{
//             alert("Bakiyeniz yetersiz");
//         }
//         break;
//     case "3":
//         let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz"));
//         bakiye=bakiye+yatirilacakTutar;
//         alert("Güncel Bakiye : " + bakiye);
//         break;
//     case "4":
//         console.log("Sistemden çıkış yapılmıştır");
//         break;
//     default:
//         alert("Lütfen 1-4 arasında bir değer giriniz")
//     }

/***********************************************************************************************/

// // Ürün arama uygulaması

// let urun1 = {
//     isim : "ACER Swift",
//     kategori : "Teknoloji",
//     fiyat : 6.219
// }
// let urun2 = {
//     isim : "ACER Nitro 5",
//     kategori : "Teknoloji",
//     fiyat : 15.000
// }
// let urun3 = {
//     isim : "Lenovo V15",
//     kategori : "Teknoloji",
//     fiyat : 14.500
// }
// let urun4 = {
//     isim : "Lenovo V14",
//     kategori : "Teknoloji",
//     fiyat : 11.500
// }
// let urun5 = {
//     isim : "Lenovo Ideapad",
//     kategori : "Teknoloji",
//     fiyat : 14.000
// }

// let urunler = [urun1, urun2, urun3, urun4, urun5];
// let filtreliUrunler = [];
// let kullaniciUrunIsmi = prompt("Bir ürün giriniz");

// filtreliUrunleriDoldur(urunler);
// filtreliUrunleriYazdir(filtreliUrunler);

// function filtreliUrunleriDoldur(urunler){
//     urunler.forEach(function(urun){
//         if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
//             filtreliUrunler.push(urun);
//         }
//     });
// }

// function filtreliUrunleriYazdir(urunler){
//     urunler.forEach(function(urun){
//         console.log("-------------------------------------");
//         console.log("|" + urun.isim +"|"+ urun.fiyat +"|"+ urun.kategori);
//         console.log("-------------------------------------");
//     });
// }

/***********************************************************************************************/

// Kitap bulma algoritması

let kitap1 = {
    isim : "Her Şeyi Düşünme", 
    yazar : "Anne Bogel", 
    fiyat : 25,
    raf : "1.5.Raf"
}

let kitap2 = {
    isim : "Hiçbir Karşılaşma Tesadüf Değildir", 
    yazar : "Hakan Mengüç", 
    fiyat : 56,
    raf : "2.3.Raf"
}

let kitap3 = {
    isim : "İnsan Ne İle Yaşar", 
    yazar : "Tolstoy", 
    fiyat : 35,
    raf : "3.4.Raf"
}

let kitap4 = {
    isim : "Zafer Sızlanarak Kazanılmaz", 
    yazar : "Haluk Tatar", 
    fiyat : 45,
    raf : "4.1.Raf"
}

let kitap5 = {
    isim : "Şeker Portakalo", 
    yazar : "Jose", 
    fiyat : 22,
    raf : "5.3.Raf"
}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

let raf11 = {kod: "1.1.Raf", goster: false}
let raf12 = {kod: "1.2.Raf", goster: false}
let raf13 = {kod: "1.3.Raf", goster: false}
let raf14 = {kod: "1.4.Raf", goster: false}
let raf15 = {kod: "1.5.Raf", goster: false}


let raf21 = {kod: "2.1.Raf", goster: false}
let raf22 = {kod: "2.2.Raf", goster: false}
let raf23 = {kod: "2.3.Raf", goster: false}
let raf24 = {kod: "2.4.Raf", goster: false}
let raf25 = {kod: "2.5.Raf", goster: false}


let raf31 = {kod: "2.1.Raf", goster: false}
let raf32 = {kod: "3.2.Raf", goster: false}
let raf33 = {kod: "3.3.Raf", goster: false}
let raf34 = {kod: "3.4.Raf", goster: false}
let raf35 = {kod: "3.5.Raf", goster: false}


let raf41 = {kod: "4.1.Raf", goster: false}
let raf42 = {kod: "4.2.Raf", goster: false}
let raf43 = {kod: "4.3.Raf", goster: false}
let raf44 = {kod: "4.4.Raf", goster: false}
let raf45 = {kod: "4.5.Raf", goster: false}


let raf51 = {kod: "5.1.Raf", goster: false}
let raf52 = {kod: "5.2.Raf", goster: false}
let raf53 = {kod: "5.3.Raf", goster: false}
let raf54 = {kod: "5.4.Raf", goster: false}
let raf55 = {kod: "5.5.Raf", goster: false}

let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]];

function rafOlustur(){
    console.clear();
    let satir="";
    for(let i=0 ; i<raflar.length ; i++){
        for(let j=0 ; j<5 ; j++){
            satir += "|"+ (raflar[i][j].goster ? raflar[i][j].kod : "---")+"";
        }
        console.log(satir);
        console.log("--------------------")
        satir="";
    }
}

function kodBul(kitapIsmi){
    let rafKod=null;
    kitaplar.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
            rafKod=kitap.raf;
        }
    })
    return rafKod;
}

function raftaGoster(rafKodu){
    for(let i=0 ; i<raflar.length ; i++){
        for(let j=0 ; j<5 ; j++){
            if(raflar[i][j].kod==rafKodu){
                raflar[i][j].goster=true;
                break;
            }
        }
    }
}

rafOlustur();

let kitapIsmi = prompt("Bir kitap ismi giriniz");
let rafKod = kodBul(kitapIsmi);


if(rafKod!=null){
    raftaGoster(rafKod);
    rafOlustur();
}else{
    alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır");
}


