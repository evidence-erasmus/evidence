<template>
    <div>
        
        <h2>Atividade 3a: Desmitificar Mitos com base numa experiência</h2>

        
        
        <!-- <div contenteditable="true" class="ring-slate-600 ring-1 p-2 rounded" ref="studentInput3a">
            {{ studentInputs.activity3a }}
        </div> -->

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Decisão do grupo - Vamos desmistificar o seguinte mito:</label>
        
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" v-model="studentInputs.activity3a.activity3aMyth" placeholder="✍"></textarea>

        <hr />

        

        <p>In case you think your myth can be tested experimentally, please read the following guidelines:</p>
        
        <h4>Nesta atividade, espera-se que:</h4>
        <ul class="leading-tight">
            <li>Restrinja o seu mito a uma <a href="https://www.thoughtco.com/testable-hypothesis-explanation-and-examples-609100" target="_blank" rel="noopener noreferrer">hipótese testável</a> / pergunta de pesquisa.</li>
            <li>Crie uma experiência que confirme ou falsifique a sua hipótese/responda à pergunta de investigação.</li>
            <li>PApresente os dados recolhidos em tabelas e gráficos e, de preferência, grave em vídeo a sua experiência como prova 
                <br />
                <a href="#" class="inline-block my-2 py-0.5 px-2 ring-2 ring-slate-700 rounded no-underline"
                target="_blank" rel="noopener noreferrer"><Icon name="material-symbols:youtube-tv-outline" /> veja os Tutoriais</a>
            </li>
            <li>Explique os seus resultados com recurso a provas científicas.</li>
            <li>Use os seus resultados para formar uma conclusão.</li>
            <li>Estime a plausibilidade do mito escolhido.</li>
            <li>Partilhe a carga de trabalho dentro do seu grupo (por exemplo, designando todos para uma função diferente - gestor, secretário, fornecedor de materiais).</li>
        </ul>
        
        
        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> A nossa hipótese / questão de investigação é:</label>

        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aHypothesis" placeholder="✍"></textarea>


        <hr />
        
        

        <h3>Plano de atividades</h3>
        
        <section class="e-card mb-8">
            <p class="italic my-0">Pense cuidadosamente sobre como controlará todas as outras variáveis, exceto aquela que é manipulada por si. Além disso, deve pensar cuidadosamente sobre como compartilhar a carga de trabalho dentro do seu grupo. Indicar as atividades (1), (2), (3) ... onde está envolvido como uma equipa e pela qual vai dividir as responsabilidades. Neste caso, escreva entre parênteses, por favor, quem é responsável pelo quê.</p>
        </section>

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Definição de variáveis:</label>


        <div class="e-card w-[90vw]" style="transform: translateX(-5vw);">
            <ToolsDynamicTableFull
                :tableStructure="tm('inquiry.variables_table')"
                :storeToUpdate="studentInputs"
                :keyToUpdate="studentInputs.activity3a.activity3aPlan"
                :addRow="true"
                :newRow="['', '', '']"
            />
        </div>


        <!-- <section>
            <div class="grid grid-cols-3 gap-2">
                <p class="text-sm font-bold">Independent variable</p>
                <p class="text-sm font-bold">Dependent variable</p>
                <p class="text-sm font-bold">Control variables</p>
            </div>
            <div v-for="row, i in studentInputs.activity3a.activity3aPlan" class="grid grid-cols-3 gap-2">
                <div v-for="variable, j in row"
                ><input v-model="studentInputs.activity3a.activity3aPlan[i][j]" class="w-full ring-1 ring-slate-300 px-1 rounded text-ellipsis overflow-hidden focus:bg-amber-50" placeholder="abc...✍" /></div>
            </div>

            <button @click="studentInputs.addVariableRow" class="bg-slate-700 text-md text-slate-100 rounded-full px-4 mt-4">ADD VARIABLES ROW</button>
        </section> -->

        <label class="font-bold block mt-8">Os seus resultados:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aResults" placeholder="✍"></textarea>


        <hr />


        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Com base na experiência, a(s) nossa(s) conclusão(ões) é/são:</label>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aConclusion" placeholder="✍"></textarea>


        <hr />

    
        <p>Agora espera-se que encontre provas de fontes secundárias para confirmar as suas próprias descobertas com recurso às seguintes ferramentas.</p>

        

        <Icon name="material-symbols:edit-square-outline" size="48" class="text-blue-500"></Icon>
        <label class="font-bold block"> Escreva um breve resumo das suas conclusões aqui:</label>
        <p class="italic">
            Os dados secundários confirmaram as suas conclusões? Em caso negativo, o que pensa porquê?<br />
            Por favor, faça uma conclusão sobre se o mito selecionado é confirmado ou rejeitado com base nas suas descobertas.
        </p>
        <textarea class="ring-slate-600 ring-1 p-2 rounded block w-full" rows="7" v-model="studentInputs.activity3a.activity3aSecondary" placeholder="✍"></textarea>

    </div>
</template>


<script setup>
    import { useStudentInputStore } from '~~/store/useStudentInputViruses.js';
    const studentInputs = useStudentInputStore();
    const {tm} = useI18n({scope:"global"});
</script>