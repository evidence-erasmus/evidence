<template>
    <div>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Decisão do grupo: Vamos analisar o seguinte mito ou estudar a questão:</label>
        
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.myth" placeholder="✍"></textarea>

        <hr />

        <p>
            É agora convidado a reduzir o mito/questão a uma hipótese testável - uma afirmação que pode ser testada ou uma questão que pode ser respondida através da sua investigação. 
        </p>
        <p>
            Planeie as suas atividades posteriores seguindo os passos indicados na Figura 1. Deve pensar se o seu mito/questão pode ser testado experimentalmente, confirmado/falsificado utilizando tecnologia digital, por exemplo, aplicações para telemóveis, modelos e simulações informáticas, ou utilizando provas secundárias (por exemplo, informação publicada ou disponível sob a forma de vídeos do YouTube). Pode utilizar mais do que um destes métodos, aplicando o chamado princípio da triangulação - aumentando a validade das suas conclusões através da convergência de informações de diferentes fontes.
        </p>
        
        <h4>Na Atividade 3, espera-se que faça o seguinte:</h4>
        <ul class="leading-tight">
            <li>Desenvolver uma hipótese testável/questão de investigação,</li>
            <li>planear uma experiência simples ou procurar informações relevantes que confirmem ou falsifiquem a hipótese/resposta à questão de investigação,</li>
            <li>apresentar os dados recolhidos sob a forma de tabelas, gráficos ou similares,</li>
            <li>utilizar os resultados para chegar a uma conclusão,</li>
            e finalmente...
            <li>...fazer uma apresentação em vídeo ou PowerPoint das suas principais conclusões (este passo está relacionado com a atividade 4).</li>
        </ul>
        
        <p>
            Ao fazer isto, pensem em partilhar a carga de trabalho de forma equitativa no vosso grupo. 
        </p>





        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block">A nossa hipótese / questão de investigação é a seguinte:</label>

        <textarea class="textarea textarea-bordered w-full text-lg" rows="4" v-model="studentInputs.hypothesis" placeholder="✍"></textarea>


        <hr />
        

        <h3>Plano de atividades</h3>
        <p>
            (pode indicar em que atividades está envolvido com uma equipa completa e por quem vai dividir responsabilidades, neste caso, coloque por favor, quem é responsável por quê).
        </p>
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500" />
        <label for="planOfActivities" class="block mb-2 mt-2">
            <b>Escreva aqui o seu plano:</b>
        </label>
        <textarea id="planOfActivities" class="textarea textarea-bordered block w-full text-lg mb-8" placeholder="✍️" rows="5"
        v-model="studentInputs.planOfActivities"></textarea>

        <hr />


        <!-- <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Define research variables:</label>
        <ToolsDynamicTableFull 
            :tableStructure="variableTable" 
            :storeToUpdate="studentInputs"
            :keyToUpdate="studentInputs.activity3a.activity3aVariables" 
            :newRow="['','','']" 
            :addRow="true" 
        />
        <label class="font-bold block mt-8">Your research results:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea> -->

        <p>
            Use esta ferramenta para pesquisar informações e avaliar sua confiabilidade
        </p>
        <p>
            Escreva um resumo de suas descobertas na tabela a seguir:
        </p>

        <ToolsReliabilityTable class="mb-8"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <hr />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Com base nas provas apresentadas, a(s) nossa(s) conclusão(ões) sobre o mito é(são):</label>
        <textarea class="textarea textarea-bordered w-full text-lg" rows="7" v-model="studentInputs.conclusions" placeholder="✍"></textarea>


        
    </div>
</template>




<script setup>
    import { useStudentSpace } from '~~/store/useStudentInputSpace.js';
    const studentInputs = useStudentSpace();
</script>