import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header, ButtonsContrainer} from "./components/header"
import {TableBody, TableHeader} from "./components/table"
function App() {
  
  return (
    <div style={{ marginTop: 15, marginLeft: 50, marginRight: 50 }}>
      <div className="row g-2">
        <Header />
      </div>
      
      <div className="row" style={{ marginTop: 15 }}>
        <ButtonsContrainer />
      </div>

      <div className="row g-2" style={{ marginTop: 5, }}>


        <div className="col-12">
          <div className="p-3 border bg-light">Log File Details</div>
          <br />
          <div className="table-responsive table-style">
            <table className="table table-striped" >
              <TableHeader />
              <TableBody />
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
