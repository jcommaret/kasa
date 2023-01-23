import { Link } from 'react-router-dom';

import './index.scss';

export default function ErrorPage() {
  return (
    <div className="NotFound">
      <div className="NotFound__content">
        <h1 className="NotFound__title">404</h1>
        <p className="NotFound__text">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='NotFound__Link'>Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}