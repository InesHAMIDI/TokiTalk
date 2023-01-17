<script>
export default {
  // component options
  // declare some reactive state here.
}
</script>

<template>
  <h1>Welcome to TokiTalk !</h1>

  <div>
    <button :class="premade-button">Oui</button>
    <button :class="premade-button">Non</button>
    <button :class="premade-button">Je ne sais pas</button>
    <label for="Texte">Entrez du texte :</label>
    <input :class="texte-a-entrer" value="Dadaoui">
  </div>
</template>

<style>
body{
  font-family: fantasy;
  color: cadetblue;
  background-color:darkgrey;
}
.premade-button:hover{
      font-style: oblique;
  }


</style>