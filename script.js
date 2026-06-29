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
  questionText: document.querySelector("#questionText"),
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
    questions: shuffle(bank).slice(0, totalQuestions),
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
  showScreen("game");
  renderQuestion();
  startTimer();
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("is-hidden"));
  screens[name].classList.remove("is-hidden");
}

function renderQuestion() {
  const current = getCurrentQuestion();
  game.answered = false;
  game.timeLeft = secondsPerQuestion;

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
  els.answersGrid.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;
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
}

function nextQuestion() {
  game.index += 1;
  if (game.index >= totalQuestions) {
    finishGame();
    return;
  }

  renderQuestion();
  startTimer();
}

function useFifty() {
  if (!game.lifelines.fifty || game.answered) return;
  game.lifelines.fifty = false;
  const current = getCurrentQuestion();
  const buttons = [...els.answersGrid.querySelectorAll(".answer-button")];
  const wrongIndexes = buttons
    .map((_, index) => index)
    .filter((index) => index !== current.correct)
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
  els.knowledgeText.textContent = getCurrentQuestion().hint;
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
