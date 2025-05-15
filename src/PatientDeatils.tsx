import { useNavigate } from "react-router-dom";

const PatientDeatils = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#c4c4c4', height: "10vh", alignItems: 'center', padding: '0px 30px' }}>
                <div style={{ color: '#494949', cursor: 'pointer' }}>
                    <svg onClick={() => { navigate("/") }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#494949', fontFamily: 'Poppins', display: 'flex', alignItems: 'center', gap: "5px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>Doctor
                </div>
            </div>
            <div style={{ height: "80vh", padding: "0px 10px" }}>
                <div style={{ padding: "10px", marginTop: "0px" }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <h1 style={{ fontFamily: "Poppins" }}>Patient 1</h1>
                    <div style={{ fontSize: "14px", color: "#494949", fontFamily: "Poppins", display: "flex" }}>
                        <div style={{ width: "130px", fontFamily: "poppins" }}>Date of Birth</div>
                        <div style={{ width: "200px", fontFamily: "poppins" }}>: 19/09/2002</div>
                    </div>
                    <div style={{ fontSize: "14px", color: "#494949", fontFamily: "Poppins", display: "flex" }}>
                        <div style={{ width: "130px", fontFamily: "poppins" }}>Gender</div>
                        <div style={{ width: "200px", fontFamily: "poppins" }}>: Male</div>
                    </div>
                    <div style={{ fontSize: "14px", color: "#494949", fontFamily: "Poppins", display: "flex" }}>
                        <div style={{ width: "130px", fontFamily: "poppins" }}>Blood Group</div>
                        <div style={{ width: "200px", fontFamily: "poppins" }}>: +Ove</div>
                    </div>
                    <div style={{ fontSize: "14px", color: "#494949", fontFamily: "Poppins", display: "flex" }}>
                        <div style={{ width: "130px", fontFamily: "poppins" }}>Height</div>
                        <div style={{ width: "200px", fontFamily: "poppins" }}>: 180cm</div>
                    </div>
                    <div style={{ fontSize: "14px", color: "#494949", fontFamily: "Poppins", display: "flex" }}>
                        <div style={{ width: "130px", fontFamily: "poppins" }}>Weight</div>
                        <div style={{ width: "200px", fontFamily: "poppins" }}>: 85kg</div>
                    </div>
                    <br />
                    <a href="http://localhost:3000/localbasic?upload=true&files=https://raw.githubusercontent.com/gokulmzadroit/newFile/refs/heads/main/1.2.276.0.7230010.3.1.4.314966784.12766.1562182872.257051" target="_blank" style={{ width: "200px", fontSize: "14px", color: "#fff", fontFamily: "Poppins", backgroundColor: "#000", padding: "10px 20px", borderRadius: "10px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => { navigate('/patientdeatils') }}>View DICOM File</a>
                </div>
            </div>
        </div>
    )
}

export default PatientDeatils