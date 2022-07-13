import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import "../style/about.css"
import aboutImg from "../img/about_story.webp"

const About = () => {
    return (
        <div className="about">
            <Nav />
            <Banner title='ABOUT' />
            <div className='containerAbout'>
                <div className='aboutImg'>
                    <img src={aboutImg} alt='presentation about' />
                </div>
                <div>
                    <h1>Our story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero animi similique esse. Enim consectetur modi dolores perferendis minima eum veritatis voluptate repudiandae porro aspernatur, vero, repellat expedita pariatur quo? Alias exercitationem aliquid dignissimos aperiam ullam pariatur a modi minus. Iure eligendi dolorem porro, reprehenderit vel enim quidem modi consectetur deleniti quae ipsa, nobis, illo et in perspiciatis esse pariatur totam nesciunt assumenda quasi. Labore, quae sit quidem, laboriosam in tempora nihil reprehenderit dolorum libero quaerat provident tenetur earum optio error sunt distinctio mollitia fugiat dolores ad, accusantium non! Suscipit aliquid rerum odit sit maxime vero mollitia architecto cupiditate nam praesentium, consectetur similique doloremque error quibusdam voluptatibus corporis, officia eligendi dicta? Facilis, quos, a autem minus, qui odit eligendi quibusdam expedita ad odio quasi ducimus. Modi asperiores sint esse nobis sed recusandae eaque officia corrupti laboriosam eligendi nesciunt suscipit nemo ipsum quae placeat culpa explicabo voluptates est, reprehenderit aspernatur inventore.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;