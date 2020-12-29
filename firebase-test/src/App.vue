<template>
  <div id="app">
    <table class="container table table-bordered">
      <thead class="thead-dark">
          <tr>
              <th>Resposável</th>
              <th>Tipo</th>
              <th>Modelo</th>
              <th>Status</th>
              <th>Localidade</th>
              <th>Ambiente</th>
              <th>Serial Number</th>
              <th>Patrimônio</th>
              <th>Autorização</th>
              <th>Data de aquisição</th>
              <th>Data de entrada</th>
              <th>Data de devolução</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in estoque" :key="item.serialNumber" >
          <td>{{item.responsible}}</td>
          <td>{{item.type}}</td>
          <td>{{item.model}}</td>
          <td>{{item.status}}</td>
          <td>{{item.locality}}</td>
          <td>{{item.ambient}}</td>
          <td>{{item.serialNumber}}</td>
          <td>{{item.patrimony}}</td>
          <td>{{item.authorize}}</td>
          <td>{{item.acquisitionDate}}</td>
          <td>{{item.entranceDate}}</td>
          <td>{{item.devolutionDate}}</td>
        </tr>
      </tbody>
      
    </table>
  </div>
</template>

<script>
import firebase from "./firebaseConfig";
const db = firebase.database();

export default {
  data() {
    return {
      estoque: {}
    }
  },
  mounted() {
  let self = this, returnArr = [];
  // Find data using the "lists" reference
  db.ref("assets/TEVPTkFSRE8gQVBBUkVDSURPIFBPTUJBTA==").on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      returnArr.push(childSnapshot.val());
      // Fill the local data property with Firebase data
      self.estoque = returnArr;
    });
    console.log(returnArr);
  });
},
methods: {
  getList: function(list) {
    this.lists = list;
  },
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.table {
  width: 100vw;
  height: 100vh;
}

</style>
