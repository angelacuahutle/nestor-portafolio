import React from 'react';
import '../scss/style.scss';
import Link from 'gatsby-link';

export default function Layout({children, header, hideNavigation, next}) {

  return <div className={'container-fluid'}>
    {hideNavigation ||
    <nav className="row pt-5">
      <div className="col px-2">
        <Link to={'/'} className={'pl-0 text-decoration-none'}>
          <img className='logoHeader' alt="logo" src={require('/src/images/logoNestor.png').default} />
        </Link>
      </div>
      {next && next && <div className="col-auto general-text mt-2">
        <Link to={next} className={'text-decoration-none general-text h5  px-3'}>Next →</Link>
      </div>}
    </nav>}
    {header && <header className="row ">
      <div className="col-12 col-md-6 py-3">
        {typeof header === 'string' ?
            <h1 className={'h1'}>{header}</h1> :
            header}
      </div>
    </header>}
    <main>{children}</main>
    <footer className={'row pt-5 pb-3'}>
      <div className="col-9">
        <div className="row">

          <div className="col-12">
            <a className="font-weight-bold general-text h5" href="mailto:nestor.osuna.2014@gmail.com">
               nestor.osuna.2014@gmail.com
            </a>
          </div>
          <div className="col-4 py-1 general-text h5">
            <a href="https://www.instagram.com/nestorosuna_">Instagram</a><br/>
          </div>
          <div className="col-4 py-1 general-text h5">
            <a href="https://www.linkedin.com/in/nestor-osuna-41332110">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="col align-self-center text-right">
        <a className={'btn btn-text px-3'} onClick={(e) => {
          e.preventDefault();

          window.scrollTo(0, 0);

        }}>
          <span className="text-white general-text h1">&#129145;</span>
        </a>
      </div>
    </footer>
  </div>;
}