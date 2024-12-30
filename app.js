const App = {
    data () {
        return {
            usuarios: [
                { nome: 'João', idade: 28, email: 'joao@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'mariadawdada@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'mariaasdasd@email.com' },
                { nome: 'Maria', idade: 35, email: 'mdadadadaaria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'mariaasdasdasd@email.com' },
                { nome: 'Maria', idade: 35, email: 'maQasdawdSqsria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'marawdawdia@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maridadasdaa@email.com' },
                { nome: 'Maria', idade: 35, email: 'mariadasdasda@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maadadria@email.com' },
                { nome: 'Maria', idade: 35, email: 'maria@email.com' },
                { nome: 'Pedro', idade: 40, email: 'pedro@email.com' }
            ]
        }
    },
    mounted() {
    this.$nextTick(() => {
      $('#minhaTabela').DataTable();
    });
  }
}  

Vue.createApp(App).mount("#app");