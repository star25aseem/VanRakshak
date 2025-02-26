import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Educationhub.css';
import Card from './Card';

function Educationhub() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const mockData = {
        forest_plants: [
          {
            name: "Oak Tree",
            scientific_name: "Quercus spp",
            description: {
              page_0: "Majestic and enduring, oak trees stand as powerful symbols of strength in forests worldwide.",
              page_1: "Oaks are large, sturdy trees with broad leaves, known for their strength and longevity. They play an essential role in temperate forests, offering habitat for various species and producing acorns, a food source for birds and mammals.",
              page_2: "Oak wood is highly valued for its durability and is used in furniture, flooring, and construction. Planting tips: Oaks prefer full sun and well-drained soil. Plant acorns in the fall for best results.",
              page_3: "The bark and leaves have been traditionally used in medicine to treat infections and inflammation."
            },
            uses: ["Timber", "Medicinal uses", "Acorn food for wildlife"],
            image: "../../public/images/oakTree.jpg",
            forest_type: "Deciduous forests (temperate regions)"
          },
          {
            name: "Pine Tree",
            scientific_name: "Pinus spp",
            description: {
              page_0: "Tall and resilient, pines bring life to boreal forests, with needles that whisper through the wind.",
              page_1: "Pines are evergreen trees with needle-like leaves, adapted to withstand cold and dry conditions in boreal and temperate forests. Planting tips: Pines grow best in sandy or well-drained soil and full sunlight. Spacing should be considered, as pine roots can spread wide.",
              page_2: "Their resin is a key source of turpentine and essential oils, and the wood is commonly used for furniture and paper production.",
              page_3: "Pine nuts are edible seeds rich in nutrients and widely consumed around the world. Pine forests are also critical for soil stabilization and carbon sequestration."
            },
            uses: ["Timber", "Resin", "Essential oils", "Pine nuts"],
            image: "../../public/images/PineTree.jpg",
            forest_type: "Coniferous forests (boreal and temperate)"
          },
          {
            name: "Teak Tree",
            scientific_name: "Tectona grandis",
            description: {
              page_0: "Elegant and valuable, the teak tree is treasured for its rich, durable wood in tropical forests.",
              page_1: "Known for its beautiful and durable wood, teak is a tall, tropical tree native to Southeast Asia.",
              page_2: "The wood is resistant to water, insects, and decay, making it popular for outdoor furniture, decking, and shipbuilding. Planting tips: Teak requires a warm, humid climate and well-drained soil to thrive. Space trees widely to allow ample sunlight.",
              page_3: "Teak trees support diverse forest ecosystems, offering shelter to animals and stabilizing soil. Sustainable teak plantations contribute to economic growth in tropical regions."
            },
            uses: ["High-quality timber", "Furniture", "Shipbuilding"],
            image: "../../public/images/TeakTree.jpg",
            forest_type: "Tropical deciduous forests"
          },
          {
            name: "Bamboo",
            scientific_name: "Bambusoideae family",
            description: {
              page_0: "Graceful and versatile, bamboo shoots rise rapidly, adding green brilliance to many forests.",
              page_1: "Bamboo is a fast-growing grass, essential in Asian forests and known for its versatility. Planting tips: Bamboo prefers moist, well-drained soil with partial to full sunlight. It can be planted directly in the ground or in containers to control its spread.",
              page_2: "Bamboo can grow up to several feet a day and is used in construction, textile, furniture, and paper industries.",
              page_3: "Its robust root system helps prevent soil erosion, making it valuable for reforestation and soil conservation efforts. Young bamboo shoots are also a nutritious food source."
            },
            uses: ["Construction", "Furniture", "Food", "Textile", "Paper"],
            image: "../../public/images/Bamboo.jpeg",
            forest_type: "Tropical and subtropical forests, some temperate regions"
          },
          {
            name: "Mahogany Tree",
            scientific_name: "Swietenia spp",
            description: {
              page_0: "Richly-hued and rare, mahogany trees symbolize beauty and strength in tropical rainforests.",
              page_1: "Mahogany is a prized hardwood tree found in Central and South American rainforests.",
              page_2: "Known for its rich, red-brown wood, mahogany is highly valued in furniture making and decorative woodwork. Planting tips: Mahogany trees thrive in humid, tropical climates with rich, well-drained soil and plenty of space to grow.",
              page_3: "The tree has medicinal properties, traditionally used for ailments like fever and hypertension. However, overharvesting has led to conservation efforts to protect this endangered species."
            },
            uses: ["High-quality timber", "Medicine", "Furniture"],
            image: "../../public/images/Mahogany Tree.jpg",
            forest_type: "Tropical rainforests"
          },
          {
            name: "Moss",
            scientific_name: "Bryophyta",
            description: {
              page_0: "Soft and serene, moss carpets forest floors, creating gentle green blankets of life.",
              page_1: "Mosses are small, soft plants that grow in dense mats, often found on forest floors, rocks, and trees.",
              page_2: "They thrive in humid, shaded environments, absorbing moisture and aiding in soil retention. Planting tips: Moss requires a shaded, moist environment to establish well. Plant on a damp surface and keep misted until growth starts.",
              page_3: "Moss helps maintain forest soil fertility and supports biodiversity by providing habitat for insects and small animals. Some mosses have been used in traditional medicine for wound healing."
            },
            uses: ["Soil fertility", "Erosion control", "Traditional medicine"],
            image: "../../public/images/moss.jpg",
            forest_type: "Temperate and tropical rainforests"
          },
          {
            name: "Ferns",
            scientific_name: "Pteridophyta",
            description: {
              page_0: "Ancient and intricate, ferns unfurl delicate fronds, painting the understories of forests.",
              page_1: "Ferns are ancient plants with feather-like leaves, commonly found in moist, shaded areas of rainforests.",
              page_2: "They play a key role in soil stabilization, especially in mountainous and sloped regions. Planting tips: Ferns need consistently moist, well-drained soil with partial to full shade.",
              page_3: "Ferns are valued as ornamental plants and have been used medicinally for treating various ailments. They are essential in forest understories, creating microhabitats for smaller plants and animals."
            },
            uses: ["Soil stabilization", "Ornamental plants", "Medicinal uses"],
            image: "../../public/images/Ferns.jpeg",
            forest_type: "Temperate and tropical rainforests"
          },
          {
            name: "Red Cedar",
            scientific_name: "Thuja plicata",
            description: {
              page_0: "Strong and fragrant, red cedar offers shelter and sustenance in the rich rainforests of the Pacific Northwest.",
              page_1: "Red cedar is a large evergreen conifer with fragrant, rot-resistant wood.",
              page_2: "Native to North America's Pacific Northwest, it’s known for its valuable wood, which is used in construction, cabinetry, and essential oils.",
              page_3: "Planting tips: Red cedar prefers moist, well-drained soil and partial shade but can tolerate a range of conditions. Indigenous peoples have long used red cedar for canoes, totem poles, and medicines. Its dense foliage provides shelter for forest wildlife."
            },
            uses: ["Timber", "Essential oils", "Medicinal uses"],
            image: "../../public/images/Red Cedar.jpg",
            forest_type: "Temperate rainforests"
          }
          //can add more data
        ]
      }
      
    setSections(mockData.forest_plants);
  }, []);
  
  return (
    <div className="Educationhub" style={{ overflowY: 'auto' }}>
      <h1>Explore Forest</h1>
      <div className="card-container">
        {sections.map((section, index) => (
          <Link key={index} to={`/plant/${section.name.toLowerCase().replace(/ /g, '-')}`}>
            <Card title={section.name} imageSrc={section.image} description={section.description.page_0}/>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Educationhub;
