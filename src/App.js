import TableRequest from "./pages/Table-Request/TableRequest";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/FormRequest/Form";
import FormUpdate from "./pages/FormUpdate/FormUpdate";
import Register from "./pages/Register/Register";
import FormDetail from "./pages/FormDetail/FormDetail";
import TableRequestAdmin from "./pages/Table-Request-Admin/TableRequestAdmin";
import TableRequestSAdmin from "./pages/Table-Request-SAdmin/TableRequestSAdmin";
import Grafik from "./pages/Grafik/Grafik";
import Protect from "./Protect";

function App() {
  // const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route element={<Protect />}>
          <Route path="/register" exact element={<Register />} />
          <Route path="/form" exact element={<Form />} />
          {/* <Route path="/form-update" exact element={<FormUpdate />} /> */}
          <Route path="/report" exact element={<TableRequest />} />
          <Route path="/report-admin" exact element={<TableRequestAdmin />} />
          <Route
            path="/report-superadmin"
            exact
            element={<TableRequestSAdmin />}
          />
          <Route path="/report/update/:id" exact element={<FormUpdate />} />
          <Route path="/report/detail/:id" exact element={<FormDetail />} />
          <Route path="/grafik" exact element={<Grafik />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
