import React, {useEffect, useState} from 'react';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import AnimationHeader from "@/components/layouts/animationHeader";

const App = ({children}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <Header/>
            <AnimationHeader show={scrolled}/>
            {children}
            <Footer/>
        </div>
    );
};

export default App;