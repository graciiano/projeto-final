import Cards from "@/components/cardNoticia/CardNoticia";
import Image from "next/image";

export default function Start() {
  return (
    <div className="bg-gray-900">
    <div className="flex flex-wrap justify-center">
        <div className="w-1/3 p-4">
            <Cards 
                src="/tomate.webp" 
                alt="" 
                titulo="Previsão de recorde na safra de grãos pode ajudar a baixar o preço dos alimentos?" 
                descripcion="Colheita de grãos 2025/26 deve ser 8,2% maior que a anterior, estima a Companhia Nacional de Abastecimento (Conab). Especialistas avaliam que isso pode influenciar, mas não resolve o problema." 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/crimeRio.webp" 
                alt="" 
                titulo="Conversas revelam terror da quadrilha que tomou bairros da Zona Oeste" 
                descripcion="RJ2 teve acesso exclusivo a material de investigações que elucidaram homicídios. Desde que a guerra pelo controle da região entre traficantes e milicianos começou, foram contabilizados quase 684 assassinatos.." 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/cerebro.jpg" 
                alt="" 
                titulo="Como a pequena mancha azul do cérebro regula seu sono" 
                descripcion="Compreender melhor processos do cérebro pode ajudar a tratar os distúrbios do sono associados a condições como a ansiedade." 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/prefeitoJampa.jpg" 
                alt="" 
                titulo="Prefeito de João Pessoa enfatiza parcerias com diversas instâncias públicas" 
                descripcion="A solenidade marcou o início do período legislativo na Câmara Municipal, reunindo vereadores e autoridades locais para debater pautas prioritárias para a capital paraibana." 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/milei.png" 
                alt="" 
                titulo="Milei segue passos de Trump e confirma que vai retirar a Argentina da OMS" 
                descripcion="Porta-voz do presidente diz que país não aceita que organismo internacional intervenha na soberania e critica combate à Covid" 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/lula.webp" 
                alt="" 
                titulo="Lula afirma que EUA não podem ficar ameaçando todo o mundo" 
                descripcion="Presidente reage a falas de republicano sobre retomar Canal do Panamá e controlar Groenlândia" 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/botafogo.jpeg" 
                alt="" 
                titulo="Botafogo-PB oficializa Alexandre Gallo como CEO e anuncia volta de Henrique Dourado" 
                descripcion="Oficializações das chegadas do novo executivo da SAF e do retorno do atacante ocorreram na Maravilha do Contorno" 
            />
        </div>
        <div className="w-1/3 p-4">
            <Cards 
                src="/wesley.png" 
                alt="" 
                titulo="Wesley Safadão anuncia gravação do seu novo DVD em João Pessoa" 
                descripcion="Wesley Safadão irá gravar seu novo DVD “Bem-Vindo ao Meu Mundo: Forró & Vaquejada” em João pessoa. A gravação acontecerá no Parque da Vaquejada – Arena Jampa no dia 07 de fevereiro." 
            />
        </div>
    </div> 
</div>
  );
}
