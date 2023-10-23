<template>
    <div>
        <h2>Atividade 3b: Desmistificação baseada em fontes secundárias</h2>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Decisão do grupo - Decisão do grupo: Vamos desmistificar o seguinte mito:</label>
        
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" v-model="studentInputs.activity3b.activity3bMyth"></textarea>

        <hr />

        <h3>Nesta atividade, espera-se que:</h3>
        <ul class="leading-tight">
            <li>restrinja o seu mito a uma <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">hipótese testável</a> / pergunta de pesquisa;</li>
            <li>planear a sua procura de informações relevantes que confirmem ou rejeitem a sua hipótese / respondam à sua pergunta de pesquisa;</li>
            <li>apresentar os dados recolhidos sob a forma de tabelas, gráficos ou semelhantes;</li>
            <li>avaliar a fiabilidade dos elementos de prova recolhidos;</li>
            <li>utilizar as suas descobertas para tirar uma conclusão.</li>    
        </ul>
        
        <p>Ao fazê-lo, deve pensar cuidadosamente sobre como partilhar a carga de trabalho dentro do seu grupo. Poderia designar todos para um papel diferente, por exemplo, para um líder que está a organizar as atividades, para um secretário que faz notas e comentários sobre a informação encontrada, para um investigador que faz pesquisas, para um crítico que está a estudar a fiabilidade da informação.</p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> A nossa hipótese/questão de investigação é:</label>

        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>


        <hr />


        <h3>Plano de atividades</h3>
        <p class="italic mt-2">
            (pode indicar as atividades em que está envolvido como todo o grupo e pelo qual vai dividir responsabilidades, neste caso, colocar, por favor, quem é o responsável pelo quê).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Escreva o seu plano aqui:</label>
        <textarea class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


        <hr />

        <h3>Realiability check</h3>
        <p>
            Por favor, use estas ferramentas para procurar informações e avaliar a sua fiabilidade
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Escreva um resumo das suas descobertas na tabela seguinte:</label>

        <div class="e-card mb-8">
            <ToolsReliabilityTable
                :storeToUpdate="studentInputs"
                :addRow="true" 
            />
        </div>


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bConcl" class="font-bold block">Com base nas evidências dadas, a nossa(s) conclusão é/são:</label>
        <textarea id="3bConcl" class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label for="3bConcl" class="font-bold block">Com base nas suas descobertas, faça uma declaração sobre se o mito selecionado é confirmado ou rejeitado.</label>
        <textarea id="3bConcl" class="textarea textarea-bordered text-lg block w-full leading-tight" rows="7" v-model="studentInputs.activity3b.activity3bStatement"></textarea>

    </div>
</template>

<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();

</script>