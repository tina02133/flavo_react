import NavBar from "../components/nav";

let ContactUs = function ContactUs(){
    return (
        <>
            <div className="contactUs-bg">
                {/* ==> navbar 컴포넌트 */}
                <NavBar/>
                <div className="content-box">
                   {/* ==> contactUs-title div */}
                   <div className="contactUs-input">
                        <h1>CONTACT US</h1>
                        <p>Feel free to contact us any time.We will get back to you as sonns as we can!</p>
                        <h3>Name</h3>
                        <input></input>
                        <h3>E-mail</h3>
                        <input></input>
                        <h3>Message</h3>
                        <input></input>
                        <br/><br/>
                        <button>Send!</button>
                    </div>   
                   <div className="contactUs-info">
                      <h1>INFO</h1>
                      <h4>E-mail</h4>
                      <p>itsflavo@naver.com</p>
                      <h4>Phone</h4>
                      <p>010-1111-4444</p>
                      <h4>Location</h4>
                      <p>Seoul, South Korea </p>
                      <h4>Time</h4>
                      <p>9:00~10:00 AM</p>
                   </div>
                </div>
            </div>  
        </>
    )
}
export default ContactUs;