function sweden() {
    map.flyTo([ 62.941231, 15.269195 ], 4.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/sweden', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function denmark() {
    map.flyTo([ 56.193952237061694,10.745563732357926], 6.6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/denmark', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function norway() {
    map.flyTo([ 65.4195433645718, 12.332442735297636], 4.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/norway', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/North Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function finland() {
    map.flyTo([ 65.38514722188857, 26.718750000000004], 4.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/finland', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Uralic/Finnic"
    }, 500);
    $('#info').fadeToggle()
};

function estonia() {
    map.flyTo([ 58.79876931389673, 24.470355947857108], 6.7);
    $('#info').fadeToggle();
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/estonia', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Soviet nation"
        }, 500);
        $("#alert").animate({
          width: "300",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle();
};

function uk() {
    map.flyTo([ 55.18403478470818, -2.7570955187573998], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/uk', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};


function ireland() {
    map.flyTo([ 53.5101064359836, -8.2284162068909], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/%C3%89ire', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic - English<br>Indo-European/Celtic - Irish"
    }, 500);
    $('#info').fadeToggle()
};

function france() {
    map.flyTo([ 47.13001091389512, 1.8644220454841822], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/france', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function netherlands() {
    map.flyTo([ 52.42984195059116, 5.175104115105108], 6.8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/netherlands', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function belgium() {
    map.flyTo([ 50.624668035518646, 4.617644186114084], 6.8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/belgium', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Dutch colony"
        }, 500);
        $("#alert").animate({
          width: "200",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function iceland() {
    map.flyTo([ 65.02865102363563, -18.856384978804464], 5.8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/iceland', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/North Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function luxembourg() {
    map.flyTo([ 49.80381126137413, 6.063513971912862], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/luxembourg', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function spain() {
    map.flyTo([ 40.283378990021596, -3.5927403751744396], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/spain', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function portugal() {
    map.flyTo([ 39.860382417990124, -8.275515626631268], 6.8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function andorra() {
    map.flyTo([ 42.54364257222133, 1.584652143885639], 9.8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/andorra', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former French and Spanish colony"
        }, 500);
        $("#alert").animate({
          width: "300",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function faroeislands() {
    map.flyTo([ 61.9923859005303, -6.917502568689536], 7.8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/faroe', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Territory of Denmark"
        }, 500);
        $("#alert").animate({
          width: "200",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function greenland() {
    map.flyTo([ 76.57067680686542, -45.138716439714116], 3);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/greenland', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Territory of Denmark"
        }, 500);
        $("#alert").animate({
          width: "200",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function canada() {
    map.flyTo([ 59.712097173322924, -103.00781250000001], 3);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/canada', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former French and British colony"
        }, 500);
        $("#alert").animate({
          width: "300",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function usa() {
    map.flyTo([ 41.11207551400336, -98.95366708634688], 4);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former British colony"
        }, 500);
        $("#alert").animate({
          width: "200",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function bahamas() {
    map.flyTo([ 24.11440452932853, -77.25835366954121], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bahamas', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function trinidad() {
    map.flyTo([ 10.737807870370734, -61.227038269736], 8.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/trinidad', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function peru() {
    map.flyTo([ -9.668348216891518, -76.93667501133876], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/peru', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Spanish colony"
        }, 500);
        $("#alert").animate({
          width: "250",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function uruguay() {
    map.flyTo([ -32.46932013155666, -55.775280434788804], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/uruguay', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Spanish colony"
        }, 500);
        $("#alert").animate({
          width: "250",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function argentina() {
    map.flyTo([ -36.60646373972734, -66.21828696547928], 4.4);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/argentina', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Spanish colony"
        }, 500);
        $("#alert").animate({
          width: "250",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function chile() {
    map.flyTo([ -35.33146337040835, -71.82757160099624], 4.2);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/chile', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Spanish colony"
        }, 500);
        $("#alert").animate({
          width: "250",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function germany() {
    map.flyTo([ 51.70874317301371, 10.359733741427496], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/germany', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function switzerland() {
    map.flyTo([ 46.903102995378845, 8.346159182680198], 7.1);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/switzerland', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function italy() {
    map.flyTo([ 42.68243539838623, 12.568359375000002], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/italy', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function malta() {
    map.flyTo([ 35.98169029459523, 14.390238910061045], 9.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/malta', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function poland() {
    map.flyTo([ 52.45260595238017, 19.153448464947516], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/poland', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Slavic"
    }, 500);
    $('#info').fadeToggle()
};

function hungary() {
    map.flyTo([ 47.42338143358412, 19.0683042236447], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/hungary', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Uralic/Ugric"
    }, 500);
    $('#info').fadeToggle()
};

function greece() {
    map.flyTo([ 40.49638725900411, 23.11538709488678], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/greece', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Hellenic"
    }, 500);
    $('#info').fadeToggle()
};

function cyprus() {
    map.flyTo([ 35.409028245984544, 33.39119184790489], 7.6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/cyprus', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Hellenic"
    }, 500);
    $('#info').fadeToggle()
};

function australia() {
    map.flyTo([ -23.12718448670846, 133.01252302992123], 4);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/australia', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function newzealand() {
    map.flyTo([ -41.08339222365638, 172.7926521030317], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/new zealand', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function japan() {
    map.flyTo([ 37.81334997055043, 136.23218683598301], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/japan', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Japonic"
    }, 500);
    $('#info').fadeToggle()
};

function moldova() {
    map.flyTo([ 47.649408643626856, 28.320286863630532], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/moldova', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function romania() {
    map.flyTo([ 45.774719680908426, 24.591403447217104], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/romania', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function southafrica() {
    map.flyTo([ -28.54010765936898, 23.219147119438947], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/south africa', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function lesotho() {
    map.flyTo([ -29.58719290102686, 28.148668251334662], 7.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/lesotho', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic - English<br>Niger-Congo/Bantu - Sotho"
    }, 500);
    $('#info').fadeToggle()
};

function swaziland() {
    map.flyTo([ -26.5122280032492, 31.427689710641733], 7.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/swaziland', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic - English<br>Niger-Congo/Bantu - Swazi"
    }, 500);
    $('#info').fadeToggle()
};

function egypt() {
    map.flyTo([ 27.818130652473602, 28.81747131915233], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/egypt', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function morocco() {
    map.flyTo([ 30.664650202810147, -9.123917442854362], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/morocco', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function angola() {
    map.flyTo([ -11.2505118799254, 17.070358020239098], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/angola', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function kenya() {
    map.flyTo([ 0.858193778754388, 37.36282914843312], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/kenya', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic - English<br>Niger-Congo/Bantu - Swahili"
    }, 500);
    $('#info').fadeToggle()
};

function rwanda() {
    map.flyTo([ -1.91760597444935, 29.911521088121884], 7.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/rwanda', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Niger-Congo/Bantu - Kinyarwanda<br>Indo-European/West Germanic - English<br>Indo-European/Romance - French"
    }, 500);
    $('#info').fadeToggle()
};

function turkey() {
    map.flyTo([ 39.2082557253238, 35.24979521246551], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/turkey', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Turkic/Oghuz"
    }, 500);
    $('#info').fadeToggle()
};

function saudiarabia() {
    map.flyTo([ 24.533456374639282, 43.77011544116777], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/saudi arabia', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function qatar() {
    map.flyTo([ 25.46414920693410, 51.17776791198729], 8.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/qatar', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function bahrain() {
    map.flyTo([ 26.14285749586837, 50.55763848755442], 9.0);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bahrain', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function uae() {
    map.flyTo([ 24.7464593261764, 54.162667510281885], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/uae', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function israel() {
    map.flyTo([ 32.48353566605003, 34.90558909326231], 7.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/israel', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function austria() {
    map.flyTo([ 47.61909828269275, 13.861211651340014], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/austria', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic"
    }, 500);
    $('#info').fadeToggle()
};

function sanmarino() {
    map.flyTo([ 43.9423633069455, 12.457680435541388], 12);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/san marino', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance"
    }, 500);
    $('#info').fadeToggle()
};

function vatican() {
    map.flyTo([ 41.90395062221556, 12.452673694292075], 15);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/vatican', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Italic"
    }, 500);
    $('#info').fadeToggle()
};

function russia() {
    map.flyTo([ 65.22263903586733, 96.19234413538778], 2);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/russia', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/East Slavic"
    }, 500);
    $('#info').fadeToggle()
};

function czech() {
    map.flyTo([ 49.848936, 15.296527], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/czech', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Slavic"
    }, 500);
    $('#info').fadeToggle()
};

function uganda() {
    map.flyTo([ 1.479542, 32.608503], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/uganda', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/West Germanic - English<br>Niger-Congo/Bantu - Swahili"
    }, 500);
    $('#info').fadeToggle()
};

function chad() {
    map.flyTo([ 15.783192, 17.990024], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/chad', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Indo-European/Romance-  French<br>Afro-Asiatic/Semetic - Arabic"
    }, 500);
    $('#info').fadeToggle()
};

function algeria() {
    map.flyTo([ 28.648937, 0.364712], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/algeria', true)
        request.send()
        document.getElementById("langFamily").innerHTML = "Afro-Asiatic/Semetic"
    }, 500);
    $('#info').fadeToggle()
};

function tunisia() {
    map.flyTo([ 34.159169, 9.17123], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/tunisia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function barbados() {
    map.flyTo([ 13.194882, -59.551239], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/barbados', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function grenada() {
    map.flyTo([ 12.130635, -61.688232], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/grenada', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function macedonia() {
    map.flyTo([ 41.632148, 21.697282], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/macedonia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function kosovo() {
    map.flyTo([ 42.593533, 20.863037], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/kosovo', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function lithuania() {
    map.flyTo([ 55.336638, 23.582585], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/lithuania', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function latvia() {
    map.flyTo([ 56.987399, 24.311737], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/latvia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function belarus() {
    map.flyTo([ 53.785882, 27.652195], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/belarus', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function ukraine() {
    map.flyTo([ 49.59647, 31.179199], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/ukraine', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Soviet nation"
        }, 500);
        $("#alert").animate({
          width: "300",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function slovakia() {
    map.flyTo([ 48.730425, 19.572317], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/slovakia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function albania() {
    map.flyTo([ 41.174519, 19.857788], 7.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/albania', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function bulgaria() {
    map.flyTo([ 42.811522, 25.114746], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bulgaria', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function montenegro() {
    map.flyTo([ 42.682435, 19.094238], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/montenegro', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function croatia() {
    map.flyTo([ 44.52564, 16.403397], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/croatia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function bosnia() {
    map.flyTo([ 43.992815, 17.918701], 7.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bosnia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function slovenia() {
    map.flyTo([ 46.158099, 14.61664], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/slovenia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function serbia() {
    map.flyTo([ 44.584381, 20.492001], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/serbia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function liechtenstein() {
    map.flyTo([ 47.160358, 9.535433], 11);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/liechtenstein', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function monaco() {
    map.flyTo([ 43.739081, 7.425775], 14);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/monaco', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function mexico() {
    map.flyTo([ 23.989762, -101.724522], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/mexico', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Spanish colony"
        }, 500);
        $("#alert").animate({
          width: "300",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function honduras() {
    map.flyTo([ 14.956433, -86.55547], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/honduras', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function elsalvador() {
    map.flyTo([ 13.764819, -89.077119], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/el salvador', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function belize() {
    map.flyTo([ 17.15731, -88.603758], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/belize', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function nicaragua() {
    map.flyTo([ 12.852813, -85.249212], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/nicaragua', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function costarica() {
    map.flyTo([ 9.860628, -83.913574], 8);
    $('#info').fadeToggle()
   setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/costa rica', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function panama() {
    map.flyTo([ 8.526701, -80.36499], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/panama', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function colombia() {
    map.flyTo([ 4.235506, -73.487059], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/colombia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function venezuela() {
    map.flyTo([ 6.96261, -66.237982], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/venezuela', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function ecuador() {
    map.flyTo([ -1.72066, -78.776352], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/ecuador', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function guyana() {
    map.flyTo([ 4.97056, -58.930664], 6.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/guyana', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function suriname() {
    map.flyTo([ 4.11745, -56.247682], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/suriname', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function brazil() {
    map.flyTo([ -13.910892, -52.643169], 4);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/brazil', true)
        request.send()
        $("#alert").animate({
          width: "0",
          color: "white"
        });
        setTimeout(function(){
          document.getElementById("alert").innerHTML = "Former Portuguese colony"
        }, 500);
        $("#alert").animate({
          width: "250",
          color: "black"
      });
    }, 500);
    $('#info').fadeToggle()
};

function bolivia() {
    map.flyTo([ -15.824129, -64.900273], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bolivia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function paraguay() {
    map.flyTo([ -23.22389, -58.457552], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/paraguay', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function jamaica() {
    map.flyTo([ 17.748687, -77.250366], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/jamaica', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function saintvincent() {
    map.flyTo([ 13.131605, -61.22326], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/saint vincent', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function saintlucia() {
    map.flyTo([ 13.890078, -61.008453], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/saint lucia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function dominica() {
    map.flyTo([ 15.398662, -61.358301], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/dominica', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function antigua() {
    map.flyTo([ 17.370299, -61.810455], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/antigua', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function saintkitts() {
    map.flyTo([ 17.263164, -62.704871], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/saint kitts', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function dominicanrepublic() {
    map.flyTo([ 19.374994, -70.145168], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/dominican republic', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function haiti() {
    map.flyTo([ 19.051734, -72.652588], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/haiti', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function cuba() {
    map.flyTo([ 21.886998, -80.024542], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/cuba', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function vanuatu() {
    map.flyTo([ -16.74977, 168.10558], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/vanuatu', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function papua() {
    map.flyTo([ -6.065036, 148.569579], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/papua', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function indonesia() {
    map.flyTo([ -2.284551, 119.663086], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/indonesia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function philippines() {
    map.flyTo([ 13.295821, 122.138349], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/philipines', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function malaysia() {
    map.flyTo([ 3.915067, 102.023709], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/malaysia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function singapore() {
    map.flyTo([ 1.322211, 103.851671], 10);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/singapore', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function brunei() {
    map.flyTo([ 4.632549, 474.582178], 9);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/brunei', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function southkorea() {
    map.flyTo([ 36.638873, 127.678839], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/korea', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function northkorea() {
    map.flyTo([ 40.036027, 127.023926], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/north korea', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function china() {
    map.flyTo([ 38.614108, 103.952625], 4);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/china', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function mongolia() {
    map.flyTo([47.248191, 104.552102], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/mongolia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function vietnam() {
    map.flyTo([15.783192, 108.04451], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/vietnam', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function laos() {
    map.flyTo([15.574832, 106.096801], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/laos', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function thailand() {
    map.flyTo([15.665354, 100.700684], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/thailand', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function myanmar() {
    map.flyTo([21.004453, 95.502336], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/myanmar', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function bhutan() {
    map.flyTo([27.492474, 90.360599], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bhutan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function bangaladesh() {
    map.flyTo([23.607248, 90.014677], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/bangladesh', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function india() {
    map.flyTo([22.59641, 78.293218], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/india', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function nepal() {
    map.flyTo([28.167654, 84.16887], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/nepal', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function pakistan() {
    map.flyTo([30.651111, 70.073799], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/pakistan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function afghanistan() {
    map.flyTo([34.09678, 65.70312], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/afghanistan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function tajikistan() {
    map.flyTo([38.947818, 70.821628], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/tajikistan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function turkmenistan() {
    map.flyTo([39.179567, 58.654666], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/turkmenistan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function uzbekistan() {
    map.flyTo([41.689322, 62.53418], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/uzbekistan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function kazakhstan() {
    map.flyTo([48.709586, 65.686539], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/kazakhstan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function iran() {
    map.flyTo([32.623516, 53.871579], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/iran', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function iraq() {
    map.flyTo([33.371928, 42.449279], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/iraq', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function syria() {
    map.flyTo([34.820231, 38.094528], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/syria', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function lebanon() {
    map.flyTo([33.894505, 35.72123], 8.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/lebanon', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function yemen() {
    map.flyTo([15.79584, 47.113402], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/yemen', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function oman() {
    map.flyTo([20.162511, 55.920993], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/sultanate%20of%20oman', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function armenia() {
    map.flyTo([40.087327, 45.159317], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/armenia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function azerbaijan() {
    map.flyTo([40.20268, 48.838628], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/azerbaijan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function georgia() {
    map.flyTo([42.233476, 43.418446], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/georgia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function madagascar() {
    map.flyTo([-18.882974, 46.340009], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/madagascar', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function mozambique() {
    map.flyTo([-18.75031, 34.343262], 5.6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/mozambique', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function malawi() {
    map.flyTo([-13.194612, 33.681451], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/malawi', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function zimbabwe() {
    map.flyTo([-19.012188, 29.40262], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/zimbabwe', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function zambia() {
    map.flyTo([-19.012188, 29.40262], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/zambia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function botswana() {
    map.flyTo([-22.340621, 24.191229], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/botswana', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function namibia() {
    map.flyTo([-23.099944, 16.940918], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/namibia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function democraticcongo() {
    map.flyTo([-1.889306, 23.291016], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/congo', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function republiccongo() {
    map.flyTo([-0.459448, 14.497223], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/republic of the congo', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function gabon() {
    map.flyTo([-0.35156, 11.689453], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/gabon', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function equatorialguinea() {
    map.flyTo([1.647722, 10.272217], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/equatorial guinea', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function benin() {
    map.flyTo([9.384032, 2.043457], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/benin', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function togo() {
    map.flyTo([8.722218, 0.955811], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/togo', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function ghana() {
    map.flyTo([7.906912, -1.098633], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/ghana', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function cotedivoire() {
    map.flyTo([7.972198, -5.581055], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/cote d ivoire', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function liberia() {
    map.flyTo([6.380812, -9.799805], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/liberia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function sierraleone() {
    map.flyTo([6.380812, -9.799805], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/sierra leone', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function guinea() {
    map.flyTo([10.811724, -11.282959], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/guinea', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function guineabissau() {
    map.flyTo([11.716788, -15.655518], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/guinea bissau', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function gambia() {
    map.flyTo([13.507155, -15.655518], 9);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/gambia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function senegal() {
    map.flyTo([14.509144, -14.853516], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/senegal', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function mauritania() {
    map.flyTo([21.086555, -11.785657], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/mauritania', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function libya() {
    map.flyTo([26.70636, 17.314453], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/libya', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function niger() {
    map.flyTo([17.869514, 9.551574], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/niger', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function nigeria() {
    map.flyTo([9.116282, 7.562836], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/nigeria', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function mali() {
    map.flyTo([18.104087, -3.208008], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/mali', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function burkinafaso() {
    map.flyTo([12.54384, -1.329346], 5.5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/burkina faso', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function cameroon() {
    map.flyTo([5.863185, 11.953685], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/yemen', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function burundi() {
    map.flyTo([-3.381414, 29.959442], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/burundi', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function tanzania() {
    map.flyTo([-6.152646, 34.535093], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/tanzania', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function kenya() {
    map.flyTo([0.395505, 37.30957], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/kenya', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function somalia() {
    map.flyTo([6.926427, 45.483398], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/somalia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function ethiopia() {
    map.flyTo([9.31899, 38.869629], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/ethiopia', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function eritrea() {
    map.flyTo([15.235798, 39.807069], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/eritrea', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function djibouti() {
    map.flyTo([11.856599, 42.615967], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/djibouti', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function car() {
    map.flyTo([6.789803, 20.050838], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/central african republic', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function sudan() {
    map.flyTo([15.643058, 29.794026], 5);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/sudan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function southsudan() {
    map.flyTo([7.318882, 29.311523], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/south sudan', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function mauritius() {
    map.flyTo([-20.161128, 57.581248], 9);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/mauritius', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function comoros() {
    map.flyTo([-11.801663, 43.857301], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/comoros', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function capeverde() {
    map.flyTo([15.946523, -23.979954], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/cape verde', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function saotome() {
    map.flyTo([0.903558, 6.90817], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/sao tome', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function seychelles() {
    map.flyTo([-4.478402, 55.538815], 9);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/seychelles', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function srilanka() {
    map.flyTo([7.840831, 80.633414], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/sri lanka', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function fiji() {
    map.flyTo([-17.79025, 177.957597], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/fiji', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function tonga() {
    map.flyTo([-21.20412, 184.884837], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/tonga', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function samoa() {
    map.flyTo([-13.740756, 187.834471], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/samoa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function tuvalu() {
    map.flyTo([-8.519005, 179.197837], 8);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/tuvalu', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};


/*###########################################*/
/*###########################################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*############US STATES######################*/
/*###########################################*/
/*###########################################*/

function alabama() {
    map.flyTo([32.990586, -86.803386], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function alaska() {
    map.flyTo([65.934583, -151.747759], 4);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function arizona() {
    map.flyTo([34.36039, -111.869337], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function arkansas() {
    map.flyTo([35.125062, -92.689372], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function california() {
    map.flyTo([37.507067, -120.293447], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function colorado() {
    map.flyTo([39.0422, -105.508383], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function connecticut() {
    map.flyTo([41.545383, -72.718515], 9);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function delaware() {
    map.flyTo([39.147889, -75.514634], 9);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function florida() {
    map.flyTo([27.800667, -81.726136], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function georgiaSTATE() {
    map.flyTo([32.741082, -83.237366], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function hawaii() {
    map.flyTo([20.356618, -158.743244], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function idaho() {
    map.flyTo([45.690833, -115.570058], 6);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function illinois() {
    map.flyTo([40.044438, -89.490833], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function indiana() {
    map.flyTo([39.825413, -86.221011], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function iowa() {
    map.flyTo([42.016652, -93.303941], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};

function kansas() {
    map.flyTo([38.548165, -98.391708], 7);
    $('#info').fadeToggle()
    setTimeout(function(){
        request.open('GET', 'https://restcountries.eu/rest/v2/name/usa', true)
        request.send()
    }, 500);
    $('#info').fadeToggle()
};
