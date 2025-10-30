/**
 * Génère un bulletin scolaire pour chaque élève.
 *
 * @param {{ nom: string, notes: number[] }[]} eleves - Tableau d'élèves avec leurs notes.
 * @returns {{ nom: string, moyenne: number, commentaire: string }[]} - Bulletins scolaires.
 */
function showStudentBulletin(eleves) {
  return eleves.map(eleve => {
    const notes = eleve.notes;
    const moyenne =
      notes.length > 0
        ? parseFloat((notes.reduce((acc, n) => acc + n, 0) / notes.length).toFixed(2))
        : 0;

    let commentaire = "À revoir";
    if (moyenne >= 16) commentaire = "Excellent";
    else if (moyenne >= 14) commentaire = "Très Bien";
    else if (moyenne >= 12) commentaire = "Bien";
    else if (moyenne >= 10) commentaire = "Passable";

    return {
      nom: eleve.nom,
      moyenne,
      commentaire,
    };
  });
}

// 🔍 Ligne d'affichage pour test manuel
const eleves = [
  { nom: "Alice", notes: [15, 17, 16] },
  { nom: "Bob", notes: [12, 13, 11] },
  { nom: "Claire", notes: [9, 8, 10] },
  { nom: "David", notes: [] },
];

console.log("Bulletins :", showStudentBulletin(eleves));

module.exports = {
  showStudentBulletin,
};
