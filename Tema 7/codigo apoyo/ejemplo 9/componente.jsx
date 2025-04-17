function TarjetaActividad({ nombre, descripcion }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800">{nombre}</h3>
        <p className="text-sm text-gray-600 mt-1">{descripcion}</p>
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Reservar
        </button>
      </div>
    );
  }
export default TarjetaActividad;
  