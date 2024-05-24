import styles from "./about.module.scss"

export default function AboutComponent() {
    return (
        <div>
            <div class={styles["about-page"]}>
                <section class="company-overview">
                    <h2>About Rentify</h2>
                    <p>Rentify is a leading platform that connects renters and property owners, making it easy to find and rent properties. Our mission is to simplify the rental process and provide a seamless experience for both property owners and renters.</p>
                </section>

                <section class="our-mission">
                    <h2>Our Mission</h2>
                    <p>At Rentify, our mission is to revolutionize the rental market by offering a user-friendly platform that brings transparency, convenience, and efficiency to the rental process. We strive to create a community where both renters and property owners can connect with ease and confidence.</p>
                </section>

                <section class="our-story">
                    <h2>Our Story</h2>
                    <p>Rentify was founded in [Year] by [Founders' Names], who recognized the need for a more streamlined and user-friendly rental experience. Frustrated by the complexities and inefficiencies of traditional rental processes, they set out to create a platform that would make renting a home as simple as booking a hotel.</p>
                </section>

                <section class="our-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Transparency:</strong> We believe in clear and open communication between renters and property owners.</li>
                        <li><strong>Efficiency:</strong> Our platform is designed to save you time and effort in finding the perfect rental or tenant.</li>
                        <li><strong>Community:</strong> We foster a supportive community where users can share experiences and advice.</li>
                        <li><strong>Innovation:</strong> We continuously improve our platform to meet the evolving needs of our users.</li>
                    </ul>
                </section>

                <section class="team">
                    <h2>Meet the Team</h2>
                    <p>Rentify is powered by a passionate team of professionals dedicated to making your rental experience exceptional. Meet our team:</p>
                    <ul>
                        <li>[Founder/CEO]: [Prasidio]</li>
                        <li>[CTO]: [Shubham Sahu]</li>
                        <li>[Marketing Head]: [Name]</li>
                        <li>[Customer Support Lead]: [Name]</li>
                    </ul>
                </section>

                <section class="how-it-works">
                    <h2>How Rentify Works</h2>
                    <p>Rentify simplifies the rental process for both renters and property owners:</p>
                    <ul>
                        <li><strong>For Renters:</strong> Browse listings, apply filters to find properties that meet your criteria, and contact property owners directly through our platform.</li>
                        <li><strong>For Property Owners:</strong> Post your property with detailed descriptions and photos, manage inquiries, and find the perfect tenants quickly and efficiently.</li>
                    </ul>
                </section>

                <section class="testimonials">
                    <h2>What Our Users Say</h2>
                    <p>Hear from some of our satisfied users:</p>
                    <blockquote>"Rentify made finding my new apartment a breeze! Highly recommend." - [User Name]</blockquote>
                    <blockquote>"As a property owner, I love how easy it is to list and manage my properties on Rentify." - [User Name]</blockquote>
                </section>

                <section class="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions or need assistance? We’re here to help. Contact us at:</p>
                    <ul>
                        <li><strong>Email:</strong> support@rentify.com</li>
                        <li><strong>Phone:</strong> 1-800-123-4567</li>
                        <li><strong>Address:</strong> 123 Rentify Lane, Apartment City, Rentify State, 12345</li>
                    </ul>
                </section>

                <section class="call-to-action">
                    <h2>Join Us Today</h2>
                    <p>Ready to experience a better way to rent? <a href="/sign-up">Sign Up</a> with Rentify today and start your journey towards finding the perfect home or tenant.</p>
                </section>
            </div>

        </div>
    );
}