import { Chip } from "../Chip";

export function FullstackTrail(){
    return (
        <div className="fullstack-trail">
            <div className="container">
                <Chip label="Trilha" />
                <h1 className="section-title">Nossa trilha fullstack</h1>
                <div className="fullstack-trail__content">
                    <div className="fullstack-desktop">
                        <img src="/our-trail-fullstack.png" alt="Trilha fullstack Code Start"/>
                    </div>
                    <div className="fullstack-mobile">
                        <img src="/our-trail-fullstack-mobile.png" alt="Trilha fullstack Code Start"/>
                    </div>
                </div>
            </div>
        </div>
    )
}