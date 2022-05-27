import { useState, useEffect } from "react";
import { listarRegistroService } from "./services/RegistroService";
import moment from "moment";
function App() {
  const initValues = {
    id: "",
    nombre: "",
    tipo: "",
    monto: ""
  }
  const [data, setData] = useState(initValues);

  const handleChange = (e) => {
    console.log(e.target.name); // tipo, nombre o monto
    console.log(e.target.value);
    let { name, value } = e.target;
    let newData = {...data, [name]: value};
    setData(newData);
}
  const [listaData, setListaData] = useState([]);
  const listarRegistros = async () => {
    let res = await listarRegistroService();
    if(res.status===200){
      setListaData(res.data);
    }
  }
  useEffect(()=>{
    listarRegistros();
  });
  return (
    <div className="container">
      <h1>Monedero App</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>Nuevo Registro</h3>
        </div>
        <div className="col-md-8">
          <h3>Lista de Registros</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaData.map((ele)=>(
                <tr key={ele._id}>
                  <td>{ele.nombre}</td>
                  <td>{ele.tipo==='I'?'Ingreso':'Egreso'}</td>
                  <td>{ele.monto}</td>
                  <td>{moment(ele.fecha_registro).format('DD/MM/YYYY')}</td>
                  <td>
                    <button type="button" className="btn btn-info">Editar</button>
                    <button type="button" className="btn btn-danger">Eliminar</button>
                  </td>

                </tr>
              ))}

<form>
    <div className="mb-3">
        <label htmlFor="tipo" className="form-label">Tipo:</label>
        <select onChange={handleChange} value={data.tipo} name="tipo" className="form-control" id="tipo" required >
        <option value="">Seleccion el tipo de registro</option>
        <option value="I">Ingreso</option>
        <option value="E">Egreso</option>
        </select>
    </div>
    <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input type="text" onChange={handleChange} value={data.nombre} name="nombre" className="form-control" id="nombre" placeholder="Nombre del registro" required />
    </div>
    <div className="mb-3">
        <label htmlFor="monto" className="form-label">Monto:</label>
        <input type="number" onChange={handleChange} value={data.monto} name="monto" className="form-control" id="monto" placeholder="Monto" required />
    </div>
    <div className="mb-3">
        <button type="submit" className="btn btn-primary">Guardar</button>
    </div>
</form>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;