import './ThankYou.styles.scss'; // Atualizar caminho se necessário

const ThankYou = () => {
  return (
    <div className='container'>
      <h1 className='title-thank-you'>Obrigado pela sua compra!</h1>
      <p className='text-thank-you'>Agradecemos por escolher nosso produto. Esperamos que atenda suas expectativas!</p>
      <p className='text-thank-you'>Acesse o seu dashboard da Hotmart clicando no botão abaixo</p>
      <a className='thank-you-button' href='https://consumer.hotmart.com'>Clique para acessar</a>
    </div>
  );
};

export default ThankYou;
