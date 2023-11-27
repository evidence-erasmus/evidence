<template>
    <div class="border-l-2 border-l-sky-400 pl-6 pb-8">
        
        <h2>Desmitificar com base numa experiências</h2>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block my-4">Decisão do grupo - Vamos desmitificar o seguinte mito:</label>
        <textarea class="textarea textarea-bordered w-full text-lg" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        
        
        <h4>Na Atividade 3, espera-se que faça o seguinte:</h4>
        <ul class="leading-tight">
            <li>Desenvolver uma <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100#:~:text=Updated%20on%20January%2012%2C%202019,experiment%20using%20the%20scientific%20method." target="_blank" rel="noopener noreferrer">hipótese / investigação testável</a>.</li>
            <li>Planifique a sua experiência simples  de forma a confirmar ou desmitificar a hipótese/resposta à sua pergunta de pesquisa.</li>
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




        <!-- hypothesis -->        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-4"></Icon>
        <label class="font-bold block leading-tight my-4">A nossa hipótese / questão de pesquisa é:</label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="4" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>

        <!-- work plan -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Plano de trabalho</b> <i>(Por favor indique em quais atividades (1), (2), (3) … está envolvido como equipa e em quais vai dividir as responsabilidades. Neste caso, escreva entre parênteses, por favor, quem é responsável pelo quê.)</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="5" v-model="studentInputs.activity3a.activity3aPlan" placeholder="✍"></textarea>
        
        
        <!-- independent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Variável independente</b> <i>(aquele que vai ser alterado)</i>:</label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.independent" placeholder="✍" />
        
        <!-- dependent variable -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-2"><b>Variável dependente</b> <i>(aquele que será medido):</i></label>
        <input type="text" class="input input-bordered w-full text-lg my-4" rows="1" v-model="studentInputs.activity3a.experimentVariables.dependent" placeholder="✍" />
        
        <!-- control variables -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Variáveis de controlo</b> <i>(aquelas que serão mantidos constantes):</i></label>
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "controlTable" 
            :addRow = "true"
            addRowTitle = "Adicionar variável"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.experimentVariables.control"
            :deleteRow = "true" 
            cellType = "input"
        />
        
        <!-- results table -->
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight my-4"><b>Resultados</b> <i>(forneça os dados recolhidos durante a experiência em forma de tabela e/ou texto livre).</i></label> 
        <ToolsDynamicTableFull class="e-card"
            :tableStructure = "resultsTable" 
            :addRow = "true"
            :newRow = "new Array(2)"
            :storeToUpdate = "studentInputs" 
            :keyToUpdate = "studentInputs.activity3a.activity3aResults"
            :deleteRow = "true"
            cellType = "input"
        />


        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Circunstâncias que poderiam reduzir a fiabilidade dos resultados da experiência</b> <i>(considere possíveis fontes de erro que possam ter afetado os resultados da experiência).</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aCredibility" placeholder="✍"></textarea>
        
        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Com base nos resultados da experiência, chegámos às seguintes conclusões:</b></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>

    
        <p>Confirme as conclusões, recorrendo a fontes secundárias fiáveis. Para isso deve usar as seguintes ferramentas.</p>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Sumário do estudo das fontes secundárias</b> <i>(Fontes fiáveis ​​confirmaram as suas descobertas? Caso contrário, sugira possíveis razões)</i></label>

        <ToolsReliabilityTable class="my-4"
            :store-to-update="studentInputs" 
            :add-row="true"
        />

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500 mt-16"></Icon>
        <label class="block leading-tight"><b>Uma avaliação da validade do mito selecionado</b> <i>(ao responder, tenha em consideração as conclusões tiradas da experiência e das fontes secundárias)</i></label>
        <textarea class="textarea textarea-bordered w-full text-lg my-4" rows="7" v-model="studentInputs.activity3a.activity3aSummary" placeholder="✍"></textarea>
        
    </div>
</template>




<script setup>
    import { useStudentRadiation } from '~~/store/useStudentInputRadiation.js';
    const studentInputs = useStudentRadiation();

    const controlTable = ref({
        header: [
            {thead: "Variable", tsubhead: ""},
            {thead: "Value", tsubhead: ""}
        ]
    });
    
    const resultsTable = computed(() => {
        const variables = studentInputs.activity3a.experimentVariables;
        let structure = {
            header: [
                {thead: `${variables.independent}`, tsubhead: "Independent variable"},
                {thead: `${variables.dependent}`, tsubhead: "Dependent variable"},
            ]
        }
        // studentInputs.activity3a.experimentVariables.control.forEach( (variable) => {
        //     structure.header.push({thead: `${variable}`, tsubhead:"Kontrollmuutuja"});
        // } );
        return structure;
    });
</script>