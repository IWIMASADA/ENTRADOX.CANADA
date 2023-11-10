document.addEventListener('DOMContentLoaded', () => {
    console.log("%c⚔️ [重要] アークナイツをやる", "color: #3884ff; font-size: 50px; background: #1a1a1a; padding: 10px; border-radius: 3px;");
    console.log(
      "%c👑 仰るとおり。%cマドロック%cは神です",
      "color: #3884ff; font-size: 35px; background: #1a1a1a; padding: 10px; border-radius: 3px;",
      "color: #ffb300; font-size: 40px; background: #1a1a1a; padding: 10px; border-radius: 3px;",
      "color: #3884ff; font-size: 35px; background: #1a1a1a; padding: 10px; border-radius: 3px;"
    );
    var nameToDescription = {
        1: ["Daniel Ashtiani", "Hello, I'm Daniel Ashtiani. I am currently a grade 11 student enrolled in Meadowridge School. My hobbies include CAD modelling, kickboxing, RC car racing, swimming, and robotics", "The CAD builder designs the model of the robot. They collaborate closely with team members to iterate on designs, troubleshoot potential issues, and contribute to the overall success of the FTC team."],
        2: ["Aasha Askew", "Hello! My name is Aasha and I am a current grade 11 student at Meadowridge school. Outside of robotics, I like the gym, watching anime, and playing competitive waterpolo.", "Managers are like the leaders of a work team. They plan what needs to be done, organize resources, and guide everyone to reach their goals."],
        3: ["Amy Xu", "My name is Amy. This is my 4th year participating in the FIRST program. I hope my past experiences will help us succeed in the competition this year. I am confident this will be a year full of learning and successes", "Builders, assemble, and fine-tune the mechanical and electronic parts of our robot. Our builders prioritize the robots adaptability with our programmers to ensure the robot is ready for success."],
        4: ["Liam Bradley", "I'm BRADLEY and I'm the best coder and builder on Entradox as well as a pro athlete and gamer", "Programmers code the robot's movements and turn our plans into executable instructions. They troubleshoot problems and collaborate with the builders to make sure the code works well with the robot. "],
        5: ["Nicole Zhang", "Hello, my name's Nicole and I've been a builder for Meadowridge's robotics team for the last 2 years. This year I will look into doing more arts + promo along with the building and finance that I did previously. I really enjoy skiing and going to the gym", "The finance department manages the team's financial resources and ensuring we dont go broke. They handle budgeting, financial planning, and fundraising activities to secure the necessary funds for the team's projects and competitions."],
        6: ["Aella Gong", "Hello, my name is Aella, and I've been doing Arts and Promo for Meadowridge's robotics team for the last year and a half. However, this will be my first time in Outreach. I'm very excited to be a part of Entradox this year!", "The promotion department helps build the team's image and promoting content. They make strategies to promote the team within the school, local community, and online."],
        7: ["Andy Xu", "Hi my name is Andy, I help with building and finance for the team. I’m here to help us do well at the competition this year", "The driver is the hands-on operator of the robot. They control its movements and actions during competitions using a gamepad. The strategists help them come up with plans during the game to help us win."],
        8: ["Oliver Low", "Hello, I'm Oliver and this is the first time I've been the strategist/field coach for a FIRST team. I'm really looking forward to being a part of Entradox and spending time working on the robot with my friends. I enjoy curling, skiing, and Formula 1 racing", "The strategist guides the robot's actions based on real-time observations. They communicate with the drive team, offering insights and new strategies. They have a good understanding of the game rules, and good field vision."],
        9: ["Hari Baidwan", "I am a sixteen year old at Meadowridge School who is relatively experienced in the area of building (for robotics), I have been a builder on two prior teams. That being said, I am looking forward to diving into the arts and promo component for our team this year as I am entirely new to this", "Builders, assemble, and fine-tune the mechanical and electronic parts of our robot. Our builders prioritize the robots adaptability with our programmers to ensure the robot is ready for success."],
        10: ["Derek Lee", "Hey, my name's Derek. I enjoy walking and listening to leaves rustling. I often trip over my own feet. This year I will be... What am I doing again?", "Programmers code the robot's movements and turn our plans into executable instructions. They troubleshoot problems and collaborate with the builders to make sure the code works well with the robot. "],
    };
    var nameToRole = {
        1: ["Daniel Ashtiani", "ENTRADOX MANAGER", "CAD, BUILDER"],
        2: ["Aasha Askew", "ENTRADOX MANAGER", "BUILDER"],
        3: ["Amy Xu", "PROGRAMMER", "BUILDER"],
        4: ["Liam Bradley", "PROGRAMMER", "BUILDER"],
        5: ["Nicole Zhang", "FINANCE", "PROMOTION"],
        6: ["Aella Gong", "ARTS", "PROMOTION"],
        7: ["Andy Xu", "DRIVER", "FINANCE"],
        8: ["Oliver Low", "STRATEGIST", "BUILDER"],
        9: ["Hari Baidwan", "BUILDER", "OUTREACH"],
        10: ["Derek Lee", "PROGRAMMER", "WEBSITE CREATOR"]
    };
    var nameToIMG = {
        1: ["Daniel Ashtiani","assets/staff-pictures/1.png"],
        2: ["Aasha Askew","assets/staff-pictures/2.png"],
        3: ["Amy Xu","assets/staff-pictures/3.png"],
        4: ["Liam Bradley","assets/staff-pictures/4.png"],
        5: ["Nicole Zhang","assets/staff-pictures/5.png"],
        6: ["Aella Gong.assets/staff-pictures/6.png"],
        7: ["Andy Xu","assets/staff-pictures/7.png"],
        8: ["Oliver Low","assets/staff-pictures/8.png"],
        9: ["Hari Baidwan","assets/staff-pictures/9.png"],
        10: ["Derek Lee","assets/staff-pictures/10.png"]
    };
    function getRoleValues(name) {
        for (var id in nameToRole) {
            if (nameToRole.hasOwnProperty(id) && nameToRole[id][0] === name) {
                return [nameToRole[id][1], nameToRole[id][2]];
            }
        }
        return null;
    }
    function getPathIMGValues(name) {
        for (var id in nameToIMG) {
            if (nameToIMG.hasOwnProperty(id) && nameToIMG[id][0] === name) {
                return [nameToIMG[id][1]];
            }
        }
        return null;
    }
    function getDescription(name) {
        for (var id in nameToDescription) {
            if (nameToDescription.hasOwnProperty(id) && nameToDescription[id][0] === name) {
                return [nameToDescription[id][1], nameToDescription[id][2]];
            }
        }
        return null;
    }
    var ContainerForStaffDescriptionBodyID = document.getElementById('ContainerForStaffDescriptionBodyID');
    var xbutton = document.getElementById('staffPageStaffContentXButtonID');
    var employees = document.querySelectorAll('.displayNames');
    var employeeIMG = document.querySelector('.HumanBody-Image');
    var nameHelper;
    xbutton.addEventListener('click', function() {
        hideStaff()
        xbutton.style.opacity = 0;
    })
    function getColor(name) {
        if (name == 'Daniel Ashtiani' || name == 'Aasha Askew') {
            var ManagerColor = 'rgb(255, 200, 0)';
            return ManagerColor;
        } else if (name == 'Oliver Low') {
            var StratColor = 'rgb(183, 0, 255)'
            return StratColor;
        } 
        var normalColor = 'rgb(226, 226, 226)';
        return normalColor;
    };
    employees.forEach(staff => {
        staff.addEventListener('click', function() {
            var name = document.getElementById('StaffMemberHeadlineContainer-NameID')
            var nameBackground = document.getElementById('StaffMemberHeadlineContainer2ID')
            xbutton.style.opacity = 1;
            showStaff()
            nameHelper = staff.id;
            name.textContent = nameHelper;
            nameBackground.textContent = nameHelper;
            var values = getRoleValues(nameHelper);
            if (values !== null) {
                var value1 = values[0]; 
                var value2 = values[1];
                var mainRole = document.querySelector('.StaffRoleTextDisplay')
                mainRole.textContent = value1;
                var secondRole = document.querySelector('.StaffRoleTextDisplay2')
                secondRole.textContent = value2;
                document.getElementById('MainRoleColorID').style.color = getColor(nameHelper);
            }
            var descriptionValues = getDescription(nameHelper);
            if (descriptionValues !== null) {
                var value1Desc = descriptionValues[0];
                var value2Desc = descriptionValues[1];
                var descMain = document.querySelector('.ContainerForStaffDescriptionTextContent')
                descMain.textContent = value1Desc;
                var descSecond = document.querySelector('.ContainerForStaffDescriptionTextContent2')
                descSecond.textContent = value2Desc;
            }
            var imgPath = getPathIMGValues(nameHelper);
            employeeIMG.src = imgPath;
        });
    });
    function hideStaff() {
        unevaporateNewStaffList()
        displayOffForStaff()
    }
    function showStaff() {
        ContainerForStaffDescriptionBodyID.style.opacity = 1;
        evaporateNewStaffList()
        displayOnForStaff()
    }
    function displayOnForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');
        var headline = document.getElementById('StaffMemberHeadlineContainer2ID');
        document.querySelector(".VerticleDownRect").style.opacity = 1;
        document.querySelector(".LineThroughTopExtend").style.opacity = 1;
        picutre.classList.add("displayOnFlicker")
        name.classList.add("flickerInText")
        desc.classList.add("slideInStaffDesc")
        labels.classList.add("staffContainerSlideIn")
        headline.classList.add("headlineFlickerInText")
        xbutton.classList.add("xbuttonFlicker")
        document.querySelector('.adding-pic-soon').style.opacity = 1;
        setTimeout(function() {
            picutre.classList.remove('displayOnFlicker');
            picutre.style = "left: 30%";
            picutre.style.opacity = 1;
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
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');
        var headline = document.getElementById('StaffMemberHeadlineContainer2ID');
        picutre.classList.add("displayOffFlicker")
        name.classList.add("flickerOutText")
        desc.classList.add("slideOutStaffDesc")
        labels.classList.add("staffContainerSlideOut")
        headline.classList.add("headlineFlickerOutText")
        xbutton.classList.add("xbuttonFlickerOut")
        document.querySelector('.adding-pic-soon').style.opacity = 0;
        setTimeout(function() {
            picutre.classList.remove('displayOffFlicker');
            picutre.style = "left: 25%";
            picutre.style.opacity = 0;
            name.classList.remove('flickerOutText');
            name.style = "left: 40%";
            name.style.opacity = 0;
            desc.classList.remove('slideOutStaffDesc');
            desc.style = "left: 82%";
            desc.style.opacity = 0;
            labels.classList.remove('staffContainerSlideOut');
            labels.style = "left: 82%";
            document.querySelector(".VerticleDownRect").style.opacity = 0;
            document.querySelector(".LineThroughTopExtend").style.opacity = 0;
            labels.style.opacity = 0;
            headline.classList.remove('headlineFlickerOutText');
            headline.style = "left: 40%";
            headline.style.opacity = 0;
            xbutton.classList.remove("xbuttonFlickerOut")
            xbutton.classList.opacity = 0;
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
var aboutUsContainer = document.querySelector('.AboutUsItemSide');
document.addEventListener('mousemove', (e) => { 
    if (isMobile()) {
        return
    }
        const x = e.clientX;
        const y = e.clientY;
        const translateX = (x - window.innerWidth / 2) * 0.015;
        const translateY = (y - window.innerHeight / 2) * 0.015;
        aboutUsContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
        staffPanelContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
});