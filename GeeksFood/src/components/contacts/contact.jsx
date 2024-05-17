
import "./contact.css"

export function Contact(){
    return(
        <>
        <section className="s1">
            <div>
                <p>Contact Us</p>
                <h1 className="t1">GET IN TOUCH WITH US</h1>
                <p className="text55">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
            </div>
            <footer className="footer65">
                <img className="img2" src="https://th.bing.com/th/id/OIP.IVycl9OZklx0aUuAvgn_2gHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                
                <div className="box1">
                <h3>Our Location</h3>
                <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                </div>
                    <img className="img22" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90U2u6KcG0gDv-IISwiUVBloH1oBtK4f8vQ&s" alt="" />
                <div className="box2">
                    <h3>Phone Number</h3>
                    <p>(+62)81 414 257 9980</p>
                </div>
                    <img className="img22" src="https://cdn.iconscout.com/icon/free/png-512/free-email-1767971-1502307.png?f=webp&w=256" alt="" />
                <div className="box3">
                    <h3>Email Address</h3>
                    <p>info@yourdomain.com</p>
                </div>
            </footer>
         <div className="inputtag">
        <input type="text" name="" id="I1" placeholder="Your Name" className="Ip" />
        <input type="text" name="" id="I1" placeholder="Your Email" />
        <input type="text" name="" id="I1" placeholder="Your Phone" />
        <textarea name="" id="I2" rows={12} cols={47} placeholder="Your Message"></textarea>
         </div>
        </section>
        </>
    )
}