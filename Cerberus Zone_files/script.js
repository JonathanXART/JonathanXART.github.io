var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// const anchoreTag = document.querySelectorAll("a");

// anchoreTag.forEach((a) => {
//     a.onclick = (event) => {
//         event.preventDefault();
//     };
// });


//MOBILE NEW HAMBURGER BUTTON
const lines = document.querySelectorAll('.bar1, .bar2, .bar3');
const linesContainer = document.getElementsByClassName("resp-nav-btn");

function changeClass (){
    for(let i=0; i<3;i++){
if (lines[i].classList.contains("noAnimation")){
    lines[i].classList.add("close");
    lines[i].classList.remove("noAnimation");
  }
 else if (lines[i].classList.contains("close")){
    lines[i].classList.add("rev");
    lines[i].classList.remove("close");
  }
 else if (lines[i].classList.contains("rev")){
    lines[i].classList.add("close");
    lines[i].classList.remove("rev");
  };
}}

linesContainer[0].addEventListener("click", changeClass);



// responsive nav bar
const respBtn = document.querySelector(".resp-nav-btn");

console.log(respBtn);

let condition = true;
const navbar = document.querySelector("header .nav-wrap");
respBtn.onclick = function () {
    if (condition) {
        navbar.style.height = "290px";
        condition = false;
    } else {
        navbar.style.height = "0px";
        condition = true;
    }
};


gsap.registerPlugin(ScrollTrigger);

gsap.set(
    " #main .section-wrap .main-all-content .main-section-header h1, #main .btn-wrap a , #main",
    {
        opacity: 0,
    }
);

// master timeline
const masterTl = gsap.timeline();

// home page animation
function HomeAnimation() {
    const tl = gsap.timeline();

    // main
    const animate = gsap
        .timeline()
        .to("#main", {
            opacity: 1,
            duration:1,
        })
        .fromTo(
            "#main main .container .section-wrap .main-all-content .main-section-header h1",
            {
                opacity: 0,
                y: "100%",
                skewX: "-15deg",
            },
            {
                opacity: 1,
                y: "0%",
                duration: 0.8,
                stagger: 0.33,
                skewX: "0",
            }
        )
        .fromTo(
            "#main main .container .section-wrap .main-highlight-img img",
            {
                opacity: 1,
                clipPath: "circle(0% at 50% 50%)",
            },
            {
                clipPath: "circle(60% at 50% 50%)",
                duration: 1,
            }
        )
        .from(
            "#main main .container .section-wrap .main-all-content .para span",
            {
                opacity: 0,
                y: "100%",
                stagger: 0.25,
                skewX: "-20deg",
                duration: 0.8,
            }
        )
        .fromTo(
            "header",
            {
                y: "-100%",
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
            },
            "<"
        )
        .fromTo(
            "#main main .btn-wrap a",
            {
                opacity: 0,
                y: "40px",
            },
            {
                opacity: 1,
                duration: 0.6,
                y: "0",
            },
            "<"
        );
    tl.add(animate);
}


function HomeAnimationXl() {
    const tl = gsap.timeline();

    // main
    const animate = gsap
        .timeline()
        .to("#main", {
            opacity: 1,
            duration:.3,
        })
        .fromTo(
            "#main main .container .section-wrap .main-all-content .main-section-header h1",
            {
                opacity: 0,
                y: "100%",
                skewX: "-15deg",
            },
            {
                opacity: 1,
                y: "0%",
                duration: 0.8,
                stagger: 0.1,
                skewX: "0",
            }
        )
        .fromTo(
            "#main main .container .section-wrap .main-highlight-img img",
            {
                opacity: 1,
                clipPath: "circle(0% at 50% 50%)",
            },
            {
                clipPath: "circle(60% at 50% 50%)",
                duration: 1,
            }
        )
        .from(
            "#main main .container .section-wrap .main-all-content .para span",
            {
                opacity: 0,
                y: "100%",
                stagger: 0.14,
                skewX: "-20deg",
                duration: 0.8,
            }
        )
        .fromTo(
            "header",
            {
                y: "-100%",
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#main main .btn-wrap a",
            {
                opacity: 0,
                y: "40px",
            },
            {
                opacity: 1,
                duration: 0.6,
                y: "0",
                onComplete: function () {
                    document.querySelector("body").style.overflowY = "scroll";
                }
            },
            "<"
        );
    tl.add(animate);
}



function homeBgParallexXl() {
    const tl = gsap.timeline();

    const animate = gsap.timeline().to("#bottom-left", {
        x: '-70%',
    }).to("#bottom-right", {
        x: "100%"
    }, "<").to("#top-right", {
        x: "100%",
        y: "100px"
    }, "<").to("#top-left", {
        x: "-100%",
        y: "100px"
    }, "<")

    tl.add(animate);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#main",
        start: "center center",
        scrub: true
    });
}


function aboutCerberusLg() {
    const tl = gsap.timeline();
    const animate = gsap
        .timeline()

    tl.add(animate);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#about-cerberus ",
        start: "top 90%",
        end: "center 100%",
    });
}

function crbrusBenefits() {
    const tl = gsap.timeline();

    const animate = gsap
        .timeline()

    ScrollTrigger.create({
        animation: animate,
        trigger: "#crbrus-benefits ",
        scrub: true,
        pin: true,
    });
}

function crbrusBenefitsXl() {
    const tl = gsap.timeline();

    const animate = gsap
        .timeline()

}



function projectRoadmap() {
    const tl = gsap.timeline();
    ScrollTrigger.create({
        animation: tl,
        trigger: "#project-roadmap",
        pin: true,
        scrub: true,
    });
}



function projectRoadmapXl() {

    ScrollTrigger.create({
        trigger: "#project-roadmap .container",
        pin: true,
        start: "50% center",
        end: "90%"
    });
}

function joinCommunity() {
    const tl = gsap.timeline();

    const animation = gsap
        .timeline()
        .fromTo(
            "#join-cerberus .container .section-title",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "100%",
            },
            {
                lineHeight: "110%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .para",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "50%",
            },
            {
                lineHeight: "140%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .btn-wrap .btn-fill",
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            }
        );

    tl.add(animation);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#join-cerberus",
    });
}
function joinCommunityXl() {
    const tl = gsap.timeline();

    const animation = gsap
        .timeline()
        .fromTo(
            "#join-cerberus .container .section-title",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "100%",
            },
            {
                lineHeight: "110%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .para",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "50%",
            },
            {
                lineHeight: "140%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .btn-wrap .btn-fill",
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            }
        );

    tl.add(animation);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#join-cerberus",
        start: "top 60%",
        end: "50% center",
    });
}

ScrollTrigger.matchMedia({
    "(max-width: 1199px)": function () {
        masterTl
            .add(HomeAnimation())
            // .add(aboutCerberus())
            // .add(crbrusBenefits())
               // .add(projectRoadmap())
            .add(joinCommunity());
    },
    "(min-width: 1200px)": function () {
        masterTl
            .add(HomeAnimationXl())
            .add(homeBgParallexXl())
            .add(aboutCerberusLg())
            .add(crbrusBenefitsXl())
            .add(projectRoadmapXl())
            .add(joinCommunityXl());
    },
});

AOS.init({once: true}); //AOS ANIMATION

// sticky navbar
window.onscroll = function () {
    myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


}
/*
     FILE ARCHIVED ON 08:36:56 Oct 17, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:57:59 Jan 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.092
  cdx.remote: 0.139
  esindex: 0.013
  LoadShardBlock: 486.011 (6)
  PetaboxLoader3.datanode: 324.997 (8)
  load_resource: 337.552
  PetaboxLoader3.resolve: 89.001
  loaddict: 216.505
*/