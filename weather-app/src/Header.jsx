export default function Header(){
    return (
            <>
              <div className="header">
                <div className="app-logo">
                    <img src="./src/assets/choco_cloud.jpg" alt="List Icon" className="logo" />
                    <h2 style={{fontFamily: "'Nothing You Could Do', cursive"}}>Choco <span style={{color:'#10a702'}}>Weather App</span></h2>
                </div>
                
                <div className="menu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#task">Task</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
              </div>
            </>
        )
}