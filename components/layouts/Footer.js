import EmailSubscribe from '../Footer/EmailSubscribe'
import FooterLast from '../Footer/FooterLast'
import FooterOptions from '../Footer/FooterOptions'

export default function Footer() {
    return (
        <div>
            <div className="data-container">
                <EmailSubscribe /> 
            </div>

            <FooterLast />
        </div>
    )
}
