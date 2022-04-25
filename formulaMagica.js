
function teste(){
    const quantidadeAgents = document.getElementById("quantidadeagentes").value
    const quantidaDeDiscador = document.getElementById("quantidadediscador").value
    

    if (quantidadeAgents <= 30 || quantidaDeDiscador == 0) {
        document.getElementById("retorno").innerHTML ="Será necessário esse Hardware para a maquina DN1! <br> VCPU: 8<br>MEMORIA: 15 <br> SWAP: 2 <br> ESPACO EM DISCO: 150 <br> <br>Será necessário esse Hardware para a maquina DN2! <br> VCPU: 6 <br> MEMORIA: 8 <br> SWAP: 2 <br> ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina VN1! <br>VCPU: 6 <br>MEMORIA: 8 <br>SWAP: 4 <br>ESPACO EM DISCO: 100"
    } else if (quantidadeAgents > 30 || quantidadeAgents <= 60 || quantidaDeDiscador <=3) {
        document.getElementById("retorno").innerHTML =
        console.log("\nSerá necessário esse Hardware para a maquina DN1!");
        console.log("VCPU: 10");
        console.log("MEMORIA: 15");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 200");
    
        console.log("\nSerá necessário esse Hardware para a maquina DN2!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN1!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 8");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN2!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 8");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    } else if (quantidadeAgents > 70 || quantidadeAgents <= 90 || quantidaDeDiscador <=3) {
        console.log("\nSerá necessário esse Hardware para a maquina DN1!");
        console.log("VCPU: 10");
        console.log("MEMORIA: 15");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 200");
    
        console.log("\nSerá necessário esse Hardware para a maquina DN2!");
        console.log("VCPU: 8");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN1!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 8");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN2!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 8");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN3!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 8");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina NODEQUEUE!");
        console.log("VCPU: 4");
        console.log("MEMORIA: 4");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina GATEWAY!");
        console.log("VCPU: 8");
        console.log("MEMORIA: 10");
        console.log("SWAP: 2");
        console.log("ESPACO EM DISCO: 100");
    } else if (quantidadeAgents > 95 || quantidadeAgents <= 120 || quantidaDeDiscador <=5) {
        console.log("\nSerá necessário esse Hardware para a maquina DN1!");
        console.log("VCPU: 12");
        console.log("MEMORIA: 20");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 250");
    
        console.log("\nSerá necessário esse Hardware para a maquina DN2!");
        console.log("VCPU: 10");
        console.log("MEMORIA: 12");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 150");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN1!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 150");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN2!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 150");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN3!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 150");
    
        console.log("\nSerá necessário esse Hardware para a maquina VN4!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 150");
    
        console.log("\nSerá necessário esse Hardware para a maquina NODEQUEUE!");
        console.log("VCPU: 6");
        console.log("MEMORIA: 6");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    
        console.log("\nSerá necessário esse Hardware para a maquina GATEWAY!");
        console.log("VCPU: 8");
        console.log("MEMORIA: 10");
        console.log("SWAP: 4");
        console.log("ESPACO EM DISCO: 100");
    } else {
        ("Será necessário consultar um analista para verificar o hardware.");
    };

}

