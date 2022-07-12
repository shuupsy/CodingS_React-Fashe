import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../style/contact.css'

const Contact = () => {
    return (
        <>
            <Nav />
            <div className='contact'>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2598880534547!2d-74.00238178521695!3d40.756308342841706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b35df44d01%3A0x26a19cd5abdd89a1!2sHudson%20Blvd%20W%2C%20New%20York%2C%20NY%2010018%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sbe!4v1657549221658!5m2!1sfr!2sbe" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                </div>
                    <form>
                    <h2>Send us your message</h2>
                        <input type='text' placeholder='Full Name'/>
                        <input type='text' placeholder='Phone Number'/>
                        <input type='text' placeholder='Email Address'/>
                        <textarea placeholder='Message'></textarea>
                        <button>SEND</button>
                    </form>

            </div>
            <Footer />
        </>
     );
}
 
export default Contact;