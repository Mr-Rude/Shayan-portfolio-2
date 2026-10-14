import Footer from './Footer.jsx';
import sectionOneVideo from '../assets/Unreal/videos/1.mp4';
import sectionEightVideo from '../assets/Unreal/videos/8.mp4';
import sectionNineLeftVideo from '../assets/Unreal/videos/9L.mp4';
import sectionNineRightVideo from '../assets/Unreal/videos/9R.mp4';
import sectionTenTopLeftVideo from '../assets/Unreal/videos/10TopL.mp4';
import sectionTenTopRightVideo from '../assets/Unreal/videos/10TopR.mp4';
import sectionThirteenTopVideo from '../assets/Unreal/videos/13T.mp4';
import sectionFourteenLeftVideo from '../assets/Unreal/videos/14L.mp4';
import sectionFourteenRightVideo from '../assets/Unreal/videos/14R.mp4';
import storyboardLeft from '../assets/Unreal/2L.png';
import storyboardRight from '../assets/Unreal/2R.png';
import lookCenter from '../assets/Unreal/3C.png';
import lookLeft from '../assets/Unreal/3L.png';
import lookRight from '../assets/Unreal/3R.png';
import materialOrangeLeft from '../assets/Unreal/4DL.png';
import materialOrangeRight from '../assets/Unreal/4DR.png';
import materialGreen from '../assets/Unreal/4UL.png';
import materialBlue from '../assets/Unreal/4UR.png';
import citySide from '../assets/Unreal/5D.png';
import cityFront from '../assets/Unreal/5U.png';
import supportingCar from '../assets/Unreal/6L.png';
import supportingVehicles from '../assets/Unreal/6R.png';
import trafficSelection from '../assets/Unreal/6B.png';
import desertSpline from '../assets/Unreal/7L.png';
import desertRoad from '../assets/Unreal/7R.png';
import roadBlueprint from '../assets/Unreal/8.png';
import animationTimeline from '../assets/Unreal/10B.png';
import cityCurves from '../assets/Unreal/10L.png';
import animationTracks from '../assets/Unreal/10R.png';
import vehicleSteering from '../assets/Unreal/11L.png';
import vehicleRoute from '../assets/Unreal/11R.png';
import cityWireframe from '../assets/Unreal/11B.png';
import trackModel from '../assets/Unreal/12L.jpeg';
import bedroomTrack from '../assets/Unreal/12R.jpeg';
import roomCharacter from '../assets/Unreal/13L.png';
import roomLayout from '../assets/Unreal/13R.png';
import roomBottom from '../assets/Unreal/13B.png';
import finalReveal from '../assets/Unreal/15.png';

function Media({ label, caption = label, image, videoId, videoSrc, wide = false, portrait = false, audioEnabled = false }) {
  const mediaClass = [
    'unreal-media',
    wide && 'unreal-media--wide',
    portrait && 'unreal-media--portrait',
  ].filter(Boolean).join(' ');
  const frameClass = `unreal-media-frame${image ? ' unreal-media-frame--image' : ''}${videoId || videoSrc ? ' unreal-media-frame--video' : ''}`;

  return (
    <figure className={mediaClass} aria-label={label}>
      <div className={frameClass}>
        {image && <img src={image} alt={label} />}
        {videoSrc && (
          <video muted data-audio-disabled={!audioEnabled || undefined} src={videoSrc} title={label} autoPlay controls loop playsInline preload="auto" />
        )}
        {videoId && (
          <iframe data-audio-disabled={!audioEnabled || undefined}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&rel=0&mute=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function StoryCopy({ number, topic, title, children }) {
  return (
    <div className="unreal-section-copy">
      <div className="eyebrow">{number} / {topic}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default function UnrealCaseStudy() {
  return (
    <main className="wrap detail open unreal-case-study" id="project">
      <div className="unreal-intro">
        <div>
          <div className="eyebrow">Selected project / CGI film</div>
          <h1>Hot Wheels<br />fan-made<br />commercial</h1>
        </div>
        <div className="unreal-intro-copy">
          <p className="unreal-summary">
            A cinematic chase moves from snow to city to desert, then folds back into a child’s bedroom.
          </p>
          <p>
            A fan-made commercial shaped into a short action film, built around changing environments and a final shift in scale.
          </p>
          <dl className="unreal-meta">
            <div><dt>Project type</dt><dd>Fan-made commercial</dd></div>
            <div><dt>Tools</dt><dd>Unreal Engine + Maya + Blender + Substance Painter</dd></div>
            <div><dt>Format</dt><dd>1:54 CGI film</dd></div>
          </dl>
        </div>
      </div>

      <section className="unreal-hero">
        <div className="unreal-labels">
          <span>01 / Final film</span>
          <span>Full project cut · 1:54</span>
        </div>
        <Media label="Final film" caption={null} videoSrc={sectionOneVideo} audioEnabled wide />
        <div className="unreal-caption">
          <h2>A chase that begins as a dream.</h2>
          <p>
            The finished film carries one pursuit across distinct worlds, using light, terrain and camera distance to change its rhythm.
          </p>
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="02" topic="Concept & storyboard" title={<>Plan the motion<br />before building the world.</>}>
          The original storyboard maps the chase from snow through the city and desert to the bedroom reveal. These rough sketch versions collect 18 panels into two sheets, showing the planned camera angles, action beats and changes in scale.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Storyboard / panels 01–09 / sketch adaptations" image={storyboardLeft} />
          <Media label="Storyboard / panels 10–18 / sketch adaptations" image={storyboardRight} />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="03" topic="Visual direction" title={<>One pursuit.<br />Three distinct looks.</>}>
          The snowy sequence has a vintage look, the desert uses a warm palette, and the city takes a neutral approach. These three treatments give each setting its own atmosphere as the pursuit moves between environments.
        </StoryCopy>
        <div className="unreal-trio">
          <Media label="Snow / vintage look" image={lookLeft} />
          <Media label="City / neutral look / low angle jump" image={lookCenter} />
          <Media label="Desert / warm palette" image={lookRight} />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="04" topic="Main car materials" title={<>Finding the color<br />of the chase.</>}>
          The main car went through green, blue and orange material tests in Unreal. Comparing the finishes in a simple test scene, then reviewing vehicles in the snowy environment, helped establish the appearance of the car used in the film.
        </StoryCopy>
        <div className="unreal-material-grid">
          <Media label="Green paint / material test" image={materialGreen} />
          <Media label="Blue paint / material test" image={materialBlue} />
          <Media label="Orange paint / material test" image={materialOrangeLeft} />
          <Media label="Vehicle and color comparison / snowy environment" image={materialOrangeRight} />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="05" topic="Selected shots" title={<>Keep the car close.<br />Let the city move around it.</>}>
          Low angles and close passes hold attention on the vehicle’s shape. Profile lights and reflected architecture create movement inside the frame while the forward view stays clear.
        </StoryCopy>
        <div className="unreal-shot-stack">
          <Media label="City pursuit / low front camera" image={cityFront} wide />
          <Media label="City profile / speed held in a readable silhouette" image={citySide} wide />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="06" topic="Supporting vehicles" title={<>Build the traffic<br />around the main car.</>}>
          Supporting cars and a bus were reviewed for the snow and city sequences. These development views show vehicle selection and preparation in Unreal, including appearance checks and a lineup of possible background traffic.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Supporting car / appearance review" image={supportingCar} />
          <Media label="Bus and police vehicles / preparation in Unreal" image={supportingVehicles} />
        </div>
        <div className="unreal-secondary-media">
          <Media label="Background traffic / vehicle selection" image={trafficSelection} wide />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="07" topic="Desert road development" title={<>Draw a route<br />through the dunes.</>}>
          The desert road developed alongside the terrain. An overhead view made the overall route visible, while close views supported adjustment to individual spline points and curves. These tests connect the road construction setup below to its place in the landscape.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Road layout / spline points across the dunes" image={desertSpline} />
          <Media label="Road development / shaping the curve through the terrain" image={desertRoad} />
        </div>
      </section>

      <section className="unreal-section">
        <div className="unreal-process">
          <StoryCopy number="08" topic="Road animation process" title={<>Shape the route,<br />then test the motion.</>}>
            A spline mesh Blueprint supports repeatable road assembly. Direct viewport tests make the route, vehicle spacing and pace visible before the cinematic pass.
          </StoryCopy>
          <Media label="Blueprint graph / spline mesh construction" image={roadBlueprint} />
        </div>
        <Media label="Viewport test / vehicles moving on the desert road" videoSrc={sectionEightVideo} wide />
      </section>

      <section className="unreal-section">
        <StoryCopy number="09" topic="Iteration" title={<>Finding the right<br />sense of speed.</>}>
          The early Jeep test paired a sports car with rocky terrain, but the movement felt slow and the setting suggested an off-road vehicle. This revised direction changed both the car and environment, moving the chase onto roads that better supported speed.
        </StoryCopy>
        <div className="unreal-pair unreal-pair--video">
          <Media label="Early test / Jeep on rocky terrain" videoSrc={sectionNineLeftVideo} portrait />
          <Media label="Revised test / city intersection" videoSrc={sectionNineRightVideo} portrait />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="10" topic="Car animation workflow" title={<>Follow the curve.<br />Control the timing.</>}>
          <span>
            The first approach was to animate the cars in Maya, bake the animation onto them, and bring them into Unreal. That transfer process took too long, so the workflow changed: cars were rigged in Blender and animated directly in Unreal. Import tests checked that the rigs behaved correctly and that the vehicles stayed at the right height on the road.
          </span>
          <span>
            The car animation workflow uses a curved car path and Sequencer to control the vehicle’s position and timing. These Unreal views show how the route follows the city intersection and how movement is arranged along the animation timeline.
          </span>
        </StoryCopy>
        <div className="unreal-pair unreal-pair--video">
          <Media label="Earlier workflow / car animation in Maya" videoSrc={sectionTenTopLeftVideo} portrait />
          <Media label="Revised workflow / rig checks in Unreal" videoSrc={sectionTenTopRightVideo} portrait />
        </div>
        <div className="unreal-pair">
          <Media label="Curved path at the city intersection" image={cityCurves} />
          <Media label="Vehicle position along the animation timeline" image={animationTracks} />
        </div>
        <div className="unreal-secondary-media">
          <Media label="City shot / curves and animation tracks" image={animationTimeline} wide />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="11" topic="Vehicle animation checks" title={<>Check the movement<br />from every angle.</>}>
          Animation tests in Unreal used Sequencer to review the cars along their routes, including wheel rotation, steering and turning. In the city, the top wireframe view made the drift path easier to inspect and adjust, with a camera preview showing the result from the shot angle.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Sequencer / police car steering and wheel checks" image={vehicleSteering} />
          <Media label="Vehicle animation / route and timing checks" image={vehicleRoute} />
        </div>
        <div className="unreal-secondary-media">
          <Media label="City drift / adjustments from the top wireframe view" image={cityWireframe} wide />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="12" topic="Toy track development" title={<>From layout model<br />to bedroom set.</>}>
          The toy car track was modeled in Maya, building up its loops, banks, supports and miniature terrain. In the finished room, color, props and warm light connect that miniature scene to the chase seen earlier.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Maya model / track, supports and miniature terrain" image={trackModel} />
          <Media label="Final environment / track in the bedroom" image={bedroomTrack} />
        </div>
        <details className="unreal-disclosure">
          <summary>Watch the toy track in Maya · 18 seconds</summary>
          <div className="unreal-disclosure-media">
            <Media label="Toy track development in Maya" videoId="uI6AGK6UYHM" portrait />
          </div>
        </details>
      </section>

      <section className="unreal-section">
        <StoryCopy number="13" topic="Room scale and posing" title={<>Make the final room<br />feel believable.</>}>
          The room was checked for the relative sizes of the character, furniture, props and toy track. A mannequin provided another scale reference. The bed pose was prepared in Maya. Bringing the character into the room also exposed alignment and placement problems during development; the test below records that stage before the final reveal.
        </StoryCopy>
        <Media label="Maya / preparing the character’s bed pose" videoSrc={sectionThirteenTopVideo} wide />
        <div className="unreal-pair unreal-pair--room">
          <Media label="Room setup / mannequin, character, furniture and toy track" image={roomCharacter} />
          <Media label="Room layout / checking the proportions of the set" image={roomLayout} />
        </div>
        <div className="unreal-secondary-media">
          <Media label="Bedroom set / character placement and room details" image={roomBottom} wide />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="14" topic="Character animation tests" title={<>Simplifying the<br />bedroom ending.</>}>
          An earlier version included the girl playing with cars beside the toy track. These animation tests explored that action, but refining the movement was taking too long and the result was not working as intended. The playing sequence was removed, and the final film goes directly to the character in bed with the toy car in her hand.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Earlier ending / character playing with the cars" videoSrc={sectionFourteenLeftVideo} wide />
          <Media label="Unreal Sequencer / testing the character movement" videoSrc={sectionFourteenRightVideo} wide />
        </div>
        <details className="unreal-disclosure">
          <summary>Another animation test · 36 seconds</summary>
          <div className="unreal-disclosure-media unreal-disclosure-media--wide">
            <Media label="Earlier ending / wider view of the character test" wide />
          </div>
        </details>
      </section>

      <section className="unreal-section">
        <StoryCopy number="15" topic="Final reveal" title={<>From full scale chase<br />to a toy in hand.</>}>
          The closing scene returns to the bedroom and reveals the race as a dream. The shift changes the scale of the preceding action and closes the film on the idea of play.
        </StoryCopy>
        <Media label="Closing scene / the child asleep in the bedroom" image={finalReveal} wide />
      </section>

      <section className="unreal-notes">
        <div>
          <div className="eyebrow">Production notes</div>
          <h2>A compact CGI<br />production workflow.</h2>
        </div>
        <div className="unreal-notes-copy">
          <p>
            The workflow moved from concept and storyboard through asset preparation, scene setup, animation, rendering, compositing, editing and sound.
          </p>
          <p>
            Unreal Engine was used for scene setup, lighting, rendering and in-scene animation tests and adjustments. Blender was used for car rigging, with vehicle animation completed directly in Unreal after testing an earlier Maya animation and baking workflow. Maya was also used to model the toy track and prepare the character’s bed pose. Substance Painter was used for materials brought into Unreal. Third party vehicles, environments, props, sounds and effects were collected and prepared for the film.
          </p>
          <p className="unreal-disclaimer">
            Unofficial fan project created for educational, creative and portfolio use. Not affiliated with or sponsored by Mattel or Hot Wheels.
          </p>
        </div>
      </section>

      <Footer><span>CGI / Unreal Engine / Film</span></Footer>
    </main>
  );
}
