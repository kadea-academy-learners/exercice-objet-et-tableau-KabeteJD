// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme paramètre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - Retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
  const somme = notes.reduce((acc, note) => acc + note, 0);
  const moyenne = somme / notes.length;
  return moyenne >= 10 ? "Réussi" : "Échoué";
}

// 🔍 Ligne d'affichage pour test manuel
const notes = [6, 8, 5, 10, 9];
console.log("Résultat :", averageNote(notes));

module.exports = {
  averageNote,
};
