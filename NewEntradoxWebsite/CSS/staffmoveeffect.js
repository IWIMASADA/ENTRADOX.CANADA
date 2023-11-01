document.addEventListener('DOMContentLoaded', () => {
    /* STAFF DESCRIPTIONS */

    var nameToDescription = {
        1: ["Daniel Ashtiani", "Hello, I'm Daniel Ashtiani. I am currently a grade 11 student enrolled in Meadowridge School. My hobbies include CAD modelling, kickboxing, RC car racing, swimming, and robotics"],
        2: ["Aasha Askew", "Hello! My name is Aasha and I am a current grade 11 student at Meadowridge school. Outside of robotics, I like the gym, watching anime, and playing competitive waterpolo."],
        3: ["Amy Xu", "My name is Amy. This is my 4th year participating in the FIRST program. I hope my past experiences will help us succeed in the competition this year. I am confident this will be a year full of learning and successes"],
        4: ["Liam Bradley", "I'm BRADLEY and I'm the best coder and builder on Entradox as well as a pro athlete and gamer"],
        5: ["Nicole Zhang", "Hello, my name's Nicole and I've been a builder for Meadowridge's robotics team for the last 2 years. This year I will look into doing more arts + promo along with the building and finance that I did previously. I really enjoy skiing and going to the gym"],
        6: ["Aella Gong", "Hello, my name is Aella, and I've been doing Arts and Promo for Meadowridge's robotics team for the last year and a half. However, this will be my first time in Outreach. I'm very excited to be a part of Entradox this year!"],
        7: ["Andy Xu", "Add later"],
        8: ["Oliver Low", "Hello, I'm Oliver and this is the first time I've been the strategist/field coach for a FIRST team. I'm really looking forward to being a part of Entradox and spending time working on the robot with my friends. I enjoy curling, skiing, and Formula 1 racing"],
        9: ["Hari Baidwan", "I am a sixteen year old at Meadowridge School who is relatively experienced in the area of building (for robotics), I have been a builder on two prior teams. That being said, I am looking forward to diving into the arts and promo component for our team this year as I am entirely new to this"],
        10: ["Derek Lee", "Hey, my name's Derek. I enjoy walking and listening to leaves rustling. I often trip over my own feet. This year I will be... What am I doing again?"],
    };

    var nameToRole = {
        1: ["Daniel Ashtiani", "ENTRADOX MANAGER", "CAD, BUILDER"],
        2: ["Aasha Askew", "ENTRADOX MANAGER", "BUILDER"],
        3: ["Amy Xu", "PROGRAMMER", "BUILDER"],
        4: ["Liam Bradley", "PROGRAMMER", "BUILDER"],
        5: ["Nicole Zhang", "FINANCE", "PROMOTION"],
        6: ["Aella Gong", "ARTS", "PROMOTION"],
        7: ["Andy Xu", "DRIVER", "BUILDER"],
        8: ["Oliver Low", "STRATEGIST", "BUILDER"],
        9: ["Hari Baidwan", "BUILDER", "OUTREACH"],
        10: ["Derek Lee", "PROGRAMMER", "WEBSITE DESIGN"],
    };



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
    var ContainerForStaffDescriptionBodyID = document.getElementById('ContainerForStaffDescriptionBodyID');
    var xbutton = document.getElementById('staffPageStaffContentXButtonID');

    var employees = document.querySelectorAll('.displayNames');
    var nameHelper;

    xbutton.addEventListener('click', function() {
        hideStaff()
    })

    employees.forEach(staff => {
        staff.addEventListener('click', function() {
            var name = document.getElementById('StaffMemberHeadlineContainer-NameID')
            var nameBackground = document.getElementById('StaffMemberHeadlineContainer2ID')
            showStaff()
            nameHelper = staff.id;
            name.textContent = nameHelper;
            nameBackground.textContent = nameHelper;
        });
    });
    function hideStaff() {
        unevaporateNewStaffList()
        displayOffForStaff()
    }
    function showStaff() {
        evaporateNewStaffList()
        xbutton.style.display = 'unset';
        ContainerForStaffDescriptionBodyID.style.display = 'unset';
        displayOnForStaff()
    }


    function displayOnForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var shadow = document.getElementById('HumanShadowID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');
        var headline = document.getElementById('StaffMemberHeadlineContainer2ID');
        
        picutre.classList.add("displayOnFlicker")
        shadow.classList.add("displayOnFlickerShadow")
        name.classList.add("flickerInText")
        desc.classList.add("slideInStaffDesc")
        labels.classList.add("staffContainerSlideIn")
        headline.classList.add("headlineFlickerInText")
        xbutton.classList.add("xbuttonFlicker")

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

            headline.classList.remove('headlineFlickerInText');
            headline.style = "left: 50%";
            headline.style.opacity = 1;
            
            xbutton.classList.remove("xbuttonFlicker")
            xbutton.classList.opacity = 1;
        }, 1000);
        
    }

    function displayOffForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var shadow = document.getElementById('HumanShadowID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');
        var headline = document.getElementById('StaffMemberHeadlineContainer2ID');

        picutre.classList.add("displayOffFlicker")
        shadow.classList.add("displayOffFlickerShadow")
        name.classList.add("flickerOutText")
        desc.classList.add("slideOutStaffDesc")
        labels.classList.add("staffContainerSlideOut")
        headline.classList.add("headlineFlickerOutText")
        xbutton.classList.add("xbuttonFlickerOut")

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

            headline.classList.remove('headlineFlickerOutText');
            headline.style = "left: 40%";
            headline.style.opacity = 0;

            xbutton.classList.remove("xbuttonFlickerOut")
            xbutton.classList.opacity = 0;
            
            ContainerForStaffDescriptionBodyID.style.display = 'none';
            xbutton.style.display = 'none';

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




var staffPanelContainer = document.querySelector('.staffPanelContainer');
    
document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const translateX = (x - window.innerWidth / 2) * 0.015;
        const translateY = (y - window.innerHeight / 2) * 0.015;

        staffPanelContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
});