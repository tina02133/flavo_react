import NavBar from "../components/nav";

let OurStory = function OurStory(){
    return (
        <>
            <div className="ourStory-bg">
                {/* ==> navbar 컴포넌트 */}
                <NavBar/>
                {/* countent div */}
                <div className="content-box">
                    {/* ==> ourStory-title div */}
                    <div className="ourStory-title">
                        <div>
                            <img className='flower-box2' src={require('../img/flower.png')}></img>
                        </div>
                            <h1>OUR<br/> STORY</h1>
                    </div>    
                    {/* ==> ourStory-text div */}
                    <div className="ourStory-text">
                        <p><span>Pharetra diam sit amet nisl.</span> Sodales ut etiam sit amet nisl purus in. Tristique risus nec feugiat in. Auctor elit sed vulputate mi sit amet mauris commodo quis. Aliquet lectus proin nibh nisl. Nunc scelerisque viverra mauris in aliquam sem. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Massa tincidunt dui ut ornare lectus sit amet est. Donec ultrices tincidunt arcu non. Accumsan in nisl nisi scelerisque eu. Odio aenean sed adipiscing diam donec adipiscing tristique. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Maecenas sed enim ut sem viverra aliquet eget sit. Cras sed felis eget velit aliquet. Posuere urna nec tincidunt praesent semper feugiat. Iaculis at erat pellentesque adipiscing. </p>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default OurStory;