export const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1e1e2f', // Fundo escuro elegante
    fontFamily: "'Poppins', sans-serif", // Fonte moderna
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundColor: 'rgba(36, 36, 36, 0.9)', // Fundo com transparência
    padding: '30px',
    borderRadius: '15px',
    color: '#f5f5f5', // Texto claro
    fontFamily: "'Poppins', sans-serif",
    border: '1px solid rgba(255, 255, 255, 0.2)', // Borda sutil
    maxWidth: '600px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)', // Efeito de profundidade
    backdropFilter: 'blur(10px)', // Efeito de blur
  },
  exercicioContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundColor: 'rgba(85, 85, 85, 0.8)', // Fundo com transparência
    padding: '20px',
    borderRadius: '15px',
    color: '#ffffff',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
    width: '570px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)', // Sombra leve
    backdropFilter: 'blur(8px)', // Efeito de blur
  },
  titulo: (color: string) => ({
    fontSize: '28px',
    color,
    alignSelf: 'flex-start',
    fontWeight: '600', // Peso da fonte para destaque
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Sombra no texto
  }),
  inputQuantidade: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)', // Borda sutil
    fontSize: '16px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo translúcido
    color: '#ffffff',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)', // Efeito interno
  },
  listaNumeros: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    marginTop: '20px',
    gap: '10px', // Espaçamento entre os itens
  },
  numero: (backgroundColor: string) => ({
    backgroundColor,
    color: '#ffffff',
    padding: '15px',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Sombra para profundidade
    transition: 'transform 0.2s, box-shadow 0.2s', // Animação suave
    ':hover': {
      transform: 'scale(1.1)', // Efeito de zoom ao passar o mouse
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)', // Sombra mais intensa
    },
  }),
};