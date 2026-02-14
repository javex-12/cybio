export interface RevisionQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const chapterQuizzes: Record<string, RevisionQuestion[]> = {
  "chap-1": [
    {
      id: 1,
      question: "Which of the following is true of a living thing?",
      options: [
        "It breathes.",
        "It transmits its characteristics to its offspring.",
        "It adapts to its environment.",
        "It consists of one or more cells.",
        "It does all of the above."
      ],
      correctIndex: 4,
      explanation: "Living things exhibit physiological, genetic, ecological, and structural characteristics (Cells)."
    },
    {
      id: 2,
      question: "The lowest level of organisation of life in a multicellular organism is?",
      options: ["Tissue", "Cell", "Organ", "Organ System", "Organism"],
      correctIndex: 1,
      explanation: "The cell is the basic structural and functional unit of life."
    },
    {
      id: 3,
      question: "Which of these kingdoms is exclusively Prokaryotic?",
      options: ["Protista", "Fungi", "Plantae", "Monera", "Animalia"],
      correctIndex: 3,
      explanation: "Monera (Bacteria) are the only kingdom without a nuclear membrane."
    },
    {
      id: 4,
      question: "The defined definition of a Species is a group of organisms that can interbreed to produce:",
      options: [
        "Identical offspring",
        "Large numbers of offspring",
        "Fertile offspring",
        "Fast-growing offspring"
      ],
      correctIndex: 2,
      explanation: "Interbreeding to produce fertile offspring is the key biological definition of a species."
    },
    {
      id: 5,
      question: "In Binomial Nomenclature, the first name refers to the:",
      options: ["Species", "Family", "Genus", "Order"],
      correctIndex: 2,
      explanation: "The first name is the Genus (Capitalized), the second is the species (small letter)."
    },
    {
      id: 6,
      question: "The cell wall of Fungi is primarily composed of:",
      options: ["Cellulose", "Peptidoglycan", "Chitin", "Lignin"],
      correctIndex: 2,
      explanation: "Chitin is the defining polysaccharide in fungal cell walls, unlike cellulose in plants."
    },
    {
      id: 7,
      question: "Which phylum is characterized by metameric segmentation and nephridia?",
      options: ["Platyhelminthes", "Annelida", "Arthropoda", "Mollusca"],
      correctIndex: 1,
      explanation: "Annelids (like earthworms) are metamerically segmented and use nephridia for excretion."
    },
    {
      id: 8,
      question: "A plant that lacks true vascular tissue and uses rhizoids is a:",
      options: ["Pteridophyte", "Spermatophyte", "Bryophyte", "Angiosperm"],
      correctIndex: 2,
      explanation: "Bryophytes (Mosses) are non-vascular and use rhizoids instead of true roots."
    },
    {
      id: 9,
      question: "Which class of vertebrates has a 3-chambered heart and scale-less skin?",
      options: ["Pisces", "Amphibia", "Reptilia", "Aves"],
      correctIndex: 1,
      explanation: "Amphibians have 3-chambered hearts and moist, scale-less skin."
    },
    {
      id: 10,
      question: "The 'Virus Paradox' exists because viruses can be crystallized (non-living) but:",
      options: [
        "Can eat other cells",
        "Contain DNA/RNA and replicate in host cells",
        "Have complex cell walls",
        "Can move via flagella"
      ],
      correctIndex: 1,
      explanation: "Their ability to replicate and their genetic material makes them 'borderline' living."
    }
  ],
  "chap-2": [
    {
      id: 1,
      question: "The basic structural and functional unit of life is the:",
      options: ["Tissue", "Organ", "Cell", "System"],
      correctIndex: 2,
      explanation: "The cell is the smallest unit that can perform all life processes independently."
    },
    {
      id: 2,
      question: "Which organism exists as a spherical colony of thousands of flagellated cells?",
      options: ["Amoeba", "Volvox", "Spirogyra", "Euglena"],
      correctIndex: 1,
      explanation: "Volvox is a classic example of a cellular colony, bridging unicellular and multicellular life."
    },
    {
      id: 3,
      question: "Who was the first scientist to observe 'cells' in a slice of cork in 1665?",
      options: ["Theodor Schwann", "Robert Hooke", "Rudolf Virchow", "Matthias Schleiden"],
      correctIndex: 1,
      explanation: "Robert Hooke coined the term 'cell' after observing the honeycomb structure of cork."
    },
    {
      id: 4,
      question: "Which of the following is a primary principle of the Cell Theory?",
      options: [
        "All cells have a cell wall",
        "Cells can be generated from non-living matter",
        "The cell is the basic unit of life",
        "All cells contain chloroplasts"
      ],
      correctIndex: 2,
      explanation: "One of the three core pillars: The cell is the structural and functional unit of all living things."
    },
    {
      id: 5,
      question: "A Prokaryotic cell is distinguished by the ABSENCE of:",
      options: ["DNA", "Cytoplasm", "Nuclear Membrane", "Ribosomes"],
      correctIndex: 2,
      explanation: "Prokaryotes (like Bacteria) have genetic material but lack a membrane to enclose it (a true nucleus)."
    },
    {
      id: 6,
      question: "The organelle responsible for aerobic respiration and ATP production is the:",
      options: ["Golgi Body", "Mitochondrion", "Ribosome", "Lysosome"],
      correctIndex: 1,
      explanation: "Mitochondria are the powerhouses where chemical energy is released from glucose."
    },
    {
      id: 7,
      question: "Which structure is present in a plant cell but ABSENT in an animal cell?",
      options: ["Mitochondria", "Cell Wall", "Nucleus", "Cell Membrane"],
      correctIndex: 1,
      explanation: "Plant cells have a rigid cellulose cell wall for support, which animal cells lack."
    },
    {
      id: 8,
      question: "In a plant cell, the large central space that stores cell sap is the:",
      options: ["Nucleus", "Cytoplasm", "Vacuole", "Chloroplast"],
      correctIndex: 2,
      explanation: "Plants have a large permanent central vacuole for turgidity and storage."
    },
    {
      id: 9,
      question: "Groups of similar cells working together to perform a specific job are called:",
      options: ["Organs", "Systems", "Tissues", "Colonies"],
      correctIndex: 2,
      explanation: "Tissues are the next level of organization after cells (e.g., Muscle tissue)."
    },
    {
      id: 10,
      question: "Which organelle contains the genetic code and controls cellular activities?",
      options: ["Nucleus", "Ribosome", "Endoplasmic Reticulum", "Vacuole"],
      correctIndex: 0,
      explanation: "The nucleus is the command center containing the DNA (chromatin)."
    }
  ],
  "chap-3": [
    {
      id: 1,
      question: "Which of the following processes requires energy (ATP) to occur?",
      options: ["Osmosis", "Simple Diffusion", "Active Transport", "Transpiration"],
      correctIndex: 2,
      explanation: "Active transport moves substances against a concentration gradient, which requires energy."
    },
    {
      id: 2,
      question: "What happens to a red blood cell when placed in distilled water (Hypotonic solution)?",
      options: ["It shrinks (Crenates)", "It bursts (Haemolysis)", "It remains unchanged", "It becomes plasmolysed"],
      correctIndex: 1,
      explanation: "Water enters the cell by osmosis until it bursts because it lacks a rigid cell wall."
    },
    {
      id: 3,
      question: "The movement of molecules from a region of higher concentration to lower concentration is:",
      options: ["Osmosis", "Diffusion", "Active Transport", "Plasmolysis"],
      correctIndex: 1,
      explanation: "This is the classic definition of diffusion (down a concentration gradient)."
    },
    {
      id: 4,
      question: "Osmosis is defined specifically as the movement of:",
      options: ["Solute molecules", "Any liquid", "Water molecules", "Gas molecules"],
      correctIndex: 2,
      explanation: "Osmosis refers strictly to the movement of water molecules across a semi-permeable membrane."
    },
    {
      id: 5,
      question: "When a plant cell is placed in a hypertonic solution (strong salt solution), it becomes:",
      options: ["Turgid", "Haemolysed", "Plasmolysed", "Swollen"],
      correctIndex: 2,
      explanation: "Water leaves the cell vacuole, causing the cytoplasm to shrink away from the cell wall (Plasmolysis)."
    },
    {
      id: 6,
      question: "Which factor increases the rate of diffusion?",
      options: ["Lower temperature", "Smaller surface area", "Higher concentration gradient", "Larger molecular size"],
      correctIndex: 2,
      explanation: "A steeper (higher) concentration gradient causes molecules to diffuse faster."
    },
    {
      id: 7,
      question: "The shrinking of an animal cell in a hypertonic solution is called:",
      options: ["Plasmolysis", "Deplasmolysis", "Crenation", "Haemolysis"],
      correctIndex: 2,
      explanation: "In animals cells (like RBCs), losing water causes them to shrivel, known as Crenation."
    },
    {
      id: 8,
      question: "Which process explains how oxygen moves from the alveoli into the blood?",
      options: ["Active Transport", "Osmosis", "Diffusion", "Pinocytosis"],
      correctIndex: 2,
      explanation: "Oxygen moves down its partial pressure gradient via simple diffusion."
    },
    {
      id: 9,
      question: "The state of a plant cell when it is fully swollen with water is called:",
      options: ["Flaccid", "Turgid", "Plasmolysed", "Isotonic"],
      correctIndex: 1,
      explanation: "Turgidity occurs when the cell absorbs water and the contents press against the cell wall."
    },
    {
      id: 10,
      question: "Active transport is used by root hair cells to absorb:",
      options: ["Water", "Mineral salts", "Oxygen", "Carbon dioxide"],
      correctIndex: 1,
      explanation: "Plants often concentrate mineral ions in their roots against the gradient using active transport."
    }
  ],
  "chap-4": [
    {
      id: 1,
      question: "The process of 'cell eating' where a cell engulfs large particles is called:",
      options: ["Pinocytosis", "Phagocytosis", "Osmosis", "Exocytosis"],
      correctIndex: 1,
      explanation: "Phagocytosis is the ingestion of solid particles by the cell membrane."
    },
    {
      id: 2,
      question: "Which of the following is the correct chemical equation for Aerobic Respiration?",
      options: [
        "C6H12O6 + 6O2 → 6CO2 + 6H2O + 38 ATP",
        "6CO2 + 6H2O → C6H12O6 + 6O2",
        "C6H12O6 → 2C2H5OH + 2CO2 + 2 ATP",
        "C6H12O6 → 2CH3CHOHCOOH + 2 ATP"
      ],
      correctIndex: 0,
      explanation: "Aerobic respiration breaks down glucose with oxygen to release maximum energy."
    },
    {
      id: 3,
      question: "What is the net ATP yield during Anaerobic Respiration in muscle cells?",
      options: ["38 ATP", "2 ATP", "36 ATP", "0 ATP"],
      correctIndex: 1,
      explanation: "Anaerobic respiration is much less efficient, yielding only 2 ATP molecules per glucose."
    },
    {
      id: 4,
      question: "Which organelle is used by freshwater protozoa for osmoregulation?",
      options: ["Food vacuole", "Nucleus", "Contractile vacuole", "Mitochondrion"],
      correctIndex: 2,
      explanation: "The contractile vacuole pumps out excess water to prevent the cell from bursting."
    },
    {
      id: 5,
      question: "During which stage of Mitosis do chromosomes line up at the cell's equator?",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      correctIndex: 1,
      explanation: "Metaphase is the 'middle' stage where chromosomes align for equal separation."
    },
    {
      id: 6,
      question: "Which type of cell division leads to genetic variation through crossing over?",
      options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
      correctIndex: 1,
      explanation: "Meiosis involves genetic recombination during Prophase I, creating unique gametes."
    },
    {
      id: 7,
      question: "In which part of the human body does Meiosis occur?",
      options: ["Skin cells", "Liver", "Gonads (Testes/Ovaries)", "Bone marrow"],
      correctIndex: 2,
      explanation: "Meiosis is the production of sex cells (gametes) in the reproductive organs."
    },
    {
      id: 8,
      question: "Which form of asexual reproduction is common in Yeast and Hydra?",
      options: ["Spore formation", "Binary fission", "Budding", "Fragmentation"],
      correctIndex: 2,
      explanation: "Budding involves a new organism growing out of the body of the parent."
    },
    {
      id: 9,
      question: "The movement of a cell toward or away from a chemical stimulus is called:",
      options: ["Phototaxis", "Chemotaxis", "Hydrotaxis", "Geotaxis"],
      correctIndex: 1,
      explanation: "Chemotaxis is the directional response to chemical gradients."
    },
    {
      id: 10,
      question: "The division of the cytoplasm following nuclear division is called:",
      options: ["Mitosis", "Meiosis", "Cytokinesis", "Karyokinesis"],
      correctIndex: 2,
      explanation: "Cytokinesis is the physical splitting of the cell into two daughter cells."
    }
  ],
  "chap-5": [
    {
      id: 1,
      question: "An earthworm uses which type of skeleton for support?",
      options: ["Exoskeleton", "Endoskeleton", "Hydrostatic Skeleton", "Bony Skeleton"],
      correctIndex: 2,
      explanation: "Hydrostatic skeletons use fluid-filled cavities under pressure to maintain shape."
    },
    {
      id: 2,
      question: "The exoskeleton of insects is primarily composed of which material?",
      options: ["Cellulose", "Chitin", "Lignin", "Calcium Carbonate"],
      correctIndex: 1,
      explanation: "Chitin is a tough polysaccharide that forms the outer shell of arthropods."
    },
    {
      id: 3,
      question: "The periodic shedding of the exoskeleton to allow for growth is called:",
      options: ["Metamorphosis", "Ecdysis", "Osmoregulation", "Intussusception"],
      correctIndex: 1,
      explanation: "Ecdysis, or moulting, is necessary because the rigid exoskeleton cannot expand."
    },
    {
      id: 4,
      question: "How many vertebrae are found in the human Cervical (neck) region?",
      options: ["5", "12", "7", "33"],
      correctIndex: 2,
      explanation: "There are 7 cervical vertebrae in almost all mammals."
    },
    {
      id: 5,
      question: "The first cervical vertebra, which supports the head, is the:",
      options: ["Axis", "Atlas", "Lumbar", "Sacrum"],
      correctIndex: 1,
      explanation: "The Atlas (C1) articulates with the skull to allow nodding movements."
    },
    {
      id: 6,
      question: "Which type of joint allows for the widest range of movement (360 degrees)?",
      options: ["Hinge Joint", "Gliding Joint", "Ball and Socket Joint", "Pivot Joint"],
      correctIndex: 2,
      explanation: "Ball and socket joints (shoulder/hip) allow movement in multiple planes."
    },
    {
      id: 7,
      question: "Tendons are specialized connective tissues that attach:",
      options: ["Bone to Bone", "Muscle to Bone", "Muscle to Muscle", "Skin to Muscle"],
      correctIndex: 1,
      explanation: "Tendons transmit force from muscles to bones to enable movement."
    },
    {
      id: 8,
      question: "Which plant tissue provides support through turgor pressure when cells are full of water?",
      options: ["Xylem", "Sclerenchyma", "Parenchyma", "Phloem"],
      correctIndex: 2,
      explanation: "Parenchyma cells become turgid and stiff when they absorb water, supporting soft plant parts."
    },
    {
      id: 9,
      question: "The presence of which substance makes Sclerenchyma and Xylem tissues extremely strong?",
      options: ["Cellulose", "Pectin", "Lignin", "Starch"],
      correctIndex: 2,
      explanation: "Lignin is a complex organic polymer that hardens cell walls in woody tissues."
    },
    {
      id: 10,
      question: "The process of blood cell formation in the bone marrow is known as:",
      options: ["Homeostasis", "Hemopoiesis", "Metabolism", "Respiration"],
      correctIndex: 1,
      explanation: "Hemopoiesis occurs in the red bone marrow, producing red and white blood cells."
    }
  ],
  "chap-6": [
    {
      id: 1,
      question: "Which class of food is primarily responsible for the growth and repair of worn-out tissues?",
      options: ["Carbohydrates", "Fats", "Proteins", "Minerals"],
      correctIndex: 2,
      explanation: "Proteins provide the amino acids necessary for building and repairing body structures."
    },
    {
      id: 2,
      question: "The structural unit of lipids (fats and oils) consists of:",
      options: [
        "Amino acids and nitrogen",
        "Glucose and fructose",
        "Glycerol and fatty acids",
        "Polysaccharides and starch"
      ],
      correctIndex: 2,
      explanation: "A typical lipid molecule is composed of one glycerol backbone and three fatty acid chains."
    },
    {
      id: 3,
      question: "Which of the following deficiency diseases is caused by a lack of Vitamin C?",
      options: ["Rickets", "Scurvy", "Kwashiorkor", "Goitre"],
      correctIndex: 1,
      explanation: "Scurvy results in bleeding gums and poor wound healing due to Vitamin C deficiency."
    },
    {
      id: 4,
      question: "Organisms that depend on others for food are broadly categorized as:",
      options: ["Autotrophs", "Heterotrophs", "Phototrophs", "Chemosynthesizers"],
      correctIndex: 1,
      explanation: "Heterotrophs (animals, fungi, most bacteria) cannot make their own food."
    },
    {
      id: 5,
      question: "The mode of nutrition where an organism feeds on dead and decaying organic matter is:",
      options: ["Holozoic", "Parasitic", "Saprophytic", "Symbiotic"],
      correctIndex: 2,
      explanation: "Saprophytes (like mushrooms) release enzymes to digest dead matter externally."
    },
    {
      id: 6,
      question: "Which mammalian tooth type is specifically adapted for tearing flesh in carnivores?",
      options: ["Incisors", "Canines", "Premolars", "Molars"],
      correctIndex: 1,
      explanation: "Canines are long, pointed teeth designed for piercing and tearing meat."
    },
    {
      id: 7,
      question: "The numerical representation of the types of teeth in one-half of the jaw is called the:",
      options: ["Phylogenetic Tree", "Metabolic Rate", "Dental Formula", "Atomic Number"],
      correctIndex: 2,
      explanation: "A dental formula (e.g., 2123 for humans) lists teeth in the order: i, c, pm, m."
    },
    {
      id: 8,
      question: "Enzymes are described as biological catalysts because they:",
      options: [
        "Are consumed in reactions",
        "Provide energy for reactions",
        "Speed up reactions without being consumed",
        "Only work in cold temperatures"
      ],
      correctIndex: 2,
      explanation: "Enzymes lower the activation energy required for biochemical processes."
    },
    {
      id: 9,
      question: "The 'Lock and Key' mechanism of enzymes refers to their:",
      options: ["Sensitivity to light", "Reversibility", "High specificity", "Protein nature"],
      correctIndex: 2,
      explanation: "Enzymes are highly specific; they only fit with a particular substrate molecule."
    },
    {
      id: 10,
      question: "Which of the following describes the Diastema?",
      options: [
        "A type of canine tooth",
        "A digestive enzyme",
        "The gap between incisors and premolars in herbivores",
        "The process of chewing"
      ],
      correctIndex: 2,
      explanation: "Herbivores like rabbits lack canines, creating a functional gap for manipulating food."
    }
  ],
  "chap-7": [
    {
      id: 1,
      question: "The part of the earth and its atmosphere where life exists is called the:",
      options: ["Ecosystem", "Biosphere", "Community", "Habitat"],
      correctIndex: 1,
      explanation: "The Biosphere encompasses all living regions of the planet."
    },
    {
      id: 2,
      question: "Which term refers to the specific role or 'profession' of an organism in its environment?",
      options: ["Habitat", "Biosphere", "Ecological Niche", "Community"],
      correctIndex: 2,
      explanation: "An ecological niche includes an organism's interactions and resource usage."
    },
    {
      id: 3,
      question: "Which of the following is an Abiotic factor in an ecosystem?",
      options: ["Competition", "Rainfall", "Predation", "Parasitism"],
      correctIndex: 1,
      explanation: "Abiotic factors are non-living components like climate, soil, and topography."
    },
    {
      id: 4,
      question: "A group of organisms of the same species living in a specific area is a:",
      options: ["Population", "Community", "Ecosystem", "Biome"],
      correctIndex: 0,
      explanation: "A population consists of individuals of one species in a defined location."
    },
    {
      id: 5,
      question: "Which instrument is used to study the distribution of stationary or slow-moving organisms?",
      options: ["Anemometer", "Quadrat", "Hygrometer", "Photometer"],
      correctIndex: 1,
      explanation: "A quadrat is a square frame used to sample plants or slow animals in a habitat."
    },
    {
      id: 6,
      question: "Ecological succession that starts on a bare rock where no life previously existed is:",
      options: ["Secondary Succession", "Primary Succession", "Climax Community", "Deflected Succession"],
      correctIndex: 1,
      explanation: "Primary succession begins in entirely new, lifeless habitats."
    },
    {
      id: 7,
      question: "The first organisms to colonize a bare habitat are known as:",
      options: ["Predators", "Pioneer Species", "Climax Species", "Parasites"],
      correctIndex: 1,
      explanation: "Pioneers like lichens and mosses are the first to establish in new areas."
    },
    {
      id: 8,
      question: "Which Nigerian biome is characterized by the highest rainfall and tall, dense trees?",
      options: ["Sudan Savanna", "Sahel Savanna", "Rain Forest", "Guinea Savanna"],
      correctIndex: 2,
      explanation: "The Rain Forest in southern Nigeria receives abundant rain, supporting dense vegetation."
    },
    {
      id: 9,
      question: "The biome characterized by permafrost and extremely cold temperatures is the:",
      options: ["Desert", "Tundra", "Tropical Savanna", "Coniferous Forest"],
      correctIndex: 1,
      explanation: "Tundra regions have permanently frozen subsoil and very low temperatures."
    },
    {
      id: 10,
      question: "Which of the following defines a Community?",
      options: [
        "A group of one species",
        "All living and non-living things together",
        "Different populations living together in a habitat",
        "The entire earth"
      ],
      correctIndex: 2,
      explanation: "A community consists of all biotic populations interacting in a specific area."
    }
  ],
  "chap-8": [
    {
      id: 1,
      question: "Green plants are categorized in an ecosystem as:",
      options: ["Primary Consumers", "Producers", "Decomposers", "Secondary Consumers"],
      correctIndex: 1,
      explanation: "Producers (Autotrophs) create chemical energy from solar energy."
    },
    {
      id: 2,
      question: "Which of the following is a decomposer?",
      options: ["Toad", "Mushroom", "Grass", "Hawk"],
      correctIndex: 1,
      explanation: "Fungi and bacteria are decomposers that break down dead organic matter."
    },
    {
      id: 3,
      question: "The linear flow of energy from one organism to another is called a:",
      options: ["Food Web", "Food Chain", "Ecological Pyramid", "Nutrient Cycle"],
      correctIndex: 1,
      explanation: "A food chain shows a single path of energy flow."
    },
    {
      id: 4,
      question: "In a food web, the primary source of energy is usually:",
      options: ["Water", "Soil", "The Sun", "Plants"],
      correctIndex: 2,
      explanation: "The sun provides the initial energy that producers capture via photosynthesis."
    },
    {
      id: 5,
      question: "Approximately what percentage of energy is transferred from one trophic level to the next?",
      options: ["90%", "50%", "10%", "100%"],
      correctIndex: 2,
      explanation: "The 10% rule states that most energy is lost as heat at each level."
    },
    {
      id: 6,
      question: "Which term refers to the feeding position of an organism in a food chain?",
      options: ["Niche", "Habitat", "Trophic Level", "Biome"],
      correctIndex: 2,
      explanation: "Trophic levels categorize organisms by their distance from the energy source."
    },
    {
      id: 7,
      question: "Unlike energy flow, nutrients in an ecosystem are:",
      options: ["Lost as heat", "Unidirectional", "Recycled", "Destroyed"],
      correctIndex: 2,
      explanation: "Nutrients (Carbon, Nitrogen, etc.) circulate through biogeochemical cycles."
    },
    {
      id: 8,
      question: "Which cycle is essential for building proteins in living organisms?",
      options: ["Water Cycle", "Carbon Cycle", "Nitrogen Cycle", "Oxygen Cycle"],
      correctIndex: 2,
      explanation: "Nitrogen is a key component of amino acids, the building blocks of proteins."
    },
    {
      id: 9,
      question: "A network of many interconnected food chains is known as a:",
      options: ["Food Pyramid", "Food Web", "Community", "Ecosystem"],
      correctIndex: 1,
      explanation: "Food webs represent the complex reality of multiple feeding interactions."
    },
    {
      id: 10,
      question: "Energy flow in an ecosystem is described as being:",
      options: ["Cyclical", "Unidirectional", "Multidirectional", "Reversible"],
      correctIndex: 1,
      explanation: "Energy flows from the sun to producers to consumers and does not return."
    }
  ],
  "chap-9": [
    {
      id: 1,
      question: "Crops that complete their entire life cycle in one year are known as:",
      options: ["Perennials", "Biennials", "Annuals", "Ephemerals"],
      correctIndex: 2,
      explanation: "Annuals, like maize and cowpea, germinate, flower, and die within one growing season."
    },
    {
      id: 2,
      question: "Which of the following is an example of a perennial crop?",
      options: ["Rice", "Carrot", "Cocoa", "Tomato"],
      correctIndex: 2,
      explanation: "Perennials like cocoa and oil palm live for several years and produce many harvests."
    },
    {
      id: 3,
      question: "What is a major disadvantage of bush burning in agriculture?",
      options: [
        "It releases ash to the soil",
        "It clears land quickly",
        "It destroys soil microorganisms and increases erosion",
        "It kills weed seeds"
      ],
      correctIndex: 2,
      explanation: "Burning kills beneficial bacteria and fungi and leaves soil exposed to wind and rain."
    },
    {
      id: 4,
      question: "The practice of planting only one type of crop on a farm is called:",
      options: ["Crop Rotation", "Monoculturing", "Mixed Farming", "Shifting Cultivation"],
      correctIndex: 1,
      explanation: "Monoculturing leads to rapid nutrient depletion and easy pest outbreaks."
    },
    {
      id: 5,
      question: "Which of the following is a common pest of cereal grains in the field and in storage?",
      options: ["Aphids", "Weevils", "Tapeworms", "Cane rats"],
      correctIndex: 1,
      explanation: "Weevils are notorious for boring into and destroying stored grains like maize."
    },
    {
      id: 6,
      question: "Plant diseases like 'Mosaic' are primarily caused by:",
      options: ["Fungi", "Bacteria", "Viruses", "Nematodes"],
      correctIndex: 2,
      explanation: "Mosaic diseases, common in cassava and tobacco, are viral in origin."
    },
    {
      id: 7,
      question: "According to Malthusian Theory, human population increases:",
      options: ["Arithmetically", "Geometrically", "Linearly", "Stagnantly"],
      correctIndex: 1,
      explanation: "Malthus argued population grows exponentially (2, 4, 8, 16...) while food grows slowly."
    },
    {
      id: 8,
      question: "Which class of crop is primarily grown for its underground storage organs rich in starch?",
      options: ["Legumes", "Cereals", "Tuber crops", "Latex crops"],
      correctIndex: 2,
      explanation: "Tuber crops like yam and cassava store carbohydrates in their roots or stems."
    },
    {
      id: 9,
      question: "The presence of a 'Diastema' in some herbivores is related to:",
      options: ["Digestion", "Dentition", "Respiration", "Excretion"],
      correctIndex: 1,
      explanation: "It is a gap in the teeth arrangement (dentition) where canines are missing."
    },
    {
      id: 10,
      question: "Which agricultural activity helps to maintain soil fertility naturally?",
      options: ["Bush burning", "Overgrazing", "Crop rotation", "Deforestation"],
      correctIndex: 2,
      explanation: "Rotating crops, especially using legumes, helps restore soil nutrients naturally."
    }
  ],
  "chap-10": [
    {
      id: 1,
      question: "Which of the following microorganisms is acellular (not made of cells)?",
      options: ["Bacteria", "Fungi", "Viruses", "Protozoa"],
      correctIndex: 2,
      explanation: "Viruses are genetic material wrapped in protein and lack cellular structures."
    },
    {
      id: 2,
      question: "The shape of spherical bacteria is termed:",
      options: ["Bacilli", "Spirilla", "Cocci", "Vibrio"],
      correctIndex: 2,
      explanation: "Cocci are round-shaped bacteria (e.g., Streptococcus)."
    },
    {
      id: 3,
      question: "Which vector transmits the parasite that causes Malaria?",
      options: ["Housefly", "Male Anopheles mosquito", "Female Anopheles mosquito", "Tsetse fly"],
      correctIndex: 2,
      explanation: "The female Anopheles mosquito carries the Plasmodium parasite."
    },
    {
      id: 4,
      question: "Which of the following is a water-borne disease caused by bacteria?",
      options: ["Malaria", "Cholera", "Common Cold", "Measles"],
      correctIndex: 1,
      explanation: "Cholera is caused by the bacterium Vibrio cholerae, typically spread through contaminated water."
    },
    {
      id: 5,
      question: "Microorganisms that recycle nutrients by breaking down dead matter are:",
      options: ["Parasites", "Decomposers", "Producers", "Predators"],
      correctIndex: 1,
      explanation: "Decomposers like fungi and bacteria are essential for nutrient cycling."
    },
    {
      id: 6,
      question: "The first antibiotic discovered, Penicillin, is derived from a:",
      options: ["Bacterium", "Virus", "Fungus", "Alga"],
      correctIndex: 2,
      explanation: "Penicillin is produced by the mould (fungus) Penicillium notatum."
    },
    {
      id: 7,
      question: "Which microorganism is used in the baking industry to make bread rise?",
      options: ["Bacteria", "Yeast", "Amoeba", "Mould"],
      correctIndex: 1,
      explanation: "Yeast (a fungus) ferments sugar, producing CO2 gas that causes dough to rise."
    },
    {
      id: 8,
      question: "Bacteria in the human large intestine are beneficial because they synthesize:",
      options: ["Vitamin A", "Vitamin K", "Vitamin C", "Vitamin D"],
      correctIndex: 1,
      explanation: "Gut bacteria produce Vitamin K, which is essential for blood clotting."
    },
    {
      id: 9,
      question: "The protein coat that surrounds the genetic material of a virus is called a:",
      options: ["Pellicle", "Capsid", "Cell wall", "Nuclear membrane"],
      correctIndex: 1,
      explanation: "A capsid protects the viral DNA or RNA."
    },
    {
      id: 10,
      question: "Pathogenic microorganisms are those that:",
      options: ["Are used in industry", "Cause diseases", "Clean the environment", "Provide oxygen"],
      correctIndex: 1,
      explanation: "Pathogens are harmful microbes that cause illness in their hosts."
    }
  ],
  "chap-11": [
    {
      id: 1,
      question: "What is the typical optimum temperature for the growth of many human pathogenic bacteria?",
      options: ["0°C", "20°C", "37°C", "100°C"],
      correctIndex: 2,
      explanation: "Human pathogens usually thrive at body temperature (37°C)."
    },
    {
      id: 2,
      question: "A solution containing weakened or killed pathogens used to stimulate antibody production is a:",
      options: ["Antibiotic", "Vaccine", "Antiseptic", "Disinfectant"],
      correctIndex: 1,
      explanation: "Vaccines trigger the immune system to recognize and fight future infections."
    },
    {
      id: 3,
      question: "Which of the following is a harmful effect of microorganisms?",
      options: ["Recycling nutrients", "Food spoilage", "Sewage treatment", "Nitrogen fixation"],
      correctIndex: 1,
      explanation: "Microbes like bacteria and moulds cause food to rot and become unsafe."
    },
    {
      id: 4,
      question: "Antibiotics are primarily used to kill or inhibit the growth of:",
      options: ["Viruses", "Fungi", "Bacteria", "Protozoa"],
      correctIndex: 2,
      explanation: "Antibiotics (like Penicillin) are effective against bacterial infections."
    },
    {
      id: 5,
      question: "The use of 'Bacillus thuringiensis' to control insect pests is an example of:",
      options: ["Chemical control", "Physical control", "Biological control", "Cultural control"],
      correctIndex: 2,
      explanation: "Biological control uses living organisms to reduce pest populations."
    },
    {
      id: 6,
      question: "Which microorganism is responsible for the disease TB (Tuberculosis)?",
      options: ["Virus", "Bacterium", "Fungus", "Protozoan"],
      correctIndex: 1,
      explanation: "TB is caused by the bacterium Mycobacterium tuberculosis."
    },
    {
      id: 7,
      question: "The process of preserving food by heating it to a high temperature and then cooling it rapidly is:",
      options: ["Salting", "Pasteurization", "Fermentation", "Pickling"],
      correctIndex: 1,
      explanation: "Pasteurization (developed by Louis Pasteur) kills many harmful microbes in milk and juice."
    },
    {
      id: 8,
      question: "Food poisoning from poorly stored meat is often caused by which genus of bacteria?",
      options: ["Rhizobium", "Salmonella", "Yeast", "Nitrobacter"],
      correctIndex: 1,
      explanation: "Salmonella species are a common cause of foodborne illness."
    },
    {
      id: 9,
      question: "Which of the following is essential for the growth of almost all microorganisms?",
      options: ["Extreme cold", "Darkness", "Moisture", "High pressure"],
      correctIndex: 2,
      explanation: "Water is a vital requirement for metabolic activities in microbes."
    },
    {
      id: 10,
      question: "Decomposers are beneficial to the ecosystem because they:",
      options: ["Cause diseases", "Produce oxygen", "Recycle nutrients", "Fix nitrogen"],
      correctIndex: 2,
      explanation: "By breaking down dead matter, decomposers return essential minerals to the soil."
    }
  ],
  "chap-12": [
    {
      id: 1,
      question: "Which of the following chemicals is safe to use on human skin to kill microorganisms?",
      options: ["Disinfectant", "Antiseptic", "Insecticide", "Herbicide"],
      correctIndex: 1,
      explanation: "Antiseptics (like methylated spirit) are mild enough for biological tissues, unlike disinfectants."
    },
    {
      id: 2,
      question: "What is the primary method used to sterilize medical equipment like scalpels and syringes?",
      options: ["Boiling", "Autoclaving", "Freezing", "Drying"],
      correctIndex: 1,
      explanation: "Autoclaving uses steam under high pressure to ensure all spores and microbes are killed."
    },
    {
      id: 3,
      question: "Which of the following is a role of public health authorities?",
      options: [
        "Synthesizing food",
        "Refuse and sewage disposal",
        "Cloning organisms",
        "Producing electricity"
      ],
      correctIndex: 1,
      explanation: "Proper waste management is a core pillar of maintaining community health."
    },
    {
      id: 4,
      question: "Which international organization is responsible for coordinating global health responses?",
      options: ["UNICEF", "WHO", "UNESCO", "OPEC"],
      correctIndex: 1,
      explanation: "The World Health Organization (WHO) leads global health matters."
    },
    {
      id: 5,
      question: "The process of adding chlorine to water during treatment is to:",
      options: ["Remove dirt", "Kill pathogenic microbes", "Change the color", "Increase the volume"],
      correctIndex: 1,
      explanation: "Chlorination is a chemical disinfection process to make water safe for drinking."
    },
    {
      id: 6,
      question: "Which of the following is an example of a vector-borne disease control method?",
      options: [
        "Using antiseptics",
        "Spraying stagnant water",
        "Boiling milk",
        "Salting meat"
      ],
      correctIndex: 1,
      explanation: "Spraying water kills mosquito larvae, breaking the life cycle of the malaria vector."
    },
    {
      id: 7,
      question: "A high concentration of salt or sugar helps preserve food by:",
      options: [
        "Softening the food",
        "Dehydrating microorganisms via osmosis",
        "Adding nutrients",
        "Improving the taste"
      ],
      correctIndex: 1,
      explanation: "High osmotic pressure draws water out of microbial cells, preventing their growth."
    },
    {
      id: 8,
      question: "Which organization focuses specifically on the welfare and health of children?",
      options: ["WHO", "UNICEF", "NCDC", "UNDP"],
      correctIndex: 1,
      explanation: "UNICEF (United Nations Children's Fund) focuses on maternal and child health."
    },
    {
      id: 9,
      question: "Quarantine is a measure used to:",
      options: [
        "Treat infected patients",
        "Isolate individuals who may have been exposed to a disease",
        "Produce vaccines",
        "Kill disease vectors"
      ],
      correctIndex: 1,
      explanation: "Quarantine prevents the spread of infectious diseases by restricting movement."
    },
    {
      id: 10,
      question: "The use of UV light to sterilize hospital surfaces is an example of:",
      options: ["Chemical control", "Radiation control", "Biological control", "Dehydration"],
      correctIndex: 1,
      explanation: "Short-wave UV radiation damages the DNA of microorganisms, killing them."
    }
  ],
  "chap-13": [
    {
      id: 1,
      question: "Which of the following defines an aquatic habitat with high salinity?",
      options: ["Freshwater", "Marine", "Estuarine", "Rainforest"],
      correctIndex: 1,
      explanation: "Marine habitats (Oceans/Seas) are characterized by high salt concentration."
    },
    {
      id: 2,
      question: "The oceanic zone located between high tide and low tide marks is the:",
      options: ["Benthic Zone", "Neritic Zone", "Intertidal Zone", "Abyssal Zone"],
      correctIndex: 2,
      explanation: "The intertidal (littoral) zone is exposed to air at low tide and submerged at high tide."
    },
    {
      id: 3,
      question: "An area where freshwater from a river meets and mixes with saltwater from the sea is a:",
      options: ["Lake", "Lagoon", "Estuary", "Pond"],
      correctIndex: 2,
      explanation: "Estuaries have fluctuating salinity and serve as vital nurseries for many species."
    },
    {
      id: 4,
      question: "Standing freshwater bodies like lakes and ponds are categorized as:",
      options: ["Lotic", "Lentic", "Benthic", "Pelagic"],
      correctIndex: 1,
      explanation: "Lentic ecosystems refer to still or standing waters."
    },
    {
      id: 5,
      question: "Running freshwater bodies like rivers and streams are categorized as:",
      options: ["Lentic", "Lotic", "Abyssal", "Neritic"],
      correctIndex: 1,
      explanation: "Lotic ecosystems refer to flowing or running waters."
    },
    {
      id: 6,
      question: "Freshwater organisms face the primary physiological challenge of:",
      options: [
        "Losing too much water",
        "Gaining too much salt",
        "Water constantly entering their body via osmosis",
        "Lack of oxygen"
      ],
      correctIndex: 2,
      explanation: "Because their body is saltier than the water, water enters, requiring active osmoregulation."
    },
    {
      id: 7,
      question: "Bony marine fishes adapt to high salinity by:",
      options: [
        "Drinking no water",
        "Drinking seawater and pumping out salt through gills",
        "Storing salt in their muscles",
        "Producing dilute urine"
      ],
      correctIndex: 1,
      explanation: "Marine fish must drink water to stay hydrated and use active transport to remove excess salt."
    },
    {
      id: 8,
      question: "The deepest part of the ocean, characterized by darkness and immense pressure, is the:",
      options: ["Neritic Zone", "Littoral Zone", "Abyssal Zone", "Intertidal Zone"],
      correctIndex: 2,
      explanation: "The abyssal zone is the deep, dark floor of the open ocean."
    },
    {
      id: 9,
      question: "Mangrove swamps are a classic example of which type of habitat?",
      options: ["Freshwater", "Marine", "Estuarine", "Desert"],
      correctIndex: 2,
      explanation: "Mangroves thrive in the brackish, tidal waters of estuaries."
    },
    {
      id: 10,
      question: "The shallow region of the ocean over the continental shelf is the:",
      options: ["Benthic Zone", "Neritic Zone", "Pelagic Zone", "Intertidal Zone"],
      correctIndex: 1,
      explanation: "The neritic zone is well-lit and rich in nutrients, supporting high biodiversity."
    }
  ],
  "chap-14": [
    {
      id: 1,
      question: "Which of the following terrestrial habitats is characterized by distinct vertical layers or strata?",
      options: ["Desert", "Grassland", "Tropical Rainforest", "Marsh"],
      correctIndex: 2,
      explanation: "Rainforests have stratified layers: Emergent, Canopy, Understorey, and Forest floor."
    },
    {
      id: 2,
      question: "Plants adapted to survive in very dry habitats like deserts are called:",
      options: ["Hydrophytes", "Mesophytes", "Xerophytes", "Halophytes"],
      correctIndex: 2,
      explanation: "Xerophytes (like Cactus) have specialized features to conserve water in arid lands."
    },
    {
      id: 3,
      question: "What is a common adaptation of trees in the savanna (grassland) to survive periodic fires?",
      options: ["Thin bark", "Broad leaves", "Thick corky bark", "Surface roots"],
      correctIndex: 2,
      explanation: "Thick bark protects the internal living tissues of savanna trees from fire damage."
    },
    {
      id: 4,
      question: "The 'breathing roots' found in plants living in water-logged marshes are called:",
      options: ["Tap roots", "Adventitious roots", "Pneumatophores", "Stilt roots"],
      correctIndex: 2,
      explanation: "Pneumatophores grow upwards out of the water to facilitate gas exchange."
    },
    {
      id: 5,
      question: "Which terrestrial habitat has the lowest annual rainfall?",
      options: ["Forest", "Savanna", "Arid Land (Desert)", "Marsh"],
      correctIndex: 2,
      explanation: "Deserts are defined by their extreme lack of precipitation."
    },
    {
      id: 6,
      question: "The layer of a rainforest that forms a continuous 'roof' of leaves is the:",
      options: ["Emergent layer", "Canopy", "Understorey", "Shrub layer"],
      correctIndex: 1,
      explanation: "The canopy is the thick, leafy layer that intercepts most of the sunlight."
    },
    {
      id: 7,
      question: "Animals in the desert often adapt to extreme daytime heat by being:",
      options: ["Diurnal", "Nocturnal", "Hibernating", "Aquatic"],
      correctIndex: 1,
      explanation: "Nocturnal animals are active at night when temperatures are much cooler."
    },
    {
      id: 8,
      question: "Xerophytes often have their leaves modified into spines to:",
      options: ["Increase photosynthesis", "Catch more rain", "Reduce water loss via transpiration", "Absorb oxygen"],
      correctIndex: 2,
      explanation: "Reducing leaf surface area significantly lowers the amount of water lost to the air."
    },
    {
      id: 9,
      question: "A characteristic feature of the Guinea Savanna in Nigeria is:",
      options: ["Dense tall trees", "Permafrost", "Tall grasses and scattered trees", "Sand dunes"],
      correctIndex: 2,
      explanation: "Savannas are transition zones between forests and deserts, dominated by grasses."
    },
    {
      id: 10,
      question: "Which factor primarily determines the type of vegetation in a terrestrial biome?",
      options: ["Wind speed", "Rainfall and Temperature", "Soil pH", "Altitude"],
      correctIndex: 1,
      explanation: "Climate (Precipitation and Heat) is the master controller of plant distribution."
    }
  ],
  "chap-15": [
    {
      id: 1,
      question: "Reproduction where a single cell divides into two identical daughter cells is:",
      options: ["Conjugation", "Binary Fission", "Budding", "Fragmentation"],
      correctIndex: 1,
      explanation: "Binary fission is the primary asexual method for Amoeba and bacteria."
    },
    {
      id: 2,
      question: "In Paramecium, sexual reproduction involving the exchange of nuclear material is called:",
      options: ["Binary Fission", "Multiple Fission", "Conjugation", "Spore formation"],
      correctIndex: 2,
      explanation: "Conjugation allows for genetic recombination in ciliates."
    },
    {
      id: 3,
      question: "Which of the following describes Spirogyra's sexual reproduction?",
      options: ["Binary Fission", "Conjugation", "Budding", "Regeneration"],
      correctIndex: 1,
      explanation: "Spirogyra filaments exchange cellular contents to form a zygospore."
    },
    {
      id: 4,
      question: "Earthworms are described as hermaphrodites because they:",
      options: [
        "Have no reproductive organs",
        "Reproduce asexually",
        "Possess both male and female organs in one individual",
        "Can change their sex"
      ],
      correctIndex: 2,
      explanation: "Hermaphrodites (monoecious) produce both sperm and eggs."
    },
    {
      id: 5,
      question: "Despite being hermaphrodites, earthworms usually practice:",
      options: ["Self-fertilization", "Cross-fertilization", "Asexual cloning", "Parthenogenesis"],
      correctIndex: 1,
      explanation: "Cross-fertilization ensures genetic variation among offspring."
    },
    {
      id: 6,
      question: "The life cycle of a cockroach is an example of:",
      options: [
        "Complete Metamorphosis",
        "Incomplete Metamorphosis",
        "No Metamorphosis",
        "Binary Fission"
      ],
      correctIndex: 1,
      explanation: "Cockroaches skip the pupal stage (Egg → Nymph → Adult)."
    },
    {
      id: 7,
      question: "Which stage is present in the life cycle of a Housefly but ABSENT in a Cockroach?",
      options: ["Egg", "Larva", "Pupa", "Adult"],
      correctIndex: 2,
      explanation: "Complete metamorphosis (Housefly) includes a resting pupal stage."
    },
    {
      id: 8,
      question: "Garden snails use which structure to stimulate their partner during mating?",
      options: ["Spermatheca", "Clitellum", "Love Dart", "Ootheca"],
      correctIndex: 2,
      explanation: "The love dart is a calcareous or chitinous spike used during courtship."
    },
    {
      id: 9,
      question: "The protective case that holds cockroach eggs is called the:",
      options: ["Cocoon", "Ootheca", "Pupa", "Capsid"],
      correctIndex: 1,
      explanation: "Cockroaches lay eggs in groups within a tough capsule called an ootheca."
    },
    {
      id: 10,
      question: "The dominant phase in the life cycle of a Bryophyte (like Moss) is the:",
      options: ["Sporophyte", "Gametophyte", "Zygospore", "Rhizoid"],
      correctIndex: 1,
      explanation: "In mosses, the green, leafy part we see is the gamete-producing phase."
    }
  ],
  "chap-16": [
    {
      id: 1,
      question: "The wave-like movement of the gut walls that pushes food along is called:",
      options: ["Diffusion", "Peristalsis", "Osmosis", "Metabolism"],
      correctIndex: 1,
      explanation: "Peristalsis is the involuntary muscular contraction that moves food through the alimentary canal."
    },
    {
      id: 2,
      question: "Which enzyme is found in human saliva and starts the digestion of starch?",
      options: ["Pepsin", "Ptyalin", "Trypsin", "Lipase"],
      correctIndex: 1,
      explanation: "Ptyalin (salivary amylase) breaks down complex starch into maltose in the mouth."
    },
    {
      id: 3,
      question: "The acidic environment of the stomach (pH 2.0) is primarily maintained by:",
      options: ["Bile", "Lactic Acid", "Hydrochloric Acid (HCl)", "Acetic Acid"],
      correctIndex: 2,
      explanation: "HCl kills bacteria and activates pepsin for protein digestion."
    },
    {
      id: 4,
      question: "Which organ produces Bile for the emulsification of fats?",
      options: ["Pancreas", "Stomach", "Liver", "Gallbladder"],
      correctIndex: 2,
      explanation: "Bile is produced by the liver, although it is stored in the gallbladder."
    },
    {
      id: 5,
      question: "Final digestion and maximum absorption of nutrients occurs in the:",
      options: ["Stomach", "Large Intestine", "Small Intestine", "Rectum"],
      correctIndex: 2,
      explanation: "The small intestine's large surface area (villi) makes it the primary site for absorption."
    },
    {
      id: 6,
      question: "Fatty acids and glycerol are absorbed into which specialized vessels in the villi?",
      options: ["Blood capillaries", "Lacteals", "Arteries", "Veins"],
      correctIndex: 1,
      explanation: "Lacteals are part of the lymphatic system and absorb lipids."
    },
    {
      id: 7,
      question: "The breakdown of excess amino acids into urea in the liver is called:",
      options: ["Detoxification", "Deamination", "Digestion", "Assimilation"],
      correctIndex: 1,
      explanation: "Deamination removes the amino group from amino acids to form urea."
    },
    {
      id: 8,
      question: "Which pancreatic enzyme is responsible for the digestion of proteins into peptides?",
      options: ["Amylase", "Lipase", "Trypsin", "Insulin"],
      correctIndex: 2,
      explanation: "Trypsin is a powerful protease secreted by the pancreas."
    },
    {
      id: 9,
      question: "A lack of protein in a child's diet leads to which deficiency disease?",
      options: ["Scurvy", "Rickets", "Kwashiorkor", "Goitre"],
      correctIndex: 2,
      explanation: "Kwashiorkor is characterized by a swollen abdomen and stunted growth due to protein deficiency."
    },
    {
      id: 10,
      question: "Insulin, which regulates blood sugar levels, is produced by the:",
      options: ["Liver", "Pancreas", "Kidney", "Thyroid"],
      correctIndex: 1,
      explanation: "The Islets of Langerhans in the pancreas secrete insulin."
    }
  ],
  "chap-17": [
    {
      id: 1,
      question: "The liquid part of the blood that carries nutrients and waste is the:",
      options: ["Serum", "Plasma", "Lymph", "Hemoglobin"],
      correctIndex: 1,
      explanation: "Plasma is the pale yellow fluid composing about 55% of total blood volume."
    },
    {
      id: 2,
      question: "Which blood cells are responsible for carrying oxygen throughout the body?",
      options: ["Leukocytes", "Thrombocytes", "Erythrocytes", "Lymphocytes"],
      correctIndex: 2,
      explanation: "Erythrocytes (Red Blood Cells) contain hemoglobin which binds to oxygen."
    },
    {
      id: 3,
      question: "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
      options: ["Aorta", "Pulmonary Vein", "Pulmonary Artery", "Vena Cava"],
      correctIndex: 2,
      explanation: "The pulmonary artery is the only artery that carries deoxygenated blood."
    },
    {
      id: 4,
      question: "Veins are distinguished from arteries by the presence of:",
      options: ["Thick muscular walls", "High pressure", "Valves", "Pulse"],
      correctIndex: 2,
      explanation: "Valves in veins prevent the backflow of blood as it travels toward the heart."
    },
    {
      id: 5,
      question: "Double circulation in humans consists of which two circuits?",
      options: [
        "Major and Minor",
        "Pulmonary and Systemic",
        "Arterial and Venous",
        "Lymphatic and Cardiac"
      ],
      correctIndex: 1,
      explanation: "Pulmonary moves blood to the lungs; Systemic moves it to the rest of the body."
    },
    {
      id: 6,
      question: "The muscular wall that separates the left and right sides of the heart is the:",
      options: ["Valve", "Atrium", "Septum", "Ventricle"],
      correctIndex: 2,
      explanation: "The septum prevents the mixing of oxygenated and deoxygenated blood."
    },
    {
      id: 7,
      question: "Which plant tissue is responsible for the upward transport of water and mineral salts?",
      options: ["Phloem", "Cambium", "Xylem", "Pith"],
      correctIndex: 2,
      explanation: "Xylem vessels act as pipes for water transport from roots to leaves."
    },
    {
      id: 8,
      question: "The movement of manufactured food (sucrose) in the phloem is called:",
      options: ["Transpiration", "Translocation", "Diffusion", "Osmosis"],
      correctIndex: 1,
      explanation: "Translocation is the distribution of organic nutrients throughout the plant."
    },
    {
      id: 9,
      question: "Which component of blood is essential for the clotting process at injury sites?",
      options: ["Red Blood Cells", "Plasma", "Platelets", "White Blood Cells"],
      correctIndex: 2,
      explanation: "Platelets (Thrombocytes) initiate the chemical cascade that leads to blood clotting."
    },
    {
      id: 10,
      question: "The fluid that bathes the cells and is eventually collected by the lymphatic system is:",
      options: ["Plasma", "Cytoplasm", "Tissue Fluid", "Bile"],
      correctIndex: 2,
      explanation: "Tissue fluid leaks from capillaries and is returned to circulation via the lymph."
    }
  ],
  "chap-18": [
    {
      id: 1,
      question: "During inhalation, the diaphragm:",
      options: ["Relaxes and domes", "Contracts and flattens", "Stays still", "Expands"],
      correctIndex: 1,
      explanation: "Contraction of the diaphragm increases the chest volume, allowing air to rush in."
    },
    {
      id: 2,
      question: "Which of the following occurs during exhalation?",
      options: [
        "Thoracic volume increases",
        "Ribcage moves up and out",
        "External intercostal muscles relax",
        "Pressure in lungs decreases"
      ],
      correctIndex: 2,
      explanation: "Relaxation of intercostal muscles causes the ribcage to move down and in."
    },
    {
      id: 3,
      question: "The first stage of cellular respiration, Glycolysis, occurs in the:",
      options: ["Mitochondrial Matrix", "Cristae", "Cytoplasm", "Nucleus"],
      correctIndex: 2,
      explanation: "Glycolysis breaks down glucose into pyruvate in the cell's cytosol (cytoplasm)."
    },
    {
      id: 4,
      question: "The final acceptor of electrons in the Electron Transport Chain (ETC) is:",
      options: ["Carbon Dioxide", "Water", "Oxygen", "Glucose"],
      correctIndex: 2,
      explanation: "Oxygen combines with hydrogen ions to form water at the end of the ETC."
    },
    {
      id: 5,
      question: "How many net ATP molecules are produced during Glycolysis per glucose molecule?",
      options: ["38 ATP", "36 ATP", "2 ATP", "4 ATP"],
      correctIndex: 2,
      explanation: "While 4 ATP are made, 2 are consumed, resulting in a net gain of 2 ATP."
    },
    {
      id: 6,
      question: "The Krebs Cycle takes place specifically in the:",
      options: ["Inner membrane", "Mitochondrial Matrix", "Ribosomes", "Golgi Body"],
      correctIndex: 1,
      explanation: "The matrix contains the necessary enzymes for the tricarboxylic acid cycle."
    },
    {
      id: 7,
      question: "Which gas is released as a waste product of cellular respiration?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      correctIndex: 2,
      explanation: "Decarboxylation during the Krebs cycle releases CO2."
    },
    {
      id: 8,
      question: "What is the primary purpose of breathing?",
      options: [
        "To get rid of food",
        "To provide oxygen for cellular respiration and remove CO2",
        "To cool the body",
        "To make sound"
      ],
      correctIndex: 1,
      explanation: "Breathing facilitates gaseous exchange between the atmosphere and the blood."
    },
    {
      id: 9,
      question: "The inner folds of the mitochondria where the ETC is located are called:",
      options: ["Stroma", "Cristae", "Grana", "Thylakoids"],
      correctIndex: 1,
      explanation: "Cristae increase the surface area for energy-generating chemical reactions."
    },
    {
      id: 10,
      question: "Most of the ATP in aerobic respiration is generated during which stage?",
      options: ["Glycolysis", "Krebs Cycle", "Electron Transport Chain", "Fermentation"],
      correctIndex: 2,
      explanation: "Oxidative phosphorylation in the ETC produces roughly 32-34 ATP molecules."
    }
  ],
  "chap-19": [
    {
      id: 1,
      question: "The structural and functional unit of the human kidney is the:",
      options: ["Neuron", "Nephron", "Alveolus", "Villus"],
      correctIndex: 1,
      explanation: "Each kidney contains about one million nephrons which filter the blood."
    },
    {
      id: 2,
      question: "The process of Ultrafiltration occurs specifically in the:",
      options: ["Loop of Henle", "Bowman's Capsule", "Collecting Duct", "Pelvis"],
      correctIndex: 1,
      explanation: "High pressure in the glomerulus forces fluid into the Bowman's capsule."
    },
    {
      id: 3,
      question: "Which part of the nephron is responsible for the selective reabsorption of glucose and amino acids?",
      options: ["Distal Tubule", "Loop of Henle", "Proximal Convoluted Tubule (PCT)", "Ureter"],
      correctIndex: 2,
      explanation: "The PCT reclaims useful substances from the filtrate back into the blood."
    },
    {
      id: 4,
      question: "The outer dark-red layer of the kidney is the:",
      options: ["Medulla", "Pelvis", "Cortex", "Pyramid"],
      correctIndex: 2,
      explanation: "The cortex is the outermost region containing the renal corpuscles."
    },
    {
      id: 5,
      question: "Which hormone regulates the reabsorption of water in the collecting ducts of the kidney?",
      options: ["Insulin", "Adrenaline", "Antidiuretic Hormone (ADH)", "Thyroxine"],
      correctIndex: 2,
      explanation: "ADH (Vasopressin) increases the permeability of ducts to conserve water."
    },
    {
      id: 6,
      question: "The skin acts as an excretory organ by removing waste through:",
      options: ["Sebaceous glands", "Sweat glands", "Hair follicles", "Epidermis"],
      correctIndex: 1,
      explanation: "Sweat glands remove water, salts, and urea from the blood."
    },
    {
      id: 7,
      question: "Apart from excretion, the sweat produced by the skin helps in:",
      options: ["Digestion", "Thermoregulation", "Respiration", "Circulation"],
      correctIndex: 1,
      explanation: "Evaporation of sweat from the skin surface cools the body."
    },
    {
      id: 8,
      question: "Which layer of the skin contains blood vessels, nerves, and glands?",
      options: ["Epidermis", "Dermis", "Cornified layer", "Granular layer"],
      correctIndex: 1,
      explanation: "The dermis is the 'true skin' housing vital structural components."
    },
    {
      id: 9,
      question: "The funnel-shaped cavity that collects urine and leads to the ureter is the:",
      options: ["Cortex", "Medulla", "Renal Pelvis", "Glomerulus"],
      correctIndex: 2,
      explanation: "Urine from the collecting ducts drains into the pelvis before exiting the kidney."
    },
    {
      id: 10,
      question: "Which of the following is NOT a primary function of the kidney?",
      options: ["Osmoregulation", "Excretion of urea", "pH regulation", "Production of bile"],
      correctIndex: 3,
      explanation: "Bile is produced by the liver, not the kidneys."
    }
  ],
  "chap-20": [
    {
      id: 1,
      question: "Ecological succession that begins on a bare, lifeless rock is known as:",
      options: ["Primary Succession", "Secondary Succession", "Climax Community", "Deflected Succession"],
      correctIndex: 0,
      explanation: "Primary succession starts in areas with no initial soil or life."
    },
    {
      id: 2,
      question: "The first organisms to colonize a new habitat are called:",
      options: ["Predators", "Pioneer Species", "Parasites", "Decomposers"],
      correctIndex: 1,
      explanation: "Pioneer species like lichens are the first to inhabit bare areas."
    },
    {
      id: 3,
      question: "Which stage of succession is the most stable and complex?",
      options: ["Pioneer Stage", "Seral Stage", "Climax Community", "Primary Stage"],
      correctIndex: 2,
      explanation: "The climax community is the final, stable stage of succession."
    },
    {
      id: 4,
      question: "Overcrowding in a population typically occurs when:",
      options: [
        "Carrying capacity is exceeded",
        "Birth rate equals death rate",
        "Resources are unlimited",
        "Predators increase"
      ],
      correctIndex: 0,
      explanation: "Overcrowding happens when the environment cannot sustain the population size."
    },
    {
      id: 5,
      question: "A major effect of overcrowding in animal populations is:",
      options: ["Increased cooperation", "Reduced disease spread", "Increased competition", "Lower mortality"],
      correctIndex: 2,
      explanation: "Overcrowding leads to intense competition for limited food and space."
    }
  ],
  "chap-21": [
    {
      id: 1,
      question: "Which environmental factor is a common cause of food shortage?",
      options: ["Afforestation", "Drought", "Recycling", "Fertilization"],
      correctIndex: 1,
      explanation: "Droughts destroy crops and reduce the available food supply."
    },
    {
      id: 2,
      question: "Thomas Malthus theorized that human population increases:",
      options: ["Arithmetically", "Geometrically", "Linearly", "Stagnantly"],
      correctIndex: 1,
      explanation: "Malthus argued population grows exponentially (2, 4, 8, 16...)."
    },
    {
      id: 3,
      question: "A consequence of severe food shortage in an animal population is:",
      options: ["Increased birth rate", "Emigration", "Reduced competition", "Immigration"],
      correctIndex: 1,
      explanation: "Animals move away (emigrate) from areas with limited food."
    },
    {
      id: 4,
      question: "The state where birth rates roughly equal death rates in a balanced ecosystem is:",
      options: ["Dynamic Equilibrium", "Succession", "Overcrowding", "Eutrophication"],
      correctIndex: 0,
      explanation: "Dynamic equilibrium represents a stable balance in nature."
    },
    {
      id: 5,
      question: "Which organisms are responsible for recycling nutrients back into the soil?",
      options: ["Producers", "Primary Consumers", "Decomposers", "Secondary Consumers"],
      correctIndex: 2,
      explanation: "Decomposers break down dead matter, returning essential minerals."
    }
  ],
  "chap-22": [
    {
      id: 1,
      question: "The migration of birds to warmer regions is an example of:",
      options: ["Structural Adaptation", "Behavioral Adaptation", "Physiological Adaptation", "Morphological Adaptation"],
      correctIndex: 1,
      explanation: "Migration is a behavioral response to seasonal environmental changes."
    },
    {
      id: 2,
      question: "The excessive growth of algae in water bodies due to fertilizer runoff is called:",
      options: ["Pollution", "Conservation", "Eutrophication", "Afforestation"],
      correctIndex: 2,
      explanation: "Eutrophication leads to oxygen depletion and the death of aquatic life."
    },
    {
      id: 3,
      question: "Which gas is primarily responsible for global warming?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      correctIndex: 2,
      explanation: "Carbon dioxide traps heat in the atmosphere (Greenhouse effect)."
    },
    {
      id: 4,
      question: "The planned management of natural resources to prevent their waste is:",
      options: ["Exploitation", "Conservation", "Succession", "Competition"],
      correctIndex: 1,
      explanation: "Conservation aims to sustain resources for future use."
    },
    {
      id: 5,
      question: "Which of the following is a structural adaptation of a cactus?",
      options: ["Migration", "Succulent stems", "Nocturnal lifestyle", "Hibernate"],
      correctIndex: 1,
      explanation: "Succulent stems store water for use during dry periods."
    }
  ],
  "chap-23": [
    {
      id: 1,
      question: "The Central Nervous System (CNS) is composed of the:",
      options: ["Brain and Cranial nerves", "Brain and Spinal Cord", "Spinal cord and Spinal nerves", "Neurons and Synapses"],
      correctIndex: 1,
      explanation: "The CNS consists of the brain and the spinal cord, serving as the command center."
    },
    {
      id: 2,
      question: "Which part of the brain controls voluntary actions, memory, and intelligence?",
      options: ["Cerebellum", "Medulla Oblongata", "Cerebrum", "Hypothalamus"],
      correctIndex: 2,
      explanation: "The cerebrum is the seat of consciousness and high-level thinking."
    },
    {
      id: 3,
      question: "Balance and muscle coordination are primarily controlled by the:",
      options: ["Cerebrum", "Cerebellum", "Thalamus", "Medulla Oblongata"],
      correctIndex: 1,
      explanation: "The cerebellum ensures smooth, coordinated movements and maintains equilibrium."
    },
    {
      id: 4,
      question: "The functional unit of the nervous system is the:",
      options: ["Nephron", "Neuron", "Alveolus", "Axon"],
      correctIndex: 1,
      explanation: "Neurons are specialized cells that transmit electrical impulses."
    },
    {
      id: 5,
      question: "Neurons that carry impulses from the receptors to the CNS are called:",
      options: ["Motor neurons", "Sensory neurons", "Relay neurons", "Effector neurons"],
      correctIndex: 1,
      explanation: "Sensory (Afferent) neurons bring information into the central nervous system."
    },
    {
      id: 6,
      question: "The microscopic gap between two adjacent neurons is the:",
      options: ["Dendrite", "Myelin sheath", "Synapse", "Nodes of Ranvier"],
      correctIndex: 2,
      explanation: "A synapse is the functional junction where neurotransmitters cross from one cell to another."
    },
    {
      id: 7,
      question: "Reflex actions that bypass the brain are processed in the:",
      options: ["Cerebrum", "Spinal Cord", "Cerebellum", "Pituitary Gland"],
      correctIndex: 1,
      explanation: "Spinal reflexes allow for rapid responses to potentially harmful stimuli."
    },
    {
      id: 8,
      question: "Which of the following is an involuntary action controlled by the Medulla Oblongata?",
      options: ["Walking", "Writing", "Heartbeat", "Speaking"],
      correctIndex: 2,
      explanation: "The medulla oblongata controls vital, automatic functions like heart rate and breathing."
    },
    {
      id: 9,
      question: "In a reflex arc, the muscle or gland that performs the final action is the:",
      options: ["Receptor", "Coordinator", "Effector", "Integrator"],
      correctIndex: 2,
      explanation: "Effectors respond to motor neuron impulses to produce the physical response."
    },
    {
      id: 10,
      question: "Chemical substances used to transmit impulses across a synapse are called:",
      options: ["Hormones", "Enzymes", "Neurotransmitters", "Antigens"],
      correctIndex: 2,
      explanation: "Neurotransmitters like Acetylcholine facilitate chemical signaling between neurons."
    }
  ],
  "chap-24": [
    {
      id: 1,
      question: "The light-sensitive inner layer of the eye where images are formed is the:",
      options: ["Iris", "Lens", "Retina", "Sclera"],
      correctIndex: 2,
      explanation: "The retina contains photoreceptors (rods and cones) that detect light."
    },
    {
      id: 2,
      question: "The ability of the eye to focus on both near and distant objects is called:",
      options: ["Reflection", "Accommodation", "Binocular vision", "Stereopsis"],
      correctIndex: 1,
      explanation: "Accommodation involves changing the lens shape using ciliary muscles."
    },
    {
      id: 3,
      question: "Photoreceptors in the eye that are sensitive to color and bright light are:",
      options: ["Rods", "Cones", "Optic nerves", "Ganglions"],
      correctIndex: 1,
      explanation: "Cones are concentrated in the fovea and facilitate color vision."
    },
    {
      id: 4,
      question: "The structure in the inner ear responsible for converting vibrations into nerve impulses is the:",
      options: ["Ossicles", "Tympanum", "Cochlea", "Pinna"],
      correctIndex: 2,
      explanation: "The snail-shaped cochlea contains the Organ of Corti for hearing."
    },
    {
      id: 5,
      question: "Which part of the ear is responsible for maintaining balance and equilibrium?",
      options: ["Ear canal", "Eustachian tube", "Semicircular canals", "Stapes"],
      correctIndex: 2,
      explanation: "The semicircular canals detect head orientation and rotational movement."
    },
    {
      id: 6,
      question: "Taste buds on the tongue detect chemicals that are:",
      options: ["Dry", "Dissolved in saliva", "Gaseous", "Oily"],
      correctIndex: 1,
      explanation: "Gustatory receptors require a liquid medium to function."
    },
    {
      id: 7,
      question: "The sensory cells in the nose that detect chemical vapours are:",
      options: ["Ciliary cells", "Olfactory cells", "Pellicle cells", "Tactile cells"],
      correctIndex: 1,
      explanation: "Olfaction is the sense of smell, mediated by olfactory receptors."
    },
    {
      id: 8,
      question: "A person who can see distant objects clearly but not near ones has:",
      options: ["Myopia", "Hypermetropia", "Astigmatism", "Presbyopia"],
      correctIndex: 1,
      explanation: "Long-sightedness (Hypermetropia) is corrected with convex lenses."
    },
    {
      id: 9,
      question: "The part of the eye that controls the amount of light entering the pupil is the:",
      options: ["Cornea", "Choroid", "Iris", "Lens"],
      correctIndex: 2,
      explanation: "The iris is a muscular ring that adjusts the pupil's diameter."
    },
    {
      id: 10,
      question: "The tube that connects the middle ear to the throat to equalize pressure is the:",
      options: ["Ureter", "Fallopian tube", "Eustachian tube", "Bronchiole"],
      correctIndex: 2,
      explanation: "The Eustachian tube ensures pressure on both sides of the eardrum is balanced."
    }
  ],
  "chap-25": [
    {
      id: 1,
      question: "Hormones are chemical messengers secreted by which type of glands?",
      options: ["Duct glands", "Ductless glands", "Salivary glands", "Sweat glands"],
      correctIndex: 1,
      explanation: "Endocrine glands are ductless and release hormones directly into the blood."
    },
    {
      id: 2,
      question: "Which gland is often referred to as the 'Master Gland'?",
      options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
      correctIndex: 2,
      explanation: "The pituitary gland controls many other endocrine glands."
    },
    {
      id: 3,
      question: "The hormone Thyroxine, which regulates basal metabolic rate, is produced by the:",
      options: ["Adrenal gland", "Thyroid gland", "Islets of Langerhans", "Ovaries"],
      correctIndex: 1,
      explanation: "The thyroid gland located in the neck produces thyroxine."
    },
    {
      id: 4,
      question: "Which mineral is essential for the synthesis of Thyroxine?",
      options: ["Iron", "Calcium", "Iodine", "Magnesium"],
      correctIndex: 2,
      explanation: "Iodine deficiency can lead to an enlarged thyroid, known as Goitre."
    },
    {
      id: 5,
      question: "The 'Emergency Hormone' that prepares the body for fight or flight is:",
      options: ["Insulin", "Adrenaline", "Estrogen", "Progesterone"],
      correctIndex: 1,
      explanation: "Adrenaline (Epinephrine) increases heart rate and blood sugar during stress."
    },
    {
      id: 6,
      question: "Which of the following is an effect of Adrenaline?",
      options: ["Decrease in heart rate", "Constriction of pupils", "Dilation of pupils", "Increased digestion"],
      correctIndex: 2,
      explanation: "Adrenaline dilates pupils to improve vision during emergencies."
    },
    {
      id: 7,
      question: "The hormone that regulates the reabsorption of water in the kidneys is:",
      options: ["Growth Hormone", "ADH (Antidiuretic Hormone)", "TSH", "Prolactin"],
      correctIndex: 1,
      explanation: "ADH is secreted by the pituitary to conserve water in the body."
    },
    {
      id: 8,
      question: "Diabetes Mellitus is caused by a deficiency of which hormone?",
      options: ["Thyroxine", "Insulin", "Glucagon", "ADH"],
      correctIndex: 1,
      explanation: "Insulin is needed to allow cells to absorb glucose from the blood."
    },
    {
      id: 9,
      question: "Which hormone stimulates the development of secondary sexual characteristics in males?",
      options: ["Progesterone", "Estrogen", "Testosterone", "Insulin"],
      correctIndex: 2,
      explanation: "Testosterone is the primary male sex hormone produced in the testes."
    },
    {
      id: 10,
      question: "Over-secretion of Growth Hormone in childhood leads to:",
      options: ["Dwarfism", "Gigantism", "Cretinism", "Goitre"],
      correctIndex: 1,
      explanation: "Excess GH during growth years causes abnormal tallness or gigantism."
    }
  ],
  "chap-26": [
    {
      id: 1,
      question: "The maintenance of a constant internal environment is called:",
      options: ["Metabolism", "Homeostasis", "Osmosis", "Photosynthesis"],
      correctIndex: 1,
      explanation: "Homeostasis ensures the body functions optimally despite external changes."
    },
    {
      id: 2,
      question: "Which of the following is NOT primarily regulated by homeostasis in humans?",
      options: ["Body temperature", "Blood pH", "Eye color", "Blood glucose"],
      correctIndex: 2,
      explanation: "Eye color is a genetic trait, not a homeostatically regulated physiological variable."
    },
    {
      id: 3,
      question: "The regulation of water and salt balance in the body is known as:",
      options: ["Thermoregulation", "Osmoregulation", "Deamination", "Detoxification"],
      correctIndex: 1,
      explanation: "Osmoregulation is primarily carried out by the kidneys under hormonal control."
    },
    {
      id: 4,
      question: "In cold weather, the skin helps conserve heat by:",
      options: ["Vasodilation", "Vasoconstriction", "Increased sweating", "Hair lying flat"],
      correctIndex: 1,
      explanation: "Vasoconstriction narrows blood vessels to reduce heat loss from the skin surface."
    },
    {
      id: 5,
      question: "Which organ converts excess glucose into glycogen for storage?",
      options: ["Pancreas", "Liver", "Kidney", "Stomach"],
      correctIndex: 1,
      explanation: "The liver stores glycogen under the influence of the hormone insulin."
    },
    {
      id: 6,
      question: "The process of converting excess amino acids into urea in the liver is:",
      options: ["Detoxification", "Deamination", "Digestion", "Absorption"],
      correctIndex: 1,
      explanation: "Deamination is a key metabolic function of the liver to handle protein waste."
    },
    {
      id: 7,
      question: "Which hormone is released when blood glucose levels are too high?",
      options: ["Glucagon", "Adrenaline", "Insulin", "Thyroxine"],
      correctIndex: 2,
      explanation: "Insulin lowers blood sugar by promoting its uptake and storage as glycogen."
    },
    {
      id: 8,
      question: "The 'shivering' response in cold conditions is an example of:",
      options: ["Osmoregulation", "Thermoregulation", "Excretion", "Reproduction"],
      correctIndex: 1,
      explanation: "Shivering generates heat through rapid muscle contraction to raise body temperature."
    },
    {
      id: 9,
      question: "Which part of the brain is the primary coordinator for homeostasis?",
      options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla Oblongata"],
      correctIndex: 2,
      explanation: "The hypothalamus acts as the body's 'thermostat' and master regulator."
    },
    {
      id: 10,
      question: "Bile, which aids in fat digestion, is produced in the:",
      options: ["Gallbladder", "Pancreas", "Liver", "Duodenum"],
      correctIndex: 2,
      explanation: "The liver produces bile, which is then stored in the gallbladder."
    }
  ],
  "chap-27": [
    {
      id: 1,
      question: "Who is known as the 'Father of Genetics'?",
      options: ["Charles Darwin", "Gregor Mendel", "Robert Hooke", "Louis Pasteur"],
      correctIndex: 1,
      explanation: "Mendel's experiments with pea plants established the laws of heredity."
    },
    {
      id: 2,
      question: "The physical appearance of an organism is its:",
      options: ["Genotype", "Phenotype", "Allele", "Locus"],
      correctIndex: 1,
      explanation: "Phenotype is the observable trait resulting from the interaction of genotype and environment."
    },
    {
      id: 3,
      question: "Which of the following represents a homozygous recessive genotype?",
      options: ["TT", "Tt", "tt", "XY"],
      correctIndex: 2,
      explanation: "Homozygous recessive means two identical recessive alleles (tt)."
    },
    {
      id: 4,
      question: "In DNA, the nitrogenous base Adenine (A) always pairs with:",
      options: ["Cytosine (C)", "Guanine (G)", "Thymine (T)", "Uracil (U)"],
      correctIndex: 2,
      explanation: "Base pairing in DNA is specific: A pairs with T via two hydrogen bonds."
    },
    {
      id: 5,
      question: "Which nitrogenous base is present in RNA but ABSENT in DNA?",
      options: ["Thymine", "Uracil", "Adenine", "Guanine"],
      correctIndex: 1,
      explanation: "RNA uses Uracil instead of Thymine."
    },
    {
      id: 6,
      question: "The sugar present in the backbone of DNA is:",
      options: ["Ribose", "Glucose", "Deoxyribose", "Sucrose"],
      correctIndex: 2,
      explanation: "DNA stands for Deoxyribonucleic Acid."
    },
    {
      id: 7,
      question: "The exchange of genetic material between homologous chromosomes during meiosis is:",
      options: ["Mutation", "Segregation", "Crossing over", "Fertilization"],
      correctIndex: 2,
      explanation: "Crossing over in Prophase I leads to increased genetic variation."
    },
    {
      id: 8,
      question: "Which blood group is known as the 'Universal Donor'?",
      options: ["A", "B", "AB", "O"],
      correctIndex: 3,
      explanation: "Group O lacks A and B antigens, making it safe for all recipients in many cases."
    },
    {
      id: 9,
      question: "Haemophilia is an example of which type of inheritance?",
      options: ["Autosomal dominant", "Sex-linked recessive", "Codominance", "Incomplete dominance"],
      correctIndex: 1,
      explanation: "Haemophilia is carried on the X chromosome and is usually recessive."
    },
    {
      id: 10,
      question: "A group of organisms that can interbreed to produce fertile offspring is a:",
      options: ["Genus", "Family", "Species", "Order"],
      correctIndex: 2,
      explanation: "Species is the basic biological unit of classification."
    }
  ],
  "chap-28": [
    {
      id: 1,
      question: "The study of fossils to provide evidence for evolution is called:",
      options: ["Oncology", "Paleontology", "Morphology", "Phylogeny"],
      correctIndex: 1,
      explanation: "Paleontology examines the remains of organisms from the past."
    },
    {
      id: 2,
      question: "Structures that have the same evolutionary origin but perform different functions are:",
      options: ["Analogous", "Homologous", "Vestigial", "Symmetrical"],
      correctIndex: 1,
      explanation: "Homologous structures (e.g., human arm and bird wing) show common ancestry."
    },
    {
      id: 3,
      question: "Which scientist proposed the theory of 'Inheritance of Acquired Characteristics'?",
      options: ["Charles Darwin", "Alfred Wallace", "Jean-Baptiste Lamarck", "Gregor Mendel"],
      correctIndex: 2,
      explanation: "Lamarck incorrectly believed traits acquired during life could be passed to offspring."
    },
    {
      id: 4,
      question: "The 'Theory of Natural Selection' was proposed by:",
      options: ["Robert Hooke", "Charles Darwin", "Louis Pasteur", "Rudolf Virchow"],
      correctIndex: 1,
      explanation: "Darwin's landmark work 'On the Origin of Species' detailed natural selection."
    },
    {
      id: 5,
      question: "The mechanism of 'Survival of the Fittest' refers to:",
      options: [
        "The strongest animals killing the weakest",
        "Individuals with better adaptations surviving and reproducing",
        "Organisms choosing their traits",
        "Sudden mutations in all individuals"
      ],
      correctIndex: 1,
      explanation: "Natural selection favors those best suited to their specific environment."
    },
    {
      id: 6,
      question: "An example of modern evolution seen in bacteria is:",
      options: ["Photosynthesis", "Binary fission", "Antibiotic resistance", "Conjugation"],
      correctIndex: 2,
      explanation: "Bacteria evolve rapidly to survive the presence of antibiotic drugs."
    },
    {
      id: 7,
      question: "The wing of a butterfly and the wing of a bird are examples of:",
      options: ["Homologous structures", "Analogous structures", "Vestigial organs", "Atavism"],
      correctIndex: 1,
      explanation: "Analogous structures have similar functions but different evolutionary origins."
    },
    {
      id: 8,
      question: "Which of the following provides molecular evidence for evolution?",
      options: ["Fossil layers", "Similarities in DNA sequences", "Embryo development", "Geographic barriers"],
      correctIndex: 1,
      explanation: "DNA sequencing shows how closely related different species are at a molecular level."
    },
    {
      id: 9,
      question: "Darwin observed unique adaptations in finches located on which islands?",
      options: ["Hawaii", "Galápagos", "Madagascar", "Canary Islands"],
      correctIndex: 1,
      explanation: "The Galápagos finches were central to Darwin's development of evolutionary theory."
    },
    {
      id: 10,
      question: "Vestigial structures are those that:",
      options: [
        "Are essential for survival",
        "Have lost their original function through evolution",
        "Are used for defense",
        "Are found only in plants"
      ],
      correctIndex: 1,
      explanation: "Examples include the human appendix or the pelvic bones in whales."
    }
  ]
};
