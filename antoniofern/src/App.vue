<template>
  <div id="app">
    <!-- NAVIGATION -->
    <nav class="navbar navbar-dark bg-custom-2">
      <a class="navbar-brand" href="#">ProjWeb</a>
    </nav>
    <!-- MAIN CONTENT -->
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h3>Adicionar novo Usuário</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addUser">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="newUser.login" placeholder="Login">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="newUser.senha" placeholder="Senha">
                </div>
                <button type="submit" class="button1">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-8 text-center">
                    <img src="./assets/logo.png" alt="">
          <div class="card">
            <div class="card-header">
              <h3>Lista de usuários</h3>
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Login</th>
                    <th>Senha</th>
                    <th>Operações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="u in users">
                    <td>
                      {{u.login}}
                    </td>
                    <td>
                      {{ u.senha }}
                    </td>
                    <td>
                      <button @click="deleteUser(u)" class="btn btn-danger">
                        Delete
                      </button>
                      <button @click="editUser(u)" class="btn btn-success">
                        Editar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Firebase
import Firebase from 'firebase';
import config from './config';
let app = Firebase.initializeApp(config);
let db = app.database();
let usersRef = db.ref('users');

// toast
import toastr from 'toastr';

export default {
  name: 'App',
  firebase: {
    users: usersRef
  },
  data () {
    return {
      newUser: {
        login: '',
        senha: '',
      }
    }
  },
  methods: {
    addUser() {
      usersRef.push(this.newUser);
      this.newUser.login = '';
      this.newUser.senha = '';
    },
    deleteUser(user) {
      if(confirm('Você tem certeza que deseja deletar?')) {
        usersRef.child(user['.key']).remove();
        toastr.success('Usuário removido');
      }
    },
    editUser(user) {
      usersRef.child(user['.key']).update({edit:true});
    }
  }
}
</script>

<style>
#app {
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #331c42, #a10db4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6b27aa, #2e034b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

height: 100vh;
}

.bg-custom-2 {
background-image: linear-gradient(15deg, #792dc0 0%, #3e0564 100%);
}

.button1 {
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>
