document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".blackscreenBlocker");if(returnIsMobile()){e.classList.add("fadeOut"),document.getElementById("video").remove(),document.querySelector(".video-container").style.display="none",document.getElementById("loadingIDIndicator").style.display="none";let t=document.querySelector(".cursor"),n=document.querySelector(".cursorDot");n.display="none",t.display="none",menuDisplay.style.display="block",document.getElementById("preloader-bar").style.display="none",document.getElementById("relativeID").style.display="none",loadingIsOver=!0,setTimeout(()=>{e.remove()},1e3);return}setTimeout(function(){var t=document.getElementsByClassName("TIMG");e.remove();for(var n=0;n<t.length;n++)t[n].classList.add("shake");setTimeout(function(){for(var e=document.getElementsByClassName("TDESC"),t=0;t<e.length;t++)e[t].classList.add("shake2")},300)},100),new class e{#a=0;#b=0;#c=0;#d=[];#e=()=>{};#f=()=>{};#g=(e,t)=>{setTimeout(()=>{this.#e(e,t),100==Math.round(t)&&setTimeout(()=>{this.#f()},100)},100*e)};handleLoad(){this.#b=100*++this.#a/this.#c,this.#g(this.#a,this.#b)}constructor(e,t,n){for(let o of(this.#d=[...document.querySelectorAll("link"),...document.querySelectorAll('img:not([loading="lazy"])'),...document.querySelectorAll('object:not([loading="lazy"])'),...document.querySelectorAll('iframe:not([loading="lazy"])'),...document.querySelectorAll('video:not([loading="lazy"])')],this.#c=this.#d.length+e,"function"==typeof t&&(this.#e=t),"function"==typeof n&&(this.#f=n),this.#d))o.isConnected?this.handleLoad():o.addEventListener("load",this.handleLoad.bind(this))}}(0,function(e,t){document.getElementById("preloader-bar").style.width=t+"%",document.getElementById("loadingIDIndicator").innerHTML="LOADING: "+Math.round(t)+"%"},function(){document.getElementById("relativeID").style.display="none";var e=document.getElementById("video"),t=document.querySelector(".video-container");document.getElementById("loadingIDIndicator").classList.add("smokeFade"),setTimeout(function(){document.getElementById("loadingIDIndicator").style.display="none"},1e3),setTimeout(function(){e.play()},1e3),setTimeout(function(){e.classList.add("fadeOut")},2e3),setTimeout(function(){e.classList.add("ended"),e.remove(),t.remove(),doneLoading()},2500)});let o,s=(o=0,function(e){if(returnIsMobile())return;let t=Date.now();if(t-o>=16.666666666666668){let n=document.querySelector(".cursor"),s=document.querySelector(".cursorDot");n.style.left=e.pageX+"px",n.style.top=e.pageY+"px",s.style.left=e.pageX+"px",s.style.top=e.pageY+"px",o=t}});document.addEventListener("mousemove",s),document.body.style.cursor="none"});let loadingIsOver=!1;const menuDisplay=document.getElementById("MenuButtonContainer");function doneLoading(){loadingIsOver=!0,menuDisplay.style.display="unset"}function loadingIsOverFunc(){if(loadingIsOver)return!0}menuDisplay.style.display="none";var rd=document.querySelector(".robot-description"),ro2=document.querySelector(".robot-name-outline"),ron=document.querySelector(".robot-name"),ro=document.querySelector(".robot-name-outline2"),abe=document.querySelector(".AboutUsTextTitle"),abeo=document.querySelector(".AboutUsTextTitleOutline"),abed=document.querySelector(".AboutUsTextDesc"),frame=document.querySelectorAll('[data-custom="homeMovingItems"]'),staffPanelContainer=document.querySelector(".staffPanelContainer"),aboutUsContainer=document.querySelector(".AboutUsItemSide");const throttleUpdate=function(){let e=0;return function(t){if(!0===isMobileDevice)return;let n=Date.now();if(n-e>=66.66666666666667){frame.forEach(e=>{let n=t.clientX,o=t.clientY,s=(n-window.innerWidth/2)*.013,r=(o-window.innerHeight/2)*.013;e.style.transform=`translate(${s}px, ${r}px)`});let o=t.clientX,s=t.clientY,r=(o-window.innerWidth/2)*.013,i=(s-window.innerHeight/2)*.013;rd.style.transform=`translate(${r}px, ${i}px)`,ro2.style.transform=`translate(${r}px, ${i}px)`,ron.style.transform=`translate(${r}px, ${i}px)`,ro.style.transform=`translate(${r}px, ${i}px)`,abe.style.transform=`translate(${r}px, ${i}px)`,abeo.style.transform=`translate(${r}px, ${i}px)`,abed.style.transform=`translate(${r}px, ${i}px)`,staffPanelContainer.style.transform=`translate(${r}px, ${i}px)`,aboutUsContainer.style.transform=`translate(${r}px, ${i}px)`,e=n}}}();document.addEventListener("mousemove",function(e){requestAnimationFrame(function(){throttleUpdate(e)})});var s1=document.getElementById("Tier1SponsorIcon"),s2=document.getElementById("Tier2SponsorIcon"),s3=document.getElementById("Tier3SponsorIcon"),s4=document.getElementById("Tier4SponsorIcon"),exit=document.querySelector(".sponsorTierExitButton"),s1O=s1.style.transform,s2O=s2.style.transform,s3O=s3.style.transform,s4O=s4.style.transform,tier1TextContent="<b>Tier 1</b> Sponsorship Package <br><br> Pricing > $50/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br><br> Click <i>Learn More</i> at the top to sponsor us!",tier2TextContent='<b>Tier 2</b> Sponsorship Package <br><br> Pricing > $100/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br> > Social media posts dedicated to sponsor <br><br> > "Brought to you by" name recognition on workshops <br><br><br> Click <i>Learn More</i> at the top to sponsor us!',tier3TextContent='<b>Tier 3</b> Sponsorship Package <br><br> Pricing > $250/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br> > Social media posts dedicated to sponsor <br><br> > "Brought to you by" name recognition on workshops <br><br> > Logo and Description on competition banners & posters <br><br><br> Click <i>Learn More</i> at the top to sponsor us!',tier4TextContent='<b>Tier 4</b> Sponsorship Package <br><br> Pricing > $500/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br> > Social media posts dedicated to sponsor <br><br> > "Brought to you by" name recognition on workshops <br><br> > Logo and Description on competition banners & posters <br><br> > "Brought to you by" name recognition in our logo and advertisements <br><br> > "Brought to you by" recognition on our website <br><br><br> Click <i>Learn More</i> at the top to sponsor us!',tier1TextContentMobile="<b>Tier 1</b> Sponsorship <br> > $50/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us",tier2TextContentMobile='<b>Tier 2</b> Sponsorship <br> > $100/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us <br>> Social media posts dedicated to sponsor <br>> "Brought to you by" recognition on workshops/tutorials',tier3TextContentMobile='<b>Tier 3</b> Sponsorship <br> > $250/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us <br>> Social media posts dedicated to sponsor <br>> "Brought to you by" recognition on workshops/tutorials <br>> Logo/Description on competition banners & posters',tier4TextContentMobile='<b>Tier 4</b> Sponsorship <br> > $500/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us <br>> Social media posts dedicated to sponsor <br>> "Brought to you by" recognition on workshops/tutorials <br>> Logo/Description on competition banners & posters <br>> "Brought to you by" recognition in our logo and advertisements <br>> "Brought to you by" recognition on our website';let inClick=!1;var counterForMobile=2;let inReverse=!1;const sponsorInformationContainerMainDisplay=document.getElementById("sponsorInformationContainerMainDisplayID"),mobileButtonNextSponsor=document.querySelector(".mobileButtonNextSponsor");function changeForMobile(){if(!0===isMobileDevice){sponsorInformationContainerMainDisplay.style.transform="translateX(-0%)";return}}function mobileButtonSponsorClicked(){if(0!==isMobileDevice&&!0===isMobileDevice){if(1===counterForMobile&&!inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-20%)",counterForMobile++,changeMobileText(tier1TextContentMobile);return}if(2===counterForMobile&&!inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-130%)",counterForMobile++,changeMobileText(tier2TextContentMobile);return}if(3===counterForMobile&&!inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-260%)",changeMobileText(tier3TextContentMobile),counterForMobile++;return}if(4===counterForMobile&&!inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-390%)",counterForMobile--,inReverse=!0,changeMobileText(tier4TextContentMobile);return}if(1===counterForMobile&&inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-0%)",counterForMobile++,changeMobileText(tier1TextContentMobile),inReverse=!1;return}if(2===counterForMobile&&inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-130%)",changeMobileText(tier2TextContentMobile),counterForMobile--;return}if(3===counterForMobile&&inReverse){sponsorInformationContainerMainDisplay.style.transform="translateX(-260%)",changeMobileText(tier3TextContentMobile),counterForMobile--;return}}}changeForMobile(),mobileButtonNextSponsor.addEventListener("click",function(){mobileButtonSponsorClicked()}),mobileButtonSponsorClicked(),exit.addEventListener("click",function(){!0!==isMobileDevice&&(SponsorTiersTextContent.style.opacity=0,exit.style.opacity=0,inClick=!1,s1.style.display="unset",s2.style.display="unset",s3.style.display="unset",s4.style.display="unset",s1.style=s1O,s2.style=s2O,s3.style=s3O,s4.style=s4O,s1.style.opacity=1,s2.style.opacity=1,s3.style.opacity=1,s4.style.opacity=1)}),s1.addEventListener("click",function(){!0!==isMobileDevice&&(inClick=!0,exit.style.opacity=1,changeInnerHTML(tier1TextContent),s1.classList.add("sponsorIconFlickerIn"),s2.style.opacity=0,s3.style.opacity=0,s4.style.opacity=0,s2.style.display="none",s3.style.display="none",s4.style.display="none",setTimeout(function(){s1.classList.remove("sponsorIconFlickerIn"),s1.style="transform: scale(2.2) translate(0%, -15%)",s1.style.position="absolute"},1e3))}),s2.addEventListener("click",function(){!0!==isMobileDevice&&(inClick=!0,exit.style.opacity=1,changeInnerHTML(tier2TextContent),s2.classList.add("sponsorIconFlickerIn"),s1.style.opacity=0,s3.style.opacity=0,s4.style.opacity=0,s1.style.display="none",s3.style.display="none",s4.style.display="none",setTimeout(function(){s2.classList.remove("sponsorIconFlickerIn"),s2.style="transform: scale(2.2) translate(0%, -15%)",s2.style.position="absolute"},1e3))}),s3.addEventListener("click",function(){!0!==isMobileDevice&&(exit.style.opacity=1,inClick=!0,changeInnerHTML(tier3TextContent),s3.classList.add("sponsorIconFlickerIn"),s1.style.opacity=0,s2.style.opacity=0,s4.style.opacity=0,s2.style.display="none",s1.style.display="none",s4.style.display="none",setTimeout(function(){s3.classList.remove("sponsorIconFlickerIn"),s3.style="transform: scale(2.2) translate(0%, -15%)",s3.style.position="absolute"},1e3))}),s4.addEventListener("click",function(){!0!==isMobileDevice&&(exit.style.opacity=1,inClick=!0,changeInnerHTML(tier4TextContent),s4.classList.add("sponsorIconFlickerIn"),s1.style.opacity=0,s2.style.opacity=0,s3.style.opacity=0,s2.style.display="none",s1.style.display="none",s3.style.display="none",setTimeout(function(){s4.classList.remove("sponsorIconFlickerIn"),s4.style="transform: scale(2.2) translate(0%, -15%)",s4.style.position="absolute"},1e3))}),s1.addEventListener("mouseenter",function(){!0!==isMobileDevice&&!1==inClick&&(s1.style="filter: brightness(150%)",s2.style="filter: brightness(50%)",s3.style="filter: brightness(50%)",s4.style="filter: brightness(50%)")}),s1.addEventListener("mouseleave",function(){!0!==isMobileDevice&&!1==inClick&&(s1.style="filter: brightness(100%)",s2.style="filter: brightness(100%)",s3.style="filter: brightness(100%)",s4.style="filter: brightness(100%)")}),s2.addEventListener("mouseenter",function(){!0!==isMobileDevice&&!1==inClick&&(s2.style="filter: brightness(150%)",s1.style="filter: brightness(50%)",s3.style="filter: brightness(50%)",s4.style="filter: brightness(50%)")}),s2.addEventListener("mouseleave",function(){!0!==isMobileDevice&&!1==inClick&&(s1.style="filter: brightness(100%)",s3.style="filter: brightness(100%)",s4.style="filter: brightness(100%)",s2.style="filter: brightness(100%)")}),s3.addEventListener("mouseenter",function(){!0!==isMobileDevice&&!1==inClick&&(s3.style="filter: brightness(150%)",s2.style="filter: brightness(50%)",s1.style="filter: brightness(50%)",s4.style="filter: brightness(50%)")}),s3.addEventListener("mouseleave",function(){!0!==isMobileDevice&&!1==inClick&&(s2.style="filter: brightness(100%)",s1.style="filter: brightness(100%)",s4.style="filter: brightness(100%)",s3.style="filter: brightness(100%)")}),s4.addEventListener("mouseenter",function(){!0!==isMobileDevice&&!1==inClick&&(s4.style="filter: brightness(150%)",s2.style="filter: brightness(50%)",s1.style="filter: brightness(50%)",s3.style="filter: brightness(50%)")}),s4.addEventListener("mouseleave",function(){!0!==isMobileDevice&&!1==inClick&&(s2.style="filter: brightness(100%)",s1.style="filter: brightness(100%)",s3.style="filter: brightness(100%)",s4.style="filter: brightness(100%)")});const SponsorTiersTextContent=document.querySelector(".SponsorTiersTextContent");function changeInnerHTML(e){SponsorTiersTextContent.style.opacity=1,SponsorTiersTextContent.querySelector("p").innerHTML=e}var LearnMoreTextSponsor=document.querySelector(".LearnMoreTextSponsor");function changeMobileText(e){SponsorTiersTextContent.querySelector("p").innerHTML=e}function animateMenuX(){var e=document.getElementById("MenuButtonContainer"),t=document.getElementById("arrowTop"),n=document.getElementById("arrowBottom"),o=document.getElementById("arrowMiddle");if(e&&t&&n&&o){var s=e.offsetWidth,r=e.offsetHeight,i=1.25*Math.min(s,r),a=(s-i)*5e-4,l=(r-4.5)*1e-4;t.style.transform=`rotate(45deg) scaleX(${i/100}) scaleY(0.045)`,t.style.left=a+.6+"rem",t.style.top=l-1+"rem",t.style.height="4.5rem",n.style.transform=`rotate(-45deg) scaleX(${i/100}) scaleY(0.045)`,n.style.left=a+.6+"rem",n.style.top=l-1+"rem",n.style.height="4.5rem",o.style.opacity="0",o.style.transform=`rotate(-45deg) scaleX(${i/100}) scaleY(0.045)`,o.style.transformOrigin="center",o.style.height="4.5rem",o.style.left=(s-o.offsetWidth)/2+"px",o.style.top=l-1+"rem"}}function animateMenuXBack(){var e=document.getElementById("MenuButtonContainer"),t=document.getElementById("arrowTop"),n=document.getElementById("arrowBottom"),o=document.getElementById("arrowMiddle");if(e&&t&&n&&o){var s=e.offsetWidth,r=e.offsetHeight,i=1.25*Math.min(s,r),a=(s-i)*5e-4,l=(r-4.5)*1e-4;t.style.transform=`rotate(0deg) scaleX(${i/100}) scaleY(0.045)`,t.style.left=a+.6+"rem",t.style.top=l-.6+"rem",t.style.height="4.5rem",n.style.transform=`rotate(0deg) scaleX(${i/100}) scaleY(0.045)`,n.style.left=a+.6+"rem",n.style.top=l-1.1+"rem",n.style.height="4.5rem",o.style.opacity="1",o.style.transform=`rotate(0deg) scaleX(${i/100}) scaleY(0.045)`,o.style.height="4.5rem",o.style.left=a+.6+"rem",o.style.top=l-1.6+"rem"}}LearnMoreTextSponsor.addEventListener("click",function(){window.open("src/pdf.html","_blank")}),document.addEventListener("DOMContentLoaded",()=>{if(!0===isMobileDevice)return;var e=document.querySelectorAll('[data-custom2="moveSquare"]'),t=document.querySelectorAll('[data-custom3="moveItem"]');let n=function(){let n=0;return function(o){let s=Date.now();s-n>=100&&(e.forEach(e=>{requestAnimationFrame(()=>{let t=o.clientX,n=o.clientY,s=(t-window.innerWidth/2)*.008,r=(n-window.innerHeight/2)*.008;e.style.transform=`translate(${s}px, ${r}px)`})}),t.forEach(e=>{requestAnimationFrame(()=>{let t=o.clientX,n=o.clientY,s=(t-window.innerWidth/2)*.02,r=(n-window.innerHeight/2)*.02;e.style.transform=`translate(${s}px, ${r}px)`})}),n=s)}}();document.addEventListener("mousemove",n)}),document.addEventListener("DOMContentLoaded",function(){var e={element1:document.querySelector(".MenuButtonContainer"),element3:document.querySelector(".LearnMoreSponsorButton"),element4:document.querySelector(".OurSponsorsButton"),element5:document.querySelector(".rankingContainer"),element6:document.querySelector(".tutorialContainer"),element7:document.querySelector(".mailContainer"),element8:document.querySelector(".schoolContainer"),element9:document.querySelector(".instagramContainer"),element10:document.querySelector(".AboutUs"),element11:document.querySelector(".AboutUs"),element12:document.querySelector(".LearnMoreSponsorButton"),element13:document.querySelector(".Sponsor"),element14:document.querySelector(".Social"),element15:document.querySelector(".tutorialContainer"),element16:document.querySelector(".Staff"),element17:document.querySelector(".Robots"),element18:document.querySelector(".homeMenuContainerClass"),element19:document.querySelector(".trTitle"),element20:document.querySelector(".StaffDescriptionExitButton"),element21:document.querySelector(".displayNames"),element22:document.querySelector(".staffPageStaffContentXButton"),element23:document.getElementById("Tier1SponsorIcon"),element24:document.getElementById("Tier2SponsorIcon"),element25:document.getElementById("Tier3SponsorIcon"),element26:document.getElementById("Tier4SponsorIcon"),element27:document.querySelector(".sponsorTierExitButton")};let t=document.querySelector(".cursor");Object.values(e).forEach(function(e){e&&(e.addEventListener("mouseover",function(){t.style.transform="translate(-50%, -50%) scale(0.5)",t.style.backgroundColor="rgba(221, 221, 221, 0.233)"}),e.addEventListener("mouseleave",function(){t.style.transform="translate(-50%,-50%) scale(1)",t.style.backgroundColor="transparent"}))}),document.querySelectorAll(".pricingComponentRelative").forEach(function(e){e.addEventListener("mouseover",function(){t.style.transform="translate(-50%, -50%) scale(0.5)",t.style.backgroundColor="rgba(221, 221, 221, 0.233)"}),e.addEventListener("mouseleave",function(){t.style.transform="translate(-50%, -50%) scale(1)",t.style.backgroundColor="transparent"})}),document.querySelectorAll('[data-custom2="StaffMove"]').forEach(function(e){e.addEventListener("mouseover",function(){t.style.transform="translate(-50%, -50%) scale(0.5)",t.style.backgroundColor="rgba(221, 221, 221, 0.233)"}),e.addEventListener("mouseleave",function(){t.style.transform="translate(-50%, -50%) scale(1)",t.style.backgroundColor="transparent"})}),document.querySelectorAll(".displayNames").forEach(function(e){e.addEventListener("mouseover",function(){t.style.transform="translate(-50%, -50%) scale(0.5)",t.style.backgroundColor="rgba(221, 221, 221, 0.233)"}),e.addEventListener("mouseleave",function(){t.style.transform="translate(-50%, -50%) scale(1)",t.style.backgroundColor="transparent"})})});const instagramIMG=document.getElementById("mobileSIMG-Insta"),emailIMG=document.getElementById("mobileSIMG-Email"),instagramTab=document.getElementById("mobileSocialsHeaderText-Instagram"),emailTab=document.getElementById("mobileSocialsHeaderText-Email"),imgTag=document.querySelector(".tagOnImage-Mobile");var swchInfo=1;function updnImages(){emailIMG.style.transform="translateX(-5%)",instagramIMG.style.transform="translateX(-5%)",imgTag.style.transform="translateX(-5%)",setTimeout(function(){imgTag.style.transform="translateX(0%)",emailIMG.style.transform="translateX(0%)",instagramIMG.style.transform="translateX(0%)"},200)}function clrMbCnt(){instagramIMG.style.opacity=0,emailIMG.style.opacity=0,instagramTab.style.opacity=0,emailTab.style.opacity=0,imgTag.style.opacity=0,document.querySelector(".mbOurEmail").style.opacity=1,setTimeout(function(){swchInfo=1,unclrMbCnt()},4e3)}function unclrMbCnt(){instagramIMG.style.opacity=1,instagramTab.style.opacity=1,emailTab.style.opacity=1,imgTag.style.opacity=1,imgTag.textContent="+ SEE MORE",instagramTab.style="color: white",emailTab.style="color: rgb(165, 165, 165)",document.querySelector(".mbOurEmail").style.opacity=0}instagramTab.addEventListener("click",function(){!0===isMobileDevice&&(updnImages(),swchInfo=1,instagramTab.style="color: white",emailTab.style="color: rgb(165, 165, 165)",emailIMG.style.opacity=0,instagramIMG.style.opacity=1,imgTag.textContent="+ SEE MORE")}),emailTab.addEventListener("click",function(){!0===isMobileDevice&&(updnImages(),swchInfo=2,emailTab.style="color: white",instagramTab.style="color: rgb(165, 165, 165)",emailIMG.style.opacity=1,instagramIMG.style.opacity=0,imgTag.textContent="+ EMAIL US")}),imgTag.addEventListener("click",function(){if(!0===isMobileDevice&&1===swchInfo){var e=window.open("https://www.instagram.com/entradox/","_blank");e?e.focus():alert("Popup is blocked. Please enable popups to view Instagram.")}!0===isMobileDevice&&2===swchInfo&&clrMbCnt()}),document.addEventListener("DOMContentLoaded",()=>{console.log("%c⚔️ [重要] アークナイツをやる","color: #3884ff; font-size: 50px; background: #1a1a1a; padding: 10px; border-radius: 3px;"),console.log("%c\uD83D\uDC51 仰るとおり。%cマドロック%cは神です","color: #3884ff; font-size: 35px; background: #1a1a1a; padding: 10px; border-radius: 3px;","color: #ffb300; font-size: 40px; background: #1a1a1a; padding: 10px; border-radius: 3px;","color: #3884ff; font-size: 35px; background: #1a1a1a; padding: 10px; border-radius: 3px;");var e,t={1:["Daniel Ashtiani","Hello, I'm Daniel Ashtiani. I am currently a grade 11 student enrolled in Meadowridge School. My hobbies include CAD modelling, kickboxing, RC car racing, swimming, and robotics","The CAD builder designs the model of the robot. They collaborate closely with team members to iterate on designs, troubleshoot potential issues, and contribute to the overall success of the FTC team."],2:["Aasha Askew","Hello! My name is Aasha and I am a current grade 11 student at Meadowridge school. Outside of robotics, I like the gym, watching anime, and playing competitive waterpolo.","Managers are like the leaders of a work team. They plan what needs to be done, organize resources, and guide everyone to reach their goals."],3:["Amy Xu","My name is Amy. This is my 4th year participating in the FIRST program. I hope my past experiences will help us succeed in the competition this year. I am confident this will be a year full of learning and successes","Builders, assemble, and fine-tune the mechanical and electronic parts of our robot. Our builders prioritize the robots adaptability with our programmers to ensure the robot is ready for success."],4:["Liam Bradley","I'm BRADLEY and I'm the best coder and builder on Entradox as well as a pro athlete and gamer","Programmers code the robot's movements and turn our plans into executable instructions. They troubleshoot problems and collaborate with the builders to make sure the code works well with the robot. "],5:["Nicole Zhang","Hello, my name's Nicole and I've been a builder for Meadowridge's robotics team for the last 2 years. This year I will look into doing more arts + promo along with the building and finance that I did previously. I really enjoy skiing and going to the gym","The finance department manages the team's financial resources and ensuring we dont go broke. They handle budgeting, financial planning, and fundraising activities to secure the necessary funds for the team's projects and competitions."],6:["Aella Gong","Hello, my name is Aella, and I've been doing Arts and Promo for Meadowridge's robotics team for the last year and a half. However, this will be my first time in Outreach. I'm very excited to be a part of Entradox this year!","The promotion department helps build the team's image and promoting content. They make strategies to promote the team within the school, local community, and online."],7:["Andy Xu","Hi my name is Andy, I help with building and finance for the team. I’m here to help us do well at the competition this year","The driver is the hands-on operator of the robot. They control its movements and actions during competitions using a gamepad. The strategists help them come up with plans during the game to help us win."],8:["Oliver Low","Hello, I'm Oliver and this is the first time I've been the strategist/field coach for a FIRST team. I'm really looking forward to being a part of Entradox and spending time working on the robot with my friends. I enjoy curling, skiing, and Formula 1 racing","The strategist guides the robot's actions based on real-time observations. They communicate with the drive team, offering insights and new strategies. They have a good understanding of the game rules, and good field vision."],9:["Hari Baidwan","I am a sixteen year old at Meadowridge School who is relatively experienced in the area of building (for robotics), I have been a builder on two prior teams. That being said, I am looking forward to diving into the arts and promo component for our team this year as I am entirely new to this","Builders, assemble, and fine-tune the mechanical and electronic parts of our robot. Our builders prioritize the robots adaptability with our programmers to ensure the robot is ready for success."],10:["Derek Lee","Hey, my name's Derek. I enjoy walking and listening to leaves rustling. I often trip over my own feet. This year I will be... What am I doing again?","Programmers code the robot's movements and turn our plans into executable instructions. They troubleshoot problems and collaborate with the builders to make sure the code works well with the robot. "]},n={1:["Daniel Ashtiani","ENTRADOX MANAGER","CAD, BUILDER"],2:["Aasha Askew","ENTRADOX MANAGER","BUILDER"],3:["Amy Xu","PROGRAMMER","BUILDER"],4:["Liam Bradley","PROGRAMMER","BUILDER"],5:["Nicole Zhang","FINANCE","PROMOTION"],6:["Aella Gong","ARTS","PROMOTION"],7:["Andy Xu","DRIVER","FINANCE"],8:["Oliver Low","STRATEGIST","BUILDER"],9:["Hari Baidwan","BUILDER","OUTREACH"],10:["Derek Lee","PROGRAMMER","WEBSITE CREATOR"]},o={1:["Daniel Ashtiani","assets/staff-pictures/1.png"],2:["Aasha Askew","assets/staff-pictures/2.png"],3:["Amy Xu","assets/staff-pictures/3.png"],4:["Liam Bradley","assets/staff-pictures/4.png"],5:["Nicole Zhang","assets/staff-pictures/5.png"],6:["Aella Gong","assets/staff-pictures/6.png"],7:["Andy Xu","assets/staff-pictures/7.png"],8:["Oliver Low","assets/staff-pictures/8.png"],9:["Hari Baidwan","assets/staff-pictures/9.png"],10:["Derek Lee","assets/staff-pictures/10.png"]};function s(e){for(var t in n)if(n.hasOwnProperty(t)&&n[t][0]===e)return[n[t][1],n[t][2]];return null}function r(e){for(var t in o)if(o.hasOwnProperty(t)&&o[t][0]===e)return[o[t][1]];return null}function i(e){for(var n in t)if(t.hasOwnProperty(n)&&t[n][0]===e)return[t[n][1],t[n][2]];return null}var a=document.getElementById("ContainerForStaffDescriptionBodyID"),l=document.getElementById("staffPageStaffContentXButtonID"),c=document.querySelectorAll(".displayNames"),d=document.querySelector(".HumanBody-Image");function y(e){return"Daniel Ashtiani"==e||"Aasha Askew"==e?"rgb(255, 200, 0)":"Oliver Low"==e?"rgb(183, 0, 255)":"rgb(226, 226, 226)"}function u(){g(),p()}function m(){a.style.opacity=1,b(),f()}function f(){var e=document.getElementById("HumanBodyID"),t=document.getElementById("StaffMemberHeadlineContainer-NameID"),n=document.getElementById("ContainerForStaffDescriptionTextID"),o=document.getElementById("StaffLabelOnContainerForDescID"),s=document.getElementById("StaffMemberHeadlineContainer2ID");document.querySelector(".VerticleDownRect").style.opacity=1,document.querySelector(".LineThroughTopExtend").style.opacity=1,e.classList.add("displayOnFlicker"),t.classList.add("flickerInText"),n.classList.add("slideInStaffDesc"),o.classList.add("staffContainerSlideIn"),s.classList.add("headlineFlickerInText"),l.classList.add("xbuttonFlicker"),document.querySelector(".adding-pic-soon").style.opacity=1,setTimeout(function(){e.classList.remove("displayOnFlicker"),e.style="left: 30%",e.style.opacity=1,t.classList.remove("flickerInText"),t.style="left: 81%",t.style.opacity=1,n.classList.remove("slideInStaffDesc"),n.style="left: 84%",n.style.opacity=1,o.classList.remove("slideInStaffDesc"),o.style="left: 53%",o.style.opacity=1,s.classList.remove("headlineFlickerInText"),s.style="left: 50%",s.style.opacity=1,l.classList.remove("xbuttonFlicker"),l.classList.opacity=1},1e3)}function p(){var e=document.getElementById("HumanBodyID"),t=document.getElementById("StaffMemberHeadlineContainer-NameID"),n=document.getElementById("ContainerForStaffDescriptionTextID"),o=document.getElementById("StaffLabelOnContainerForDescID"),s=document.getElementById("StaffMemberHeadlineContainer2ID");e.classList.add("displayOffFlicker"),t.classList.add("flickerOutText"),n.classList.add("slideOutStaffDesc"),o.classList.add("staffContainerSlideOut"),s.classList.add("headlineFlickerOutText"),l.classList.add("xbuttonFlickerOut"),document.querySelector(".adding-pic-soon").style.opacity=0,setTimeout(function(){e.classList.remove("displayOffFlicker"),e.style="left: 25%",e.style.opacity=0,t.classList.remove("flickerOutText"),t.style="left: 40%",t.style.opacity=0,n.classList.remove("slideOutStaffDesc"),n.style="left: 82%",n.style.opacity=0,o.classList.remove("staffContainerSlideOut"),o.style="left: 82%",document.querySelector(".VerticleDownRect").style.opacity=0,document.querySelector(".LineThroughTopExtend").style.opacity=0,o.style.opacity=0,s.classList.remove("headlineFlickerOutText"),s.style="left: 40%",s.style.opacity=0,l.classList.remove("xbuttonFlickerOut"),l.classList.opacity=0},1e3)}function b(){var e=document.getElementById("CurrentStaffList-Engineer"),t=document.getElementById("rolename_managers");e.classList.add("evaporateNewStaff"),t.classList.add("evaporateNewStaff"),setTimeout(function(){e.classList.remove("evaporateNewStaff"),e.style="transform: translateX(-20%)",e.style.opacity=0,t.classList.remove("evaporateNewStaff"),t.style="transform: translateX(-20%)",t.style.opacity=0},500)}function g(){var e=document.getElementById("CurrentStaffList-Engineer"),t=document.getElementById("rolename_managers");e.classList.add("unevaporateNewStaff"),t.classList.add("unevaporateNewStaff"),setTimeout(function(){e.classList.remove("unevaporateNewStaff"),e.style="transform: translateX(0%)",e.style.opacity=1,t.classList.remove("unevaporateNewStaff"),t.style="transform: translateX(0%)",e.style.opacity=1},500)}l.addEventListener("click",function(){u(),l.style.opacity=0}),c.forEach(t=>{t.addEventListener("click",function(){var n=document.getElementById("StaffMemberHeadlineContainer-NameID"),o=document.getElementById("StaffMemberHeadlineContainer2ID");l.style.opacity=1,m(),e=t.id,n.textContent=e,o.textContent=e;var a=s(e);if(null!==a){var c=a[0],u=a[1];document.querySelector(".StaffRoleTextDisplay").textContent=c,document.querySelector(".StaffRoleTextDisplay2").textContent=u,document.getElementById("MainRoleColorID").style.color=y(e)}var f=i(e);if(null!==f){var p=f[0],b=f[1];document.querySelector(".ContainerForStaffDescriptionTextContent").textContent=p,document.querySelector(".ContainerForStaffDescriptionTextContent2").textContent=b}var g=r(e);d.src=g})})});var displayNames=document.querySelectorAll(".displayNames");displayNames.forEach(e=>{e.addEventListener("mouseenter",function(){var t="Icon_"+e.id;document.getElementById(t).classList.add("iconHoverClass")})}),displayNames.forEach(e=>{e.addEventListener("mouseleave",function(){var t="Icon_"+e.id;document.getElementById(t).classList.remove("iconHoverClass")})});var menuButton=document.querySelector(".MenuButtonContainer");let inMenu=!1;var menuGUI=document.getElementById("menupage");function checkInMenu(){return!0===inMenu}function makeInMenuFalse(){inMenu=!1}function slideIn(){menuGUI.style="width: 100%",menuGUI.classList.add("fadeInTheMenu"),setTimeout(function(){menuGUI.classList.remove("fadeInTheMenu"),menuGUI.style.opacity=1},400)}function slideOut(){menuGUI.style="width: 0%",menuGUI.classList.add("fadeOutTheMenu"),setTimeout(function(){menuGUI.classList.remove("fadeOutTheMenu"),menuGUI.style.opacity=0},400)}menuButton.addEventListener("click",function(){!1==inMenu&&loadingIsOverFunc()?(animateMenuX(),inMenu=!0,slideIn()):loadingIsOverFunc()&&(animateMenuXBack(),inMenu=!1,slideOut())});const rankingButton=document.querySelector(".rankingItem"),tutorialButton=document.querySelector(".tutorialItem"),mailButton=document.querySelector(".mailItem"),schoolButton=document.querySelector(".schoolItem"),instagramButton=document.querySelector(".instagramItem"),podcastButton=document.querySelector(".podcastItem");var pageT="social";function openEmail(){let e=`mailto:entradoxrobotics@gmail.com?subject=${encodeURIComponent("Your subject")}&body=${encodeURIComponent("Your message")}`;window.location.href=e}rankingButton.addEventListener("click",function(){window.open("https://ftcscout.org/teams/14316","_blank")||alert("Pop up was blocked. Please enable pop ups to view the page")}),tutorialButton.addEventListener("click",function(){window.open("_blank")}),mailButton.addEventListener("click",function(){openEmail()}),schoolButton.addEventListener("click",function(){window.open("https://www.meadowridge.bc.ca/","_blank")||alert("Pop up was blocked. Please enable pop ups to view the page")}),instagramButton.addEventListener("click",function(){window.open("https://www.instagram.com/entradox/","_blank")||alert("Pop up was blocked. Please enable pop ups to view the page")}),podcastButton.addEventListener("click",function(){window.open("https://open.spotify.com/show/3HeGGq8z0BoYhlDHMtkI3N","_blank")||alert("Pop up was blocked. Please enable pop ups to view the page")});var isMobileDevice=function(){var e=navigator.userAgent,t=navigator.platform,n=e.indexOf("iPhone")>-1,o=e.indexOf("iPod")>-1,s=e.indexOf("iPad")>-1,r=/Android (\d+(?:\.\d+)*)/.test(e);return!!(/iPad|iPhone|iPod/.test(t)|(n|s|o|r))||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(t)}();function returnIsMobile(){return isMobileDevice}