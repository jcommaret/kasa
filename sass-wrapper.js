import * as sass from 'sass';

// Créer un wrapper qui supprime les avertissements
const quietSass = {
  // Wrapper pour compileString
  compileString: (source, options = {}) => {
    const quietOptions = {
      ...options,
      logger: {
        warn() {}, // Supprime les avertissements
        debug() {} // Supprime les messages de débogage
      }
    };
    
    return sass.compileString(source, quietOptions);
  },
  
  // Wrapper pour compile
  compile: (path, options = {}) => {
    const quietOptions = {
      ...options,
      logger: {
        warn() {}, // Supprime les avertissements
        debug() {} // Supprime les messages de débogage
      }
    };
    
    return sass.compile(path, quietOptions);
  },
  
  // Wrapper pour compileAsync
  compileAsync: async (path, options = {}) => {
    const quietOptions = {
      ...options,
      logger: {
        warn() {}, // Supprime les avertissements
        debug() {} // Supprime les messages de débogage
      }
    };
    
    return await sass.compileAsync(path, quietOptions);
  }
};

export default quietSass; 