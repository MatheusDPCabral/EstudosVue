const { createApp } = Vue;

createApp({
    data() {
        return {
            notas: [], // Dados da API
        };
    },
    methods: {
      async fetchNotas() {
        try {
            const response = await fetch('https://localhost:7096/NotaFiscal', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
    
            this.notas = await response.json();
            this.populateDataTable();
        } catch (error) {
            console.error('Erro ao buscar notas:', error);
        }
    }
    ,
    populateDataTable() {
      $('#notasTable').DataTable({
          data: this.notas, // Use os dados retornados pela API
          destroy: true,    // Destrói a instância anterior para evitar conflitos
          columns: [
              { data: 'id', title: 'ID' },                      // Mapeia o campo "id"
              { data: 'tipo', title: 'Tipo' },                  // Mapeia o campo "tipo"
              { data: 'numeroNota', title: 'Número da Nota' },  // Mapeia o campo "numeroNota"
              { data: 'chaveNota', title: 'Chave da Nota' },    // Mapeia o campo "chaveNota"
              { data: 'cnpjEmitente', title: 'CNPJ Emitente' }, // Mapeia o campo "cnpjEmitente"
              { data: 'nomeEmitente', title: 'Nome do Emitente' }, // Mapeia o campo "nomeEmitente"
              { data: 'valorNota', title: 'Valor' },            // Mapeia o campo "valorNota"
              { data: 'dataEmissao', title: 'Data de Emissão' } // Mapeia o campo "dataEmissao"
          ]
      });
  }
  
    },
    mounted() {
        this.fetchNotas(); // Chama ao carregar a aplicação
    }
}).mount('#app');
