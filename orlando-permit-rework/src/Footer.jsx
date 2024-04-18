import './Footer.css'

function Footer(){

    return(
        <div className="Footer-Div">
            <footer>
                <div className='footer-flex'>
                    <div>   
                    <h3 className="footer-title">City Hall Info</h3>
                    <p><strong>City Hall</strong></p>
                    <p>400 South Orange Avenue<br></br>
                    Orlando, Florida 32801<br></br>
                    407.246.2121</p>
                    <p>Monday&nbsp;-&nbsp;Friday&nbsp;&nbsp;8 a.m. to 5 p.m.<br></br>
                    <a href="https://www.orlando.gov/Directory/City-Buildings-Centers/City-Hall/Observed-Holidays" target="_self">Observed holidays</a></p>
                    <p><a href="https://gis.orlando.gov/orlandoinformationlocator/" target="_blank" aria-describedby="new-window-0" className="opens-in-new-tab">Information Locator</a></p>
                    <a href="https://www.orlando.gov/Our-Government/News-and-Information" target="_self">News and Information</a>
                    </div>
                    <div>
                    <h3 className="footer-contact">Contact Us</h3>
                    <p><a href="https://www.orlando.gov/Our-Government/Contact-Us">City Directory</a></p>
                    <p><a href="https://www.orlando.gov/Our-Government/Get-Involved/City-Newsletter">Subscribe to City News</a></p>
                    <p><a href="http://www.downtownorlando.com" target="_blank">Downtownorlando.com</a></p>
                    </div>
                    <div>
                    <h3 className="footer-links">Follow Us!</h3>
                    <p><a href="https://www.facebook.com/cityoforlando" target="_blank">Facebook</a></p>
                    <p><a href="https://www.youtube.com/cityoforlando" target="_blank">YouTube</a></p>
                    <p><a href="https://www.instagram.com/thecitybeautiful" target="_blank">Instagram</a></p>
                    <p><a href="https://twitter.com/citybeautiful" target="_blank">X</a></p>
                    <p><a href="https://www.linkedin.com/company/city-of-orlando/" target="_blank">LinkedIn</a></p>
                    <p><a href="https://www.flickr.com/photos/cityoforlando/" target="_blank">Flickr</a></p>
                    <p><a href="https://nextdoor.com/agency-detail/fl/orlando/city-of-orlando-office-of-communications-neighborhood-relations/" target="_blank">Nextdoor</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer