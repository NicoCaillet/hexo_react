import Typewriter from 'typewriter-effect';
import './index.css'
function Title() {
    return (
        <div className="tp_container">
            <Typewriter
                options={{
                    strings: ['Beyond website uptime monitoring', 'Beyond page speed checking', 'Beyond error & broken page alerts',
                        'Beyond user experience optimisation', 'Beyond technical SEO audits', 'Beyond vulnerability & security scanning '],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}

export default Title;
