/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

 /**
 * Crée un objet représentant un utilisateur.
 *
 * @param {string} nom - Le nom de l'utilisateur.
 * @param {any} age - L'âge de l'utilisateur (peut être un nombre ou une chaîne).
 * @param {any} estConnecté - Statut de connexion (peut être un booléen ou une chaîne).
 * @returns {{ nom: string, age: any, estConnecté: any }} - Objet utilisateur.
 */
function createUser(nom, age, estConnecté) {
  return {
    nom,
    age,
    estConnecté,
  };
}

module.exports = {
  createUser,
};


