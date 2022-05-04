import prof from '../images/photo.jpg'
import othello from '../images/othello.PNG'
import mongoStore from '../images/mongoose-store.PNG'
import fitness from '../images/fitness-application.PNG'

export default function Home() {
    return (
        <div className = 'container-fluid' id = 'top'>

            <div className = 'container mb-5'>

                <div className = 'media'>
                    <img className = 'align-self-center ml-4 rounded-circle' src = {prof} id = 'myImg' disabled/>
                    <div className = 'media-body ml-5 mt-5' id = 'about'>
                        <h1>Hello, I am Juman McGhee.</h1>
                        <h3>I am a full-stack developer located in the Carolinas. I am a recent graduate from Per Scholas' Software Engineering program as the Valedictorian of my cohort. I am currently looking for a position where I can pursue my passion for creating innovative and meaningful applications.</h3>
                    </div>
                </div>

            </div>

            <div className = 'container mb-5'>

                <h2 className = 'text-center mb-4' id = 'projects'>Projects</h2>
                <div className = 'row card-deck'>

                    <div className = 'card project'>
                        <div className = 'card-body'>
                            <div className = 'card-header bg-secondary text-light text-center rounded-top'>
                                <h3>Othello</h3>
                            </div>
                            <img className = 'card-img' src = {othello} />
                            <p className = 'card-text'>Recreated the Othello board game as a single page application using JavaScript, HTML, and CSS where the player plays against a computer opponent that randomly selects an appropriate move.</p>
                            <p className = 'card-text text-center'><a href = 'https://sapphire-coder.github.io/Othello/' target = '_blank'>Github Pages Deployment</a></p>
                            <p className = 'card-text text-center'><a href = 'https://github.com/Sapphire-Coder/Othello' target = '_blank'>Github Repository</a></p>
                        </div>
                    </div>

                    <div className = 'card project'>
                    <div className = 'card-body'>
                            <div className = 'card-header bg-secondary text-light text-center rounded-top'>
                                <h3>Back-end Store Application</h3>
                            </div>
                            <img className = 'card-img' src = {mongoStore} />
                            <p className = 'card-text'>Created a multi-page back-end CRUD application using MongoDB and React.js that follows the Models-Views-Controllers design pattern. The application uses RESTful routes to conditionally render and modify the database.</p>
                            <p className = 'card-text text-center'><a href = 'https://jm-mongoose-store.herokuapp.com/products' target = '_blank'>Heroku Deployment</a></p>
                            <p className = 'card-text text-center'><a href = 'https://github.com/Sapphire-Coder/mongoose-store' target = '_blank'>Github Repository</a></p>
                        </div>
                    </div>

                    <div className = 'card project'>
                    <div className = 'card-body'>
                            <div className = 'card-header bg-secondary text-light text-center rounded-top'>
                                <h3>Fitness/Workout Tracker</h3>
                            </div>
                            <img className = 'card-img' src = {fitness} />
                            <p className = 'card-text'>Created a full stack multi-page web application with the front-end using React.js, HTML, CSS, JavaScript, and Bootstrap, while the back-end uses MongoDB and Node.js to create an API that includes RESTful routes to send data to the front-end that can then be manipulated and modified via CRUD actions. Application also uses JWT for authentication and authorization.</p>
                            <p className = 'card-text text-center'><a href = 'https://jmfitness.herokuapp.com/login' target = '_blank'>Heroku Deployment</a></p>
                            <p className = 'card-text text-center'><a href = 'https://github.com/Sapphire-Coder/fitness-tracker' target = '_blank'>Github Repository</a></p>
                        </div>
                    </div>

                </div>

            </div>

            <div className = 'container mb-4' id = 'contact'>
                
                <h2 className = 'text-center'>Contact Information</h2>
                <div className = 'row justify-content-around' id = 'contactLinks'>
                    <h3 className = 'col-3 text-center'><a href = 'https://www.linkedin.com/in/86ab6021a/' target = '_blank'><span className = 'fab fa-linkedin fa-2x i'></span></a></h3>
                    <h3 className = 'col-3 text-center'><a href = 'https://github.com/Sapphire-Coder' target = '_blank'><span className = 'fab fa-github-square fa-2x i'></span></a></h3>
                    <h3 className = 'col-3 text-center'><a href = 'mailto: mcgheej12@gmail.com'><span className = 'fa fa-envelope-square fa-2x i'></span></a></h3>
                </div>
            </div>

        </div>
    )
}