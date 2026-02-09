import { StrictMode } from 'react' //es una herramienta de desarrollo, no afecta producción.
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'

/* “React, monta mi aplicación <App /> dentro del div root,
usa modo estricto para avisarme de errores mientras desarrollo. */
createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>,
)
