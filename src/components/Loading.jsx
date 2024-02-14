const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div className="col-md-4 text-center">
                    <h2 className="text-info">Cargando Productos</h2>
                </div>

                <div className="col-md-4 text-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
