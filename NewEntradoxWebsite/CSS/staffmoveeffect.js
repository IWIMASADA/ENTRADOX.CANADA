document.addEventListener('DOMContentLoaded', () => {
    /* STAFF DESCRIPTIONS */

    var descriptions = {
        0: "Hello! My name is Aasha and I am a current grade 11 student at Meadowridge school. Outside of robotics, I like the gym, watching anime, and playing competitive waterpolo.",
        1: "Hello, I'm Daniel Ashtiani. I am currently a grade 11 student enrolled in Meadowridge School. My hobbies include CAD modelling, kickboxing, RC car racing, swimming, and robotics",
        2: "I am a sixteen year old at Meadowridge School who is relatively experienced in the area of building (for robotics), I have been a builder on two prior teams. That being said, I am looking forward to diving into the arts and promo component for our team this year as I am entirely new to this",
        3: "I'm BRADLEY and I'm the best coder and builder on Entradox as well as a pro athlete and gamer",
        4: "Hello, my name is Aella, and I've been doing Arts and Promo for Meadowridge's robotics team for the last year and a half. However, this will be my first time in Outreach. I'm very excited to be a part of Entradox this year!",
        5: "Hello, my name's Nicole and I've been a builder for Meadowridge's robotics team for the last 2 years. This year I will look into doing more arts + promo along with the building and finance that I did previously. I really enjoy skiing and going to the gym",
        6: "My name is Amy. This is my 4th year participating in the FIRST program. I hope my past experiences will help us succeed in the competition this year. I am confident this will be a year full of learning and successes",
        7: "Hello, I'm Oliver and this is the first time I've been the strategist/field coach for a FIRST team. I'm really looking forward to being a part of Entradox and spending time working on the robot with my friends. I enjoy curling, skiing, and Formula 1 racing",
        8: "Hey, my name's Derek. I enjoy walking and listening to leaves rustling. I often trip over my own feet. This year I will be... What am I doing again?",
        9: "Unadded"
    };

    var departments = {
        1: "Builder, CAD, Department Manager",
        0: "Builder, Department Manager",
        2: "Arts and Promotion Department",
        3: "Programming Department",
        4: "Arts and Promotion Department",
        5: "Arts and Promotion, Finance Department",
        6: "Builder, Programmer, Outreach Department",
        7: "Strategist and Field Coach",
        8: "Website Developer",
        9: "Undetermined"
    };

    var frame = document.querySelectorAll('[data-custom2="StaffMove"]');
    
    frame.forEach(frameObject => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
    
            const translateX = (x - window.innerWidth / 2) * 0.023;
            const translateY = (y - window.innerHeight / 2) * 0.023;

            frameObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    

    });

    var other = document.querySelectorAll('[data-custom3="artMove"]');
    
    other.forEach(otherObject => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
    
            const translateX = (x - window.innerWidth / 2) * 0.005;
            const translateY = (y - window.innerHeight / 2) * 0.005;

            otherObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    

    });

    var aboutUsMovingObjects = document.querySelectorAll('[data-custom5="aboutUsMovingObjects"]');
    
    aboutUsMovingObjects.forEach(frameObject => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
    
            const translateX = (x - window.innerWidth / 2) * 0.025;
            const translateY = (y - window.innerHeight / 2) * 0.025;

            frameObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    

    });

    var aboutUsMovingText = document.querySelectorAll('[data-custom6="aboutUsMovingText"]');
    
    aboutUsMovingText.forEach(frameObject => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
    
            const translateX = (x - window.innerWidth / 2) * 0.01;
            const translateY = (y - window.innerHeight / 2) * 0.01;

            frameObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    

    });


    var staff = document.querySelector('.ContainerForStaffOverview')
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
    
            const translateX = (x - window.innerWidth / 2) * 0.01;
            const translateY = (y - window.innerHeight / 2) * 0.01;

            staff.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });

    var employees = document.querySelectorAll('[data-custom2="StaffMove"]');
    
    var StaffFramesHolder = document.querySelector('.StaffFramesHolder')
    var StaffFramesHolder2 = document.querySelector('.StaffFramesHolder2')
    var StaffFramesHolder3 = document.querySelector('.StaffFramesHolder3')
    var ContainerForStaffOverview = document.querySelector('.ContainerForStaffOverview')
    var grayLayoutDescriptionContainer = document.querySelector('.grayLayoutDescriptionContainer')
    var StaffEntradoxTag = document.querySelector('.StaffEntradoxTag')

    var nameHelper;
    employees.forEach(frameObject => {
        frameObject.addEventListener('click', function() {
            if (checkPageType() == 'Staff') {
                nameHelper = frameObject.id;
                var Classes = frameObject.classList
                var IDHelper = Classes[1];
                staffDescriptionChanger(IDHelper);
                evaporateStaff();
                summonOverview();
                staffNameChanger(nameHelper);
            }
        });
    });

    function evaporateStaff() {
        StaffFramesHolder.classList.add('staffFramesGoUpAnimations')
        StaffFramesHolder2.classList.add('staffFramesGoUpAnimations')
        StaffFramesHolder3.classList.add('staffFramesGoUpAnimations')


    }
    function summonOverview() {
        ContainerForStaffOverview.classList.add('staffOverviewContainerAppear')
        grayLayoutDescriptionContainer.classList.add('expandGrayContainer')
        StaffEntradoxTag.classList.add('expandEntradoxWhiteContainer')
    }


    var buttonToExitOverview = document.querySelector('.StaffDescriptionExitButton');


    buttonToExitOverview.addEventListener('click', function(){
        UNevaporateStaff();
        UNsummonOverview();

    });


    function UNevaporateStaff() {
        StaffFramesHolder.classList.remove('staffFramesGoUpAnimations');
        StaffFramesHolder2.classList.remove('staffFramesGoUpAnimations');
        StaffFramesHolder3.classList.remove('staffFramesGoUpAnimations');
        void StaffFramesHolder.offsetWidth;
    }
    function UNsummonOverview() {
        ContainerForStaffOverview.classList.remove('staffOverviewContainerAppear');
        grayLayoutDescriptionContainer.classList.remove('expandGrayContainer')
        StaffEntradoxTag.classList.remove('expandEntradoxWhiteContainer')

    }


    function staffNameChanger(staffName){
        var name = document.querySelector('.TagNamePerson');
        name.textContent = staffName;
    }

    function staffDescriptionChanger(ID){
        var desc = document.querySelector('.TagStaffMemberDescription');
        desc.textContent  = descriptions[ID];

        var dept = document.querySelector('.TagRoleText');
        dept.textContent = departments[ID];

    }





    // new functions
    var counter = 0;
    var ContainerForStaffDescriptionBodyID = document.getElementById('ContainerForStaffDescriptionBodyID');

    document.addEventListener('click', function() {
        if (counter == 1) {
            counter = 0;
            unevaporateNewStaffList()
            displayOffForStaff()

        } else {
            counter++;
            evaporateNewStaffList()
            ContainerForStaffDescriptionBodyID.style.display = 'unset';
            displayOnForStaff()
        }
    })

    function displayOnForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var shadow = document.getElementById('HumanShadowID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');

        picutre.classList.add("displayOnFlicker")
        shadow.classList.add("displayOnFlickerShadow")
        name.classList.add("flickerInText")
        desc.classList.add("slideInStaffDesc")
        labels.classList.add("staffContainerSlideIn")


        setTimeout(function() {
            picutre.classList.remove('displayOnFlicker');
            picutre.style = "left: 30%";
            picutre.style.opacity = 1;


            shadow.classList.remove('displayOnFlickerShadow');
            shadow.style = "left: 15%";
            shadow.style.opacity = 1;

            
            name.classList.remove('flickerInText');
            name.style = "left: 81%";
            name.style.opacity = 1;


            desc.classList.remove('slideInStaffDesc');
            desc.style = "left: 84%";
            desc.style.opacity = 1;

            labels.classList.remove('slideInStaffDesc');
            labels.style = "left: 53%";
            labels.style.opacity = 1;
        }, 1000);
        
    }

    function displayOffForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var shadow = document.getElementById('HumanShadowID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');

        picutre.classList.add("displayOffFlicker")
        shadow.classList.add("displayOffFlickerShadow")
        name.classList.add("flickerOutText")
        desc.classList.add("slideOutStaffDesc")
        labels.classList.add("staffContainerSlideOut")

        setTimeout(function() {
            picutre.classList.remove('displayOffFlicker');
            picutre.style = "left: 25%";
            picutre.style.opacity = 0;


            shadow.classList.remove('displayOffFlickerShadow');
            shadow.style = "left: 10%";
            shadow.style.opacity = 0;
                        
            name.classList.remove('flickerOutText');
            name.style = "left: 40%";
            name.style.opacity = 0;

            desc.classList.remove('slideOutStaffDesc');
            desc.style = "left: 82%";
            desc.style.opacity = 0;

            labels.classList.remove('staffContainerSlideOut');
            labels.style = "left: 84%";
            labels.style.opacity = 0;

            ContainerForStaffDescriptionBodyID.style.display = 'none';

        }, 1000);

    }



    function evaporateNewStaffList() {
        var staffList = document.getElementById("CurrentStaffList-Engineer");
        var staffListLabel = document.getElementById("rolename_managers");

        staffList.classList.add('evaporateNewStaff');
        staffListLabel.classList.add('evaporateNewStaff');
        
        setTimeout(function() {
            staffList.classList.remove('evaporateNewStaff');
            staffList.style = "transform: translateX(-20%)";
            staffList.style.opacity = 0;


            staffListLabel.classList.remove('evaporateNewStaff');
            staffListLabel.style = "transform: translateX(-20%)";
            staffListLabel.style.opacity = 0;

        }, 500);
    }

    function unevaporateNewStaffList() {
        var staffList = document.getElementById("CurrentStaffList-Engineer");
        var staffListLabel = document.getElementById("rolename_managers");

        staffList.classList.add('unevaporateNewStaff');
        staffListLabel.classList.add('unevaporateNewStaff');

        setTimeout(function() {
            staffList.classList.remove('unevaporateNewStaff');
            staffList.style = "transform: translateX(0%)";
            staffList.style.opacity = 1;


            staffListLabel.classList.remove('unevaporateNewStaff');
            staffListLabel.style = "transform: translateX(0%)";
            staffList.style.opacity = 1;

        }, 500);
    }
});


var displayNames = document.querySelectorAll('.displayNames')

displayNames.forEach(name => {
    name.addEventListener('mouseenter', function() {
        var icon = "Icon_" + name.id
        var iconImage = document.getElementById(icon)
        iconImage.classList.add("iconHoverClass");
    });
})

displayNames.forEach(name => {
    name.addEventListener('mouseleave', function() {
        var icon = "Icon_" + name.id
        var iconImage = document.getElementById(icon)
        iconImage.classList.remove("iconHoverClass");
    });
})


