setTimeout(()=>{
  coverdiv.style.opacity = "0";
}, 1000);


var input=1;
function hide(){
  document.getElementById("center").style.display="none";
  document.getElementById("numberslol").style.display="none";
  document.getElementById("barcontainer").style.display="none";
  document.getElementById("reset").style.display="none";
  document.getElementById("resetall").style.display="none";

 }

hide();
var smashes = 0;
var passes = 0;

function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }


  }
  document.getElementById("input").value = 1;





 function legalnumber(){
  if (document.getElementById("input").value > 88){
    document.getElementById("input").value = 88;
  }
  if (document.getElementById("input").value < 1){
    document.getElementById("input").value = 1;
  }

 }



function next(){
  if (document.getElementById("input").value==88){
    hide();
    endshow();
  }
  var clicked = document.getElementById("input").value;
  if (clicked < 88){
   clicked++;
   document.getElementById("input").value = clicked;
  }
  insidearr = clicked - 1;
  let curChar = GenshinCharacters[insidearr];
  document.getElementById("cname").innerHTML = curChar.cname;
  document.getElementById("cimage").src = curChar.cimage;
  document.getElementById("limage").src = curChar.limage;



}
function back(){
  var bclicked = document.getElementById("input").value;
  if (bclicked > 1){
   bclicked--;
   document.getElementById("input").value = bclicked;
  }
  inarray = bclicked - 1;
  let bacChar = GenshinCharacters[inarray];
  document.getElementById("cname").innerHTML = bacChar.cname;
  document.getElementById("cimage").src = bacChar.cimage;
  document.getElementById("limage").src = bacChar.limage;
}
function fat(){
  var putted = document.getElementById("input").value - 1;
  const cnameElement = document.getElementById("cname");
  let curChar = GenshinCharacters[putted];
  cnameElement.innerHTML = curChar.cname;
  document.getElementById("cimage").src = curChar.cimage; 
  document.getElementById("limage").src = curChar.limage;
}

const GenshinCharacters = [
   { cname: "Aether",
    cimage: "/images/Aether.webp"
    ,limage: "/images/Aether_Card.webp"}
  ,{ cname: "Albedo", 
    cimage: "/images/Albedo.webp"
    ,limage: "/images/Albedo_Card.webp"}
  ,{ cname: "Alhaitham" ,
    cimage: "/images/Alhaitham.webp" 
    ,limage: "/images/Alhaitham_Card.webp"}
  ,{ cname: "Aloy" ,
    cimage: "/images/Aloy.webp" 
    ,limage: "/images/Aloy_Card.webp"}
  ,{ cname: "Amber" ,
    cimage: "/images/Amber.webp"
    ,limage: "/images/Amber_Card.webp" }
  ,{ cname: "Arlecchino" ,
    cimage: "/images/Arlecchino.webp"
    ,limage: "/images/Arlecchino_Card.webp" }
  ,{ cname: "Ayaka" ,
    cimage: "/images/Ayaka.webp"
    ,limage: "/images/Ayaka_Card.webp" }
  ,{ cname: "Ayato" ,
    cimage: "/images/Ayato.webp"
    ,limage: "/images/Ayato_Card.webp" }
  ,{ cname: "Baizhu" ,
    cimage: "/images/Baizhu.webp" 
    ,limage: "/images/Baizhu_Card.webp"}
  ,{ cname: "Barbara" ,
    cimage: "/images/Barbara.webp"
    ,limage: "/images/Barbara_Card.webp" }
  ,{ cname: "Beidou" ,
    cimage: "/images/Beidou.webp"
    ,limage: "/images/Beidou_Card.webp" }
  ,{ cname: "Bennett" ,
    cimage: "/images/Bennett.webp"
    ,limage: "/images/Bennett_Card.webp" }
  ,{ cname: "Candace" ,
    cimage: "/images/Candace.webp" 
    ,limage: "/images/Candace_Card.webp"}
  ,{ cname: "Charlotte" ,
    cimage: "/images/Charlotte.webp" 
    ,limage: "/images/Charlotte_Card.webp"}
  ,{ cname: "Chevreuse" ,
    cimage: "/images/Chevreuse.webp"
    ,limage: "/images/Chevreuse_Card.webp" }
  ,{ cname: "Chiori" ,
    cimage: "/images/Chiori.webp" 
    ,limage: "/images/Chiori_Card.webp"}
  ,{ cname: "Chongyun" ,
    cimage: "/images/Chongyun.webp" 
    ,limage: "/images/Chongyun_Card.webp"}
  ,{ cname: "Clorinde" ,
    cimage: "/images/Clorinde.webp"
    ,limage: "/images/Clorinde_Card.webp" }
  ,{ cname: "Collei" ,
    cimage: "/images/Collei.webp" 
    ,limage: "/images/Collei_Card.webp"}
  ,{ cname: "Cyno" ,
    cimage: "/images/Cyno.webp" 
    ,limage: "/images/Cyno_Card.webp"}   
  ,{ cname: "Dehya" ,
    cimage: "/images/Dehya.webp" 
    ,limage: "/images/Dehya_Card.webp"}    
  ,{ cname: "Diluc" ,
    cimage: "/images/Diluc.webp"
    ,limage: "/images/Diluc_Card.webp" }  
  ,{ cname: "Diona" ,
    cimage: "/images/Diona.webp"
    ,limage: "/images/Diona_Card.webp"}    
  ,{ cname: "Dori" ,
    cimage: "/images/Dori.webp"
    ,limage: "/images/Dori_Card.webp" }       
  ,{ cname: "Emilie" ,
    cimage: "/images/Emilie.webp"
    ,limage: "/images/Emilie_Card.webp" }    
  ,{ cname: "Eula" ,
    cimage: "/images/Eula.webp" 
    ,limage: "/images/Eula_Card.webp"}          
  ,{ cname: "Faruzan" ,
    cimage: "/images/Faruzan.webp"
    ,limage: "/images/Faruzan_Card.webp" }         
  ,{ cname: "Fischl" ,
    cimage: "/images/Fischl.webp"
    ,limage: "/images/Fischl_Card.webp" }       
  ,{ cname: "Freminet" ,
    cimage: "/images/Freminet.webp"
    ,limage: "/images/Freminet_Card.webp" }       
  ,{ cname: "Furina" ,
    cimage: "/images/Furina.webp" 
    ,limage: "/images/Furina_Card.webp"}       
  ,{ cname: "Gaming" ,
    cimage: "/images/Gaming.webp"
    ,limage: "/images/Gaming_Card.webp" }       
  ,{ cname: "Ganyu" ,
    cimage: "/images/Ganyu.webp"
    ,limage: "/images/Ganyu_Card.webp" }       
  ,{ cname: "Gorou" ,
    cimage: "/images/Gorou.webp"
    ,limage: "/images/Gorou_Card.webp" }
  ,{ cname: "Heizou" ,
    cimage: "/images/Heizou.webp"
    ,limage: "/images/Heizou_Card.webp" } 
  ,{ cname: "Hu Tao" ,
    cimage: "/images/Hu_Tao.webp" 
    ,limage: "/images/Hu_Tao_Card.webp"}
  ,{ cname: "Itto" ,
    cimage: "/images/Itto.webp"
    ,limage: "/images/Itto_Card.webp" }
  ,{ cname: "Jean" ,
    cimage: "/images/Jean.webp" 
    ,limage: "/images/Jean_Card.webp"}     
  ,{ cname: "Kachina" ,
    cimage: "/images/Kachina.webp"
    ,limage: "/images/Kachina_Card.webp" }
  ,{ cname: "Kaeya" ,
    cimage: "/images/Kaeya.webp"
    ,limage: "/images/Kaeya_Card.webp" }   
  ,{ cname: "Kaveh" ,
    cimage: "/images/Kaveh.webp" 
    ,limage: "/images/Kaveh_Card.webp"}  
  ,{ cname: "Kazuha" ,
    cimage: "/images/Kazuha.webp"
    ,limage: "/images/Kazuha_Card.webp" }  
  ,{ cname: "Keqing" ,
    cimage: "/images/Keqing.webp"
    ,limage: "/images/Keqing_Card.webp" }   
  ,{ cname: "Kirara" ,
    cimage: "/images/Kirara.webp"
    ,limage: "/images/Kirara_Card.webp" }       
  ,{ cname: "Klee" ,
    cimage: "/images/Klee.webp" 
    ,limage: "/images/Klee_Card.webp"} 
  ,{ cname: "Kokomi" ,
    cimage: "/images/Kokomi.webp"
    ,limage: "/images/Kokomi_Card.webp" } 
  ,{ cname: "Kuki" ,
    cimage: "/images/Kuki.webp"
    ,limage: "/images/Kuki_Card.webp" }
  ,{ cname: "Layla" ,
    cimage: "/images/Layla.webp" 
    ,limage: "/images/Layla_Card.webp"}   
  ,{ cname: "Lisa" ,
    cimage: "/images/Lisa.webp"
    ,limage: "/images/Lisa_Card.webp" } 
  ,{ cname: "Lumine" ,
    cimage: "/images/Lumine.webp"
    ,limage: "/images/Lumine_Card.webp" } 
  ,{ cname: "Lynette" ,
    cimage: "/images/Lynette.webp"
    ,limage: "/images/Lynette_Card.webp" }
  ,{ cname: "Lyney" ,
    cimage: "/images/Lyney.webp" 
    ,limage: "/images/Lyney_Card.webp"}      
  ,{ cname: "Mika" ,
    cimage: "/images/Mika.webp" 
    ,limage: "/images/Mika_Card.webp"}   
  ,{ cname: "Mona",
    cimage: "/images/Mona.webp"
    ,limage: "/images/Mona_Card.webp" }  
  ,{ cname: "Mualani",
    cimage: "/images/Mualani.webp" 
    ,limage: "/images/Mualani_Card.webp"}  
  ,{ cname: "Nahida",
    cimage: "/images/Nahida.webp" 
    ,limage: "/images/Nahida_Card.webp"} 
  ,{ cname: "Navia",
    cimage: "/images/Navia.webp"
    ,limage: "/images/Navia_Card.webp" }  
  ,{ cname: "Neuvillette",
    cimage: "/images/Neuvillette.webp"
    ,limage: "/images/Neuvillette_Card.webp" }  
  ,{ cname: "Nilou",
    cimage: "/images/Nilou.webp" 
    ,limage: "/images/Nilou_Card.webp"}  
  ,{ cname: "Ningguang",
    cimage: "/images/Ningguang.webp"
    ,limage: "/images/Ningguang_Card.webp" }  
  ,{ cname: "Noelle",
    cimage: "/images/Noelle.webp"
    ,limage: "/images/Noelle_Card.webp" }  
  ,{ cname: "Qiqi",
    cimage: "/images/Qiqi.webp"
    ,limage: "/images/Qiqi_Card.webp"  }  
  ,{ cname: "Raiden Shogun",
    cimage: "/images/Raiden_Shogun.webp"
    ,limage: "/images/Raiden_Shogun_Card.webp"  } 
  ,{ cname: "Razor",
    cimage: "/images/Razor.webp" 
    ,limage: "/images/Razor_Card.webp" }  
  ,{ cname: "Rosaria",
    cimage: "/images/Rosaria.webp"
    ,limage: "/images/Rosaria_Card.webp"  }  
  ,{ cname: "Sara",
    cimage: "/images/Sara.webp"
    ,limage: "/images/Sara_Card.webp"  }  
  ,{ cname: "Sayu",
    cimage: "/images/Sayu.webp"
    ,limage: "/images/Sayu_Card.webp"  }  
  ,{ cname: "Sethos",
    cimage: "/images/Sethos.webp" 
    ,limage: "/images/Sethos_Card.webp" }  
  ,{ cname: "Shenhe",
    cimage: "/images/Shenhe.webp"
    ,limage: "/images/Shenhe_Card.webp"  } 
  ,{ cname: "Sigewinne",
    cimage: "/images/Sigewinne.webp"
    ,limage: "/images/Sigewinne_Card.webp"  }  
  ,{ cname: "Sucrose",
    cimage: "/images/Sucrose.webp"
    ,limage: "/images/Sucrose_Card.webp"  } 
  ,{ cname: "Tartaglia",
    cimage: "/images/Tartaglia.webp"
    ,limage: "/images/Tartaglia_Card.webp"  }  
  ,{ cname: "Thoma",
    cimage: "/images/Thoma.webp" 
    ,limage: "/images/Thoma_Card.webp" }  
  ,{ cname: "Tighnari",
    cimage: "/images/Tighnari.webp"
    ,limage: "/images/Tighnari_Card.webp"  }  
  ,{ cname: "Venti",
    cimage: "/images/Venti.webp" 
    ,limage: "/images/Venti_Card.webp" }  
  ,{ cname: "Wanderer",
    cimage: "/images/Wanderer.webp" 
    ,limage: "/images/Wanderer_Card.webp" }  
  ,{ cname: "Wriosthesley",
    cimage: "/images/Wriothesley.webp"
    ,limage: "/images/Wriothesley_Card.webp"  }  
  ,{ cname: "Xiangling",
    cimage: "/images/Xiangling.webp"
    ,limage: "/images/Xiangling_Card.webp" }  
  ,{ cname: "Xianyun",
    cimage: "/images/Xianyun.webp"
    ,limage: "/images/Xianyun_Card.webp" } 
  ,{ cname: "Xiao",
    cimage: "/images/Xiao.webp" 
    ,limage: "/images/Xiao_Card.webp"}  
  ,{ cname: "Xingqiu",
    cimage: "/images/Xingqiu.webp" 
    ,limage: "/images/Xingqiu_Card.webp"} 
  ,{ cname: "Xinyan",
    cimage: "/images/Xinyan.webp"
    ,limage: "/images/Xinyan_Card.webp" }   
  ,{ cname: "Yae Miko",
    cimage: "/images/Yae_Miko.webp" 
    ,limage: "/images/Yae_Miko_Card.webp"}   
  ,{ cname: "Yanfei",
    cimage: "/images/Yanfei.webp"
    ,limage: "/images/Yanfei_Card.webp" }   
  ,{ cname: "Yaoyao",
    cimage: "/images/Yaoyao.webp"
    ,limage: "/images/Yaoyao_Card.webp" }   
  ,{ cname: "Yelan",
    cimage: "/images/Yelan.webp"
    ,limage: "/images/Yelan_Card.webp" }   
  ,{ cname: "Yoimiya",
    cimage: "/images/Yoimiya.webp" 
    ,limage: "/images/Yoimiya_Card.webp"}   
  ,{ cname: "Yun Jun",
    cimage: "/images/Yun_Jin.webp"
    ,limage: "/images/Yun_Jin_Card.webp" }  
  ,{ cname: "Zhongli",
    cimage: "/images/Zhongli.webp"
    ,limage: "/images/Zhongli_Card.webp" }   
      
     
     
                               
   
  
  
  

  
   
  
       
       
            
           
]



const sop = [
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]
]

function smash(a){
  if(document.getElementById("input").value < 88){
    if(sop[document.getElementById("input").value-1][1] === 1){
      sop[document.getElementById("input").value-1][1] = 0;
      passes--;
    }
    if(sop[document.getElementById("input").value-1][0] === 0){
      smashes++;
    }
    sop[document.getElementById("input").value-1][0] = a;
  }
  if(document.getElementById("input").value == 88){
    if(sop[87][1] === 1){
      sop[87][1] = 0;
      passes--;
    }
    if (sop[87][0] === 0){
      smashes++;
    }
    sop[87][0] = a;
    checkcolor();
    hide();
    endshow();
  }
  let pedo = document.getElementById("input").value

  if((pedo == 23) || (pedo == 24) || (pedo == 38) || (pedo == 44) || (pedo == 55) || (pedo == 61) || (pedo == 66) || (pedo == 69) || (pedo == 84)){
    child();
  }
}
function pass(a){
  if(document.getElementById("input").value < 88){
    if(sop[document.getElementById("input").value-1][0] === 1){
      sop[document.getElementById("input").value-1][0] = 0;
      smashes--;
    }
    if(sop[document.getElementById("input").value-1][1] === 0){
      passes++;
    }
    sop[document.getElementById("input").value-1][1] = a;
  }
  if(document.getElementById("input").value == 88){
    if(sop[87][0] === 1){
      sop[87][0] = 0;
      smashes--;
    }
    if(sop[87][1]===0){
      passes++;
    }
    sop[87][1] = a;
    checkcolor();
    hide();
    endshow();
  }
}
console.log(sop);

function checkcolor(){
  if (sop[document.getElementById("input").value-1][0] !==0){
    document.getElementById('smash').style.setProperty("--hahaha","linear-gradient(to bottom right, #069122, #16c948)");
    document.getElementById('smash').style.setProperty("--smash","40px 0 100px #16c94847, -60px 0 100px #06912253");
  }
  if (sop[document.getElementById("input").value-1][1] !==0){
    document.getElementById('pass').style.setProperty("--heheha","linear-gradient(to bottom left, #910606, #eb2f43)");
    document.getElementById('pass').style.setProperty("--pass","40px 0 100px #eb2f4347, -60px 0 100px #91060653");    
  }
  if (sop[document.getElementById("input").value-1][0] === 0){
    document.getElementById('smash').style.setProperty("--hahaha","linear-gradient(to bottom right, #314770, #6295E0)");
    document.getElementById('smash').style.setProperty("--smash","40px 0 100px #6294e047, -60px 0 100px #31477053");
  }
  
  if (sop[document.getElementById("input").value-1][1] === 0){
    document.getElementById('pass').style.setProperty("--heheha","linear-gradient(to bottom left, #314770, #6295E0)");
    document.getElementById('pass').style.setProperty("--pass","40px 0 100px #6294e047, -60px 0 100px #31477053");    
  }
}



function clicked(){
  document.getElementById("starty").style.display="none";  
  document.getElementById("center").style.display="flex";
  document.getElementById("numberslol").style.display="flex";
  document.getElementById("barcontainer").style.display="flex";
  document.getElementById("reset").style.display="block";
  document.getElementById("resetall").style.display="block";  

}




function endshow(){
  document.getElementById("endstuff").style.display="flex";
} 
  
  

function restart(){
  let endChar = GenshinCharacters[0];
  document.getElementById("cname").innerHTML = endChar.cname;
  document.getElementById("cimage").src = endChar.cimage;
  document.getElementById("limage").src = endChar.limage;
  document.getElementById("endstuff").style.display="none";
  document.getElementById("input").value = 1;
  document.getElementById("all").style.display="none";

  checkcolor();
  clicked();
}

function checknumbers(){
  document.getElementById("snumber").innerHTML = smashes;
  document.getElementById("pnumber").innerHTML = passes;
  ratio1 = (((100*smashes)/(smashes+passes))+"%");
  ratio2 = (((100*passes)/(smashes+passes))+"%");
  console.log(ratio1);
  document.getElementById('sbars').style.setProperty("--sbar",ratio1);
  document.getElementById('pbars').style.setProperty("--pbar",ratio2);


}

function reset(){
if(sop[document.getElementById("input").value-1][1] === 1){
  sop[document.getElementById("input").value-1][1] = 0;
  passes--;
}
if(sop[document.getElementById("input").value-1][0] === 1){
  sop[document.getElementById("input").value-1][0] = 0;
  smashes--;
}
checkcolor();
checknumbers();
}

function resetall(){
  for (let k = 0; k<88 ; k++){
    sop[k][0] = 0;
    sop[k][1] = 0;
  }
  checkcolor();
  smashes=0
  passes=0
  checknumbers();
}



console.log(sop[0]);


const contain = document.getElementById("container");
const containpass = document.getElementById("containerpass");
const containun = document.getElementById("containerundecided");


function displaysmashes(){
  while (contain.hasChildNodes()){
    contain.removeChild(contain.firstChild);
  }
  for (let m = 0; m<88; m++){
    if (sop[m][0] == 1){
      const hobo = document.createElement('img');
      hobo.style.height = "300px";
      hobo.src = GenshinCharacters[m].cimage;
      contain.appendChild(hobo);
    }
  }
}

function displaypasses(){
  while (containpass.hasChildNodes()){
    containpass.removeChild(containpass.firstChild);
  }
  for(let q = 0; q<88; q++){
    if(sop[q][1]==1){
      const robo = document.createElement("img");
      robo.style.height = "300px";
      robo.src = GenshinCharacters[q].cimage;
      containpass.appendChild(robo);
   }
  }
}

function displayun(){
  while (containun.hasChildNodes()){
    containun.removeChild(containun.firstChild);
  }
  for(let y = 0; y<88; y++){
    if((sop[y][0]==0) && (sop[y][1]==0)){
      const nobo = document.createElement("img")
      nobo.style.height="300px";
      nobo.src = GenshinCharacters[y].cimage;
      containun.appendChild(nobo);
    }
  }
}

function finalstats(){
  tline = (smashes + " SMASHED " + passes + " PASSED " + (88-(smashes+passes)) + " N/A ")
  document.getElementById("ssmash").innerHTML =tline;
}

document.getElementById("endstuff").style.display="none";
document.getElementById("all").style.display="none";



function lastdisplay(){
  displaysmashes(); 
  displaypasses(); 
  displayun(); 
  finalstats();
  document.getElementById("all").style.display="block";
}

function child(){
  alert("https://www.fbi.gov/");
}


