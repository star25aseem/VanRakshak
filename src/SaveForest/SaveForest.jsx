import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate,useParams } from 'react-router-dom';
import './SaveForest.css'; // Import CSS file
import { useLocation } from 'react-router-dom';
const actions = [
    { text: "Plant a tree in your yard or community.", type: "positive" },
    { text: "Start a home composting system to reduce waste.", type: "positive" },
    { text: "Use public transportation or carpool to reduce air pollution.", type: "positive" },
    { text: "Switch to using reusable bags instead of plastic ones.", type: "positive" },
    { text: "Create a birdhouse or bat box in your garden to support wildlife.", type: "positive" },
    { text: "Join a local tree-planting event or community cleanup.", type: "positive" },
    { text: "Learn about native plants and incorporate them into your garden.", type: "positive" },
    { text: "Participate in local conservation workshops or events.", type: "positive" },
    { text: "Support farmers' markets to encourage local produce and reduce transportation emissions.", type: "positive" },
    { text: "Educate your family and friends about the importance of forests.", type: "positive" },
    { text: "Use digital devices instead of paper when possible.", type: "positive" },
    { text: "Volunteer with local environmental organizations focused on forest conservation.", type: "positive" },
    { text: "Create a neighborhood garden with native trees and plants.", type: "positive" },
    { text: "Participate in outdoor activities like hiking or birdwatching to appreciate forests.", type: "positive" },
    { text: "Advocate for tree preservation in your community.", type: "positive" },
    { text: "Support businesses that practice sustainable forestry.", type: "positive" },
    { text: "Share forest-related conservation tips on social media.", type: "positive" },
    { text: "Start a book club focused on environmental issues, including forests.", type: "positive" },
    { text: "Encourage schools to include forest education in their curriculum.", type: "positive" },
    { text: "Organize a neighborhood potluck with a focus on sustainable foods.", type: "positive" },
    { text: "Write to your local representatives about the importance of forest conservation.", type: "positive" },
    { text: "Collect and recycle paper products instead of throwing them away.", type: "positive" },
    { text: "Visit local forests and share your experiences to inspire others.", type: "positive" },
    { text: "Engage children in nature activities to foster appreciation for forests.", type: "positive" },
    { text: "Use eco-friendly cleaning products to avoid harmful chemicals.", type: "positive" },
    { text: "Limit water usage in your garden to conserve resources.", type: "positive" },
    { text: "Participate in local tree care and maintenance programs.", type: "positive" },
    { text: "Practice responsible campfire techniques to prevent forest fires.", type: "positive" },
    { text: "Support legislation that aims to protect forests.", type: "positive" },
    { text: "Be mindful of the products you buy; choose sustainably sourced items.", type: "positive" },
    { text: "Attend community meetings discussing local environmental issues.", type: "positive" },
    { text: "Engage in local art projects that highlight the beauty of forests.", type: "positive" },
    { text: "Host a forest-themed movie night to raise awareness.", type: "positive" },
    { text: "Use social media platforms to promote forest conservation efforts.", type: "positive" },
    { text: "Encourage local businesses to sponsor tree-planting initiatives.", type: "positive" },
    { text: "Share your stories or experiences in the forest to inspire others.", type: "positive" },
    { text: "Help maintain local parks by participating in volunteer days.", type: "positive" },
    { text: "Organize a neighborhood nature walk to explore local flora.", type: "positive" },
    { text: "Teach children about the importance of trees and forests through storytelling.", type: "positive" },
    { text: "Participate in citizen science projects that involve monitoring forest health.", type: "positive" },
    { text: "Promote local hiking trails and outdoor activities to encourage appreciation for forests.", type: "positive" },
    { text: "Limit your use of products that contribute to deforestation, such as certain cosmetics.", type: "positive" },
    { text: "Encourage friends to adopt a 'no paper' policy for meetings.", type: "positive" },
    { text: "Create an online group focused on sharing forest conservation tips.", type: "positive" },
    { text: "Attend workshops on sustainable gardening and landscaping.", type: "positive" },
    { text: "Use eco-friendly packaging when sending gifts or products.", type: "positive" },
    { text: "Be a role model for others by adopting sustainable practices.", type: "positive" },
    { text: "Promote tree adoption programs in your community.", type: "positive" },
    { text: "Share links to informative articles about forest conservation with your network.", type: "positive" },
    { text: "Engage in discussions about local environmental policies.", type: "positive" },
    { text: "Start or join a community book exchange focusing on environmental topics.", type: "positive" },
    { text: "Participate in forest research activities with local universities.", type: "positive" },
    { text: "Host workshops on how to make natural cleaning products at home.", type: "positive" },
    { text: "Engage in local events that promote wildlife conservation and habitats.", type: "positive" },
    { text: "Advocate for more green spaces in urban planning.", type: "positive" },
    { text: "Limit your use of disposable products to reduce waste.", type: "positive" },
    { text: "Create a video about your favorite forest and why it’s important to protect it.", type: "positive" },
    { text: "Support local artisans who use sustainable materials.", type: "positive" },
    { text: "Start a campaign to clean up local parks and forests.", type: "positive" },
    { text: "Participate in or organize a community tree festival.", type: "positive" },
    { text: "Promote awareness about the impacts of climate change on forests.", type: "positive" },
    { text: "Engage with local libraries to promote books about forest conservation.", type: "positive" },
    { text: "Encourage local schools to create outdoor classrooms in forested areas.", type: "positive" },
    { text: "Use fewer resources at home by conserving electricity and water.", type: "positive" },
    { text: "Share recipes for meals that are sustainably sourced and environmentally friendly.", type: "positive" },
    { text: "Encourage businesses to switch to sustainable packaging options.", type: "positive" },
    { text: "Host a forest-themed art show to raise awareness.", type: "positive" },
    { text: "Use technology to track your carbon footprint and reduce it.", type: "positive" },
    { text: "Limit your meat consumption to reduce pressure on forest land.", type: "positive" },
    { text: "Avoid supporting companies that engage in illegal logging.", type: "negative" },
    { text: "Participate in activities that disregard local conservation laws.", type: "negative" },
    { text: "Waste resources that could support forest conservation efforts.", type: "negative" },
    { text: "Use products that contribute to deforestation and habitat loss.", type: "negative" },
    { text: "Ignore the impact of urban sprawl on forested areas.", type: "negative" },
    { text: "Encourage practices that lead to the overexploitation of forest resources.", type: "negative" },
    { text: "Participate in activities that harm local wildlife habitats.", type: "negative" },
    { text: "Disregard the effects of pollution on forest ecosystems.", type: "negative" },
    { text: "Support industries that promote monoculture practices in forests.", type: "negative" },
    { text: "Neglect the importance of supporting local conservation organizations.", type: "negative" },
    { text: "Promote the use of chemical pesticides that harm forests.", type: "negative" },
    { text: "Disregard the need for sustainable harvesting practices.", type: "negative" },
    { text: "Participate in events that promote harmful land use practices.", type: "negative" },
    { text: "Support agricultural practices that lead to deforestation.", type: "negative" },
    { text: "Ignore the importance of native species in forest ecosystems.", type: "negative" },
    { text: "Waste food, contributing to environmental degradation.", type: "negative" },
    { text: "Participate in activities that encourage urban deforestation.", type: "negative" },
    { text: "Engage in practices that fragment wildlife habitats.", type: "negative" },
    { text: "Support policies that weaken environmental protections for forests.", type: "negative" },
    { text: "Disregard the consequences of illegal logging activities.", type: "negative" },
    { text: "Encourage the development of infrastructure that encroaches on forests.", type: "negative" },
    { text: "Neglect to share information about local conservation efforts.", type: "negative" },
    { text: "Participate in or support activities that lead to habitat destruction.", type: "negative" },
    { text: "Ignore the cultural significance of forests for local communities.", type: "negative" },
    { text: "Support industries that contribute to air and water pollution affecting forests.", type: "negative" },
    { text: "Ignore the role of forests in climate regulation.", type: "negative" },
    { text: "Disregard community rights over forest resources.", type: "negative" },
    { text: "Participate in or promote events that destroy natural habitats.", type: "negative" },
    { text: "Neglect to recycle or reuse products made from forest resources.", type: "negative" },
    { text: "Support land developments that contribute to forest loss.", type: "negative" },
    { text: "Participate in consumer behaviors that prioritize convenience over sustainability.", type: "negative" },
    { text: "Promote the use of plastic products that contribute to forest degradation.", type: "negative" },
    { text: "Disregard the importance of forest ecosystems for biodiversity.", type: "negative" },
];


function SaveForest() {
    const {time} = useParams();
    const Time=Number(time);
    const location=useLocation();
    const navigate=useNavigate();
    const [greenCount, setGreenCount] = useState(0);
    const [actionText, setActionText] = useState("");
    const [actionType, setActionType] = useState("");
    const [isGameActive, setIsGameActive] = useState(false);
    const [gameDuration] = useState(Time*1000); 
    let actionInterval;
    let endTime;

    const startGame = () => {
        if(gameDuration<=0){
            navigate('/3D')
        }
        setGreenCount(0);
        setIsGameActive(true);
        endTime = Date.now() + gameDuration;
        actionInterval = setInterval(showRandomAction, 1000); 

        setTimeout(endGame, gameDuration);
    };

    const showRandomAction = () => {
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        setActionText(randomAction.text);
        setActionType(randomAction.type);
    };

    const handleActionClick = () => {
        if (actionType === "positive") {
            setGreenCount(greenCount + 1);
            document.querySelector('.App').style.backgroundColor = 'rgb(173, 225, 171)'
        } else {
            setGreenCount(greenCount - 1);
            document.querySelector('.App').style.backgroundColor = 'sandybrown'
        }
    };
    
    const endGame = () => {
        clearInterval(actionInterval);
        setIsGameActive(false);
        alert(`Game over!`);


    };

    useEffect(() => {

    }, [isGameActive]);

    return (
        <div className="App">
            <link rel='stylesheet' href='./SaveForest.css'></link>
            <h1>Your {String(gameDuration/1000)} year is simulated to {String(gameDuration/1000)} seconds and your green count is {greenCount} </h1>
            {!isGameActive && <button id="StartGame" onClick={startGame}>Start Game</button>}
            {isGameActive && (
                <div id="action-bar" onClick={handleActionClick} className={actionType}>
                    {actionText}
                </div>
            )}
        </div>
    );
}

export default SaveForest;
