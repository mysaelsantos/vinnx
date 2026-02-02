import Marquee from './ui/Marquee'

const partners = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateCo', logo: '💡' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSys', logo: '☁️' },
    { name: 'AI Solutions', logo: '🤖' },
    { name: 'Digital Lab', logo: '🔬' },
    { name: 'SmartBiz', logo: '📱' },
    { name: 'FutureTech', logo: '🚀' },
]

function Partners() {
    return (
        <section className="partners">
            <div className="container">
                <div className="partners-header">
                    <span className="partners-label">Empresas que confiam na VINNX</span>
                </div>
            </div>

            <Marquee
                items={partners.map(p => (
                    <div className="partner-item" key={p.name}>
                        <span className="partner-logo">{p.logo}</span>
                        <span className="partner-name">{p.name}</span>
                    </div>
                ))}
                speed={25}
            />
        </section>
    )
}

export default Partners
