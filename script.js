function data(){
    let a=document.getElementById("n1").value;
    let b= document.getElementById("n2").value;
   if(a==""){
       document.getElementById("error-message").innerText="All Fields are mandatory"
        document.getElementById("n1").style.backgroundColor= "brown";
        
       
    }
    else if(b==""){
     document.getElementById("error-message").innerText="All Fields are mandatory"
        document.getElementById("n2").style.backgroundColor= "brown";
    }
    else if(isNaN(a)){
        document.getElementById("error-message").innerText="Enter Number Only !!"
        document.getElementById("n1").style.backgroundColor="brown"
        
    }
    else if(isNaN(b)){
        document.getElementById("error-message").innerText="Enter Number Only !!"
        document.getElementById("n2").style.backgroundColor="brown"

    }
    
  
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
    const container = document.getElementById('table-container');
    container.innerHTML = ''; 
    let start=parseInt(a)
    let end=parseInt(b)
    if(a>b){
    const err=document.getElementById('error-message');
    err.innerHTML="Start must be smaller than End"
    }
    
    for (let num = start; num <= end; num++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('column');

        
        for (let i = 1; i <= 10; i++) {
            let multiple = num * i;
            let numberDiv = document.createElement('div');
            numberDiv.textContent = multiple;
            numberDiv.classList.add('number');
            
            numberDiv.addEventListener('click',function(){
                numberDiv.textContent=alert(`${multiple} is clicked`)
            });

            if (multiple % 2 === 0) {
                numberDiv.classList.add('even');
            } else {
                numberDiv.classList.add('odd');
            }

            if (isPrime(multiple)) {
                numberDiv.classList.add('prime');
            }

            columnDiv.appendChild(numberDiv);

        }

        container.appendChild(columnDiv);
        
    }



    return false;  
 
}


