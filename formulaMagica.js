function teste(){
    const quantidadeAgents = document.getElementById("quantidadeagentes").value
    const quantidaDeDiscador = document.getElementById("quantidadediscador").value
    const vmware = document.getElementById("vmware").checked
    console.log(vmware);
    const google = document.getElementById("google").checked
    console.log(google);
    if (quantidadeAgents <= 30 && quantidaDeDiscador <= 1 && vmware == true && google == false) {
        document.getElementById("retorno").innerHTML ="Será necessário esse Hardware para a maquina DN1! <br> VCPU: 8<br>MEMORIA: 15 <br> SWAP: 2 <br> ESPACO EM DISCO: 150 <br> <br>Será necessário esse Hardware para a maquina DN2! <br> VCPU: 6 <br> MEMORIA: 8 <br> SWAP: 2 <br> ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina VN1! <br>VCPU: 6 <br>MEMORIA: 8 <br>SWAP: 4 <br>ESPACO EM DISCO: 100";

    } else if (quantidadeAgents > 30 && quantidadeAgents <= 60 && quantidaDeDiscador <= 4 && vmware == true && google == false) {
        document.getElementById("retorno").innerHTML ="Será necessário esse Hardware para a maquina DN1! <br> VCPU: 10 <br>MEMORIA: 15 <br> SWAP: 4 <br>ESPACO EM DISCO: 200 <br> <br> Será necessário esse Hardware para a maquina DN2! <br> VCPU: 6 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina VN1! <br>VCPU: 6 <br>MEMORIA: 8 SWAP: 4 <br>ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina VN2! <br>VCPU: 6 MEMORIA: 8 <br>SWAP: 4 ESPACO EM DISCO: 100";

    } else if (quantidadeAgents >= 70 && quantidadeAgents <= 90 && quantidaDeDiscador <= 5 && vmware == true && google == false) {
        document.getElementById("retorno").innerHTML ="Será necessário esse Hardware para a maquina DN1! <br> VCPU: 10 <br>MEMORIA: 15 <br> SWAP: 6 <br> ESPACO EM DISCO: 20 <br> <br>Será necessário esse Hardware para a maquina DN2! <br>VCPU: 8 <br>MEMORIA: 10 <br>SWAP: 4 <br>ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina VN1! <br><br>VCPU: 6 <br>MEMORIA: 8 <br>SWAP: 4 <br>ESPACO EM DISCO: 10 <br><br>Será necessário esse Hardware para a maquina VN2! <br><br>VCPU: 6 <br>MEMORIA: 8 <br>SWAP: 4 <br>ESPACO EM DISCO: 10 <br><br>Será necessário esse Hardware para a maquina VN3! <br>VCPU: 6<br> MEMORIA: 8 <br>SWAP: 4 <br>ESPACO EM DISCO: 10 <br><br>Será necessário esse Hardware para a maquina NODEQUEUE! <br>VCPU: 4 <br>MEMORIA: 4 <br>SWAP: 4 <br>ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina GATEWAY! <br>VCPU: 8 <br>MEMORIA: 10 <br>SWAP: 2 <br>ESPACO EM DISCO: 100";

    } else if (quantidadeAgents > 95 && quantidadeAgents <= 120 && quantidaDeDiscador <= 6 && vmware == true && google == false) {
        document.getElementById("retorno").innerHTML ="Será necessário esse Hardware para a maquina DN1! <br> VCPU: 12 <br> MEMORIA: 20 <br>SWAP: 4 <br>ESPACO EM DISCO: 250 <br><br>Será necessário esse Hardware para a maquina DN2! <br> VCPU: 10 <br> MEMORIA: 12 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN1! <br> VCPU: 6 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN2!<br> VCPU: 6 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN3! <br>VCPU: 6 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN4! <br> VCPU: 6 <br> MEMORIA: 10 <br>SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina NODEQUEUE! <br> VCPU: 6 <br> MEMORIA: 6 <br> SWAP: 4 <br> ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina GATEWAY! <br> VCPU: 8 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 100";


        //AGORA COMEÇA O DO GOOGLE CLOUD
    } else if (quantidadeAgents <= 30 && quantidaDeDiscador <= 1 && google == true && vmware == false) {
        document.getElementById("retorno").innerHTML ="GOOGLE <br>Será necessário esse Hardware para a maquina DN1! <br> VCPU: 4 <br>MEMORIA: 15 <br> SWAP: 4 <br>ESPACO EM DISCO: 150 <br> <br> Será necessário esse Hardware para a maquina DN2! <br> VCPU: 4 <br> MEMORIA: 15 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br>Será necessário esse Hardware para a maquina VN2! <br>VCPU: 6 MEMORIA: 8 <br>SWAP: 4 ESPACO EM DISCO: 150";

    } else if (quantidadeAgents > 30 && quantidadeAgents <= 60 && quantidaDeDiscador <= 4 && google == true && vmware == false) {
        document.getElementById("retorno").innerHTML ="GOOGLE <br>Será necessário esse Hardware para a maquina DN1! <br> VCPU: 4 <br>MEMORIA: 20 <br> SWAP: 4 <br>ESPACO EM DISCO: 150 <br> <br> Será necessário esse Hardware para a maquina DN2! <br> VCPU: 4 <br> MEMORIA: 15 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br>Será necessário esse Hardware para a maquina VN1! <br>VCPU: 4 <br>MEMORIA: 10 SWAP: 4 <br>ESPACO EM DISCO: 150 <br><br>Será necessário esse Hardware para a maquina VN2! <br>VCPU: 4 MEMORIA: 1- <br>SWAP: 4 ESPACO EM DISCO: 150";

    } else if (quantidadeAgents >= 70 && quantidadeAgents <= 90 && quantidaDeDiscador <= 5 && google == true && vmware == false) {
        document.getElementById("retorno").innerHTML ="GOOGLE <br>Será necessário esse Hardware para a maquina DN1! <br> VCPU: 4 <br>MEMORIA: 20 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br> <br>Será necessário esse Hardware para a maquina DN2! <br>VCPU: 4 <br>MEMORIA: 15 <br>SWAP: 4 <br>ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina VN1! <br><br>VCPU: 4 <br>MEMORIA: 10 <br>SWAP: 4 <br>ESPACO EM DISCO: 150 <br><br>Será necessário esse Hardware para a maquina VN2! <br><br>VCPU: 4 <br>MEMORIA: 10 <br>SWAP: 4 <br>ESPACO EM DISCO: 150 <br><br>Será necessário esse Hardware para a maquina VN3! <br>VCPU: 4<br> MEMORIA: 10 <br>SWAP: 4 <br>ESPACO EM DISCO: 150 <br><br>Será necessário esse Hardware para a maquina NODEQUEUE! <br>VCPU: 4 <br>MEMORIA: 4 <br>SWAP: 4 <br>ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina GATEWAY! <br>VCPU: 4 <br>MEMORIA: 10 <br>SWAP: 2 <br>ESPACO EM DISCO: 100";

    } else if (quantidadeAgents > 95 && quantidadeAgents <= 120 && quantidaDeDiscador <= 6 && google == true && vmware == false) {
        document.getElementById("retorno").innerHTML ="GOOGLE <br>Será necessário esse Hardware para a maquina DN1! <br> VCPU: 8 <br> MEMORIA: 20 <br>SWAP: 4 <br>ESPACO EM DISCO: 250 <br><br>Será necessário esse Hardware para a maquina DN2! <br> VCPU: 6 <br> MEMORIA: 12 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br> Será necessário esse Hardware para a maquina VN1! <br><br> VCPU: 4 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN2!<br> VCPU: 4 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN3! <br>VCPU: 4 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina VN4! <br> VCPU: 4 <br> MEMORIA: 10 <br>SWAP: 4 <br> ESPACO EM DISCO: 150 <br><br> Será necessário esse Hardware para a maquina NODEQUEUE! <br> VCPU: 4 <br> MEMORIA: 6 <br> SWAP: 4 <br> ESPACO EM DISCO: 100 <br><br>Será necessário esse Hardware para a maquina GATEWAY! <br> VCPU: 4 <br> MEMORIA: 10 <br> SWAP: 4 <br> ESPACO EM DISCO: 100";
    } else {
        document.getElementById("retorno").innerHTML="Será necessário consultar um analista para verificar o hardware.";
    };

}


function imprimindoValor(){
    const element = document.getElementById("retorno")
    html2pdf()
    .from(element)
    .save()

}
