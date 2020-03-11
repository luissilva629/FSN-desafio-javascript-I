// Base a ser utilizada

const alunosDaEscola = [{
     nome: "Henrique", 
     notas: [], 
     cursos: [], 
     faltas: 5 
    }, 
    { 
        nome: "Edson", 
        notas: [], 
        cursos: [], 
        faltas: 2 
    }, 
    { 
        nome: "Bruno", 
        notas: [10, 9.8, 9.6], 
        cursos: [], 
        faltas: 0 
    }, 
    { 
        nome: "Guilherme", 
        notas: [10, 9.8, 9.6], 
        cursos: [{ 
            nomeDoCurso: "Full Stack", 
            dataMatricula: new Date
        }], 
        faltas: 0 
    }, 
    { 
        nome: "Carlos", 
        notas: [], 
        cursos: [], 
        faltas: 0 
    }, 
    { 
        nome: "Lucca", 
        notas: [10, 9.8, 9.6], 
        cursos: [{ 
  
            nomeDoCurso: "UX", 
            dataMatricula: new Date
        }], 
        faltas: 0 
    }
];

// implementação



function adicionarAluno(nome){
    
    alunosDaEscola.push({nome: nome.trim(), notas: [], cursos: [], faltas: 0})
    let alunoNovo = alunosDaEscola.length - 1
    console.log('Aluno Adicionado ✔')
    console.log(alunosDaEscola[alunoNovo])
}
// adicionarAluno('Luis')

function listarAlunos(){
        for(let i = 0; i < alunosDaEscola.length; i++){
            if(alunosDaEscola[i].cursos == 0){
                console.log(`Aluno: ${alunosDaEscola[i].nome} \nNotas: ${alunosDaEscola[i].notas} \nCursos: Sem cursos \nFaltas: ${alunosDaEscola[i].faltas}\n`)
            } else {
                console.log(`Aluno: ${alunosDaEscola[i].nome} \nNotas: ${alunosDaEscola[i].notas} \nCursos: ${alunosDaEscola[i].cursos[0].nomeDoCurso}, Matrícula: ${alunosDaEscola[i].cursos[0].dataMatricula} \nFaltas: ${alunosDaEscola[i].faltas}\n`)
            }
        }
}

// listarAlunos()

function buscarAluno(nome){

    alunosDaEscola.filter(a => {
        if(a.nome.indexOf(nome) >= 0){
            console.log(a);
        } else {
            return false
        }
    })
}

//   buscarAluno('s')


function matricularAluno(aluno, curso){

    if(buscarAluno(aluno) == true){
        // let alunoComMaiusculo = alunosDaEscola[0].nome[0].toUpperCase() + alunosDaEscola[0].nome.slice(1)
        console.log(this)
        
    }

}
// matricularAluno('Carlos')

function aplicarFalta(aluno){
    
}
    
function aplicarNota(aluno){
    
}
  
function aprovarAluno(aluno){

}