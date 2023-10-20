<template>
    <div>
         
        <p>
            <b>Nesta atividade, espera-se que façam o seguinte:</b>
        </p>
        <ul class="leading-tight">
            <li>
                desenvolver uma hipótese testável/questão de investigação, 
            </li>
            <li>
                planear a procura de informação relevante que desminta ou confirme a hipótese/ responda à vossa pergunta de investigação, 
            </li>
            <li>
                avaliar a fiabilidade das evidências recolhidas; 
            </li>
            <li>
                utilizar os resultados para chegar a uma conclusão; 
            </li>
            <li>
                apresentar os dados recolhidos sob a forma de quadros, gráficos ou outra.
            </li>
        </ul>
        <p>
            Ao fazer isto, devem pensar cuidadosamente na forma de partilhar a tarefa no grupo. Podem atribuir a cada um um papel diferente, por exemplo, a um líder que organiza as atividades, a um secretário que toma notas e faz comentários sobre a informação encontrada, a um investigador que faz pesquisas, a um crítico que examina a fiabilidade da informação, ou de outra forma.
        </p>    


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Decisão do grupo: Vamos desmistificar o seguinte mito:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">A nossa hipótese / questão de investigação é a seguinte:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Plano de actividades</h3>
        <p>
            (podes indicar as actividades do grupo como um todo ou, se dividiram  tarefas, quem é responsável por quê)
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Escreve aqui o plano:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <p>Por favor, usa esta <NuxtLink to="../tools/reliability-assessment" target="_blank" class="btn btn-sm btn-accent text-white no-underline"><Icon name="mdi:tools" size="20"></Icon> ferramenta</NuxtLink> para procurar informações e avaliar a sua fiabilidade</p>

        <p>
            Escreve o resumo das vossas descobertas aqui.
        </p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Com base nas evidências recolhidas, as nossas conclusões sobre o mito são:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>
        
        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Com base nas vossas conclusões, diz se o mito selecionado é confirmado ou rejeitado:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.decision" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentDrugs } from '~~/store/useStudentInputDrugs.js';
    const studentInputs = useStudentDrugs();
</script>