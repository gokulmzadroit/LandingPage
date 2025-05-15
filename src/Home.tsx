import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#c4c4c4', height: "10vh", alignItems: 'center', padding: '0px 30px' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#494949', fontFamily: 'Poppins', display: 'flex', alignItems: 'center', gap: "5px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>Doctor
                </div>
            </div>
            <div style={{ height: "80vh", padding: "0px 10px" }}>
                <div style={{ padding: "10px", marginTop: "0px" }}>
                    <h1 style={{ fontFamily: "Poppins" }}>List of Patients</h1>
                    <div>
                        <div style={{ width: "180px", height: "180px", backgroundColor: "#e7e7e7", borderRadius: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flexDirection: "column", gap: "10px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#494949", fontFamily: "Poppins" }}>
                                    Patient 1
                                </div>
                                <div style={{ fontSize: "14px", color: "#fff", fontFamily: "Poppins", backgroundColor: "#000", padding: "10px 20px", borderRadius: "10px", cursor: "pointer" }} onClick={() => { navigate('/patientdeatils') }}>View Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home