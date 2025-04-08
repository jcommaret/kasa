/* 
 * Configuration Sass pour Vite
 * Ces options désactivent les avertissements de l'API Legacy JS
 */

export default {
  logger: {
    warn() {}, // Supprime les avertissements
    debug() {} // Supprime les messages de débogage
  }
}; 