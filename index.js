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
    this.contemAluno = false;
    let objAluno = {};

    alunosDaEscola.filter(a => {
        if(a.nome.indexOf(nome) >= 0){
            contemAluno = true;
            objAluno = a;
        }

    })

    if(contemAluno){
        console.log('Aluno encontrado!')
        console.log(objAluno)
        console.log('\n');
    } else {
        console.log('Aluno não encontrado!')
    }
    return objAluno;
}

// buscarAluno('Lucca')


function matricularAluno(aluno, curso){
    let novoCurso = {nomeDoCurso: curso, dataMatricula: new Date};
    if(this.contemAluno){
        if(aluno.cursos[0] == undefined){
            aluno.cursos.push(novoCurso)
            console.log(aluno)
        } else {
            console.log(`Aluno já cadastrado no curso de ${aluno.cursos[0].nomeDoCurso}`)
        }
    }
}
// matricularAluno(buscarAluno('Carlos'), 'Novo Curso')

function aplicarFalta(aluno){
    if(this.contemAluno){
        if(aluno.cursos[0] == undefined){
            console.log('O aluno não está matriculado em um curso.')
        } else {
            aluno.faltas++;
            console.log('Falta aplicada!')
            console.log(`Aluno nome: ${aluno.nome} \nfaltas: ${aluno.faltas}`)
        }
    }
}

// aplicarFalta(buscarAluno('Lucca'))
    
function aplicarNota(aluno){
    if(this.contemAluno){
        if(aluno.cursos[0] == undefined){
            console.log('O aluno não está matriculado em um curso.')
        } else {
            aluno.notas.push(10, 9.7, 8,4);
            console.log('Notas aplicadas!')
            console.log(aluno)
        }
    }
}

// aplicarNota(buscarAluno('Lucca'))
  
function aprovarAluno(aluno){
    if(this.contemAluno){
        if(aluno.cursos[0] == undefined){
            console.log('O aluno não está matriculado em um curso.')
        } else {
            // const resultado = aluno.notas.map(a => a).reduce((pilha, notas) => {
            //     const media = (pilha + notas)
            //     return media
            // })
            let media = aluno.notas.reduce((pilha, notas) => pilha + notas) / aluno.notas.length;
                if(aluno.faltas <= 3 && media >= 7){
                    console.log(`Aluno ${aluno.nome}: Aprovado!`);                   
                } else {
                    console.log(`Aluno ${aluno.nome}: Reprovado!`);
                }
            console.log(`Média: ${media.toFixed(2)}`);
        }
    }
}

aprovarAluno(buscarAluno('Lucca'))