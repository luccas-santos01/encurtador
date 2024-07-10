const EncurtadorDeURL = () => {
  return (
    <div className='p-5'>
      <div className="container p-5">
        <div className="form-floating">
          <input
            id='url'
            type="text"
            className='form-control'
            placeholder=' '
          />
          <label htmlFor="url" className="form-label">
            Digite a URL
          </label>
        </div>
        <div className="row justify-content-evenly p-5">
          <button className="col-2 btn btn-success">Encurtar</button>
          <button className="col-2 btn btn-warning">Copiar</button>
          <button className="col-2 btn btn-danger">Apagar</button>
        </div>
      </div>
    </div>
  );
};

export default EncurtadorDeURL;