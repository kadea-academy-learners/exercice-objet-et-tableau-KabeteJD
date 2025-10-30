// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [];

/**
 * Inscrit un nouvel utilisateur dans la base de données.
 *
 * @param {string} nom
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @returns {object|string}
 */
function signUp(nom, email, password, confirmPassword) {
  const emailExiste = baseDeDonnees.some(user => user.email === email);
  if (emailExiste) {
    return "Erreur: cet email existe déjà";
  }

  if (password !== confirmPassword) {
    return "Erreur: les mots de passe ne correspondent pas";
  }

  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1,
    nom,
    email,
    password,
    estConnecte: false,
    estBloque: false,
  };

  baseDeDonnees.push(nouvelUtilisateur);
  return nouvelUtilisateur;
}

/**
 * Connecte un utilisateur existant.
 *
 * @param {string} email
 * @param {string} password
 * @returns {object|string}
 */
function login(email, password) {
  const utilisateur = baseDeDonnees.find(user => user.email === email);

  if (!utilisateur) {
    return "Erreur: utilisateur non trouvé";
  }

  if (utilisateur.password !== password) {
    return "Erreur: mot de passe incorrect";
  }

  if (utilisateur.estBloque) {
    return "Erreur: utilisateur bloqué";
  }

  utilisateur.estConnecte = true;
  return utilisateur;
}

// 🔍 Ligne d'affichage pour test manuel
const inscrit = signUp("Jean", "jean@email.com", "abc123", "abc123");
console.log("Inscription :", inscrit);

const connecté = login("jean@email.com", "abc123");
console.log("Connexion :", connecté);

module.exports = { baseDeDonnees, signUp, login };

