/* ====== NOMOR WHATSAPP (format internasional, tanpa + dan spasi) ====== */
const WA_NUMBER = "6281285395952";

/* ====== DATA PRODUK ======
   Gambar dibuat otomatis (SVG) dari spesifikasi tiap jam, jadi SELALU cocok dengan nama & deskripsinya.
   Mau pakai foto asli? Tambahkan  img:"https://link-foto"  di produk yang diinginkan (pastikan fotonya cocok). */
const PRODUCTS = [
  {id:1,name:"Meridian 40",type:"dress",cat:"Dress",desc:"Casing baja 40 mm, dial putih bersih, strap kulit cokelat, mesin otomatis.",price:8750000,c:"steel",d:"white",st:"leather:brown",ix:"bar"},
  {id:2,name:"Arbor Chrono",type:"sport",cat:"Sport",desc:"Chronograph tiga sub-dial, bezel tachymeter, tahan air 100 m, strap karet.",price:12400000,tag:"Terlaris",c:"steel",d:"black",st:"rubber:black",ix:"bar",f:"chrono",bz:"tach"},
  {id:3,name:"Lindung Heritage",type:"klasik",cat:"Klasik",desc:"Dial krem berangka Arab ala tahun 60-an, strap kulit cokelat.",price:6900000,c:"steel",d:"cream",st:"leather:brown",ix:"num"},
  {id:4,name:"Selat Diver",type:"sport",cat:"Sport",desc:"Bezel diver putar searah, dial biru tua, tahan air 200 m.",price:14800000,c:"steel",d:"navy",st:"rubber:black",ix:"bar",bz:"diver"},
  {id:5,name:"Noir Slim",type:"dress",cat:"Dress",desc:"Dial hitam polos, tebal hanya 7 mm, nyaman di bawah lengan kemeja.",price:9600000,c:"steel",d:"black",st:"leather:black",ix:"bar"},
  {id:6,name:"Pusaka Hand-Wind",type:"klasik",cat:"Klasik",desc:"Casing emas, dial gading berangka Arab, mesin manual yang diputar tiap pagi.",price:11200000,c:"gold",d:"ivory",st:"leather:tan",ix:"num"},
  {id:7,name:"Gading Date",type:"dress",cat:"Dress",desc:"Dial gading dengan jendela tanggal dan strap kulit hitam.",price:7450000,c:"steel",d:"ivory",st:"leather:black",ix:"bar",f:"date"},
  {id:8,name:"Karang GMT",type:"sport",cat:"Sport",desc:"Dua zona waktu, bezel biru-merah, gelang baja tiga mata.",price:16900000,tag:"Terlaris",c:"steel",d:"black",st:"bracelet:steel",ix:"bar",f:"gmt",bz:"gmt"},
  {id:9,name:"Senja Rose",type:"dress",cat:"Dress",desc:"Casing emas mawar 38 mm, dial champagne, strap kulit cokelat muda.",price:13500000,c:"rose",d:"champagne",st:"leather:tan",ix:"bar"},
  {id:10,name:"Batavia 1962",type:"klasik",cat:"Klasik",desc:"Reissue gaya 60-an: dial perak, angka Arab, strap kulit cokelat.",price:8200000,c:"steel",d:"silver",st:"leather:brown",ix:"num"},
  {id:11,name:"Rimba Field",type:"sport",cat:"Sport",desc:"Jam lapangan casing hitam, dial hijau zaitun, strap kanvas, tahan benturan.",price:5900000,c:"black",d:"olive",st:"canvas:olive",ix:"pilot"},
  {id:12,name:"Tirta Moonphase",type:"klasik",cat:"Klasik",desc:"Fase bulan di dial biru malam, strap kulit navy, mesin otomatis.",price:18700000,c:"steel",d:"navy",st:"leather:navy",ix:"bar",f:"moon"},
  {id:13,name:"Mawar Petite",type:"wanita",cat:"Wanita",desc:"Casing mungil emas mawar dengan bezel berkristal, strap kulit krem.",price:4200000,tag:"Baru",sm:1,c:"rose",d:"white",st:"leather:cream",ix:"dot",bz:"gems"},
  {id:14,name:"Embun Mini",type:"wanita",cat:"Wanita",desc:"Gelang mesh perak yang tipis dan ringan di pergelangan.",price:3650000,sm:1,c:"steel",d:"silver",st:"mesh:steel",ix:"bar"},
  {id:15,name:"Kenanga Pearl",type:"wanita",cat:"Wanita",desc:"Dial mother-of-pearl dengan bezel kristal dan strap kulit abu.",price:5900000,sm:1,c:"steel",d:"pearl",st:"leather:grey",ix:"dot",bz:"gems"},
  {id:16,name:"Sutra Bangle",type:"wanita",cat:"Wanita",desc:"Gelang emas berantai, dial putih, anggun dari siang sampai malam.",price:4800000,tag:"Baru",sm:1,c:"gold",d:"white",st:"bracelet:gold",ix:"bar"},
  {id:17,name:"Nusa Smart 1",type:"smart",cat:"Smartwatch",desc:"Layar AMOLED persegi, pelacak tidur dan detak jantung, baterai 7 hari.",price:3200000,tag:"Baru",s:"square",c:"black",d:"black",st:"rubber:teal",f:"smart"},
  {id:18,name:"Nusa Smart Pro",type:"smart",cat:"Smartwatch",desc:"Layar bulat, casing titanium, GPS bawaan, tahan air 50 m.",price:6800000,c:"titanium",d:"black",st:"rubber:black",f:"smart"},
  {id:19,name:"Garuda Hybrid",type:"smart",cat:"Smartwatch",desc:"Tampilan analog klasik dengan jendela kecil penghitung langkah.",price:4400000,c:"steel",d:"black",st:"leather:black",ix:"bar",f:"hybrid"},
  {id:20,name:"Bayu Skeleton",type:"klasik",cat:"Klasik",desc:"Dial terbuka memperlihatkan roda gigi mesin otomatis.",price:15600000,c:"steel",d:"black",st:"leather:black",ix:"bar",f:"skel"},
  {id:21,name:"Surya Titanium",type:"sport",cat:"Sport",desc:"Titanium ringan, dial abu-abu, kaca safir, cocok dipakai harian.",price:9900000,c:"titanium",d:"grey",st:"bracelet:titanium",ix:"bar"},
  {id:22,name:"Arsa Pilot",type:"sport",cat:"Sport",desc:"Dial hitam berangka besar yang mudah dibaca, strap kulit cokelat tebal.",price:10800000,tag:"Baru",c:"steel",d:"black",st:"leather:brown",ix:"pilot"},
  {id:23,name:"Wangsa Tonneau",type:"dress",cat:"Dress",desc:"Casing bentuk tong, dial arang, tampil beda untuk acara formal.",price:12900000,s:"tonneau",c:"steel",d:"charcoal",st:"leather:black",ix:"bar"},
  {id:24,name:"Lazuardi Blue",type:"dress",cat:"Dress",desc:"Dial biru sunburst dengan indeks emas dan strap kulit navy.",price:8900000,c:"steel",d:"blue",st:"leather:navy",ix:"bar",ia:"#e8d3a4"}
];

/* ====== Generator gambar jam (SVG) ====== */
const METAL={steel:["#f4f6f7","#8a939a","#d9dde0"],gold:["#f8e7b8","#a47a2a","#ecd391"],rose:["#f6d8ca","#b4765f","#ebbfae"],black:["#626971","#12161b","#3d434a"],titanium:["#cfd4d8","#6a7177","#b3b9be"]};
const DIAL={white:"#f3f0e8",cream:"#e8dcc0",ivory:"#efe8d6",black:"#12161b",navy:"#1b2b49",blue:"#2a4f84",silver:"#cbd0d4",champagne:"#dccaa2",olive:"#49523a",grey:"#59626a",charcoal:"#2a2f35",pearl:"#efe9ec"};
const STRAP={brown:["#3a2517","#6b4a30"],tan:["#7a5636","#b58a5e"],black:["#0f1114","#2b2f34"],navy:["#141f36","#2e4470"],cream:["#c9b99a","#eadfc8"],grey:["#6e7378","#a2a8ad"],olive:["#4a4f35","#6f7551"],teal:["#1d4448","#3b7a80"]};
const mix=(a,b,t)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return "#"+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,"0")).join("")};
const artCache={};
function art(p){
  if(artCache[p.id]) return artCache[p.id];
  const cx=200,cy=200,round=p.s!=="square"&&p.s!=="tonneau";
  let hw,hh,rx=0;
  if(p.s==="square"){hw=hh=76;rx=30}else if(p.s==="tonneau"){hw=68;hh=82;rx=44}else{hw=hh=p.sm?66:84}
  const m=METAL[p.c], dc=DIAL[p.d], rgb=[1,3,5].map(i=>parseInt(dc.slice(i,i+2),16)), dark=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000<110;
  const ink=(p.f==="smart"||dark)?"#eee9dc":"#1a1f25", acc=p.ia||(dark?"#e8d3a4":ink), rd=Math.min(hw,hh)-(round?15:21);
  const shp=(i,x)=>round?`<circle cx="${cx}" cy="${cy}" r="${hw-i}" ${x}/>`:`<rect x="${cx-hw+i}" y="${cy-hh+i}" width="${2*(hw-i)}" height="${2*(hh-i)}" rx="${Math.max(rx-i,6)}" ${x}/>`;
  const ang=(i,n,r)=>[cx+r*Math.sin(i*2*Math.PI/n),cy-r*Math.cos(i*2*Math.PI/n)];
  const [sT,sC]=p.st.split(":"), sw=p.sm?54:(p.s==="tonneau"?66:74), sx=cx-sw/2;
  const bm=METAL[sC]||METAL.steel, sc=STRAP[sC]||STRAP.black;
  let strap="";
  if(sT==="bracelet"||sT==="mesh"){
    strap+=`<rect x="${sx}" y="-10" width="${sw}" height="420" fill="url(#bm)"/>`;
    if(sT==="bracelet") for(let y=-6;y<410;y+=24) strap+=`<rect x="${sx+2}" y="${y}" width="${sw-4}" height="20" rx="4" fill="url(#bm)" stroke="rgba(0,0,0,.35)"/><line x1="${cx}" y1="${y+3}" x2="${cx}" y2="${y+17}" stroke="rgba(0,0,0,.2)"/>`;
    else for(let x=sx+2;x<sx+sw;x+=3) strap+=`<line x1="${x}" y1="-10" x2="${x}" y2="410" stroke="rgba(0,0,0,.22)"/>`;
  }else{
    strap+=`<rect x="${sx}" y="-10" width="${sw}" height="420" fill="url(#sg)"/>`;
    if(sT==="leather"){strap+=`<line x1="${sx+6}" y1="-10" x2="${sx+6}" y2="410" stroke="rgba(255,255,255,.35)" stroke-dasharray="4 3"/><line x1="${sx+sw-6}" y1="-10" x2="${sx+sw-6}" y2="410" stroke="rgba(255,255,255,.35)" stroke-dasharray="4 3"/>`;for(let y=292;y<390;y+=20)strap+=`<circle cx="${cx}" cy="${y}" r="2.8" fill="rgba(0,0,0,.6)"/>`}
    if(sT==="rubber") for(let y=-10;y<410;y+=12) strap+=`<line x1="${sx}" y1="${y}" x2="${sx+sw}" y2="${y}" stroke="rgba(0,0,0,.2)"/>`;
    if(sT==="canvas") for(let y=-40;y<420;y+=7) strap+=`<line x1="${sx}" y1="${y}" x2="${sx+sw}" y2="${y+14}" stroke="rgba(255,255,255,.1)"/>`;
  }
  const lug=(x,y)=>`<rect x="${x}" y="${y}" width="10" height="24" rx="4" fill="url(#cm)" stroke="rgba(0,0,0,.35)"/>`;
  let body=lug(sx-8,cy-hh-8)+lug(sx+sw-2,cy-hh-8)+lug(sx-8,cy+hh-16)+lug(sx+sw-2,cy+hh-16);
  body+=`<rect x="${cx+hw-3}" y="${cy-9}" width="12" height="18" rx="3" fill="url(#cm)" stroke="rgba(0,0,0,.35)"/>`;
  if(p.f==="chrono") body+=`<rect x="${cx+hw-3}" y="${cy-40}" width="9" height="13" rx="3" fill="url(#cm)" stroke="rgba(0,0,0,.35)"/><rect x="${cx+hw-3}" y="${cy+27}" width="9" height="13" rx="3" fill="url(#cm)" stroke="rgba(0,0,0,.35)"/>`;
  body+=shp(0,`fill="url(#cm)" stroke="rgba(0,0,0,.4)" stroke-width="1.2"`)+shp(7,`fill="url(#cm2)" stroke="rgba(0,0,0,.3)"`);
  // bezel
  if(p.bz==="diver"||p.bz==="tach"){
    body+=`<circle cx="${cx}" cy="${cy}" r="${hw-11}" fill="none" stroke="#0f1318" stroke-width="10"/>`;
    const n=p.bz==="diver"?60:48;for(let i=0;i<n;i++){const a=ang(i,n,hw-6),b=ang(i,n,hw-(i%5?8.5:10.5));body+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#e9e4d6" stroke-width="${i%5?1:2}"/>`}
    if(p.bz==="diver") body+=`<circle cx="${cx}" cy="${cy-hw+11}" r="3.2" fill="#fff"/>`;
  }
  if(p.bz==="gmt"){const r=hw-11;body+=`<path d="M${cx} ${cy-r}A${r} ${r} 0 0 1 ${cx} ${cy+r}" fill="none" stroke="#1e4c8f" stroke-width="10"/><path d="M${cx} ${cy-r}A${r} ${r} 0 0 0 ${cx} ${cy+r}" fill="none" stroke="#a8262d" stroke-width="10"/>`;for(let i=0;i<24;i++){const a=ang(i,24,hw-7.5);body+=`<circle cx="${a[0]}" cy="${a[1]}" r="1.3" fill="#fff"/>`}}
  if(p.bz==="gems") for(let i=0;i<26;i++){const a=ang(i,26,hw-9);body+=`<circle cx="${a[0]}" cy="${a[1]}" r="2.1" fill="#fff" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>`}
  // dial
  const smart=p.f==="smart";
  body+=shp(15,`fill="${smart?"#05070a":"url(#dg)"}"`)+(smart?"":shp(15,`fill="none" stroke="rgba(0,0,0,.45)" stroke-width="1.5"`));
  if(!smart) for(let i=0;i<48;i++){const a=ang(i,48,rd);body+=`<line x1="${cx}" y1="${cy}" x2="${a[0]}" y2="${a[1]}" stroke="#fff" stroke-opacity=".04"/>`}
  if(!smart&&p.f!=="skel"){
    if(p.ix==="bar") for(let i=0;i<12;i++){const q=i%3===0,a=ang(i,12,rd*.8),b=ang(i,12,rd*.93);body+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${acc}" stroke-width="${q?4.5:3}" stroke-linecap="butt"/>`}
    if(p.ix==="dot") for(let i=0;i<12;i++){const a=ang(i,12,rd*.86);body+=`<circle cx="${a[0]}" cy="${a[1]}" r="${i%3?2.4:3.6}" fill="${acc}"/>`}
    if(p.ix==="num"||p.ix==="pilot"){const pl=p.ix==="pilot";for(let i=1;i<=12;i++){const a=ang(i,12,rd*(pl?.76:.77));body+=`<text x="${a[0]}" y="${a[1]}" text-anchor="middle" dominant-baseline="central" font-family="${pl?"Arial,Helvetica,sans-serif":"Georgia,serif"}" font-weight="${pl?700:400}" font-size="${rd*(pl?.21:.16)}" fill="${acc}">${i}</text>`}}
    if(p.ix!=="dot") for(let i=0;i<60;i++){if(i%5===0)continue;const a=ang(i,60,rd*.94),b=ang(i,60,rd*.98);body+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${ink}" stroke-opacity=".5" stroke-width=".8"/>`}
  }
  if(!smart&&p.f!=="skel"&&p.f!=="moon") body+=`<text x="${cx}" y="${cy-rd*.42}" text-anchor="middle" font-family="Georgia,serif" font-size="${rd*.09}" letter-spacing="2" fill="${ink}" fill-opacity=".8">ZAKYWATCH</text>`;
  const sub=mix(dc,dark?"#ffffff":"#000000",.1);
  if(p.f==="chrono") [[-.4,0],[.4,0],[0,.4]].forEach(([dx,dy],k)=>{const x=cx+dx*rd,y=cy+dy*rd,r=rd*.2,a=ang(k*2+1,8,r*.8);body+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${sub}" stroke="${ink}" stroke-opacity=".5"/><line x1="${x}" y1="${y}" x2="${x+(a[0]-cx)}" y2="${y+(a[1]-cy)}" stroke="${acc}" stroke-width="1.5"/>`});
  if(p.f==="date"||p.f==="gmt") body+=`<rect x="${cx+rd*.5}" y="${cy-8}" width="24" height="16" fill="#f4f1e8" stroke="#555" stroke-width="1"/><text x="${cx+rd*.5+12}" y="${cy}" text-anchor="middle" dominant-baseline="central" font-family="Arial,sans-serif" font-size="11" font-weight="600" fill="#111">28</text>`;
  if(p.f==="moon"){const x=cx,y=cy+rd*.42,r=rd*.26;body+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#0b1630" stroke="${acc}" stroke-width="1.2"/><circle cx="${x-r*.25}" cy="${y}" r="${r*.55}" fill="#e8d3a4"/><circle cx="${x+r*.45}" cy="${y-r*.4}" r="1.3" fill="#fff"/><circle cx="${x+r*.55}" cy="${y+r*.35}" r="1" fill="#fff"/>`;body+=`<text x="${cx}" y="${cy-rd*.4}" text-anchor="middle" font-family="Georgia,serif" font-size="${rd*.09}" letter-spacing="2" fill="${ink}" fill-opacity=".8">ZAKYWATCH</text>`}
  if(p.f==="hybrid") body+=`<rect x="${cx-rd*.28}" y="${cy+rd*.3}" width="${rd*.56}" height="${rd*.24}" rx="4" fill="#070b0f" stroke="${ink}" stroke-opacity=".5"/><text x="${cx}" y="${cy+rd*.42}" text-anchor="middle" dominant-baseline="central" font-family="Arial,sans-serif" font-size="${rd*.13}" fill="#5fd0c4">8.420</text>`;
  if(p.f==="skel"){
    const gear=(x,y,r,n)=>{let s=`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#b9c1c8" stroke-width="2.6"/><circle cx="${x}" cy="${y}" r="${r*.78}" fill="none" stroke="#6f7881" stroke-width="1"/>`;for(let i=0;i<n;i++){const a=ang(i,n,r*.78);s+=`<line x1="${x}" y1="${y}" x2="${x+a[0]-cx}" y2="${y+a[1]-cy}" stroke="#9aa3ab" stroke-width="2"/>`}return s+`<circle cx="${x}" cy="${y}" r="${r*.12}" fill="#e8d3a4"/>`};
    body+=gear(cx-rd*.3,cy-rd*.2,rd*.36,6)+gear(cx+rd*.32,cy-rd*.18,rd*.26,5)+`<circle cx="${cx+rd*.2}" cy="${cy+rd*.42}" r="${rd*.22}" fill="none" stroke="#e8d3a4" stroke-width="2.5"/><circle cx="${cx+rd*.2}" cy="${cy+rd*.42}" r="${rd*.12}" fill="none" stroke="#e8d3a4" stroke-width="1.5"/>`;
    for(let i=0;i<12;i++){const a=ang(i,12,rd*.82),b=ang(i,12,rd*.94);body+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${acc}" stroke-width="${i%3?3:4.5}"/>`}
  }
  if(smart){
    body+=`<text x="${cx}" y="${cy-rd*.18}" text-anchor="middle" dominant-baseline="central" font-family="Arial,sans-serif" font-weight="700" font-size="${rd*.5}" fill="#fff">10:09</text><text x="${cx}" y="${cy-rd*.58}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${rd*.14}" fill="#8e99a3">RAB 28</text>`;
    [["#ff5a4f",-.4],["#66e08a",0],["#4fb7ff",.4]].forEach(([col,dx],k)=>{const x=cx+dx*rd,y=cy+rd*.5,r=rd*.14;body+=`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${col}" stroke-opacity=".25" stroke-width="3.5"/><circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${col}" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="${r*6.28*(.55+k*.15)} 99" transform="rotate(-90 ${x} ${y})"/>`});
  } else {
    const hand=(a,len,w,col,tail)=>`<g transform="rotate(${a} ${cx} ${cy})"><line x1="${cx+2.5}" y1="${cy+tail+4}" x2="${cx+2.5}" y2="${cy-len+4}" stroke="#000" stroke-opacity=".3" stroke-width="${w}" stroke-linecap="round"/><line x1="${cx}" y1="${cy+tail}" x2="${cx}" y2="${cy-len}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/></g>`;
    if(p.f==="gmt") body+=`<g transform="rotate(120 ${cx} ${cy})"><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy-rd*.78}" stroke="#d6433b" stroke-width="2"/><polygon points="${cx},${cy-rd*.9} ${cx-5},${cy-rd*.74} ${cx+5},${cy-rd*.74}" fill="#d6433b"/></g>`;
    body+=hand(305,rd*.5,5.5,ink,4)+hand(60,rd*.78,4,ink,4)+hand(150,rd*.86,1.4,"#c9a063",rd*.16)+`<circle cx="${cx}" cy="${cy}" r="5" fill="#c9a063" stroke="rgba(0,0,0,.4)"/>`;
  }
  body+=shp(15,`fill="url(#gl)"`);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs>
<linearGradient id="cm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m[0]}"/><stop offset=".5" stop-color="${m[1]}"/><stop offset="1" stop-color="${m[2]}"/></linearGradient>
<linearGradient id="cm2" x1="1" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${m[0]}"/><stop offset=".55" stop-color="${m[1]}"/><stop offset="1" stop-color="${m[2]}"/></linearGradient>
<linearGradient id="bm" x1="0" x2="1"><stop offset="0" stop-color="${bm[1]}"/><stop offset=".35" stop-color="${bm[0]}"/><stop offset=".65" stop-color="${bm[2]}"/><stop offset="1" stop-color="${bm[1]}"/></linearGradient>
<linearGradient id="sg" x1="0" x2="1"><stop offset="0" stop-color="${sc[0]}"/><stop offset=".5" stop-color="${sc[1]}"/><stop offset="1" stop-color="${sc[0]}"/></linearGradient>
<linearGradient id="sv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".4"/><stop offset=".3" stop-color="#000" stop-opacity="0"/><stop offset=".7" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></linearGradient>
<radialGradient id="dg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="${mix(dc,"#ffffff",.12)}"/><stop offset="1" stop-color="${mix(dc,"#000000",.3)}"/></radialGradient>
<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".42" stop-color="#fff" stop-opacity=".05"/><stop offset=".43" stop-color="#fff" stop-opacity="0"/></linearGradient>
<filter id="ds" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="9" stdDeviation="7" flood-color="#000" flood-opacity=".38"/></filter>
</defs>${strap}<rect x="${sx}" y="-10" width="${sw}" height="420" fill="url(#sv)"/><g filter="url(#ds)">${body}</g></svg>`;
  return artCache[p.id]="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
const imgSrc = p => p.img || art(p);
const rp = n => "Rp" + n.toLocaleString("id-ID");
const $ = s => document.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
let cart = [];

/* ====== Scroll reveal ====== */
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}
}),{threshold:.15,rootMargin:"0px 0px -6% 0px"});
const observe = els => els.forEach(el=>io.observe(el));

/* ====== Produk ====== */
const grid = $("#grid");
const cols = () => Math.max(1, getComputedStyle(grid).gridTemplateColumns.split(" ").length);
let curF="all", curS="def";
function renderProducts(){
  let list = curF==="all" ? [...PRODUCTS] : PRODUCTS.filter(p=>p.type===curF);
  if(curS==="asc") list.sort((a,b)=>a.price-b.price);
  if(curS==="desc") list.sort((a,b)=>b.price-a.price);
  $("#count").textContent = `${list.length} jam tersedia`;
  grid.innerHTML = list.map(p=>`
    <article class="card rv" data-id="${p.id}">
      <div class="card-img">${p.tag?`<span class="badge ${p.tag==="Baru"?"new":""}">${p.tag}</span>`:""}<img src="${imgSrc(p)}" alt="${p.name}" width="400" height="400" decoding="async"></div>
      <div class="card-body">
        <small>${p.cat}</small><h3>${p.name}</h3><p>${p.desc}</p>
        <div class="card-foot"><span class="price">${rp(p.price)}</span>
        <button class="add" data-id="${p.id}">Tambah ke keranjang</button></div>
      </div>
    </article>`).join("");
  const c = cols();
  grid.querySelectorAll(".card").forEach((el,i)=>{
    el.style.transitionDelay = reduce ? "0s" : `${(i%c)*90}ms, ${(i%c)*90}ms, ${(i%c)*90}ms`;
    el.querySelector(".card-img").style.transitionDelay = `${(i%c)*90+120}ms`;
    if(fine && !reduce) tilt(el);
  });
  observe(grid.querySelectorAll(".card"));
}
/* gambar gagal muat -> placeholder rapi */
grid.addEventListener("error",e=>{
  if(e.target.tagName!=="IMG"||e.target.dataset.fb) return;
  const p=PRODUCTS.find(x=>x.id==e.target.closest(".card").dataset.id);
  e.target.dataset.fb=1; e.target.src=art(p);
},true);

function tilt(el){
  el.addEventListener("pointermove",e=>{
    const r=el.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    el.classList.add("tilting");
    el.style.setProperty("--ry",((x-.5)*7)+"deg");
    el.style.setProperty("--rx",((.5-y)*7)+"deg");
    el.style.setProperty("--mx",x*100+"%"); el.style.setProperty("--my",y*100+"%");
  });
  el.addEventListener("pointerleave",()=>{
    el.classList.remove("tilting");
    el.style.setProperty("--rx","0deg"); el.style.setProperty("--ry","0deg");
  });
}

$("#filters").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b||b.classList.contains("on")) return;
  document.querySelectorAll("#filters button").forEach(x=>x.classList.toggle("on",x===b));
  grid.classList.add("out");
  curF=b.dataset.f;
  setTimeout(()=>{renderProducts();grid.classList.remove("out")},reduce?0:260);
});
$("#sort").addEventListener("change",e=>{
  curS=e.target.value; grid.classList.add("out");
  setTimeout(()=>{renderProducts();grid.classList.remove("out")},reduce?0:260);
});

/* ====== Keranjang ====== */
grid.addEventListener("click",e=>{
  const b=e.target.closest(".add"); if(!b) return;
  const p=PRODUCTS.find(x=>x.id==b.dataset.id), it=cart.find(x=>x.id===p.id);
  it ? it.q++ : cart.push({...p,q:1});
  fly(b.closest(".card").querySelector("img"));
  renderCart(); toast(`${p.name} masuk keranjang`);
});
function fly(img){
  const cb=$("#openCart"); if(!img||reduce){bump();return}
  const a=img.getBoundingClientRect(), t=cb.getBoundingClientRect();
  const c=document.createElement("img");
  c.src=img.currentSrc||img.src;
  Object.assign(c.style,{position:"fixed",zIndex:60,left:a.left+"px",top:a.top+"px",width:a.width+"px",height:a.height+"px",objectFit:"cover",borderRadius:"10px",pointerEvents:"none",boxShadow:"0 20px 40px rgba(0,0,0,.3)"});
  document.body.appendChild(c);
  const dx=t.left+t.width/2-(a.left+a.width/2), dy=t.top+t.height/2-(a.top+a.height/2);
  c.animate([
    {transform:"translate(0,0) scale(1)",opacity:1,borderRadius:"10px"},
    {transform:`translate(${dx*.5}px,${dy*.5-60}px) scale(.35)`,opacity:.95,offset:.55},
    {transform:`translate(${dx}px,${dy}px) scale(.04)`,opacity:.2,borderRadius:"50%"}
  ],{duration:850,easing:"cubic-bezier(.5,0,.2,1)"}).onfinish=()=>{c.remove();bump()};
}
function bump(){const b=$("#openCart");b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump")}

function renderCart(){
  const list=$("#cartList");
  list.innerHTML = cart.length ? cart.map(i=>`
    <li><img src="${imgSrc(i)}" alt="">
      <div><h4>${i.name}</h4><small>${rp(i.price)}</small>
        <div class="qty"><button data-a="dec" data-id="${i.id}" aria-label="Kurangi">−</button><span>${i.q}</span><button data-a="inc" data-id="${i.id}" aria-label="Tambah">+</button></div></div>
      <button class="rm" data-a="rm" data-id="${i.id}">Hapus</button></li>`).join("")
    : `<li class="empty">Keranjang masih kosong. Pilih jam dari koleksi.</li>`;
  $("#cartCount").textContent = cart.reduce((s,i)=>s+i.q,0);
  $("#cartTotal").textContent = rp(total());
}
const total = () => cart.reduce((s,i)=>s+i.q*i.price,0);
$("#cartList").addEventListener("click",e=>{
  const b=e.target.closest("button[data-a]"); if(!b) return;
  const id=+b.dataset.id, it=cart.find(x=>x.id===id);
  if(b.dataset.a==="inc") it.q++;
  if(b.dataset.a==="dec") it.q--;
  if(b.dataset.a==="rm"||it.q<1) cart=cart.filter(x=>x.id!==id);
  renderCart();
});
const drawer=$("#drawer"), scrim=$("#scrim");
const setCart = on => {drawer.classList.toggle("on",on);scrim.classList.toggle("on",on);document.body.style.overflow=on?"hidden":""};
$("#openCart").onclick=()=>setCart(true);
$("#closeCart").onclick=scrim.onclick=()=>setCart(false);
document.addEventListener("keydown",e=>e.key==="Escape"&&setCart(false));

/* ====== Checkout -> WhatsApp ====== */
$("#checkout").onclick=()=>{
  if(!cart.length) return toast("Tambahkan jam dulu ke keranjang");
  const lines = cart.map((i,n)=>`${n+1}. ${i.name} x${i.q} — ${rp(i.price*i.q)}`).join("\n");
  const msg = `Halo ZakyWatch & Co., saya ingin memesan:\n\n${lines}\n\nTotal: ${rp(total())}\n\nNama:\nAlamat pengiriman:\nTerima kasih.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
};

let tt; function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),2200)}

/* ====== Headline: kata naik satu per satu ====== */
const h1=$("#h1");
h1.innerHTML = h1.textContent.trim().split(/\s+/).map((w,i)=>`<span class="w"><span style="--i:${i}">${w}</span></span>`).join(" ");

/* ====== Jam hero ====== */
const ticks=$("#ticks");
for(let i=0;i<60;i++){const t=document.createElement("i");t.style.transform=`rotate(${i*6}deg)`;if(i%5===0)t.className="qt";ticks.appendChild(t)}
const hH=$("#hH"),hM=$("#hM"),hS=$("#hS"),hSS=$("#hSS");
/* Jarum digerakkan CSS animation (di GPU), JS hanya mengatur posisi awal sesuai jam sekarang */
(function setHands(){
  const d=new Date(), s=d.getSeconds()+d.getMilliseconds()/1000, m=d.getMinutes()*60+s, h=(d.getHours()%12)*3600+m;
  hS.style.animationDelay=`-${s}s`; hM.style.animationDelay=`-${m}s`;
  hH.style.animationDelay=`-${h}s`; hSS.style.animationDelay=`-${s%20}s`;
  if(!reduce && hS.animate){ /* intro: jarum berputar lalu berhenti di waktu sekarang (properti 'rotate' terpisah dari animasi utama) */
    [[hS,-720],[hM,-360],[hH,-120],[hSS,360]].forEach(([el,a])=>el.animate({rotate:[a+"deg","0deg"]},{duration:2000,easing:"cubic-bezier(.16,1,.3,1)"}));
  }
})();
$("#date").textContent=new Date().getDate();

/* ====== Jam miring mengikuti kursor (parallax kedalaman) ====== */
const hero=document.querySelector(".hero"), watch=$("#watch");
if(fine&&!reduce){
  hero.addEventListener("pointermove",e=>{
    const r=hero.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    watch.style.setProperty("--ry",(x*22)+"deg"); watch.style.setProperty("--rx",(-y*16)+"deg");
  });
  hero.addEventListener("pointerleave",()=>{watch.style.setProperty("--ry","0deg");watch.style.setProperty("--rx","0deg")});
}

/* ====== Menu mobile ====== */
const burger=$("#burger"), mmenu=$("#mmenu");
const setMenu=on=>{burger.setAttribute("aria-expanded",on);mmenu.classList.toggle("on",on)};
burger.onclick=()=>setMenu(burger.getAttribute("aria-expanded")!=="true");
mmenu.addEventListener("click",e=>e.target.closest("a")&&setMenu(false));

/* ====== FAQ ====== */
$("#faq-list").addEventListener("click",e=>{
  const b=e.target.closest(".qb"); if(!b) return;
  const q=b.parentNode, open=!q.classList.contains("open");
  q.classList.toggle("open",open); b.setAttribute("aria-expanded",open);
});
$("#yr").textContent=new Date().getFullYear();

addEventListener("scroll",()=>$("#nav").classList.toggle("scrolled",scrollY>10),{passive:true});
observe(document.querySelectorAll(".rv:not(.card)"));
renderProducts(); renderCart();
