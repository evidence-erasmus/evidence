<template>
    <div class="flex flex-col items-start 
        lg:flex-row-reverse lg:justify-end 
        xl:gap-10
        2xl:gap-20">
        <ClientOnly>
            <UiTableOfContents class="w-full lg:max-w-xs print:hidden" key="climatechange-bg-et" />
        </ClientOnly>



        <section class="e-article" lang="en" style="hyphens: auto;">
            <Icon name="openmoji:scientist-medium-dark-skin-tone" class="float-right text-[5em]" />
            <h1 class="mb-0">Space</h1>
            <h5 class="font-normal uppercase leading-tight">Scientific background information</h5>
        
            <!-- <h2 class="e-huge-number">1.</h2> -->
            <h2 id="section-1">Introduction</h2>
        
            <p>
                The Space Age began with the launch of Sputnik 1 in 1957 and undeniably reached its climax in 1969 when a man made first step on the moon. Space exploration was driven by competition between two countries USA and USSR – leaders of capitalist and socialist blocks. So, space exploration was on front line of competition between two different social systems. 
            </p>

            <p>
                Currently, private companies started vast space activities and creating their own satellite architecture around our planet (see https://en.wikipedia.org/wiki/Starlink) for commercial communication and navigation. Satellites and space-based technology assist airplanes to fly safely in congested airspace, ships to navigate the oceans and boost their efficiency, and everyday technologies - such as cash machines, satellite TV and car satnav systems. Space technology is already helping us tackle climate change on Earth, monitoring emissions in different sectors of economy and measuring of global carbon emissions. However, problems have always followed when new technologies are deployed on Earth without due care and scrutiny.  Space pollution by space debris is a long-term issue that need to be properly understood and addressed through robust and enforceable regulation. We must appreciate that space – just like our planet – needs to be protected for future generations.
            </p>

            <p>
                Undeniably, space technology is a part of our daily life. However, the research shows (Inmarsat, 2022) that most of the people do not appear to understand the role space is already playing in our everyday lives, nor its potential to deliver a brighter future for humanity. Of the 20 000 people surveyed across 11 countries, only 8% associated space with connectivity and communication satellites and a mere 38% wished they knew more about it. There was an overwhelming sense of fear about space, with 97% seeing it as a threat. Their top concerns were space debris and collisions, polluting space and damaging the Earth’s atmosphere. Younger people are more excited about the potential of space than the older demographics. Likewise, young people tend to wish they knew more about space. This module is intended to contribute to this purpose. 
            </p>

            





            <h2 id="section-2">
                How satellites move around the Earth: Velocities and altitudes
            </h2>

            <p>
                When a rocket with a satellite is launched from the surface of the Earth, it needs to reach a speed of at least 7.9 kilometres per second in order to reach space. This is called first cosmic velocity needed to achieve balance between gravity's pull on the satellite and the inertia of the satellite's motion - the satellite's tendency to keep going. If the satellite goes too slowly, gravity will pull it back to Earth. At the correct orbital velocity, gravity exactly balances the satellite's inertia, pulling down toward Earth's centre just enough to keep the path of the satellite curving around Earth's surface, rather than flying off in a straight line. (To orbit something is to fall forever around that object. The moon around the Earth, the Earth around the sun, the solar system around the Milky Way centre.)
            </p>
            <p>
                The orbital velocity of the satellite depends on its altitude above Earth. The nearer to Earth, the faster the required orbital velocity. At an altitude 200 kilometres, the required orbital velocity is about 7,6 km/s (27 400 km/h). To maintain an orbit that is 35 786 kilometres above Earth, the satellite must orbit at a speed of about 3,13 km/s (11 300 km/h). That orbital speed and distance permit the satellite to make one revolution in 24 hours. Since Earth also rotates once in 24 hours, a satellite at this altitude stays in a fixed position relative to a point on Earth's surface. This kind of orbit is called "geostationary." Geostationary orbits are ideal for weather satellites and communications satellites.
            </p>
            <p>
                In general, the higher the orbit, the longer the satellite can stay in orbit. At lower altitudes, a satellite runs into traces of Earth's atmosphere, which creates drag. The drag causes the orbit to decay until the satellite falls back into the atmosphere and burns up. At higher altitudes, where the vacuum of space is nearly complete, there is almost no drag and a satellite like the moon can stay in orbit for centuries.
            </p>
            <p>
                Satellites can be classified based on their height above Earth's surface.
            </p>
            <ul>
                <li>
                    <b>Low-Earth orbits (LEO)</b> — LEO satellites occupy a region of space from about 180 kilometres to 2,000 kilometres above Earth. Satellites moving close to the Earth's surface are ideal for making observations, for military purposes and for collecting weather data.
                </li>
                <li>
                    <b>Geosynchronous orbits (GEO)</b> – GEO satellites orbit Earth at an altitude about 36000 kilometres or above and their orbital period is the same as Earth’s rotational period: 24 hours. Included in this category are geostationary (GSO) satellites, which remain in orbit above a fixed spot on Earth. Geostationary satellites have to fly above Earth’s equator to remain in a fixed spot above Earth. Several hundred television, communications and weather satellites all use geostationary orbits.
                </li>
                <li>
                    <b>Medium-Earth orbits (MEO)</b> — These satellites park in between the low and high flyers, so from about 2000 kilometers to 36000 kilometers. Navigation satellites, like the kind used by our car's GPS, work well at this altitude.
                </li>
            </ul>

            <UiContentImage src="https://evidence.onkel.ee/assets/space__leo-geo-satellite.webp" credits="(Zhang et al, 2019) https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links" :elevated="true">
                <template #caption>
                    <b>Figure 1.</b> Hybrid LEO/GEO satellite architecture 
                </template>
            </UiContentImage>

            <p>
                <a href="https://www.geospatialworld.net/videos/how-many-satellites-are-orbiting-around-earth-in-2022/" target="_blank" rel="noopener noreferrer">How Many Satellites are orbiting around Earth in 2022?</a>
            </p>







            <h2 id="section-3">
                Rockets
            </h2>

            <p>
                A rocket provides the means to accelerate a spacecraft. From a physics point of view the rocket works because of the law of conservation of linear momentum.The law of conservation of linear momentum is very important in physics. Momentum is defined as the mass of an object times its velocity. A rocket moves in space because the gases are given momentum as they are expelled by the rocket engine. As the exhaust gases go in one direction, the rocket goes in the other to keep the total momentum of the system constant. This momentum change of the gases gives the rocket the "push" to go forward. We call this push, the thrust of the rocket, i.e. the force exerted on the rocket. A rocket creates thrust by expelling mass. The vehicle is accelerated in the opposite direction. This general principle of movement is the same as for water rockets.
            </p>

            <h3>
                <span class="text-rose-400">Myth:</span> Rocket needs air to push against.
            </h3>

            <p>
                The force causing rocket acceleration can also be explained using Newtons 3<sup>rd</sup> law, that states that for every <b>action</b> (force) in nature there is an equal and opposite <b>reaction</b>. In other words, forces result from interactions. A rocket is pushing against the gases inside it. As these gases are pushed out in one direction, there is a reaction force that pushes the rocket in the other direction. For its movement rocket do not need atmosphere. 
            </p>
            <p>
                Currently, Europe and Japan are developing low-cost and high-efficiency launch vehicles. Moreover, many start-ups around the world are developing ultra-small launch vehicles capable of launching nanosatellites. 
            </p>
            <p>
                South Korea proved in 2022 the capability of launching space rockets using homegrown technology.
            </p>

            <UiContentImage src="https://evidence.onkel.ee/assets/space__countries-rocket-capability.webp" credits="Buchholz / Statista - https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/" :elevated="true">
                <template #caption>
                    <b>Figure 2.</b> History of orbit rocket launching capability (Buchholz/Statista)
                </template>
            </UiContentImage>

            <p>
                Many different countries and private companies are now active in space, and much of the world depends on space-based services. However, we must ensure that robust policies are in place to preserve both the safety and sustainability of space exploration.
            </p>





            <h2 id="section-4">
                Humans in space
            </h2>

            <p>
                The first human in space was the Soviet cosmonaut Yuri Gagarin, who made one orbit around Earth on April 12, 1961, on a flight that lasted 108 minutes. A little more than three weeks later, NASA launched astronaut Alan Shepard into space, not on an orbital flight, but on a suborbital trajectory—a flight that goes into space but does not go all the way around Earth. Shepard’s suborbital flight lasted just over 15 minutes.
            </p>

            <p>
                Currently, commercial programs are established for the suborbital flight at hight of about 100 km over the Earth surface (see 
                <br />
                <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer">https://www.spacex.com/</a>, 
                <br />
                <a href="https://www.blueorigin.com/" target="_blank" rel="noopener noreferrer">https://www.blueorigin.com/</a>, 
                <br />
                <a href="https://www.virgingalactic.com/" target="_blank" rel="noopener noreferrer">https://www.virgingalactic.com/</a>). 
            </p>

            
            

            <UiCardInfo icon="mdi:comment-quote-outline" theme="blue-500">
                <p class="font-Body">
                    <b>Jan Wörner</b>, the Director General of the European Space Agency (ESA) gave following arguments about importance of human missions to space:
                </p>
                <div class="italic">
                    <p>
                        With astronauts in space, we can do things we cannot do with robots. We cannot measure the blood pressure of a robot and the mood system of a robot. We get a lot of information from the astronauts as being the experiment themselves to be used on Earth. And the best is when robotic capabilities are merged with human activities. Human missions have specific advantages and specific boundary conditions. Robotic missions are much cheaper than any human spaceflight. Someone could say ‘instead of doing one human spaceflight, we do 10 robotic missions.’  I’m convinced that we should do both. It's not expensive at all. In ESA we spend (the equivalent of) about one euro – for human space mission per year – per citizen, so a very small amount.
                    </p>
                    <p>
                        There is always risk in human spaceflights, but if we don't take risks, we will not have any further development. It's part of our understanding to take risks in order to go further. This is in each and everything we are doing in life. It's a balance between risk and opportunity. I believe that human spaceflight is for sure a very difficult and very dangerous one, but is worthwhile also to take the risk. It is in the nature of humans.
                    </p>
                    <p class="font-Body text-sm text-right">
                        (10 april 2020, ec.europa.eu)
                    </p>
                </div>
            </UiCardInfo>

            <h3>
                ISS and new space stations
            </h3>

            <p>
                The International Space Station (ISS) was launched in 1998 and gradually developed all the time. The 450-tonne International Space Station has more than 837 cubic metres of pressurised space – enough room for its crew of six persons and a vast array of scientific experiments. 
            </p>
            <p>
                The ISS usually maintains an orbit with an average altitude of 400 kilometres above the Earth. But due to atmospheric resistance, the station can lose altitude up to 100 meters per day. Therefore, regular orbit adjustments are required, usually about once a month. These are called reloads or reboost manoeuvres and done using the engines of the Zvezda Service Module or a visiting spacecraft. There is no fixed reload schedule, because the density of the earth’s atmosphere is constantly changing depending on how much energy the Sun supplies to it. Therefore, the speed of descent is not a constant value. But the ISS descends to Earth faster than other satellites at a similar altitude due to its huge size and surface area. The ISS circles the Earth in roughly 93 minutes, completing 15,5 orbits per day. We can follow the track of ISS with help of <a href="https://spotthestation.nasa.gov/tracking_map.cfm" target="_blank" rel="noopener noreferrer">Live Space Station Tracking Map</a>.
            </p>

            <UiContentImage src="https://evidence.onkel.ee/assets/space__iss.webp" credits="Credits: ESA - European Space Agency (Paolo Nespoli) & NASA Copyright: ESA, CC BY-SA 3.0 IGO / https://www.flickr.com/photos/europeanspaceagency/5811265766" :elevated="true">
                <template #caption>
                    <b>Figure 3.</b> The International Space Station.
                </template>
            </UiContentImage>

            <p>
                The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields. 
            </p>
            <p>
                Europe, working through ESA, is currently responsible for the European Columbus laboratory at ISS. Columbus is a multifunction laboratory that specialises in research into fluid physics, materials science and life sciences. Europe is contributing to NASA's Orion crew vehicle, which will serve as the exploration vehicle that will carry astronauts to space, provide emergency abort capability, sustain the crew during the space travel, and provide safe re-entry from deep space return velocities.
            </p>
            <p>
                China’s Tiangong space station is in orbit and China also announce opportunities for space tourism there. Tiangong (which translates to Heavenly Palace) the country’s first space outpost. Unlike the International Space Station (ISS) which exists thanks to a conglomerate of many countries and their space agencies, Tiangong is the only independent national space station. The ability to create and support such a structure in orbit is a reflection of a nation’s total global power and influence. This is an example how space science has become intertwined with development, including China’s national security, economic progress, and their public science and education initiatives.
            </p>


            <h3 class="border-l-rose-400 border-l-4 pl-4">
                <span class="text-rose-400">Three common interrelated myths:</span>
                <ol class="leading-tight">
                    <li>
                        Going into space makes you weightless 
                    </li>
                    <li>
                        There's no gravity in space 
                    </li>
                    <li>
                        Astronauts orbiting Earth are experiencing zero gravity because they are far from Earth.
                    </li>
                </ol>
            </h3>

            <p>
                Going past 100 km height does not magically make you weightless. If you were in an accelerating rocket, you would feel many times Earth's gravity. It's only when you start falling that you'd feel weightless. Astronauts are in free-fall as they orbit the Earth, but they are pulled strongly toward the Earth. 
            </p>
            <p>
                Gravity is the mutual attraction between any objects that have mass. Here on Earth, we experience gravity as our weight, which is to say the attraction between our own mass and the Earth. When a rocket is in space, the vehicle and the astronauts carried by it still feel the pull of the planet’s gravity. If there were no gravity in space, it wouldn’t be possible for to orbit the Earth. At the altitude of 400 km (ISS), the gravitational influence from the Earth is 8,75 m/s². That is only about 11% less than the 9,81 m/s² felt on the Earth’s surface.
            </p>
            <p>
                On the space station, astronauts (and the station itself) are falling towards the center of the Earth but since they are also moving quickly, sideways, they keep missing the Earth. So, they are falling technically around the Earth. The astronauts are weightless because they do not experience the station pushing back up on them. The astronaut is falling and so is their spacecraft. If both are falling, there is no force of one against the other and thus no sensation of weight. Thus, the ISS and its crew are in free fall in the orbit.
            </p>
            <p>
                On Mars, astronauts would need to live in three-eighths of Earth’s gravitational pull. Gravity on Mars is 3/8 of that on Earth. But on the trek between Earth and Mars explorers will experience total weightlessness, when rocket motors are switched off.
            </p>








            <h2 id="section-5">
                Environmental pollution caused by space exploration
            </h2>

            <h3>
                Debris pollution of space
            </h3>

            <p>
                There are 100 million pieces of orbital debris smaller than 1 centimetre, 500 000 pieces in the 1–10-centimetre range and approximately 21 000 items larger than 10 centimetres. 
            </p>
            <p>
                Orbital debris can come from many sources:
            </p>
            <ul>
                <li>
                    Exploding rockets – This leaves behind the most debris in space.
                </li>
                <li>
                    The slip of an astronaut's hand – If an astronaut repairing something in space and drops a wrench, it's gone forever. The wrench then goes into orbit, probably at a speed of nearly 10 kilometres per second. If the wrench hits any vehicle carrying a human crew, the results could be disastrous. Larger objects like a space station make a larger target for space junk, and so are at greater risk.
                </li>
                <li>
                    Jettisoned items – Parts of launch canisters, camera lens caps and so on.
                </li>
            </ul>
            <p>
                Space debris poses a threat to active, properly functioning satellites, and manned spaceships (see <a href="https://www.youtube.com/watch?v=yS1ibDImAYU" target="_blank" rel="noopener noreferrer">visual presentation about this issue</a>)
            </p>

            <h3>
                Particle pollution of atmosphere during rocket launches
            </h3>

            <p>
                Rocket launches are an integral part of our world. It is obvious that rocket engines spew out pollution into the atmosphere, like any form of combustion-driven propulsion. The pollution caused by rocket emissions can also seem insignificant compared to the other challenges the world faces, and the benefits the space industry brings to a 21st-Century world. Indeed, the percentage of fossil fuels burned by the space industry is only about 1% of that burned by conventional aviation. However, aircraft released their pollutants within the troposphere and the lower stratosphere, whereas rockets are releasing their pollutants all the way from the surface of the Earth to the mesophere, and when pollution is released into those upper layers it lasts for a longer time than earthbound sources. Currently, rockets inject about 1000 tons of soot per year into the otherwise pristine upper layers of Earth's atmosphere. There is also a great deal of uncertainty as to the effects of <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612" target="_blank" rel="noopener noreferrer">rocket emissions on different layers of the atmosphere</a>.
            </p>

            <p>
                Rocket Propellant-1, or RP-1, highly refined form of kerosene is one of the most popular rocket fuels. It helped blast rockets such as the Saturn, Delta, Atlas, Soyuz and, SpaceX's Falcon 9 and Virgin Orbit's horizontally launched rocket, into space. RP-1 is popular because it is cheaper, stable at room temperature and isn't dangerously explosive. Now there is a race on to develop alternatives to existing fuels like RP-1 and liquid methane appears to be in the lead. Several new rocket engines, including SpaceX's Raptor and the European Space Agency's Prometheus engine, have been designed to use this gas as a fuel because it has a higher performance than other fuels, meaning the rocket can be smaller and produce less soot when it's launched. However, methane is controversial because it is one of the worst gases as far as global warming is concerned. It is around 80 times more warming than carbon dioxide over its lifetime.
            </p>

            <p>
                But what can we do more to stop spaceships’ polluting exhausts to accelerate climate change? Researchers fear that the space industry has little incentive to change because of the absence of regulations, a reluctance to abandon safe and proven technology, and the fact that new propellants mean expensive new engines and lengthy testing.
            </p>






            <h2 id="section-6">
                How humans experience weightlessness?
            </h2>

            <p>
                After a rocket start from the Earth in about 8 and a half minutes rocket engine switches off, astronauts entering outer space and experiencing weightlessness. Weightlessness is more correctly termed microgravity. Astronauts are actually in a state of free-fall. Rocket after switching off engine is moving horizontally with very high speed of about 8 kilometres per second and also falls free, thus going around the Earth. 
            </p>
            <p>
                When people first encounter microgravity, they have the following feelings: Nausea, Disorientation, Headache, Loss of appetite, Congestion, which is called space sickness. The longer stays in microgravity cause that muscles and bones weaken. Experience from hundreds of spaceflights show how human body responds to weightlessness. We present below a description of some physiological effects your body would experience in space.
            </p>

            <h3>
                Space sickness
            </h3>

            <p>
                The nausea and disorientation you feel are like that sinking feeling in your stomach when experience a drop on a roller coaster ride, only you have that feeling constantly for several days. This is the feeling of space sickness, or space motion sickness, which is caused by conflicting information that your brain receives from your eyes and the vestibular organs located in your inner ear.
            </p>
            <p>
                Your eyes can see which way is up and down inside the cabin. However, because your vestibular system relies on the downward pull of gravity to tell you which way is up versus down and in which direction you are moving, it does not function in microgravity. So, your eyes may tell your brain that you are upside-down, but your brain does not receive any interpretable input from your vestibular organs. Your confused brain produces the nausea and disorientation, which in turn may lead to vomiting and loss of appetite. Fortunately, after a few days, our brain usually adapts to the situation by relying solely on the visual inputs, and you begin to feel better. 
            </p>

            <h3>
                Puffy Face and Bird Legs
            </h3>
            <p>
                In microgravity, your face will feel full, and your sinuses will feel congested, which may contribute to headaches as well as space motion sickness. You feel the same way on Earth when you bend over or stand upside down, because blood rushes to your head.
            </p>
            <p>
                On Earth, gravity pulls on our blood, causing significant volumes to pool in the veins of our legs. Once you encounter microgravity, the blood shifts from your legs into your chest and head. Your face tends to get puffy and your sinuses swell. The fluid shift also shrinks the size of your legs.
            </p>

            <h3>
                Shifts in Your Blood and Bodily Fluids
            </h3>
            <p>
                When the blood shifts to the chest, your heart increases in size and pumps more blood with each beat. Your kidneys respond to this increased blood flow by producing more urine, much like they do after you drink a large glass of water. Also, the increase in blood and fluid decreases anti-diuretic hormone (ADH) secretion by the pituitary gland, which makes you less thirsty. Therefore, you do not drink as much water as you might on Earth. Overall, these two factors combine to help rid your chest and head of the excess fluid, and in a few days, your body's fluid levels are less than what they were on Earth. Although you still have a slightly puffy head and stuffy sinuses, it is not as bad after the first couple of days. Upon your return to Earth, gravity will pull those fluids back down to your legs and away from your head, which will cause you to feel faint when you stand up. But you will also begin to drink more, and your fluid levels will return to normal in a couple of days.
            </p>

            <h3>
                Weak Muscles
            </h3>
            <p>
                When you are in microgravity, your body adopts a "fetal" posture — you crouch slightly, with your arms and legs half-bent in front of you. In this position, you do not use many of your muscles, particularly those muscles that help you stand and maintain posture (anti-gravity muscles). The mass of your muscles decreases. The longer you stay in space, the less muscle mass you will have. This loss of muscle mass makes you weaker, presenting problems for long-duration space flights and upon returning home to Earth's gravity.
            </p>

            <h3>
                Brittle Bones
            </h3>
            <p>
                In microgravity, your bones do not need to support your body, so all of your bones, especially the weight-bearing bones in your hips, thighs and lower back, are used much less than they are on Earth. The result is that the size and mass of these bones continue to decrease as long as you remain in microgravity, at a rate of approximately 1 percent per month. These changes in bone mass make your bones weak and more likely to break upon your return to Earth's gravity. The bone loss is recoverable upon return to Earth. 
            </p>
            <p>
                In addition to weak bones, your blood's calcium concentration increases and kidneys must get rid of the excess calcium, which makes them susceptible to forming painful kidney stones.
            </p>
            <p>
                To partially overcome these problems astronauts must exercise at least two hours every day on specially adapted to weightlessness machines (treadmill, rowing machine, bicycle). 
            </p>

            <h3>
                References
            </h3>

            <ul class="leading-tight text-sm">
                <li>
                    5 Hazards of Human Spaceflight. <a class="break-all" href="https://www.nasa.gov/hrp/5-hazards-of-human-spaceflight" target="_blank" rel="noopener noreferrer">https://www.nasa.gov/hrp/5-hazards-of-human-spaceflight</a> 
                </li>
                <li>
                    Buchholz, Katharina (2019) The Countries Capable of Launching Space Rockets. Statista. <a class="break-all" href="https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/" target="_blank" rel="noopener noreferrer">https://www.statista.com/chart/27792/countries-capable-of-launching-space-rockets/</a>
                </li>
                <li>
                    Harrison, T., Nahmyo, T. (2016). NASA in the Second Space Age: Exploration, Partnering, and Security. Strategic Studies Quarterly. Vol. 10, No. 4 (WINTER 2016), pp. 2-13. Air University press <a class="break-all" href="https://www.jstor.org/stable/26271527#metadata_info_tab_contents" target="_blank" rel="noopener noreferrer">https://www.jstor.org/stable/26271527#metadata_info_tab_contents</a>
                </li>
                <li>
                    Inmarsat (2022) What on Earth is the value of space? <a class="break-all" href="https://www.inmarsat.com/content/dam/inmarsat/corporate/documents/corporate/insights/Inmarsat_Value_of_Space_Report.pdf.gc.pdf" target="_blank" rel="noopener noreferrer">https://www.inmarsat.com/content/dam/inmarsat/corporate/documents/corporate/insights/Inmarsat_Value_of_Space_Report.pdf.gc.pdf</a>
                </li>
                <li>
                    Impact of Rocket Launch and Space Debris Air Pollutant Emissions on Stratospheric Ozone and Global Climate. <a class="break-all" href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612" target="_blank" rel="noopener noreferrer">https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002612</a>
                </li>
                <li>
                    The New Space Age: Beyond Global Order <a class="break-all" href="https://global.upenn.edu/sites/default/files/perry-world-house/The%20New%20Space%20Age%20-%20Beyond%20Global%20Order%20Report.pdf" target="_blank" rel="noopener noreferrer">https://global.upenn.edu/sites/default/files/perry-world-house/The%20New%20Space%20Age%20-%20Beyond%20Global%20Order%20Report.pdf</a>
                </li>
                <li>
                    Space exploration <a class="break-all" href="https://www.britannica.com/science/space-exploration/Space-applications" target="_blank" rel="noopener noreferrer">https://www.britannica.com/science/space-exploration/Space-applications</a> 
                </li>
                <li>
                    Space Launch Vehicle. <a class="break-all" href="https://www.kari.re.kr/eng/sub03_04.do" target="_blank" rel="noopener noreferrer">https://www.kari.re.kr/eng/sub03_04.do</a> 
                </li>
                <li>
                    The United Nations Office for Outer Space Affairs (UNOOSA). Benefits of Space for Humankind. <a class="break-all" href="https://www.unoosa.org/oosa/en/benefits-of-space/benefits.html" target="_blank" rel="noopener noreferrer">https://www.unoosa.org/oosa/en/benefits-of-space/benefits.html</a>
                </li>
                <li>
                    Zhang Wei, Ma Hong, Wu Tao, Shi Xueshu and Jiao Yiwen (2019) Efficient topology control for time-varying spacecraft networks with unreliable links. International Journal of Distributed Sensor Networks 2019, Vol. 15 (9) <a class="break-all" href="https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/336166223_Efficient_topology_control_for_time-varying_spacecraft_networks_with_unreliable_links</a>
                </li>
                <li>
                    <a class="break-all" href="https://spacenews.com/" target="_blank" rel="noopener noreferrer">https://spacenews.com/</a>
                </li>
                <li>
                    <a class="break-all" href="https://www.thespacereview.com/" target="_blank" rel="noopener noreferrer">https://www.thespacereview.com/</a>
                </li>
                <li>
                    <a class="break-all" href="https://www.geospatialworld.net/" target="_blank" rel="noopener noreferrer">https://www.geospatialworld.net/</a>
                </li>
            </ul>




        </section>
    </div>
</template>