import React from 'react';

const AdBanner = () => {
    return (
        <section className="ad-banner-section" style={{ width: '100%', marginTop: '4rem', marginBottom: '2rem' }}>
            <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
                <div
                    style={{
                        width: '100%',
                        height: '200px',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        border: '1px dashed #ccc'
                    }}
                >
                    ESPACIO PUBLICITARIO
                </div>
            </div>
        </section>
    );
};

export default AdBanner;
