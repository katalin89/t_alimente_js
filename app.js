let alimente = [
    {
      denumire: "prune",
      tip: "fruct",
      pret: 10,
      
    },
  
    {
      denumire: "faina",
      tip: "alba",
      pret:6,
      
    },
  
    {
      marca: "struguri",
     tip:"alb",
      pret:12,
      
    },
  ];
  
  let show = document.querySelector(".show-aliment"); //selectam unelementde pe pagina
  
  let ex = document.querySelector(".exemplu");
  
  let propr = document.querySelector(".show-aliment");
  
  let container=document.querySelector(".container-alimente");
  
  let add=document.querySelector(".add-aliment");
  
  let denumire=document.querySelector(".denumire-aliment");
  let tip=document.querySelector(".tip-aliment");
  let pret=document.querySelector(".pret-aliment");
  
  
   let dupaPret=document.querySelector(".sorteaza");
  
  
   let marcaSelectata="";
  
   let sterge=document.querySelector(".sterge")
  
  
  
  function afiseaza(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  function pretul(arr, pret) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pret == pret) {
        console.log(arr[i]);
      }
    }
  }
  
  function afiseaza2(arr) {
    let i = 0;
    while (arr[i] != 0) {
      console.log(arr[i]);
      i++;
    }
  }
  
  function celMaiMare(arr) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pret > max) {
        max = arr[i].pret;
      }
    }
    return max;
  }
  
  function min(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pret < min) {
        min = arr[i].pret;
      }
    }
    return min;
  }
  
  function maiMic(arr, pret) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pret < pret) {
        console.log(arr[i]);
      }
    }
  }
  
  function maiMare(arr, pret) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pret > pret) {
        console.log(arr[i]);
      }
    }
  }
  
  function mar(arr, denumire) {
    for (let i = 0; i < arr.length; i++)
      if (arr[i].denumire == denumire) {
        console.log(arr[i]);
      }
  }
 
  let x = 100;
  
  show.addEventListener("click", () => {
    // alert("Acesta este un alert");
  
   
     container.innerHTML=createRows(alimente);
  });
  
  //functie ce primeste ca parametru un obiect si returneaza un rand
  
  function createRow(aliment) {
    return `<tr  >
      <th class="a">${aliment.denumire}</th>
      <th>${aliment.tip}</th>
      <th>${aliment.pret}</th>
      
  </tr>`;
  }
  
  
  //functie ce primeste ca parametru un vector si returneaza mai mai multe randuri
  
  
  function createRows(arr){
  
      let text="";
      for(let i=0;i<arr.length;i++){
  
          text+=createRow(arr[i]);
      }
  
      return text;
  }
  
  add.addEventListener("click",() =>{
   
  
   let a= {
      denumire: "",
      tip: "",
      pret: 0,
     
    }
  
  
  
    a.denumire=denumire.value;
    a.tip=tip.value;
    a.pret=pret.value;
   
    alimente.push(a);
    container.innerHTML=createRows(alimente)
  
  
  
  });
  
  function sortare(arr){
    
     //?
  let s;
     for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].pret>arr[j].pret){
                s=arr[i];
                arr[i]=arr[j];
                arr[j]=s;
                  
            }
        }
     }
  
  
     for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
     }
  }
  
  dupaPret.addEventListener("click",()=>{
   
    sortare(alimente)
    container.innerHTML=createRows(alimente);
  
    
  })
  
  // din inputuri sa facem un obiect si sa bagam in vector
  
  
  function pozitia(arr,denumire){
    for(let i=0;i<arr.length;i++){
      if(arr[i].denumire==denumire){
        return i;
        
      }
    }
  
    retunrn -1;
  } 
  
  container.addEventListener("click",(e)=>{
  
  
    let obj=e.target;//vad cine o declasansat clicku
  
  
    obj.style.backgroundColor="red";
    console.log(obj);
  
         if(obj.classList.contains("a")){
            
  
            denumireSelectata=obj.textContent;
  
         
  
        
         }
  
      
       
  });
  
  sterge.addEventListener("click",(e)=>{
   
       if(denumireSelectata!==""){
        let poz=pozitia(alimente,denumireSelectata);
        alimente.splice(poz,1);
      
        container.innerHTML=createRows(alimente);
      
        denumireSelectata="";
       }
  })
  
  
  
  
  
  
  
  
  
  
  