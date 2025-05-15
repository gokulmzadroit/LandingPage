import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import PatientDeatils from './PatientDeatils';

function App() {

  // const [token, setToken] = useState(null);

  // const [data, setData] = useState({
  //   username: '',
  //   password: ''
  // });

  // const handleInputChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // }

  // const handleSubmit = async () => {
  //   axios.post("http://localhost:8081/api/v1/authentication/login", data).then((response: any) => {
  //     console.log(response.data.data.status);
  //     if (response.data.data.status === true) {
  //       // setToken(response.data.token);
  //       const payload = { "id": 35 }
  //       const encryptedData = encrypt(payload, response.data.data.token)
  //       axios.post("http://localhost:8083/api/v1/profile/scancenter/list-scan-center-audit", {
  //         encryptedData
  //       }, {
  //         headers: {
  //           Authorization: response.data.data.token,
  //           "Content-Type": "application/json",
  //         },
  //       }).then((response1: any) => {
  //         console.log(response1.data);
  //         const descryptedData = decrypt(response1.data.data, response1.data.token)
  //         // const descryptedData = decryptData(response1.data.data, response1.data.token, '2b103L8vQ3zy2LfepYP3d2U75OSmG0ZZhr81waRw1acoQsddweweweqweGyFH7eN8i3hu')
  //         console.log("Scan List", descryptedData);
  //       })

  //     }
  //     console.log(response.data);
  //     setToken(response.data.token);
  //   })
  // }

  return (
    <>
      {/* <h1>Login</h1>
      <input type="text" placeholder='username' name='username' onChange={(e: any) => { handleInputChange(e) }} />
      <input type="password" placeholder='password' name='password' onChange={(e: any) => { handleInputChange(e) }} />
      <button onClick={handleSubmit}>Submit</button>

      <br /><br />
      <h1>Data</h1> */}


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patientdeatils" element={<PatientDeatils />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
