import '../style/banner.css'

const Banner = (props) => {
    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <p>{props.commentary}</p>
        </div>
    );
}
 
export default Banner;