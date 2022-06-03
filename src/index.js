import "./set-public-path.js";
import "./load-css.js";
import "./custom.css";


function setupOpenMRS() {
    return {
      lifecycle: () => Promise.resolve(),
      activate: () => false,
    };
  }
  
  export { setupOpenMRS };