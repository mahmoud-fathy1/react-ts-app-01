import { Trans } from 'react-i18next';
import './fixedIcons.css';
import { useState } from 'react';

function FixedIcons() {
    const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);

    const togglePhoneNumbers = () => {
        setShowPhoneNumbers(!showPhoneNumbers);
    };

    const goToTop = () => {
        // Replace with the logic to scroll to the top of the page
        window.scrollTo(0, 0);
    };

    return (
        <div className=" ">
            <div className="containIcon btn-top" onClick={goToTop}>
                <img className="w-100" src="/assets/home/Frame 50.webp" alt="" />
            </div>
            <div
                className={`containIcon btn-whatsapp whats ${showPhoneNumbers ? 'show-phone-numbers' : ''}`}
                onClick={togglePhoneNumbers}
            >
                {showPhoneNumbers && (
                    <div className="phone-numbers">
                        <a target="_blank" href="https://wa.me/+201201117955?text=Hello%20from%20your%20website">
                            <div className="eg d-flex align-items-center ">
                                <img className="" src="assets/fixedIcon/eg.webp" alt="" />
                                <p className="m-0">
                                    <Trans i18nKey="egypt"></Trans>{' '}
                                </p>
                            </div>
                        </a>
                        <a target="_blank" href="https://wa.me/966540038724?text=Hello%20from%20your%20website">
                            <div className="sa d-flex align-items-center ">
                                <img className="" src="assets/fixedIcon/sa.webp" alt="" />
                                <p className="m-0">
                                    <Trans i18nKey="saudi"></Trans>{' '}
                                </p>
                            </div>
                        </a>
                    </div>
                )}
                <div className="bg-danger"></div>
                <img className="w-100 whatsApp" src="/assets/home/whatsappimage.webp" alt="" />
            </div>
        </div>
    );
}

export default FixedIcons;
