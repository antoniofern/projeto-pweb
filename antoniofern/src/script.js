$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': '[ENADE-2005 | 2005011] Apesar de todo o desenvolvimento, a construção de computadores e processadores continua, basicamente, seguindo a arquitetura clássica de von Neumann. As exceções a essa regra encontram-se em computadores de propósitos específicos e nos desenvolvidos em centros de pesquisa. Assinale a opção em que estão corretamente apresentadas características da operação básica de um processador clássico.',
      'options': [
        'Instruções e dados estão em uma memória física única; um programa é constituído de uma seqüência de instruções de máquina; uma instrução é lida da memória de acordo com a ordem dessa seqüência e, quando é executada, passa-se, então, para a próxima instrução na seqüência.',
       'Instruções e dados estão em memórias físicas distintas; um programa é constituído de um conjunto de instruções de máquina; uma instrução é lida da memória quando o seu operando-destino necessita ser recalculado; essa instrução é executada e o resultado é escrito no operando de destino, passando-se, então, para o próximo operando a ser recalculado.',
        'Instruções e dados estão em uma memória física única; um programa é constituído de um conjunto de instruções de máquina; uma instrução é lida da memória quando todos os seus operandos-fonte estiverem prontos e disponíveis; essa instrução é executada e o resultado é escrito no operando de destino, passando-se, então, para a instrução seguinte que tiver todos seus operandos disponíveis.',
       'Instruções e dados estão em memórias físicas distintas; um programa é constituído de um conjunto de instruções de máquina; uma instrução é lida da memória quando todos os seus operandos-fonte estiverem prontos e disponíveis; essa instrução é executada e o resultado é escrito no operando de destino, passando-se, então, para a instrução seguinte que estiver com todos os seus operandos disponíveis.',
       'Instruções e dados estão em memórias físicas distintas; um programa é constituído de uma seqüência de instruções de máquina; uma instrução é lida da memória de acordo com a ordem dessa seqüência e, quando é executada, passa-se, então, para a próxima instrução na seqüência.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    },
    {
      'q': ' [ENADE-2005 | 2005012] Um elemento imprescindível em um computador é o sistema de memória, componente que apresenta grande variedade de tipos, tecnologias e organizações. Com relação a esse assunto, julgue os itens seguintes: (I) Para endereçar um máximo de 2 palavras distintas, uma E memória semicondutora necessita de, no mínimo, E bits de endereço. (II) Em memórias secundárias constituídas por discos magnéticos, as palavras estão organizadas em blocos, e cada bloco possui um endereço único, com base na sua localização física no disco. (III) A tecnologia de memória dinâmica indica que o conteúdo dessa memória pode ser alterado (lido e escrito), ao contrário da tecnologia de memória estática, cujo conteúdo pode apenas ser lido, mas não pode ser alterado. Assinale a opção correta.',
      'options': [
        'Apenas um item está certo.',
        'Apenas os itens I e II estão certos.',
        'Apenas os itens I e III estão certos.',
        'Apenas os itens II e III estão certos.',
        'Todos os itens estão certos.'
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    },
    {
      'q': '[ENADE-2005 | 2005013]  Julgue os itens a seguir, acerca de algoritmos para ordenação. (I) O algoritmo de ordenação por inserção tem complexidade O(n × log n). (II) Um algoritmo de ordenação é dito estável caso ele não altere a posição relativa de elementos de mesmo valor. (III) No algoritmo quicksort, a escolha do elemento pivô influencia o desempenho do algoritmo. (IV) O bubble-sort e o algoritmo de ordenação por inserção fazem, em média, o mesmo número de comparações. Estão certos apenas os itens',
      'options': [
        'I e II.',
        'I e III.',
        'II e IV.',
        'I, III e IV.',
        'II, III e IV.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    },
    {
      'q': ' [ENADE-2005 | 2005016] No processo unificado, cinco workflows acompanham o conjunto das fases de desenvolvimento de software. Cada workflow é um conjunto de atividades executadas por vários membros do projeto. Considerando o desenvolvimento de um sistema integrado de gestão (ERP), o empacotamento em componentes de software dos elementos do modelo de projeto — tais como arquivo de código- fonte, biblioteca de ligação dinâmica e componentes executáveis — é descrito pelo workflow de',
      'options': [
       'teste.',
       'análise.',
       'projeto.',
       'implementação.',
       'requisito.'
      ],
      'correctIndex': 3,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    },
    {
      'q': ' [ENADE-2005 | 2005022] Com relação ao gerenciamento de memória com paginação em sistemas operacionais, assinale a opção correta.',
      'options': [
       'As páginas utilizadas por um processo, sejam de código ou de dados, devem ser obrigatoriamente armazenadas na partição de swap do disco, quando o processo não estiver sendo executado.',
       'Todas as páginas de um processo em execução devem ser mantidas na memória física enquanto o processo não tiver terminado.',
       'Um processo somente pode ser iniciado se o sistema operacional conseguir alocar um bloco contíguo de páginas do tamanho da memória necessária para execução do processo.',
       'O espaço de endereçamento virtual disponível para os processos pode ser maior que a memória física disponível.',
       'Um processo somente pode ser iniciado se o sistema operacional conseguir alocar todas as páginas de código desse processo.'
      ],
      'correctIndex': 3,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    },
    {
      'q': ' [ENADE-2008 | 2008015] CAlém do acesso a páginas html, a Internet tem sido usada cada vez mais para a cópia e troca de arquivos de músicas, filmes, jogos e programas. Muitos desses arquivos possuem direitos autorais e restrições de uso. Considerando o uso das redes ponto-a-ponto para a troca de arquivos de músicas, filmes, jogos e programas na Internet, a quem cabe a identificação e o cumprimento das restrições de uso associados a esses arquivos?',
      'options': [
       ' aos programas de troca de arquivo',
       'aos usuários',
       'ao sistema operacional',
       'aos produtores dos arquivos',
       'aos equipamentos roteadores da Internet'
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    },
    {
      'q': ' [ENADE-2008 | 2008015] CAlém do acesso a páginas html, a Internet tem sido usada cada vez mais para a cópia e troca de arquivos de músicas, filmes, jogos e programas. Muitos desses arquivos possuem direitos autorais e restrições de uso. Considerando o uso das redes ponto-a-ponto para a troca de arquivos de músicas, filmes, jogos e programas na Internet, a quem cabe a identificação e o cumprimento das restrições de uso associados a esses arquivos?',
      'options': [
       ' aos programas de troca de arquivo',
       'aos usuários',
       'ao sistema operacional',
       'aos produtores dos arquivos',
       'aos equipamentos roteadores da Internet'
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns, você acertou!',
      'incorrectResponse': 'Poxa, nem foi dessa vez!'
    }
  ]
});


var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
