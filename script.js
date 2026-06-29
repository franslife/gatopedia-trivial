const totalQuestions = 10;
const secondsPerQuestion = 22;

const bank = [
  {
    category: "Adopción",
    difficulty: "Fácil",
    question: "¿Qué deberías valorar antes de adoptar un gato?",
    answers: [
      "Tiempo, presupuesto, vivienda segura y compromiso a largo plazo",
      "Solo que el pelaje combine con la decoración",
      "Que no necesite visitas veterinarias",
      "Que pueda quedarse solo varios días sin atención"
    ],
    correct: 0,
    hint: "Piensa en responsabilidad diaria, salud y entorno.",
    explanation: "Adoptar implica años de cuidados: comida, arena, veterinario, juego, enriquecimiento, seguridad en ventanas y una rutina estable."
  },
  {
    category: "Veterinario",
    difficulty: "Fácil",
    question: "¿Qué forma parte de una revisión veterinaria responsable?",
    answers: [
      "Chip, vacunas, desparasitación, revisión general y consejo de esterilización",
      "Cortar los bigotes para que no se manchen",
      "Evitar revisiones si el gato parece tranquilo",
      "Cambiar de comida cada día para probar"
    ],
    correct: 0,
    hint: "La prevención evita sustos.",
    explanation: "Las revisiones periódicas ayudan a detectar enfermedades, controlar peso, actualizar vacunas y mantener desparasitación y documentación al día."
  },
  {
    category: "Convivencia",
    difficulty: "Media",
    question: "Si traes un gato nuevo a una casa donde ya viven otros gatos, ¿qué es lo más recomendable?",
    answers: [
      "Presentarlos lentamente, con habitación segura, intercambio de olores y supervisión",
      "Soltarlos juntos en el salón desde el primer minuto",
      "Quitar recursos para que aprendan a compartir",
      "Forzar que coman del mismo cuenco"
    ],
    correct: 0,
    hint: "El territorio y el olor importan muchísimo.",
    explanation: "Una integración gradual reduce estrés y peleas: primero separación, luego olor, después contacto visual controlado y finalmente encuentros breves."
  },
  {
    category: "Alimentación",
    difficulty: "Fácil",
    question: "¿Qué afirmación sobre alimentación felina es correcta?",
    answers: [
      "Los cambios de dieta deben hacerse de forma gradual",
      "El chocolate puede darse como premio pequeño",
      "No necesitan agua si comen pienso",
      "Las sobras humanas son siempre suficientes"
    ],
    correct: 0,
    hint: "El aparato digestivo agradece la transición.",
    explanation: "Cambiar de comida poco a poco evita diarreas y vómitos. El agua fresca siempre debe estar disponible, especialmente si el gato come pienso."
  },
  {
    category: "Razas",
    difficulty: "Media",
    question: "¿Qué gato suele necesitar más mantenimiento de pelaje por su manto largo?",
    answers: ["Persa", "Sphynx", "Siamés", "Abisinio"],
    correct: 0,
    hint: "Es conocido por su pelo largo y denso.",
    explanation: "El Persa suele requerir cepillado frecuente para evitar nudos. El Sphynx no tiene pelo largo, pero sí necesita cuidados de piel."
  },
  {
    category: "Cuidados",
    difficulty: "Fácil",
    question: "¿Qué recurso mejora el bienestar de un gato en casa?",
    answers: [
      "Rascadores firmes, zonas altas, juego diario y escondites seguros",
      "Castigos físicos cuando araña",
      "Cerrar todas las zonas de descanso",
      "No jugar nunca para que sea independiente"
    ],
    correct: 0,
    hint: "Necesitan expresar conductas naturales.",
    explanation: "Rascar, trepar, acechar y esconderse son conductas normales. El enriquecimiento ambiental previene aburrimiento y estrés."
  },
  {
    category: "Urgencias",
    difficulty: "Media",
    question: "¿Qué señal puede requerir atención veterinaria urgente?",
    answers: [
      "Dificultad para orinar, apatía intensa o dejar de comer",
      "Dormir una siesta larga al sol",
      "Amasar una manta",
      "Ronronear al descansar"
    ],
    correct: 0,
    hint: "Algunos síntomas no deben esperar.",
    explanation: "La dificultad para orinar puede ser una urgencia, sobre todo en machos. La falta de apetito y apatía marcada también requieren consulta."
  },
  {
    category: "Voluntariado",
    difficulty: "Fácil",
    question: "¿Cómo puedes ayudar a una protectora si no puedes adoptar?",
    answers: [
      "Acogida temporal, transporte, donaciones, difusión o limpieza",
      "Soltar gatos domésticos en la calle",
      "Comprar animales por impulso",
      "Ignorar colonias felinas controladas"
    ],
    correct: 0,
    hint: "Ayudar no siempre significa adoptar.",
    explanation: "Las protectoras necesitan muchas manos: casas de acogida, turnos de limpieza, traslados, fotografías, difusión y apoyo económico."
  },
  {
    category: "Seguridad",
    difficulty: "Media",
    question: "¿Qué medida es clave en una vivienda con gato?",
    answers: [
      "Proteger ventanas, balcones y terrazas con redes o cerramientos seguros",
      "Dejar ventanas abiertas porque siempre caen de pie",
      "Permitir acceso libre a plantas tóxicas",
      "Guardar productos de limpieza al alcance"
    ],
    correct: 0,
    hint: "El síndrome del gato paracaidista existe.",
    explanation: "Muchos accidentes ocurren por caídas desde ventanas o balcones. La seguridad física de la vivienda es parte de la adopción responsable."
  },
  {
    category: "Comportamiento",
    difficulty: "Difícil",
    question: "¿Qué suele significar que un gato orine fuera del arenero de repente?",
    answers: [
      "Puede haber dolor, estrés, problema urinario o rechazo del arenero",
      "Siempre lo hace por venganza",
      "Significa que ya no necesita arenero",
      "Solo ocurre porque quiere otro nombre"
    ],
    correct: 0,
    hint: "No lo interpretes como castigo hacia ti.",
    explanation: "Los cambios de eliminación pueden indicar cistitis, dolor, estrés, arena inadecuada o arenero sucio. Conviene revisar salud y ambiente."
  },
  {
    category: "Alimentación",
    difficulty: "Media",
    question: "¿Por qué la comida húmeda puede ser útil para muchos gatos?",
    answers: [
      "Aporta hidratación y puede ayudar a aumentar la ingesta de agua",
      "Sustituye todas las revisiones veterinarias",
      "Evita que necesiten arenero",
      "Hace innecesario controlar el peso"
    ],
    correct: 0,
    hint: "Los gatos no siempre beben suficiente.",
    explanation: "La comida húmeda puede mejorar la hidratación, aunque debe encajar con edad, salud, presupuesto y recomendaciones veterinarias."
  },
  {
    category: "Razas",
    difficulty: "Media",
    question: "¿Qué raza se reconoce a menudo por su cuerpo esbelto, voz intensa y carácter comunicativo?",
    answers: ["Siamés", "Persa", "Maine Coon", "British Shorthair"],
    correct: 0,
    hint: "Es una raza muy vocal.",
    explanation: "El Siamés suele ser sociable y comunicativo. Aun así, cada gato tiene su personalidad y no conviene decidir solo por estereotipos de raza."
  },
  {
    category: "Salud",
    difficulty: "Difícil",
    question: "¿Qué hábito ayuda a detectar problemas de salud antes?",
    answers: [
      "Observar peso, apetito, agua, arenero, pelo y cambios de conducta",
      "Esperar a que el gato maúlle muy fuerte",
      "Cambiar todos los productos cada semana",
      "Evitar manipularlo siempre"
    ],
    correct: 0,
    hint: "Los gatos ocultan bastante bien el malestar.",
    explanation: "Muchos gatos disimulan dolor. Registrar cambios de rutina, peso, sed, orina o apetito facilita consultar a tiempo."
  },
  {
    category: "Adopción",
    difficulty: "Media",
    question: "¿Qué ventaja puede tener adoptar un gato adulto?",
    answers: [
      "Suele tener el carácter más definido y puede adaptarse muy bien",
      "Nunca necesita jugar",
      "No requiere adaptación",
      "No necesita veterinario"
    ],
    correct: 0,
    hint: "No todo son cachorros.",
    explanation: "Los adultos son grandes candidatos: su personalidad suele estar más clara y muchas veces encajan mejor con hogares tranquilos."
  },
  {
    category: "Voluntariado",
    difficulty: "Difícil",
    question: "En una colonia felina controlada, ¿qué enfoque es más responsable?",
    answers: [
      "Captura, esterilización, retorno y seguimiento coordinado",
      "Retirar comederos sin plan",
      "Mover todos los gatos a zonas desconocidas",
      "Alimentar sin esterilizar nunca"
    ],
    correct: 0,
    hint: "Busca control ético y estable.",
    explanation: "El método CER ayuda a controlar poblaciones, mejorar bienestar y reducir camadas, siempre con coordinación local y seguimiento."
  },
  {
    category: "Veterinario",
    difficulty: "Media",
    question: "¿Por qué conviene pesar a un gato con cierta regularidad?",
    answers: [
      "Porque los cambios de peso pueden avisar de problemas de salud",
      "Porque todos los gatos deben pesar exactamente lo mismo",
      "Porque sustituye a las vacunas",
      "Porque impide que tire arena fuera del arenero"
    ],
    correct: 0,
    hint: "El peso cuenta una parte importante de la historia clínica.",
    explanation: "Una pérdida o subida de peso sin explicación puede relacionarse con dolor, estrés, diabetes, problemas renales, tiroides u otras enfermedades."
  },
  {
    category: "Veterinario",
    difficulty: "Difícil",
    question: "¿Qué dato es especialmente útil contar al veterinario ante un cambio de conducta?",
    answers: [
      "Desde cuándo ocurre, frecuencia, apetito, agua, arenero y cambios en casa",
      "Solo si el gato sigue siendo bonito",
      "El color favorito del tutor",
      "La marca de la televisión de casa"
    ],
    correct: 0,
    hint: "Cuanto más concreto sea el contexto, mejor.",
    explanation: "Los detalles sobre rutina, eliminación, apetito, sed y cambios ambientales ayudan a orientar el diagnóstico y decidir pruebas."
  },
  {
    category: "Convivencia",
    difficulty: "Media",
    question: "¿Qué recurso conviene duplicar cuando conviven varios gatos?",
    answers: [
      "Areneros, comederos, bebederos, camas y zonas de descanso",
      "El ruido de la casa",
      "Los castigos",
      "La obligación de dormir juntos"
    ],
    correct: 0,
    hint: "Compartir por obligación genera tensión.",
    explanation: "En hogares multigato suele recomendarse repartir recursos para evitar competencia y permitir que cada gato elija espacios seguros."
  },
  {
    category: "Convivencia",
    difficulty: "Difícil",
    question: "¿Qué señal puede indicar que dos gatos necesitan una presentación más lenta?",
    answers: [
      "Bufidos persistentes, persecuciones, bloqueo de recursos o escondites prolongados",
      "Dormir en habitaciones distintas algunas veces",
      "Beber agua en momentos diferentes",
      "Mirar por la ventana"
    ],
    correct: 0,
    hint: "Observa tensión sostenida, no preferencias normales.",
    explanation: "Si hay miedo, acoso o bloqueo de recursos, conviene volver atrás, separar espacios y reintroducir con sesiones más cortas y positivas."
  },
  {
    category: "Cuidados",
    difficulty: "Media",
    question: "¿Qué rutina ayuda a prevenir bolas de pelo en gatos de pelo largo?",
    answers: [
      "Cepillado frecuente adaptado al tipo de manto",
      "Quitar todos los rascadores",
      "No dejar que se acicalen",
      "Bañarlos con champú humano cada día"
    ],
    correct: 0,
    hint: "La prevención empieza con el manto.",
    explanation: "El cepillado reduce pelo muerto, nudos y bolas de pelo. La frecuencia depende del pelaje, edad y tolerancia del gato."
  },
  {
    category: "Cuidados",
    difficulty: "Fácil",
    question: "¿Qué debería tener una habitación segura para un gato recién llegado?",
    answers: [
      "Arenero, agua, comida, escondite, cama y tranquilidad",
      "Acceso inmediato a toda la casa sin refugio",
      "Música muy alta para que se acostumbre",
      "Solo una caja vacía sin recursos"
    ],
    correct: 0,
    hint: "Menos estímulos al principio suele ayudar.",
    explanation: "Una habitación base permite que el gato explore poco a poco, coma, use el arenero y gane confianza sin sentirse invadido."
  },
  {
    category: "Urgencias",
    difficulty: "Difícil",
    question: "¿Por qué la dificultad para orinar puede ser grave en un gato macho?",
    answers: [
      "Porque una obstrucción urinaria puede poner en riesgo su vida",
      "Porque significa que ya no necesita agua",
      "Porque siempre se arregla cambiando la arena",
      "Porque solo quiere llamar la atención"
    ],
    correct: 0,
    hint: "Si no puede orinar, no esperes.",
    explanation: "Una obstrucción urinaria puede avanzar rápido y requiere atención veterinaria urgente, especialmente si hay dolor, intentos repetidos o decaimiento."
  },
  {
    category: "Urgencias",
    difficulty: "Media",
    question: "¿Qué conviene hacer si un gato deja de comer durante un día completo?",
    answers: [
      "Consultar con un veterinario, sobre todo si hay otros síntomas",
      "Esperar siempre una semana",
      "Forzarle chocolate para darle energía",
      "Quitarle el agua"
    ],
    correct: 0,
    hint: "En gatos, no comer no es un detalle menor.",
    explanation: "La falta de apetito puede tener muchas causas y en gatos puede complicarse. Si se prolonga o hay apatía, vómitos o dolor, hay que consultar."
  },
  {
    category: "Seguridad",
    difficulty: "Fácil",
    question: "¿Qué objeto doméstico puede ser peligroso para un gato curioso?",
    answers: [
      "Cordones, hilos, gomas, productos de limpieza y algunas plantas",
      "Un rascador estable",
      "Una fuente de agua limpia",
      "Una cama lavable"
    ],
    correct: 0,
    hint: "Lo pequeño o tóxico puede acabar en la boca.",
    explanation: "Hilos, gomas y cuerdas pueden causar problemas digestivos si se ingieren. Productos químicos y plantas tóxicas deben quedar fuera de alcance."
  },
  {
    category: "Seguridad",
    difficulty: "Media",
    question: "¿Qué es una buena práctica con el transportín?",
    answers: [
      "Dejarlo accesible en casa para que no solo aparezca en visitas al veterinario",
      "Sacarlo solo cuando toca una experiencia estresante",
      "Usarlo como castigo",
      "Elegir uno sin ventilación"
    ],
    correct: 0,
    hint: "Que no sea sinónimo de susto.",
    explanation: "Si el transportín forma parte del entorno, con manta y premios, el gato puede aceptarlo mejor y viajar con menos estrés."
  },
  {
    category: "Comportamiento",
    difficulty: "Media",
    question: "¿Qué puede significar que un gato amase una manta con las patas?",
    answers: [
      "Suele ser una conducta de confort o relajación",
      "Siempre indica agresividad",
      "Significa que odia la manta",
      "Es una urgencia veterinaria por sí sola"
    ],
    correct: 0,
    hint: "Muchas conductas vienen de etapas tempranas.",
    explanation: "Amasar suele asociarse a bienestar, vínculo o relajación. Hay que interpretarlo junto al resto del lenguaje corporal."
  },
  {
    category: "Comportamiento",
    difficulty: "Difícil",
    question: "¿Qué enfoque suele funcionar mejor ante arañazos en muebles?",
    answers: [
      "Ofrecer rascadores atractivos y redirigir la conducta",
      "Castigar al gato después de horas",
      "Cortarle los bigotes",
      "Eliminar todo el juego"
    ],
    correct: 0,
    hint: "Rascar es normal; la clave es dónde.",
    explanation: "Rascar sirve para marcar, estirar y mantener uñas. Rascadores firmes, bien ubicados y refuerzo positivo son más eficaces que castigos."
  },
  {
    category: "Salud",
    difficulty: "Media",
    question: "¿Qué señal dental merece revisión veterinaria?",
    answers: [
      "Mal aliento persistente, encías rojas, dolor al comer o sarro evidente",
      "Dormir en una caja",
      "Jugar con una pelota",
      "Ronronear al recibir caricias"
    ],
    correct: 0,
    hint: "La boca también duele.",
    explanation: "Los problemas dentales pueden causar dolor, infección y pérdida de apetito. Revisar la boca forma parte del cuidado preventivo."
  },
  {
    category: "Salud",
    difficulty: "Difícil",
    question: "¿Por qué un gato mayor suele necesitar controles más frecuentes?",
    answers: [
      "Porque aumenta el riesgo de problemas renales, tiroideos, dentales o articulares",
      "Porque deja de necesitar comida equilibrada",
      "Porque ya no puede tener dolor",
      "Porque no hace falta observar cambios"
    ],
    correct: 0,
    hint: "La edad cambia las prioridades.",
    explanation: "En gatos senior, analíticas, control de peso, presión arterial y revisión dental ayudan a detectar enfermedades comunes de forma temprana."
  },
  {
    category: "Adopción",
    difficulty: "Difícil",
    question: "¿Qué pregunta deberías hacerte antes de adoptar un segundo gato?",
    answers: [
      "Si tengo espacio, recursos, presupuesto y plan de presentación gradual",
      "Si el primer gato puede decidirlo en cinco minutos",
      "Si pueden compartir todo desde el primer día",
      "Si así jugaré menos con ellos"
    ],
    correct: 0,
    hint: "Dos gatos no siempre son el doble de fácil.",
    explanation: "Adoptar otro gato requiere recursos duplicados, paciencia, compatibilidad probable y un plan para proteger el bienestar de ambos."
  },
  {
    category: "Alimentación",
    difficulty: "Difícil",
    question: "¿Qué debe hacerse si un gato necesita una dieta veterinaria?",
    answers: [
      "Seguir la pauta del veterinario y evitar mezclarla sin consultar",
      "Combinarla con cualquier snack para que sea más divertida",
      "Suspenderla cuando el gato parezca aburrido",
      "Darla solo una vez al mes"
    ],
    correct: 0,
    hint: "Algunas dietas son parte del tratamiento.",
    explanation: "Las dietas veterinarias se usan para problemas concretos. Mezclarlas o cambiarlas sin control puede reducir su eficacia."
  },
  {
    category: "Razas",
    difficulty: "Difícil",
    question: "¿Qué conviene recordar al elegir por raza?",
    answers: [
      "La raza orienta, pero personalidad, salud y necesidades individuales importan más",
      "Todos los gatos de una raza son idénticos",
      "La raza elimina la necesidad de adaptación",
      "Los mestizos no pueden ser buenos compañeros"
    ],
    correct: 0,
    hint: "No conviertas una tendencia en una regla absoluta.",
    explanation: "Las razas tienen tendencias, pero cada gato es un individuo. Temperamento, salud, historia y entorno pesan mucho en la convivencia."
  },
  {
    category: "Voluntariado",
    difficulty: "Media",
    question: "¿Qué habilidad puede ser muy útil en voluntariado felino además de limpiar o alimentar?",
    answers: [
      "Hacer buenas fotos, escribir descripciones y difundir adopciones",
      "Prometer adopciones sin conocer al animal",
      "Manipular gatos asustados sin formación",
      "Ignorar los protocolos del refugio"
    ],
    correct: 0,
    hint: "La visibilidad salva oportunidades.",
    explanation: "Buenas fotos, textos honestos y difusión responsable ayudan a que los gatos adecuados lleguen a familias compatibles."
  }
];

const screens = {
  intro: document.querySelector("#introScreen"),
  game: document.querySelector("#gameScreen"),
  result: document.querySelector("#resultScreen")
};

const els = {
  startButton: document.querySelector("#startButton"),
  restartButton: document.querySelector("#restartButton"),
  playAgainButton: document.querySelector("#playAgainButton"),
  homeButton: document.querySelector("#homeButton"),
  scoreValue: document.querySelector("#scoreValue"),
  streakValue: document.querySelector("#streakValue"),
  questionIndex: document.querySelector("#questionIndex"),
  timeValue: document.querySelector("#timeValue"),
  timerBar: document.querySelector("#timerBar"),
  categoryLabel: document.querySelector("#categoryLabel"),
  difficultyLabel: document.querySelector("#difficultyLabel"),
  routeTitle: document.querySelector("#routeTitle"),
  questionText: document.querySelector("#questionText"),
  inlineHint: document.querySelector("#inlineHint"),
  answersGrid: document.querySelector("#answersGrid"),
  categoryTrack: document.querySelector("#categoryTrack"),
  knowledgeText: document.querySelector("#knowledgeText"),
  feedbackBox: document.querySelector("#feedbackBox"),
  nextButton: document.querySelector("#nextButton"),
  fiftyButton: document.querySelector("#fiftyButton"),
  hintButton: document.querySelector("#hintButton"),
  timeButton: document.querySelector("#timeButton"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  finalScore: document.querySelector("#finalScore"),
  finalCorrect: document.querySelector("#finalCorrect"),
  finalBestStreak: document.querySelector("#finalBestStreak"),
  reviewList: document.querySelector("#reviewList")
};

let game = createGame();
let timerId = null;

els.startButton.addEventListener("click", startGame);
els.restartButton.addEventListener("click", startGame);
els.playAgainButton.addEventListener("click", startGame);
els.homeButton.addEventListener("click", () => {
  clearTimer();
  showScreen("intro");
});
els.nextButton.addEventListener("click", nextQuestion);
els.fiftyButton.addEventListener("click", useFifty);
els.hintButton.addEventListener("click", useHint);
els.timeButton.addEventListener("click", useExtraTime);

function createGame() {
  return {
    questions: buildQuestionSet(),
    index: 0,
    score: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    timeLeft: secondsPerQuestion,
    answered: false,
    lifelines: {
      fifty: true,
      hint: true,
      time: true
    },
    review: []
  };
}

function startGame() {
  clearTimer();
  game = createGame();
  screens.game.classList.remove("feedback-open");
  showScreen("game");
  renderQuestion();
  startTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("is-hidden"));
  screens[name].classList.remove("is-hidden");
}

function renderQuestion() {
  const current = getCurrentQuestion();
  game.answered = false;
  game.timeLeft = secondsPerQuestion;
  screens.game.classList.remove("feedback-open");

  els.scoreValue.textContent = format(game.score);
  els.streakValue.textContent = game.streak;
  els.questionIndex.textContent = `${game.index + 1}/${totalQuestions}`;
  els.categoryLabel.textContent = current.category;
  els.difficultyLabel.textContent = current.difficulty;
  els.questionText.textContent = current.question;
  els.knowledgeText.textContent = "Elige una respuesta. Después verás una ficha práctica con la explicación.";
  els.feedbackBox.className = "feedback-box is-waiting";
  els.feedbackBox.textContent = "Esperando respuesta";
  els.nextButton.classList.add("is-hidden");
  els.inlineHint.classList.add("is-hidden");
  els.inlineHint.textContent = "";
  els.answersGrid.innerHTML = "";

  current.shuffledAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => answerQuestion(index));
    els.answersGrid.append(button);
  });

  els.fiftyButton.disabled = !game.lifelines.fifty;
  els.hintButton.disabled = !game.lifelines.hint;
  els.timeButton.disabled = !game.lifelines.time;

  renderTrack();
  updateTimerUi();
}

function renderTrack() {
  els.categoryTrack.innerHTML = "";
  const current = getCurrentQuestion();
  els.routeTitle.textContent = `Ruta gatuna · ${game.index + 1}/${totalQuestions} · ${current.category}`;
  game.questions.forEach((question, index) => {
    const item = document.createElement("div");
    item.className = "track-item";
    if (index === game.index) item.classList.add("is-active");
    if (index < game.index) item.classList.add("is-done");
    item.innerHTML = `
      <span class="track-dot">${index + 1}</span>
      <span class="track-copy">
        <strong>${question.category}</strong>
        <span>${question.difficulty}</span>
      </span>
    `;
    els.categoryTrack.append(item);
  });
}

function startTimer() {
  clearTimer();
  timerId = window.setInterval(() => {
    if (game.answered) return;
    game.timeLeft -= 1;
    updateTimerUi();
    if (game.timeLeft <= 0) {
      answerQuestion(-1);
    }
  }, 1000);
}

function clearTimer() {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function updateTimerUi() {
  els.timeValue.textContent = Math.max(0, game.timeLeft);
  const percent = Math.max(0, (game.timeLeft / secondsPerQuestion) * 100);
  els.timerBar.style.width = `${percent}%`;
}

function answerQuestion(selectedIndex) {
  if (game.answered) return;
  game.answered = true;
  clearTimer();

  const current = getCurrentQuestion();
  const buttons = [...els.answersGrid.querySelectorAll(".answer-button")];
  const wasCorrect = selectedIndex === current.correct;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.correct) button.classList.add("is-correct");
    if (index === selectedIndex && !wasCorrect) button.classList.add("is-wrong");
  });

  if (wasCorrect) {
    const speedBonus = Math.max(0, game.timeLeft) * 3;
    const streakBonus = game.streak * 25;
    const difficultyBonus = current.difficulty === "Difícil" ? 140 : current.difficulty === "Media" ? 90 : 60;
    const gained = difficultyBonus + speedBonus + streakBonus;
    game.score += gained;
    game.correct += 1;
    game.streak += 1;
    game.bestStreak = Math.max(game.bestStreak, game.streak);
    els.feedbackBox.className = "feedback-box is-good";
    els.feedbackBox.textContent = `Correcto. Has ganado ${gained} puntos.`;
  } else {
    game.streak = 0;
    els.feedbackBox.className = "feedback-box is-bad";
    els.feedbackBox.textContent = selectedIndex === -1 ? "Tiempo agotado." : "Respuesta incorrecta.";
  }

  game.review.push({
    category: current.category,
    question: current.question,
    correct: wasCorrect,
    explanation: current.explanation
  });

  els.scoreValue.textContent = format(game.score);
  els.streakValue.textContent = game.streak;
  els.knowledgeText.textContent = current.explanation;
  els.nextButton.textContent = game.index === totalQuestions - 1 ? "Ver resultado" : "Siguiente pregunta";
  els.nextButton.classList.remove("is-hidden");
  screens.game.classList.add("feedback-open");
}

function nextQuestion() {
  game.index += 1;
  if (game.index >= totalQuestions) {
    finishGame();
    return;
  }

  renderQuestion();
  startTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function useFifty() {
  if (!game.lifelines.fifty || game.answered) return;
  game.lifelines.fifty = false;
  const current = getCurrentQuestion();
  const buttons = [...els.answersGrid.querySelectorAll(".answer-button")];
  const wrongIndexes = shuffle(buttons
    .map((_, index) => index)
    .filter((index) => index !== current.correct))
    .slice(0, 2);

  wrongIndexes.forEach((index) => {
    buttons[index].classList.add("is-hidden-answer");
    buttons[index].disabled = true;
  });
  els.fiftyButton.disabled = true;
}

function useHint() {
  if (!game.lifelines.hint || game.answered) return;
  game.lifelines.hint = false;
  const hint = getCurrentQuestion().hint;
  els.knowledgeText.textContent = hint;
  els.inlineHint.textContent = `Pista: ${hint}`;
  els.inlineHint.classList.remove("is-hidden");
  els.feedbackBox.className = "feedback-box is-waiting";
  els.feedbackBox.textContent = "Pista activada";
  els.hintButton.disabled = true;
}

function useExtraTime() {
  if (!game.lifelines.time || game.answered) return;
  game.lifelines.time = false;
  game.timeLeft = Math.min(secondsPerQuestion + 10, game.timeLeft + 10);
  updateTimerUi();
  els.timeButton.disabled = true;
}

function finishGame() {
  clearTimer();
  showScreen("result");

  const rank = getRank();
  els.resultTitle.textContent = rank.title;
  els.resultSummary.textContent = rank.summary;
  els.finalScore.textContent = format(game.score);
  els.finalCorrect.textContent = `${game.correct}/${totalQuestions}`;
  els.finalBestStreak.textContent = game.bestStreak;

  els.reviewList.innerHTML = "";
  game.review.forEach((item) => {
    const review = document.createElement("article");
    review.className = "review-item";
    review.innerHTML = `
      <strong>${item.correct ? "Acierto" : "Repaso"}: ${item.category}</strong>
      <span>${item.explanation}</span>
    `;
    els.reviewList.append(review);
  });
}

function getRank() {
  const ratio = game.correct / totalQuestions;
  if (ratio >= 0.9) {
    return {
      title: "Especialista felino",
      summary: "Has demostrado criterio de cuidador experto: salud, convivencia, adopción y rescate están bajo control."
    };
  }
  if (ratio >= 0.7) {
    return {
      title: "Adoptante muy preparado",
      summary: "Tienes una base sólida y sabes tomar decisiones responsables en la mayoría de situaciones gatunas."
    };
  }
  if (ratio >= 0.45) {
    return {
      title: "Cuidador en formación",
      summary: "Vas por buen camino. Revisa las fichas del final y repite la partida para reforzar conceptos."
    };
  }
  return {
    title: "Explorador gatuno",
    summary: "El mundo felino tiene más capas de lo que parece. Empieza por adopción responsable, veterinario y seguridad en casa."
  };
}

function getCurrentQuestion() {
  return game.questions[game.index];
}

function buildQuestionSet() {
  const byCategory = bank.reduce((groups, question) => {
    if (!groups.has(question.category)) groups.set(question.category, []);
    groups.get(question.category).push(question);
    return groups;
  }, new Map());
  const categories = shuffle([...byCategory.keys()]);
  const selected = [];
  let round = 0;

  while (selected.length < totalQuestions && selected.length < bank.length) {
    const category = categories[round % categories.length];
    const available = shuffle(byCategory.get(category)).filter((question) => !selected.includes(question));
    if (available.length > 0) {
      selected.push(available[0]);
    }
    round += 1;
  }

  return shuffle(selected).slice(0, totalQuestions).map(prepareQuestion);
}

function prepareQuestion(question) {
  const shuffledAnswers = shuffle(question.answers.map((text, index) => ({
    text,
    originalIndex: index
  })));
  const correct = shuffledAnswers.findIndex((answer) => answer.originalIndex === question.correct);

  return {
    ...question,
    shuffledAnswers,
    correct
  };
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function format(value) {
  return new Intl.NumberFormat("es-ES").format(value);
}

if (window.location.hash === "#jugar") {
  startGame();
}
