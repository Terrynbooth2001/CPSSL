import { memo } from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div>
                <div className="footer-brand">CPSSL</div>
                <div className="footer-reg">Company No. 15509867 · Registered in England & Wales</div>
            </div>
            <div className="footer-copy">
                © {new Date().getFullYear()} Collishaw Paraplanning & Support Services Limited. All rights reserved.
            </div>
        </footer>
    )
}

export default memo(Footer)
