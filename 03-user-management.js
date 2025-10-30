/**
 * Retourne les noms des utilisateurs qui sont administrateurs.
 *
 * @param {{ nom: string, age: number, estAdmin: boolean }[]} utilisateurs - Tableau d'objets utilisateur.
 * @returns {string[]} - Tableau contenant les noms des utilisateurs admin.
 */
function whoIsAdmin(utilisateurs) {
  return utilisateurs
    .filter(user => user.estAdmin === true)
    .map(user => user.nom);
}

// 🔍 Ligne d'affichage pour test manuel
const utilisateurs = [
  { nom: "Alice", age: 28, estAdmin: true },
  { nom: "Bob", age: 35, estAdmin: false },
  { nom: "Claire", age: 22, estAdmin: true },
];

console.log("Admins :", whoIsAdmin(utilisateurs));

module.exports = {
  whoIsAdmin,
}; 



