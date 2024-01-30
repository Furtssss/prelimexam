//WD-401 Mark Lemuel B. Furton
import React from 'react';
import './App.css'; 


function Questions(){
    return(
        <div>
            <h1>The Bible Quiz</h1>
            <p>The Bible consists of the Old and New Testaments.</p>
            <p>Moses led the Israelites out of Egypt.</p>
            <p>The Sermon on the Mount is found in the Book of Luke.</p>
        </div>
        
    )
}

function Answered(){
    return(
        <div>
            <h1>The Bible Quiz</h1>
            <p>The Bible consists of the Old and New Testaments.</p>
            <p className='greenText'>Correct!</p>
            <p>Moses led the Israelites out of Egypt.</p>
            <p className='greenText'>Correct!</p>
            <p>The Sermon on the Mount is found in the Book of Luke.</p>
            <p className='redText'>Incorrect!</p>
        </div>
    )

}


function Swtich(props) {
    const isSwitch = props.isSwitch;
    if (isSwitch) {
        return(
            <Answered/>

        );
    }
    return(
        <Questions/>
    );
    
}

export default function App() {
    return(
        <div>
            <Swtich
                isSwitch={true}
            />
        </div>
    );
}