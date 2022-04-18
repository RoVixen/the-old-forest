import { MainBodyWrapper } from './common/main_body.js'

import "./css/old-f-post.css";

function LandingPage(){
    return <MainBodyWrapper
        left_section={<>
            <MarbleQuote/>
        </>}
    >
        <OldForestPost/>
    </MainBodyWrapper>;
}

function OldForestPost({}){
    return <div className="old-f-post">
        <div className="line"></div>
        <h6 className="text-left top">Some optional Text</h6>
        <p className="date top">Date: 27/1/2022</p>
        <div className="content">
            <h4 className="title">Title</h4>
            <h6 className="subtitle">Subtitle</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<br/></p>
        </div>
        <div className="line"></div>
    </div>;
}

function MarbleQuote({}){
    return <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous</footer>
    </blockquote>;
}

export default LandingPage;