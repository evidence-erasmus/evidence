<template>
    <div class="border-r-2 border-r-sky-400 pr-8">
        <!-- <UiYourAnswersButton url="answers/secondary-sources" /> -->
        <h2>Atividade 3b: Desmistificação baseada em fontes secundárias</h2>

        
        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Group decision - we are going to bust the following myth:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3b.activity3bMyth"></textarea> -->


        <h4>Na Atividade 3, espera-se que faça o seguinte:</h4>
        <ul class="leading-tight">
            <li>Desenvolver uma <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">hipótese / investigação testável</a>.</li>
            <li>Planifique a sua experiência simples de forma a confirmar ou desmitificar a hipótese/resposta à sua pergunta de pesquisa.</li>
            <li>Apresente os dados recolhidos em tabelas, gráficos ou de outras formas semelhantes.</li>
            <li>Use as suas descobertas para tirar uma conclusão.</li>
            <li>Verifique a plausibilidade do mito escolhido.</li>
            <li><i>E finalmente...</i>
                <br />
                Faça uma publicação de vídeo ou apresentação em PowerPoint das suas principais descobertas, para informar o público (este passo está relacionado com a atividade 4).</li>
        </ul>
        
        <p>
            Ao fazê-lo, deve pensar cuidadosamente sobre como partilhar a carga de trabalho dentro do seu grupo. Pode atribuir um papel diferente a cada elemento do grupo. Por exemplo, o papel de líder que organiza as atividades, o de secretário que faz notas e comentários sobre a informação encontrada, o de investigador que faz pesquisas e a outro elemento do grupo, o papel de crítico que verifica a fiabilidade da informação.
        </p>

        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> A nossa hipótese / questão de investigação é:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bHypothesis"></textarea>




        <h3>Plano de atividades</h3>
        <p class="italic mt-2">
            (pode indicar as atividades em que está envolvido como todo o grupo e pelo qual vai dividir responsabilidades, neste caso, colocar, por favor, quem é o responsável pelo quê).
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Escreva o seu plano aqui:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bPlan"></textarea>


       

        <h3>Reliability check</h3>
        <p>
            Por favor, use <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-neutral text-white no-underline"><Icon name="mdi:tools" size="20" /> este ferramentas</NuxtLink> para procurar informações e avaliar a sua fiabilidade
            <br>
        </p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Escreva um resumo das suas descobertas na tabela seguinte:</label>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
             />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Com base nas evidências dadas, a nossa(s) conclusão é / são</label>
        <textarea class="textarea textarea-bordered w-full text-lg mb-8" rows="7" v-model="studentInputs.activity3b.activity3bConclusion"></textarea>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Com base nas suas descobertas, faça uma declaração sobre se o mito selecionado é confirmado ou rejeitado.</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3b.activity3bStatement"></textarea>


    </div>
</template>

<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';

    const studentInputs = useStudentRadiation();

</script>