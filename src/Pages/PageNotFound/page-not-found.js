import './page-not-found.css';

function PageNotFound() {
  return (
    <div className='flex flex-space-center h-100 align-item-center flex-column'>
      <h2 className='text-xlg color-primary'>404</h2>
      <p className='text-lg color-secondary'>Page Not Found :(</p>
    </div>
  );
}

export default PageNotFound;
