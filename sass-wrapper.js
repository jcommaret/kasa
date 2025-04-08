const sass = require('sass');

// Sauvegarder la méthode originale
const originalCompileString = sass.compileString;

// Remplacer la méthode originale par une version personnalisée
sass.compileString = function(source, options = {}) {
  // Désactiver les avertissements
  const ourOptions = {
    ...options,
    logger: {
      warn() {}, // Ne rien faire pour les avertissements
      debug() {} // Ne rien faire pour les messages de débogage
    }
  };
  
  // Appeler la méthode originale avec nos options
  return originalCompileString(source, ourOptions);
};

module.exports = sass; 