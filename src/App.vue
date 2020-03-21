<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>	
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email" placeholder="Informe o E-mail"></b-form-input>	
			</b-form-group>
			<hr>
			<b-button @click.prevent="salvar"
				size="lg" variant="primary">Salvar</b-button>
		</b-card>
		<b-card class="mt-3">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nome</th>
						<th scope="col">E-mail</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(user, index) in usuarios" :key="index">
						<th scope="row"></th>
						<td>{{ user.nome }}</td>
						<td>{{ user.email }}</td>
						<td>
							<b-button class="mr-2" size="lg" variant="info">Editar</b-button>
							<b-button size="lg" variant="danger"> Excluir</b-button>
						</td>
					</tr>
				</tbody>
			</table>
		</b-card>

	</div>
</template>

<script>

// import axios from 'axios' //axios local

export default {
	nome: 'app',
	data() {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	created(){
		this.obterUsuarios()
	},
	methods: {
		salvar() {
			// console.log(this.usuario)
			this.$http.post('usuarios.json', this.usuario)
				.then(resp => {
					if(resp) {
						this.obterUsuarios()
						this.limpar()
					}
				})
				.catch(err =>  err)	
		},
		obterUsuarios() {
			// axios.get('usuarios.json', this.usuario) axios local
			this.$http.get('usuarios.json', this.usuario)
				.then(resp => {
					if(resp) {
						this.usuarios = resp.data	
					}
				})
				.catch(err => err)
				// this.$http.defaults.headers.common['Authorization'] = 'abc123'// setar headers nos métodos
		},
		limpar() {
			this.usuario.nome = '',
			this.usuario.email = ''
		}
	}

	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
