import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCodeFork, faStar, faCode, faCodePullRequest, faCirclePlay, faSheetPlastic, faShieldHalved, faChartLine } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (
        <div className="header">
            <div className="header-top-section">
                <div className="left-header-section"> <span><img src='' /></span> <span className='fb'>facebook</span>/<span className='react'>react </span> <span className='public'>Public</span> </div>
                <div className="right-header-section">
                    <div className="right-header-section-tags"><FontAwesomeIcon icon={faEye} transform="left-5" /> Watch</div>
                    <div className="right-header-section-tags"><FontAwesomeIcon icon={faCodeFork} /> Fork</div>
                    <div className="right-header-section-tags"> <FontAwesomeIcon icon={faStar} />Star</div>
                </div>
            </div>

            <div className="header-bottom-section">
                <div className="header-bottom-section-tags"> <FontAwesomeIcon icon={faCode} transform="left-5" /> <span>Code</span></div>
                <div className="header-bottom-section-tags"> <FontAwesomeIcon icon={faCode} transform="left-5" />Issues</div>
                <div className="header-bottom-section-tags"><FontAwesomeIcon icon={faCodePullRequest} transform="left-5" />Pull Requests</div>
                <div className="header-bottom-section-tags"><FontAwesomeIcon icon={faCirclePlay} transform="left-5" />Actions</div>
                <div className="header-bottom-section-tags"> <FontAwesomeIcon icon={faSheetPlastic} transform="left-5" />Projects</div>
                <div className="header-bottom-section-tags"><FontAwesomeIcon icon={faShieldHalved} transform="left-5" />Security</div>
                <div className="header-bottom-section-tags"><FontAwesomeIcon icon={faChartLine} transform="left-5" />Insights</div>
            </div>
        </div>
    );
};

export default Header;
