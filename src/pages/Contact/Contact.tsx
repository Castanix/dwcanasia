import { Card, Typography } from 'antd';
import React from 'react'

import "./Contact.css";

const Contact = () => {
    const { Title, Text } = Typography;

    return (
        <section className="page contact-page">
            <Card title="Contact us">
                <Title level={2} className="sub-heading">Showroom</Title>
                <div className="contact-flex-container">
                    <section>
                        <Text strong className="info">
                            Cash and carry warehouse (We Have Moved!) 
                            <br /><br />
                            <address>
                                136 Watline Ave., Unit 3-4, <br />
                                Mississauga, ON L4Z 2E2 
                                <br /><br />
                                Tel: <a href="tel:+905-890-8988">905-890-8188</a> <br />
                                Fax: 905-890-8188 
                                <br /><br />
                                Email: <a href="mailto:sales@dwcanasia.com">sales@dwcanasia.com</a>
                                <br /><br />
                                Hours: Mon. - Fri. 9:00am - 5:00pm
                            </address>
                        </Text>
                    </section>

                    <section className="map-container">
                        <iframe className="map" title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.5414275199655!2d-79.6704697855672!3d43.623091513748655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f184ae6bfbb%3A0x62f95106fbf83716!2sD%26W%20Canasia%20Trading%20Inc!5e0!3m2!1sen!2sca!4v1674849395600!5m2!1sen!2sca" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
            </Card>
        </section>
    );
};

export default Contact