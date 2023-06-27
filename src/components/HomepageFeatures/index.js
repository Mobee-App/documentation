// import React from 'react';
// import clsx from 'clsx';
// import styles from './styles.module.css';

// const FeatureList = [
//   {
//     title: 'Watch What We Do',
//     video: 'https://www.youtube.com/watch?v=pQfG4bZrTnM',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//     buttonLabel: 'Watch Video',
//   },
//   // ... other features
// ];

// function Feature({ Svg, title, description, video, buttonLabel }) {
//   const handleWatchVideo = () => {
//     // Add your logic to handle the button click event here
//     // For example, you can open a modal or navigate to a different page
//     console.log('Watch video clicked');
//   };

//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         {Svg && <Svg className={styles.featureSvg} role="img" />}
//         {video && (
//           <iframe
//             width="560"
//             height="315"
//             src={video}
//             title="YouTube Video"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         )}
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {buttonLabel && (
//           <button onClick={handleWatchVideo}>{buttonLabel}</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

  import React from 'react';
  import { Link } from 'react-router-dom';
  import clsx from 'clsx';
  import styles from './styles.module.css';

  const FeatureList = [
    {
      title: 'Watch What we do',
      imageUrl: ' https://i0.wp.com/mobee-app.com/wp-content/uploads/2022/09/logo-by-uprizon-final.png?fit=448%2C148&ssl=1',
       description: (
        <>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </>
      ),
    },
    {
      title: 'EXPAND YOUR BRAND AWARENESS',
      imageUrl: 'https://i0.wp.com/mobee-app.com/wp-content/uploads/2023/02/Home-PageiPad-Pro_ipadpro13_spacegrey_landscape.png?w=720&ssl=1',
      description: (
        <>
        Highlight your brand identity
        <ul>
          <li>Customizable logo and branding</li>
          <li>Branded documents generation</li>
          <li>Support for custom Lightning components (fee-based)</li>
        </ul>
        Make your brand more accessible!
      </>
      ),
    },
    {
      title: 'BOOST YOUR ROI',
      imageUrl: 'https://i0.wp.com/mobee-app.com/wp-content/uploads/2023/02/imac-1.png?w=720&ssl=1',
      description: (
        <>
        Mobee’s features are offline by design and include:
        <ul>
          <li>Smart docs</li>
          <li>e-Signature</li>
          <li>Intelligent real-time analytics</li>
        </ul>
        All at your fingertips in the field, increasing your closing rate!
      </>
      ),
    },
  ];
  function Feature({ Svg, imageUrl, title, description }) {
  const handleAskForDemo = () => {
    // Add your logic to handle the "Ask for a Demo" button click event here
    console.log('Ask for a Demo clicked');
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {imageUrl && (
          <img src={imageUrl} className={styles.featureImage} alt="Feature" />
        )}
      </div>
      <div className={clsx('text--left', 'padding-horiz--md')}>
        <h3>{title}</h3>
        <p>{description}</p>
        {title === 'Watch What we do' && (
          <Link
            className={clsx('button button--secondary button--lg', styles.demoButton)}
            to="/demo"
            onClick={handleAskForDemo}
          >
            Ask for a Demo
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}