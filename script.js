// Pegar o formulário
const form = document.querySelector("#form-habits")
//Para iniciar minha biblioteca, instanciar o objeto
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//Adicionar um evento, quando clicar, realiza uma função, chama a função add
button.addEventListener("click", add)
//Função save serve para salvar no local storage e é realizada a cada mudança na pag
form.addEventListener("change", save)
function add() {
  const today = new Date().toLocaleDateString("pt-br")
  const dayToAdd = today.slice(0, -5)
  const dayExists = nlwSetup.dayExists(dayToAdd)
  if (dayExists) {
    alert("O dia já foi cadastrado!")
    return
  }
  nlwSetup.addDay(dayToAdd)
}

function save() {
  //Local Storage é um objeto que guarda em memória, informações
  //Pegar nlwSetup.data -> JSON, usa o stringify para transformar em string
  //E salva o item, depois pega o item e transforma de volta para JSON
  // Da um setData e load
  localStorage.setItem("NLWSetupExplorer", JSON.stringify(nlwSetup.data))
}
//Fazer o carregamento das datas e marca as caixas

// const data = {
//   workout: ["01-01", "01-02", "01-06"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// } -> Como deveria estar o objeto data

//O json vai ficar vazio, vai da bosta
const data = JSON.parse(localStorage.getItem("NLWSetupExplorer")) || {}
//Apos carregar as datas, vai carregar e renderizar o layout, ou seja, pra cada tag de exercise, water ou food, ele vai criar uma tag pra dias
nlwSetup.setData(data)
nlwSetup.load()
