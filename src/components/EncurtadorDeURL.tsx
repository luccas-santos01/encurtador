import Swal from 'sweetalert2';
import useShortenUrl from '../hooks/useShortenUrl';
import { useState, useEffect } from 'react';

const EncurtadorDeURL = () => {
  const [url, setUrl] = useState('');
  const { shortUrl, loading, error, shortenUrl, setShortUrl } = useShortenUrl();

  useEffect(() => {
    if (shortUrl) {
      setUrl(shortUrl);
    }
  }, [shortUrl]);

  const handleShorten = () => {
    shortenUrl(url);
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'URL copiada com sucesso!',
            showConfirmButton: false,
            timer: 1000
          });
        })
        .catch(() => Swal.fire({
          icon: 'error',
          title: 'Falha ao copiar a URL.',
          showConfirmButton: false,
          timer: 1000
        }));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Nada para copiar!',
        showConfirmButton: false,
        timer: 1000
      });
    }
  };

  const handleClear = () => {
    setUrl('');
    setShortUrl('');
  };

  return (
    <div className='p-5'>
      <h1 className='text-center text-primary'>Encurtador de URL</h1>
      <div className="container p-5">
        <div className='input-group-lg'>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id='url'
            type="text"
            className='form-control'
            placeholder='Digite a URL a ser encurtada'
          />
        </div>
        <div className="row justify-content-evenly p-5">
          <button
            className="col-2 btn btn-success"
            onClick={handleShorten}
            disabled={loading}
          >
            {loading ? 'Encurtando...' : 'Encurtar'}
          </button>
          <button
            className="col-2 btn btn-warning"
            onClick={handleCopy}
          >
            Copiar
          </button>
          <button
            className="col-2 btn btn-danger"
            onClick={handleClear}
          >
            Apagar
          </button>
        </div>
        {error && <p className="text-danger">Erro: {error}</p>}
      </div>
    </div>
  );
};

export default EncurtadorDeURL;