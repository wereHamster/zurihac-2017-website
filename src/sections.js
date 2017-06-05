import React from 'react'
import styles from './page.css';



export const Header = () => (
    <header className={styles.header}>
        <img className={styles.headerLogo} alt="ZuriHac 2017, 9-11 June" src={require('../static/header-logo.svg')} />
    </header>
);


export const About = () => (
    <div className={styles.container}>
        <a id='about' />
        <h1>About</h1>
        <p>
            Beginning of June 2017, the <a href='https://www.meetup.com/HaskellerZ/'>Zurich Haskell Meetup Group</a> will organize ZuriHac 2017,
            a three day <a href='https://www.haskell.org/'>Haskell</a> Hackathon hosted at
            the <a href='https://www.hsr.ch'>HSR Hochschule für Technik Rapperswil</a>. This
            is the sixth Haskell Hackathon organized by the Zurich Haskell Meetup Group
            and the first one which is hosted at the HSR. A fantastic venue
            located right at lake Zurich and providing space for 300 participants.
        </p>

        <p>
            The Haskell Hackathon is an international, grassroots collaborative coding festival
            whose goal is to expand the community
            and
            to build and improve Haskell libraries, tools, and infrastructure.
        </p>

        <p>
            This is a great opportunity to learn more about Haskell,
            meet fellow Haskellers in real life,
            find new contributors for your project, improve existing libraries and
            tools or even start new ones!
        </p>

        <p>
            This event is open to any experience level, from beginners to gurus.
            In fact, one of the goals is to bring beginners in contact with
            experts so that the former can get a quick start in the Haskell
            community. We will have a dedicated beginners' track, and there are
            going to be mentors on site whom you can directly approach during the
            whole event with any Haskell-related question you have.
        </p>
    </div>
);


export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.innerFooter}>
            © 2017 ZuriHac Organization Committee
            <div>
                <a className={styles.footerContactLink} href='mailto:tomas.carnecky@gmail.com'>tomas.carnecky@gmail.com</a>
                <div className={styles.footerLinkSeparator} />
                <a className={styles.footerContactLink} href='https://github.com/wereHamster/zurihac-2017-website'>website source</a>
            </div>
        </div>
    </footer>
);

export const Sponsors = () => (
    <div>
        <h2>Supported by</h2>
        <div className={styles.sponsors}>
            <a href="https://digitalasset.com/careers.html" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="Digital Asset Logo" data-src={require('../static/digitalasset-big-blue.png')} />
            </a>
            <a href="https://developers.google.com/open-source/" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="Google Open Source Programs Office, Google Logo" data-src={require('../static/google.png')} />
            </a>
            <a href="https://www.hsr.ch" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="HSR Logo" data-src={require('../static/hsr.jpg')} />
            </a>
        </div>
    </div>
);


export const Contact = () => (
    <div className={styles.container}>
        <a id='contact' />
        <h1>Contact</h1>
        <p>
            If you have any questions before the event, please reach out
            to <a href='mailto:m@jaspervdj.be'>Jasper Van der Jeugt</a> or <a href='mailto:iridcode+zurihac@gmail.com'>Simon Meier</a>.
        </p>
        <p>
            Before the event, and in particular during the event, you can
            find us and other participants in the <strong>#zurihac</strong> channel on <a href="https://freenode.net/">freenode</a> (open in your <a href="irc://freenode.net/#zurihac">IRC client</a> or use the <a href="https://webchat.freenode.net/?channels=zurihac">webchat</a>).
            In addition, feel free to post on Twitter and Google+ using
            the hashtag <strong>#ZuriHac2017</strong>.
        </p>
    </div>
);

export const Conditions = () => (
    <div className={styles.container}>
        <a id='conditions' />
        <h2>Terms and Conditions</h2>
        <p>
            Each participant will retain ownership of any and all
            intellectual and industrial property rights to his
            or her work created or used during the Hackathon.
        </p>
    </div>
);

export const Registration = () => (
    <div className={styles.container}>
        <a id='registration' />
        <h1>Registration</h1>

        <a href="/register" className={styles.registrationForm}>
            To the registration form
        </a>

        <p>
            Even though this year we have space for up to 300 people, you should hurry up.
            The places are gone quickly!
        </p>
        <p>
            Once we reach maximum capacity you will be queued into a wait list.
            In case that somebody cancels we will fill up the seats from
            the wait list in first come first serve order and let you
            know. Do not book anything before we have confirmed a seat
            for you (in a confirmation email) though. Confirmation emails are
            sent out in batches and this is a manual process, so expect some
            delay there.
        </p>
    </div>
);


export const Venue = () => (
    <div className={styles.container}>
        <a id='venue' />
        <h1>Venue</h1>

        <p>
            This year the hackathon takes place at the <a href='https://www.hsr.ch'>HSR Hochschule für Technik Rapperswil</a>.
            The <a href='https://www.google.ch/maps/place/HSR+Hochschule+f%C3%BCr+Technik+Rapperswil/@47.2233188,8.8150867,17z/data=!3m1!4b1!4m5!3m4!1s0x479ab6e12facc7ad:0x711fa65bf58f9c0f!8m2!3d47.2233188!4d8.8172754?hl=en'>location</a> is about 40 minutes outside of the Zurich city.
        </p>

        <p>
            <img className={styles.venueBannerImage} src={require('../static/Header_Campus_01.jpg')} alt='HSR campus' />
        </p>

        <p>
            We'll have plenty of space available to us: One large auditorium with enough seats for all the participants,
            10 separate rooms for up to 28 people each, and a large open space.
        </p>

        <div className={styles.venueAddress}>
            HSR Hochschule für Technik Rapperswil<br/>
            Oberseestrasse 10<br/>
            8640 Rapperswil-Jona
        </div>

        <p>
            The venue is located right next to the lake, so feel free to bring your swimming gear.
        </p>


        <h2>Getting there</h2>

        <p>
            You can take the S7 or S15 to get from the Zurich main station to Rapperswil.
            These trains run regularly in 30 minute and 60 minute intervals, respectively.
        </p>

        <p>
            If you arrive at the Zurich airport, first take the train to the Zurich main station and
            then continue with S7 or S15. Trains from the airport towards the city run every few
            minutes.
        </p>

        <p>
            <strong>Tickets:</strong> If you stay in Zurich city, get a day pass for <b>all zones</b>. It's good
            for all public transportation around Zurich, up to Rapperswil. A one-way ticket costs 17.20CHF,
            the day pass 34.40CHF. If you want to stay closer to the venue and save on transportation, please
            see the section further below with accomodation suggestions around Rapperswil.
        </p>

        <h2>Getting around</h2>

        <p>
            See <a target='_blank' href='https://www.google.com/maps/d/u/0/viewer?mid=1OmDEXl-VKylIyv2Or-yH0nqah38'>this map</a> for
            more information on accomodation, grocery stores, and other useful places.
        </p>
    </div>
);



const VenueImage = ({src}) => (
    <img className={'lazyload ' + styles.venueImage} alt="Venue" data-src={src} />
);

export const Media = () => (
    <section className={styles.media}>
        <div className={styles.mapContainer}>
            <div id='map' className={styles.map} />
        </div>
        <div className={styles.venueImagesContainer}>
            <VenueImage src={require('../static/venue-1.jpg')} />
            <VenueImage src={require('../static/venue-2.jpg')} />
            <VenueImage src={require('../static/venue-3.jpg')} />
            <VenueImage src={require('../static/venue-4.jpg')} />
            <VenueImage src={require('../static/venue-5.jpg')} />
            <VenueImage src={require('../static/venue-6.jpg')} />
        </div>
    </section>
);
