document.addEventListener("DOMContentLoaded", function () {
    const mobileNextButton = document.getElementById('mobileNextButtonID');
    const mobileNextButton2 = document.getElementById('mobileNextButton2ID');
    const personIMG = document.getElementById('StaffPictureBodyID');
    var itemCounter = 0;
    var itemCounterForStaff = 0;
    var isAtMax = false;
    var isAtMaxStaff = false;

    var clickedAnim = 'scale(0.8)';
    var clickedAnimStaffBodyIMG = 'translate(30%, -5%)';
    var atMaxDeg = 'translate(-50%, -50%) rotate(0deg)';
    var notAtMaxDeg = 'translate(-50%, -50%) rotate(180deg)';
    mobileNextButton.style.transform = 'translate(-50%, -50%) rotate(180deg)';
    mobileNextButton2.style.transform = 'translate(-50%, -50%) rotate(180deg)';
    personIMG.style.transform = 'translate(-50%, -50%)';


    mobileNextButton2.addEventListener('click', function(){
        if (itemCounterForStaff == 9 ) {
            isAtMaxStaff = true;
            itemCounterForStaff = itemCounterForStaff - 1;    
        } else if (isAtMaxStaff == true && itemCounterForStaff > 0 ) {
            itemCounterForStaff = itemCounterForStaff - 1;
            if (itemCounterForStaff == 0) {
                isAtMaxStaff = false;
            }
        } else {
            itemCounterForStaff = itemCounterForStaff + 1;
        }

        mobileNextButton2.style.transform = `${clickedAnim} ${isAtMaxStaff ? atMaxDeg : notAtMaxDeg}`;
        personIMG.style.transform = clickedAnimStaffBodyIMG;

        changeRoleInStaff(itemCounterForStaff);
        changeDescInStaff(itemCounterForStaff);
        changeNameInStaff(itemCounterForStaff);

        setTimeout(function() {
            mobileNextButton2.style.transform = isAtMaxStaff ? atMaxDeg : notAtMaxDeg;
        }, 100);

    });

    mobileNextButton.addEventListener('click', function(){
        var itemName = socialItems[itemCounter];
        var socialItemsItem = document.getElementById(`${itemName}`);
        if (isAtMax === true) {
            socialItemsItem.style.left = '150%';
        } else {
            socialItemsItem.style.left = '-150%';
        }
    
        if (itemCounter == 5) {
            isAtMax = true;
            itemCounter = itemCounter - 1;
        } else if (isAtMax == true && itemCounter > 0) {
            itemCounter = itemCounter - 1;
            if (itemCounter == 0) {
                isAtMax = false;
            }
        } else {
            itemCounter = itemCounter + 1;
        }
    
        var itemName2 = socialItems[itemCounter];
        var socialItemsItem2 = document.getElementById(`${itemName2}`);
        
        socialItemsItem2.style.left = '50%';
    
        mobileNextButton.style.transform = `${clickedAnim} ${isAtMax ? atMaxDeg : notAtMaxDeg}`;
        
        changeDesc(itemCounter);
        // Reset the scale after 0.5 seconds
        setTimeout(function() {
            mobileNextButton.style.transform = isAtMax ? atMaxDeg : notAtMaxDeg;
        }, 100);
    }); 

});
var tagRoleText = document.querySelector('.TagStaffMemberDescription');
var tagRoleName = document.querySelector('.TagNamePerson');
var tagStaffRole = document.querySelector('.TagRoleText');

const mobileItemDescID = document.getElementById('mobileDescIDSocial');
function changeDesc(DescItem) {

    var a = socialDesc[DescItem]

    mobileItemDescID.textContent = a;
}


function changeRoleInStaff(Change) {
    var a = Change;

    tagStaffRole.textContent = staffRole[a];
}

function changeNameInStaff(Change) {
    var a = Change;

    tagRoleName.textContent = staffName[a];
}

function changeDescInStaff(Change) {
    var a = Change;

    tagRoleText.textContent = staffDesc[a];
}



var socialItems = {
    3: "rankingContainerID",
    2: "tutorialContainerID",
    1: "mailContainerID",
    4: "schoolContainerID",
    0: "instagramContainerID",
    5: "podcastContainerID"
};

var socialDesc = {
    3: "See our rankings on FTC scout",
    2: "Learn computer aided design at home using Onshape",
    1: "For inquires or sponsorships, please contact us through email",
    4: "Team Entradox is a part of Meadowridge school",
    0: "Check out our Instagram account. We post events, fundraisors and more",
    5: "Listen to our past podcasts"
};

var staffDesc = { 
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

var staffRole = {
    1: "Builder, CAD, Department Manager",
    0: "Builder, Department Manager",
    2: "Arts and Promotion Department",
    3: "Programming Department",
    4: "Arts and Promotion Department",
    5: "Arts and Promotion, Finance Department",
    6: "Builder, Programmer, Outreach Department",
    7: "Strategist and Field Coach",
    8: "Website Developer",
    9: "Robotics Coach [Not an Entradox Member]"
};

var staffName = {
    0: "Aasha",
    1: "Daniel Ashtiani",
    2: "Hari Baidwan",
    3: "Liam Bradley",
    4: "Aella Gong",
    5: "Nicole Zhang",
    6: "Amy Xu",
    7: "Oliver Low",
    8: "Derek Lee",
    9: "Carrie Mohoruk"
};
