const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurnMorning = (lesson2, turn, value) => {
  keyInsert = turn;
  lesson2[keyInsert] = value;
}
addTurnMorning(lesson2, 'turno', 'manhã');
console.log(lesson2);