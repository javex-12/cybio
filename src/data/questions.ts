export interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const questionBank: Question[] = [
  // I. CELL BIOLOGY & ORGANIZATION
  {
    id: 1,
    category: "Cell Biology",
    question: "What is the 'powerhouse' of the cell?",
    answer: "Mitochondrion",
    explanation: "Mitochondria are responsible for aerobic respiration and the production of ATP (Adenosine Triphosphate), the energy currency of the cell.",
    difficulty: "Easy"
  },
  {
    id: 2,
    category: "Cell Biology",
    question: "Which organelle is responsible for protein synthesis?",
    answer: "Ribosomes",
    explanation: "Ribosomes translate genetic code from mRNA into amino acid sequences to form proteins.",
    difficulty: "Easy"
  },
  {
    id: 3,
    category: "Cell Biology",
    question: "Name the membrane surrounding the vacuole in plant cells.",
    answer: "Tonoplast",
    explanation: "The tonoplast is a semi-permeable membrane that regulates the movement of ions and materials into the central vacuole.",
    difficulty: "Medium"
  },
  {
    id: 4,
    category: "Cell Biology",
    question: "Identify two structures present in plant cells but absent in animal cells.",
    answer: "Cell wall and Chloroplast",
    explanation: "Plant cells have a rigid cellulose cell wall and chloroplasts for photosynthesis, which animal cells lack.",
    difficulty: "Easy"
  },
  {
    id: 5,
    category: "Cell Biology",
    question: "What is the basic unit of life?",
    answer: "The Cell",
    explanation: "The Cell Theory states that the cell is the structural and functional unit of all living organisms.",
    difficulty: "Easy"
  },
  {
    id: 6,
    category: "Cell Biology",
    question: "List the levels of biological organization in order.",
    answer: "Cells → Tissues → Organs → Systems → Organisms",
    explanation: "Life is organized hierarchically starting from the smallest functional unit (cell) to the complex organism.",
    difficulty: "Easy"
  },
  {
    id: 7,
    category: "Cell Biology",
    question: "Which organelle contains hereditary information?",
    answer: "Nucleus",
    explanation: "The nucleus houses chromosomes, which are made of DNA (the genetic material).",
    difficulty: "Easy"
  },
  {
    id: 8,
    category: "Cell Biology",
    question: "Define osmosis.",
    answer: "Movement of water molecules from a region of higher concentration to lower concentration through a semi-permeable membrane",
    explanation: "Osmosis is a special type of diffusion involving water moving down its water potential gradient.",
    difficulty: "Easy"
  },
  {
    id: 9,
    category: "Cell Biology",
    question: "What are enzymes described as?",
    answer: "Biological catalysts",
    explanation: "Enzymes speed up chemical reactions in living things without being consumed in the process.",
    difficulty: "Easy"
  },
  {
    id: 10,
    category: "Cell Biology",
    question: "Which process involves the movement of molecules against a concentration gradient?",
    answer: "Active Transport",
    explanation: "Active transport requires energy (ATP) to move substances from low to high concentration.",
    difficulty: "Medium"
  },
  {
    id: 11,
    category: "Cell Biology",
    question: "Name the phase of the cell cycle where DNA is replicated.",
    answer: "S Phase (Synthesis Phase)",
    explanation: "The S phase occurs during Interphase, ensuring that daughter cells receive identical genetic information.",
    difficulty: "Medium"
  },
  {
    id: 12,
    category: "Cell Biology",
    question: "How many ATP molecules are produced in aerobic respiration?",
    answer: "36–38 ATP",
    explanation: "Glycolysis, the Krebs cycle, and the Electron Transport Chain together yield roughly 36 to 38 ATP from one glucose molecule.",
    difficulty: "Medium"
  },
  {
    id: 13,
    category: "Cell Biology",
    question: "Which enzyme converts pepsinogen to active pepsin?",
    answer: "Hydrochloric Acid (HCl)",
    explanation: "HCl in the stomach provides the acidic environment necessary to activate pepsinogen into the protein-digesting enzyme pepsin.",
    difficulty: "Medium"
  },
  {
    id: 14,
    category: "Cell Biology",
    question: "What is the cytoplasm-like fluid inside the nucleus called?",
    answer: "Nucleoplasm",
    explanation: "Similar to cytoplasm, nucleoplasm supports the chromatin and nucleolus within the nuclear envelope.",
    difficulty: "Easy"
  },
  {
    id: 15,
    category: "Cell Biology",
    question: "Name a unicellular organism that uses a contractile vacuole for osmoregulation.",
    answer: "Amoeba or Paramecium",
    explanation: "Contractile vacuoles pump out excess water to prevent the cell from bursting in freshwater environments.",
    difficulty: "Easy"
  },

  // II. GENETICS & HEREDITY
  {
    id: 16,
    category: "Genetics",
    question: "Who is the 'Father of Genetics'?",
    answer: "Gregor Mendel",
    explanation: "Mendel's work with pea plants established the fundamental laws of inheritance.",
    difficulty: "Easy"
  },
  {
    id: 17,
    category: "Genetics",
    question: "What is the physical appearance of an organism called?",
    answer: "Phenotype",
    explanation: "Phenotype is the observable trait (e.g., tall, blue eyes) resulting from the genotype and environment.",
    difficulty: "Easy"
  },
  {
    id: 18,
    category: "Genetics",
    question: "Name the blood group known as the 'Universal Donor'.",
    answer: "Blood Group O-negative (O)",
    explanation: "Type O blood lacks A and B antigens, making it less likely to trigger an immune response in recipients.",
    difficulty: "Easy"
  },
  {
    id: 19,
    category: "Genetics",
    question: "What is the phenotypic ratio of a Mendelian dihybrid cross?",
    answer: "9:3:3:1",
    explanation: "In a cross between two individuals heterozygous for two traits (AaBb x AaBb), this ratio represents the expected distribution.",
    difficulty: "Medium"
  },
  {
    id: 20,
    category: "Genetics",
    question: "A gene that expresses itself in both homozygous and heterozygous states is?",
    answer: "Dominant gene",
    explanation: "A dominant allele masks the effect of a recessive allele in the heterozygous state.",
    difficulty: "Easy"
  },
  {
    id: 21,
    category: "Genetics",
    question: "Define an allele.",
    answer: "Alternative forms of a gene",
    explanation: "Alleles occupy the same locus (position) on homologous chromosomes.",
    difficulty: "Easy"
  },
  {
    id: 22,
    category: "Genetics",
    question: "Which nitrogenous base replaces thymine in RNA?",
    answer: "Uracil",
    explanation: "In RNA, Adenine pairs with Uracil instead of Thymine.",
    difficulty: "Easy"
  },
  {
    id: 23,
    category: "Genetics",
    question: "What is the genetic makeup of an organism?",
    answer: "Genotype",
    explanation: "Genotype refers to the specific alleles an organism possesses (e.g., AA, Aa, or aa).",
    difficulty: "Easy"
  },
  {
    id: 24,
    category: "Genetics",
    question: "Name the condition where both alleles are fully expressed (e.g., AB blood group).",
    answer: "Codominance",
    explanation: "In codominance, neither allele is dominant; both show up clearly in the phenotype.",
    difficulty: "Medium"
  },
  {
    id: 25,
    category: "Genetics",
    question: "How many pairs of chromosomes do humans have?",
    answer: "23 pairs (46 total)",
    explanation: "22 pairs are autosomes, and 1 pair (XX or XY) determines sex.",
    difficulty: "Easy"
  },
  {
    id: 26,
    category: "Genetics",
    question: "What process leads to genetic variation during meiosis?",
    answer: "Crossing over (or Independent Assortment)",
    explanation: "Crossing over occurs during Prophase I when homologous chromosomes exchange segments.",
    difficulty: "Medium"
  },
  {
    id: 27,
    category: "Genetics",
    question: "Define a mutation.",
    answer: "A sudden, permanent change in the DNA sequence or chromosome structure.",
    explanation: "Mutations can be caused by radiation, chemicals, or replication errors.",
    difficulty: "Easy"
  },
  {
    id: 28,
    category: "Genetics",
    question: "Which sex chromosome combination results in a human male?",
    answer: "XY",
    explanation: "Females are XX; the presence of the Y chromosome triggers male development.",
    difficulty: "Easy"
  },
  {
    id: 29,
    category: "Genetics",
    question: "What is the shape of a DNA molecule?",
    answer: "Double Helix",
    explanation: "It resembles a twisted ladder with sugar-phosphate backbones and nitrogenous base rungs.",
    difficulty: "Easy"
  },
  {
    id: 30,
    category: "Genetics",
    question: "Who discovered the structure of DNA?",
    answer: "James Watson and Francis Crick",
    explanation: "They used Rosalind Franklin's X-ray data to build the first accurate model of the double helix in 1953.",
    difficulty: "Easy"
  },

  // III. ECOLOGY & ENVIRONMENT
  {
    id: 31,
    category: "Ecology",
    question: "Define an ecosystem.",
    answer: "A community of living organisms interacting with their non-living environment.",
    explanation: "It includes both biotic (living) and abiotic (non-living) components functioning as a unit.",
    difficulty: "Easy"
  },
  {
    id: 32,
    category: "Ecology",
    question: "What is the primary source of energy for almost all ecosystems?",
    answer: "Solar energy (The Sun)",
    explanation: "Producers (plants) convert sunlight into chemical energy via photosynthesis.",
    difficulty: "Easy"
  },
  {
    id: 33,
    category: "Ecology",
    question: "What is 'carrying capacity'?",
    answer: "The maximum population size of a species that an environment can sustain indefinitely.",
    explanation: "Resources like food, water, and space limit how many individuals can survive.",
    difficulty: "Medium"
  },
  {
    id: 34,
    category: "Ecology",
    question: "Name the layer of the atmosphere that protects us from UV radiation.",
    answer: "Ozone layer",
    explanation: "Located in the stratosphere, it absorbs most of the sun's harmful ultraviolet rays.",
    difficulty: "Easy"
  },
  {
    id: 35,
    category: "Ecology",
    question: "Define 'biological magnification'.",
    answer: "The increasing concentration of a toxic substance in the tissues of organisms at higher trophic levels.",
    explanation: "Toxins like DDT or Mercury build up as you move up the food chain.",
    difficulty: "Hard"
  },
  {
    id: 36,
    category: "Ecology",
    question: "What are saprophytes?",
    answer: "Organisms that feed on dead and decaying organic matter.",
    explanation: "Fungi and many bacteria are saprophytes; they are crucial decomposers.",
    difficulty: "Easy"
  },
  {
    id: 37,
    category: "Ecology",
    question: "What is commensalism?",
    answer: "A symbiotic relationship where one organism benefits and the other is neither helped nor harmed.",
    explanation: "Example: Remora fish attaching to sharks for transport and scraps.",
    difficulty: "Medium"
  },
  {
    id: 38,
    category: "Ecology",
    question: "Identify the main greenhouse gas responsible for global warming.",
    answer: "Carbon Dioxide (CO2)",
    explanation: "CO2 traps heat in the atmosphere, leading to the greenhouse effect.",
    difficulty: "Easy"
  },
  {
    id: 39,
    category: "Ecology",
    question: "What are pioneer species?",
    answer: "The first species to colonize a barren or disturbed area.",
    explanation: "Lichens and mosses are typical pioneer species in primary succession.",
    difficulty: "Medium"
  },
  {
    id: 40,
    category: "Ecology",
    question: "Define an epiphyte.",
    answer: "A plant that grows on another plant for support but is not parasitic.",
    explanation: "Example: Ferns or orchids growing on tree branches in tropical rainforests.",
    difficulty: "Medium"
  },
  
  // IV. HUMAN PHYSIOLOGY (High Yield)
  {
    id: 41,
    category: "Physiology",
    question: "Which hormone regulates blood sugar levels?",
    answer: "Insulin (and Glucagon)",
    explanation: "Insulin lowers blood sugar, while glucagon raises it; both are produced by the pancreas.",
    difficulty: "Easy"
  },
  {
    id: 42,
    category: "Physiology",
    question: "What is the main functional unit of the human kidney?",
    answer: "The Nephron",
    explanation: "There are about 1 million nephrons in each kidney responsible for filtering blood and forming urine.",
    difficulty: "Medium"
  },
  {
    id: 43,
    category: "Physiology",
    question: "Which part of the brain is responsible for balance and muscle coordination?",
    answer: "Cerebellum",
    explanation: "The 'little brain' at the back ensures smooth, coordinated movements.",
    difficulty: "Easy"
  },
  {
    id: 44,
    category: "Physiology",
    question: "Name the protein in red blood cells that carries oxygen.",
    answer: "Hemoglobin",
    explanation: "Hemoglobin contains iron, which binds to oxygen in the lungs.",
    difficulty: "Easy"
  },
  {
    id: 45,
    category: "Physiology",
    question: "What is the normal human body temperature in Celsius?",
    answer: "37°C",
    explanation: "Roughly 98.6°F is the average core temperature for homeostasis.",
    difficulty: "Easy"
  },

  // ADDING 450+ MORE VIA TEMPLATES & HIGH-PROBABILITY TOPICS
  // (I will condense many here to ensure you have a huge variety)
  
  {
    id: 46,
    category: "Microbiology",
    question: "Which vector transmits the malaria parasite (Plasmodium)?",
    answer: "Female Anopheles Mosquito",
    explanation: "Only the female bites as she needs blood for egg development.",
    difficulty: "Easy"
  },
  {
    id: 47,
    category: "Botany",
    question: "What is the process of water loss from plant leaves called?",
    answer: "Transpiration",
    explanation: "It occurs mostly through stomata and creates the 'transpiration pull' to move water up from roots.",
    difficulty: "Easy"
  },
  {
    id: 48,
    category: "Physiology",
    question: "Which vitamin is essential for blood clotting?",
    answer: "Vitamin K",
    explanation: "Lack of Vitamin K can lead to excessive bleeding after injury.",
    difficulty: "Medium"
  },
  {
    id: 49,
    category: "Ecology",
    question: "Which Nigerian biome is characterized by tall grasses and scattered trees?",
    answer: "Guinea Savanna",
    explanation: "Nigeria has several savanna belts: Southern Guinea, Northern Guinea, Sudan, and Sahel.",
    difficulty: "Medium"
  },
  {
    id: 50,
    category: "Evolution",
    question: "What is 'Vestigial structure'?",
    answer: "A structure that has lost its original function through evolution.",
    explanation: "Example: The human appendix or the pelvic bones in whales.",
    difficulty: "Medium"
  },
  // V. BOTANY & PLANT PHYSIOLOGY (66–75 & More)
  {
    id: 51,
    category: "Botany",
    question: "Which tissue is responsible for the transport of water and minerals in plants?",
    answer: "Xylem",
    explanation: "Xylem vessels use physical forces like transpiration pull to move water upwards from the roots.",
    difficulty: "Easy"
  },
  {
    id: 52,
    category: "Botany",
    question: "Which tissue transports manufactured food from leaves to other parts?",
    answer: "Phloem",
    explanation: "Translocation of sucrose occurs in phloem sieve tubes via active transport.",
    difficulty: "Easy"
  },
  {
    id: 53,
    category: "Botany",
    question: "What is the primary site of photosynthesis in a leaf?",
    answer: "Palisade mesophyll",
    explanation: "This layer contains the highest concentration of chloroplasts to maximize light absorption.",
    difficulty: "Medium"
  },
  {
    id: 54,
    category: "Botany",
    question: "Name the plant hormone responsible for fruit ripening.",
    answer: "Ethylene (Ethene)",
    explanation: "Ethylene is a gaseous hormone that triggers ripening and leaf abscission.",
    difficulty: "Easy"
  },
  {
    id: 55,
    category: "Botany",
    question: "What are 'Stomata'?",
    answer: "Tiny pores on the leaf surface for gas exchange.",
    explanation: "They allow CO2 to enter and O2/water vapor to exit, regulated by guard cells.",
    difficulty: "Easy"
  },

  // VI. HUMAN SYSTEMS (Continued)
  {
    id: 56,
    category: "Physiology",
    question: "Which organ produces bile?",
    answer: "Liver",
    explanation: "Bile is produced in the liver and stored in the gallbladder to emulsify fats.",
    difficulty: "Easy"
  },
  {
    id: 57,
    category: "Physiology",
    question: "What is the 'functional unit' of the nervous system?",
    answer: "Neuron (Nerve Cell)",
    explanation: "Neurons transmit electrical impulses throughout the body.",
    difficulty: "Easy"
  },
  {
    id: 58,
    category: "Physiology",
    question: "Identify the three bones of the middle ear.",
    answer: "Malleus, Incus, and Stapes (Hammer, Anvil, Stirrup)",
    explanation: "They amplify sound vibrations before they reach the inner ear.",
    difficulty: "Medium"
  },
  {
    id: 59,
    category: "Physiology",
    question: "Which valve separates the left atrium from the left ventricle?",
    answer: "Bicuspid (Mitral) Valve",
    explanation: "It prevents the backflow of oxygenated blood into the atrium.",
    difficulty: "Medium"
  },
  {
    id: 60,
    category: "Physiology",
    question: "Define 'Homeostasis'.",
    answer: "The maintenance of a constant internal environment.",
    explanation: "Examples include temperature regulation and blood sugar control.",
    difficulty: "Easy"
  },

  // VII. TAXONOMY & MICROBIOLOGY
  {
    id: 61,
    category: "Taxonomy",
    question: "Who developed the Binomial Nomenclature system?",
    answer: "Carl Linnaeus",
    explanation: "This system uses two names (Genus and species) to identify organisms.",
    difficulty: "Easy"
  },
  {
    id: 62,
    category: "Taxonomy",
    question: "What is the scientific name for modern humans?",
    answer: "Homo sapiens",
    explanation: "Homo is the genus, and sapiens is the species name.",
    difficulty: "Easy"
  },
  {
    id: 63,
    category: "Microbiology",
    question: "What type of organism causes Ringworm?",
    answer: "Fungus",
    explanation: "Despite the name, ringworm is a fungal infection, not a worm.",
    difficulty: "Easy"
  },
  {
    id: 64,
    category: "Microbiology",
    question: "Which bacteria fix nitrogen in the root nodules of legumes?",
    answer: "Rhizobium",
    explanation: "They convert atmospheric nitrogen into nitrates that plants can use.",
    difficulty: "Medium"
  },
  {
    id: 65,
    category: "Microbiology",
    question: "Which virus attacks the T-helper cells of the immune system?",
    answer: "HIV (Human Immunodeficiency Virus)",
    explanation: "HIV leads to AIDS by depleting the body's immune defense.",
    difficulty: "Easy"
  },

  // VIII. NIGERIAN BIOLOGY SPECIALS (High Probability)
  {
    id: 66,
    category: "Ecology",
    question: "Which Nigerian state is most associated with the Sahel Savanna?",
    answer: "Borno (or Sokoto/Katsina)",
    explanation: "The Sahel is the northernmost and driest savanna belt in Nigeria.",
    difficulty: "Medium"
  },
  {
    id: 67,
    category: "Ecology",
    question: "Name a common xerophyte found in Northern Nigeria.",
    answer: "Cactus (or Baobab/Acacia)",
    explanation: "Xerophytes are adapted to survive in very dry conditions.",
    difficulty: "Medium"
  },
  {
    id: 68,
    category: "Nutrition",
    question: "A deficiency of Vitamin D in children leads to?",
    answer: "Rickets",
    explanation: "Rickets causes soft and weakened bones in children.",
    difficulty: "Easy"
  },
  {
    id: 69,
    category: "Nutrition",
    question: "Which mineral is required for the formation of thyroxine?",
    answer: "Iodine",
    explanation: "Iodine deficiency can lead to an enlarged thyroid gland (Goiter).",
    difficulty: "Medium"
  },
  {
    id: 70,
    category: "Physiology",
    question: "What is the longest bone in the human body?",
    answer: "Femur",
    explanation: "The thigh bone (femur) is both the longest and strongest bone.",
    difficulty: "Easy"
  },

  // RAPID FIRE COMPETITION SET (71 - 100)
  {
    id: 71,
    category: "Cell Biology",
    question: "Which organelle is called the 'suicide bag'?",
    answer: "Lysosome",
    explanation: "They contain digestive enzymes that can destroy the cell if it's damaged.",
    difficulty: "Medium"
  },
  {
    id: 72,
    category: "Genetics",
    question: "A cross between an F1 hybrid and its homozygous recessive parent is called?",
    answer: "Test Cross",
    explanation: "Used to determine if an individual with a dominant phenotype is homozygous or heterozygous.",
    difficulty: "Hard"
  },
  {
    id: 73,
    category: "Ecology",
    question: "The sequence of communities in an ecosystem is called?",
    answer: "Sere",
    explanation: "Each stage in the succession is a seral stage or sere.",
    difficulty: "Hard"
  },
  {
    id: 74,
    category: "Botany",
    question: "What is 'Phototropism'?",
    answer: "The growth movement of plants toward light.",
    explanation: "Auxins accumulate on the dark side, causing cells to elongate and bend the stem toward light.",
    difficulty: "Easy"
  },
  {
    id: 75,
    category: "Physiology",
    question: "Which part of the eye controls the amount of light entering?",
    answer: "Iris",
    explanation: "The iris adjusts the size of the pupil.",
    difficulty: "Easy"
  },
  {
    id: 76,
    category: "Evolution",
    question: "Who proposed the theory of inheritance of acquired characteristics?",
    answer: "Jean-Baptiste Lamarck",
    explanation: "He incorrectly suggested that traits acquired during a lifetime could be passed to offspring.",
    difficulty: "Medium"
  },
  {
    id: 77,
    category: "Microbiology",
    question: "Which part of the Plasmodium lifecycle occurs in the human liver?",
    answer: "Exo-erythrocytic stage",
    explanation: "Sporozoites enter liver cells and multiply into merozoites.",
    difficulty: "Hard"
  },
  {
    id: 78,
    category: "Physiology",
    question: "What is the end product of protein digestion?",
    answer: "Amino Acids",
    explanation: "Proteins → Peptides → Amino Acids.",
    difficulty: "Easy"
  },
  {
    id: 79,
    category: "Genetics",
    question: "What is the name for a sudden change in chromosome number?",
    answer: "Aneuploidy (or Polyploidy)",
    explanation: "Example: Down syndrome is trisomy 21 (an extra chromosome).",
    difficulty: "Hard"
  },
  {
    id: 80,
    category: "Ecology",
    question: "The role or 'profession' of an organism in its habitat is its?",
    answer: "Ecological Niche",
    explanation: "Niche describes how an organism responds to resources and competitors.",
    difficulty: "Medium"
  },
  {
    id: 81,
    category: "Physiology",
    question: "Which hormone is known as the 'fight or flight' hormone?",
    answer: "Adrenaline (Epinephrine)",
    explanation: "Produced by the adrenal glands during stress or danger.",
    difficulty: "Easy"
  },
  {
    id: 82,
    category: "Botany",
    question: "What is the female reproductive part of a flower called?",
    answer: "Pistil (or Carpel)",
    explanation: "It consists of the stigma, style, and ovary.",
    difficulty: "Easy"
  },
  {
    id: 83,
    category: "Botany",
    question: "What is the male reproductive part of a flower called?",
    answer: "Stamen",
    explanation: "It consists of the anther (produces pollen) and filament.",
    difficulty: "Easy"
  },
  {
    id: 84,
    category: "Cell Biology",
    question: "What is the term for 'cell drinking'?",
    answer: "Pinocytosis",
    explanation: "A form of endocytosis where the cell takes in liquid droplets.",
    difficulty: "Hard"
  },
  {
    id: 85,
    category: "Ecology",
    question: "Which instrument is used to measure wind speed?",
    answer: "Anemometer",
    explanation: "A wind vane measures direction; an anemometer measures speed.",
    difficulty: "Easy"
  },
  {
    id: 86,
    category: "Ecology",
    question: "Which instrument is used to measure relative humidity?",
    answer: "Hygrometer",
    explanation: "Wet and dry bulb thermometers are often used in hygrometers.",
    difficulty: "Medium"
  },
  {
    id: 87,
    category: "Physiology",
    question: "Where does most nutrient absorption occur in the digestive system?",
    answer: "Small Intestine (specifically the Ileum)",
    explanation: "The villi and microvilli provide a massive surface area for absorption.",
    difficulty: "Medium"
  },
  {
    id: 88,
    category: "Genetics",
    question: "What is the term for genes located on the sex chromosomes?",
    answer: "Sex-linked genes",
    explanation: "Examples include color blindness and hemophilia, usually on the X chromosome.",
    difficulty: "Medium"
  },
  {
    id: 89,
    category: "Botany",
    question: "Plants that complete their life cycle in one year are called?",
    answer: "Annuals",
    explanation: "Biennials take two years, and perennials live for many years.",
    difficulty: "Easy"
  },
  {
    id: 90,
    category: "Evolution",
    question: "The survival of organisms best adapted to their environment is called?",
    answer: "Natural Selection",
    explanation: "Proposed by Charles Darwin in 'The Origin of Species'.",
    difficulty: "Easy"
  },
  {
    id: 91,
    category: "Physiology",
    question: "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
    answer: "Pulmonary Artery",
    explanation: "It is the only artery that carries deoxygenated blood.",
    difficulty: "Medium"
  },
  {
    id: 92,
    category: "Physiology",
    question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    answer: "Pulmonary Vein",
    explanation: "It is the only vein that carries oxygenated blood.",
    difficulty: "Medium"
  },
  {
    id: 93,
    category: "Microbiology",
    question: "What is the causative agent of Tuberculosis (TB)?",
    answer: "Mycobacterium tuberculosis",
    explanation: "It is a bacterial infection that primarily affects the lungs.",
    difficulty: "Medium"
  },
  {
    id: 94,
    category: "Physiology",
    question: "What is the name of the pigment that gives skin its color?",
    answer: "Melanin",
    explanation: "Melanin also protects the skin from UV radiation.",
    difficulty: "Easy"
  },
  {
    id: 95,
    category: "Genetics",
    question: "What is the sugar found in DNA?",
    answer: "Deoxyribose",
    explanation: "RNA contains ribose sugar.",
    difficulty: "Easy"
  },
  {
    id: 96,
    category: "Cell Biology",
    question: "During which stage of mitosis do chromosomes line up at the equator?",
    answer: "Metaphase",
    explanation: "Spindle fibers attach to centromeres during this stage.",
    difficulty: "Medium"
  },
  {
    id: 97,
    category: "Ecology",
    question: "What is the term for a group of individuals of the same species in an area?",
    answer: "Population",
    explanation: "A community consists of different populations.",
    difficulty: "Easy"
  },
  {
    id: 98,
    category: "Physiology",
    question: "Which enzyme in saliva breaks down starch?",
    answer: "Ptyalin (Salivary Amylase)",
    explanation: "It starts the chemical digestion of carbohydrates in the mouth.",
    difficulty: "Easy"
  },
  {
    id: 99,
    category: "Botany",
    question: "What is the male gamete in plants?",
    answer: "Pollen Grain",
    explanation: "Produced in the anther of the stamen.",
    difficulty: "Easy"
  },
  {
    id: 100,
    category: "Taxonomy",
    question: "Which kingdom includes organisms like Amoeba and Paramecium?",
    answer: "Protista",
    explanation: "They are unicellular eukaryotes.",
    difficulty: "Easy"
  },
  {
    id: 101,
    category: "Physiology",
    question: "What is the dental formula for an adult human?",
    answer: "2123/2123",
    explanation: "2 Incisors, 1 Canine, 2 Premolars, and 3 Molars in each half of the jaw.",
    difficulty: "Medium"
  },
  {
    id: 102,
    category: "Physiology",
    question: "Which part of the ruminant stomach is known as the 'true stomach'?",
    answer: "Abomasum",
    explanation: "It is where chemical digestion by enzymes and acid occurs.",
    difficulty: "Medium"
  },
  {
    id: 103,
    category: "Physiology",
    question: "Identify the four chambers of the ruminant stomach in order.",
    answer: "Rumen, Reticulum, Omasum, Abomasum",
    explanation: "Food is fermented in the rumen before being regurgitated as cud.",
    difficulty: "Hard"
  },
  {
    id: 104,
    category: "Botany",
    question: "What type of germination occurs when the cotyledons stay below the ground?",
    answer: "Hypogeal germination",
    explanation: "Common in monocots like maize.",
    difficulty: "Medium"
  },
  {
    id: 105,
    category: "Botany",
    question: "What type of germination occurs when the cotyledons are pushed above the ground?",
    answer: "Epigeal germination",
    explanation: "Common in dicots like beans.",
    difficulty: "Medium"
  },
  {
    id: 106,
    category: "Ecology",
    question: "Which organism is the 'primary consumer' in a food chain: Grass -> Grasshopper -> Toad -> Snake?",
    answer: "Grasshopper",
    explanation: "Primary consumers are herbivores that eat the producers (grass).",
    difficulty: "Easy"
  },
  {
    id: 107,
    category: "Ecology",
    question: "The process of converting nitrates in the soil back into atmospheric nitrogen is called?",
    answer: "Denitrification",
    explanation: "Carried out by denitrifying bacteria in anaerobic conditions.",
    difficulty: "Medium"
  },
  {
    id: 108,
    category: "Physiology",
    question: "What is the largest gland in the human body?",
    answer: "Liver",
    explanation: "The liver performs over 500 functions, including detoxification and bile production.",
    difficulty: "Easy"
  },
  {
    id: 109,
    category: "Physiology",
    question: "Which part of the nephron is responsible for 'Ultrafiltration'?",
    answer: "Bowman's Capsule (and Glomerulus)",
    explanation: "High pressure forces small molecules out of the blood into the capsule.",
    difficulty: "Hard"
  },
  {
    id: 110,
    category: "Physiology",
    question: "Where does 'Selective Reabsorption' primarily occur in the kidney?",
    answer: "Proximal Convoluted Tubule (PCT)",
    explanation: "Glucose, amino acids, and some salts are pumped back into the blood.",
    difficulty: "Hard"
  },
  {
    id: 111,
    category: "Botany",
    question: "What are 'Bryophytes'?",
    answer: "Non-vascular plants like mosses and liverworts.",
    explanation: "They lack true roots, stems, and leaves and require water for reproduction.",
    difficulty: "Medium"
  },
  {
    id: 112,
    category: "Botany",
    question: "Which group of plants produces seeds but no flowers?",
    answer: "Gymnosperms",
    explanation: "Example: Pine trees and Cycads; their seeds are 'naked' on cones.",
    difficulty: "Medium"
  },
  {
    id: 113,
    category: "Genetics",
    question: "What is the name for a map of an individual's chromosomes?",
    answer: "Karyotype",
    explanation: "Used to detect chromosomal abnormalities like Down syndrome.",
    difficulty: "Medium"
  },
  {
    id: 114,
    category: "Physiology",
    question: "Which hormone is responsible for the 'secondary sexual characteristics' in males?",
    answer: "Testosterone",
    explanation: "Produced by the testes, it causes voice deepening, hair growth, etc.",
    difficulty: "Easy"
  },
  {
    id: 115,
    category: "Physiology",
    question: "Which hormone triggers ovulation in females?",
    answer: "Luteinizing Hormone (LH)",
    explanation: "An LH surge around day 14 of the cycle causes the egg to be released.",
    difficulty: "Medium"
  },
  {
    id: 116,
    category: "Ecology",
    question: "What is the term for organisms that can tolerate a wide range of salinity?",
    answer: "Euryhaline",
    explanation: "Stenohaline organisms can only tolerate a narrow range.",
    difficulty: "Hard"
  },
  {
    id: 117,
    category: "Ecology",
    question: "In which zone of a lake would you find rooted plants?",
    answer: "Littoral Zone",
    explanation: "The shallow area near the shore where sunlight reaches the bottom.",
    difficulty: "Hard"
  },
  {
    id: 118,
    category: "Microbiology",
    question: "Which part of the mushroom is the 'fruiting body'?",
    answer: "The Cap and Stipe (Stem)",
    explanation: "The main body of the fungus is the underground mycelium.",
    difficulty: "Medium"
  },
  {
    id: 119,
    category: "Physiology",
    question: "What is the name of the fluid that cushions the brain and spinal cord?",
    answer: "Cerebrospinal Fluid (CSF)",
    explanation: "It also provides nutrients and removes waste from the CNS.",
    difficulty: "Medium"
  },
  {
    id: 120,
    category: "Evolution",
    question: "The 'Theory of Use and Disuse' is associated with?",
    answer: "Lamarck",
    explanation: "He believed organs used frequently become stronger, while those not used disappear.",
    difficulty: "Easy"
  },
  {
    id: 121,
    category: "Physiology",
    question: "What is the scientific name for the 'voice box'?",
    answer: "Larynx",
    explanation: "It contains the vocal cords.",
    difficulty: "Easy"
  },
  {
    id: 122,
    category: "Physiology",
    question: "What is the scientific name for the 'windpipe'?",
    answer: "Trachea",
    explanation: "It is held open by C-shaped rings of cartilage.",
    difficulty: "Easy"
  },
  {
    id: 123,
    category: "Botany",
    question: "The study of the age of trees by counting their rings is called?",
    answer: "Dendrochronology",
    explanation: "Each ring usually represents one year of growth.",
    difficulty: "Hard"
  },
  {
    id: 124,
    category: "Physiology",
    question: "Which vitamin is also known as Ascorbic Acid?",
    answer: "Vitamin C",
    explanation: "Essential for healthy skin, gums, and immune function.",
    difficulty: "Easy"
  },
  {
    id: 125,
    category: "Physiology",
    question: "Which mineral is a major component of bones and teeth?",
    answer: "Calcium",
    explanation: "Also required for blood clotting and muscle contraction.",
    difficulty: "Easy"
  },
  {
    id: 126,
    category: "Genetics",
    question: "What is the probability of a child being male or female?",
    answer: "50% or 1:1",
    explanation: "Determined by whether the sperm carries an X or Y chromosome.",
    difficulty: "Easy"
  },
  {
    id: 127,
    category: "Ecology",
    question: "What is 'Estivation'?",
    answer: "A state of dormancy during hot and dry periods.",
    explanation: "Similar to hibernation, but for heat/drought (e.g., lungfish).",
    difficulty: "Medium"
  },
  {
    id: 128,
    category: "Microbiology",
    question: "Which mosquito transmits Yellow Fever and Dengue?",
    answer: "Aedes aegypti",
    explanation: "Known for its white markings and daytime biting habits.",
    difficulty: "Medium"
  },
  {
    id: 129,
    category: "Physiology",
    question: "What is the total number of bones in a standard adult human skeleton?",
    answer: "206",
    explanation: "Infants have more bones, which fuse as they grow.",
    difficulty: "Easy"
  },
  {
    id: 130,
    category: "Physiology",
    question: "Which type of muscle is found in the heart?",
    answer: "Cardiac muscle",
    explanation: "It is involuntary and striated.",
    difficulty: "Easy"
  },
  {
    id: 131,
    category: "Physiology",
    question: "What is the 'master gland' of the endocrine system?",
    answer: "Pituitary Gland",
    explanation: "It controls many other glands in the body.",
    difficulty: "Easy"
  },
  {
    id: 132,
    category: "Botany",
    question: "What is 'Placentation'?",
    answer: "The arrangement of ovules within the ovary of a flower.",
    explanation: "Common types: Marginal, Axile, Parietal, Free Central.",
    difficulty: "Hard"
  },
  {
    id: 133,
    category: "Physiology",
    question: "The junction between two neurons is called a?",
    answer: "Synapse",
    explanation: "Chemicals called neurotransmitters carry the signal across the gap.",
    difficulty: "Medium"
  },
  {
    id: 134,
    category: "Genetics",
    question: "What are 'Autosomes'?",
    answer: "Non-sex chromosomes.",
    explanation: "In humans, there are 22 pairs of autosomes.",
    difficulty: "Easy"
  },
  {
    id: 135,
    category: "Cell Biology",
    question: "Which organelle is responsible for the synthesis of lipids and steroids?",
    answer: "Smooth Endoplasmic Reticulum (SER)",
    explanation: "The Rough ER (RER) is for protein synthesis because of ribosomes.",
    difficulty: "Medium"
  },
  {
    id: 136,
    category: "Physiology",
    question: "What is the 'blind spot' of the eye?",
    answer: "The point where the optic nerve leaves the retina.",
    explanation: "There are no photoreceptor cells (rods or cones) here.",
    difficulty: "Easy"
  },
  {
    id: 137,
    category: "Physiology",
    question: "Which part of the eye is most sensitive to light and detail (highest concentration of cones)?",
    answer: "Fovea Centralis (Yellow Spot)",
    explanation: "It is the center of the macula.",
    difficulty: "Medium"
  },
  {
    id: 138,
    category: "Ecology",
    question: "What is 'Primary Succession'?",
    answer: "Succession that starts in an area where no soil or life exists.",
    explanation: "Example: After a volcanic eruption or on bare rock.",
    difficulty: "Medium"
  },
  {
    id: 139,
    category: "Ecology",
    question: "What is 'Secondary Succession'?",
    answer: "Succession that follows a disturbance in an area that already has soil.",
    explanation: "Example: After a forest fire or abandonment of farmland.",
    difficulty: "Medium"
  },
  {
    id: 140,
    category: "Physiology",
    question: "Which blood component is responsible for fighting infections?",
    answer: "White Blood Cells (Leukocytes)",
    explanation: "Phagocytes engulf bacteria, and lymphocytes produce antibodies.",
    difficulty: "Easy"
  },
  {
    id: 141,
    category: "Microbiology",
    question: "What is the causative agent of Cholera?",
    answer: "Vibrio cholerae",
    explanation: "A water-borne bacterium that causes severe diarrhea and dehydration.",
    difficulty: "Easy"
  },
  {
    id: 142,
    category: "Physiology",
    question: "The process of maintaining water and salt balance in the body is?",
    answer: "Osmoregulation",
    explanation: "Mainly carried out by the kidneys.",
    difficulty: "Medium"
  },
  {
    id: 143,
    category: "Genetics",
    question: "Who coined the term 'Gene'?",
    answer: "Wilhelm Johannsen",
    explanation: "Mendel called them 'factors'.",
    difficulty: "Hard"
  },
  {
    id: 144,
    category: "Physiology",
    question: "Which enzyme digests fats?",
    answer: "Lipase",
    explanation: "Fats are broken down into fatty acids and glycerol.",
    difficulty: "Easy"
  },
  {
    id: 145,
    category: "Physiology",
    question: "Where is the 'Pyloric Sphincter' located?",
    answer: "Between the stomach and the duodenum (small intestine).",
    explanation: "It controls the passage of chyme from the stomach.",
    difficulty: "Medium"
  },
  {
    id: 146,
    category: "Taxonomy",
    question: "Which phylum do spiders and insects belong to?",
    answer: "Arthropoda",
    explanation: "Characterized by jointed appendages and an exoskeleton.",
    difficulty: "Easy"
  },
  {
    id: 147,
    category: "Taxonomy",
    question: "Which class of vertebrates has moist skin and no scales?",
    answer: "Amphibia",
    explanation: "Example: Frogs and Toads.",
    difficulty: "Easy"
  },
  {
    id: 148,
    category: "Physiology",
    question: "What is the largest part of the human brain?",
    answer: "Cerebrum",
    explanation: "Responsible for high-level thinking, memory, and voluntary action.",
    difficulty: "Easy"
  },
  {
    id: 149,
    category: "Ecology",
    question: "Which biome is known as the 'Lungs of the World'?",
    answer: "Tropical Rainforest",
    explanation: "Due to high oxygen production and CO2 absorption by dense trees.",
    difficulty: "Easy"
  },
  {
    id: 150,
    category: "Evolution",
    question: "The study of fossils is called?",
    answer: "Paleontology",
    explanation: "Fossils provide direct evidence of evolution.",
    difficulty: "Easy"
  },
  {
    id: 151,
    category: "Taxonomy",
    question: "What are the excretory organs of Flatworms (Platyhelminthes)?",
    answer: "Flame Cells (Protonephridia)",
    explanation: "They function in osmoregulation and waste removal.",
    difficulty: "Hard"
  },
  {
    id: 152,
    category: "Taxonomy",
    question: "What are the excretory organs of Earthworms (Annelida)?",
    answer: "Nephridia",
    explanation: "Each segment contains a pair of nephridia.",
    difficulty: "Medium"
  },
  {
    id: 153,
    category: "Taxonomy",
    question: "What are the excretory organs of Insects (Arthropoda)?",
    answer: "Malpighian Tubules",
    explanation: "They remove uric acid from the hemolymph.",
    difficulty: "Medium"
  },
  {
    id: 154,
    category: "Botany",
    question: "The closing of the Venus Flytrap is an example of what kind of movement?",
    answer: "Nastic movement (Haptonasty)",
    explanation: "Nastic movements are non-directional responses to stimuli.",
    difficulty: "Hard"
  },
  {
    id: 155,
    category: "Botany",
    question: "The movement of sperm in moss toward the egg is an example of?",
    answer: "Chemotaxis",
    explanation: "Tactic movements are directional movements of whole organisms or gametes.",
    difficulty: "Medium"
  },
  {
    id: 156,
    category: "Cell Biology",
    question: "Where in the cell does Glycolysis occur?",
    answer: "Cytoplasm (Cytosol)",
    explanation: "It is the first stage of both aerobic and anaerobic respiration.",
    difficulty: "Medium"
  },
  {
    id: 157,
    category: "Cell Biology",
    question: "Where in the mitochondrion does the Krebs cycle (TCA cycle) occur?",
    answer: "Mitochondrial Matrix",
    explanation: "The matrix contains the enzymes required for the cycle.",
    difficulty: "Hard"
  },
  {
    id: 158,
    category: "Cell Biology",
    question: "Where in the mitochondrion is the Electron Transport Chain (ETC) located?",
    answer: "Inner Mitochondrial Membrane (Cristae)",
    explanation: "The cristae provide a large surface area for ATP production.",
    difficulty: "Hard"
  },
  {
    id: 159,
    category: "Botany",
    question: "The light-independent reactions (Calvin Cycle) of photosynthesis occur in?",
    answer: "Stroma of the chloroplast",
    explanation: "The stroma is the fluid surrounding the thylakoids.",
    difficulty: "Medium"
  },
  {
    id: 160,
    category: "Botany",
    question: "The light-dependent reactions of photosynthesis occur in?",
    answer: "Thylakoids (Grana) of the chloroplast",
    explanation: "Chlorophyll pigments are embedded in the thylakoid membranes.",
    difficulty: "Medium"
  },
  {
    id: 161,
    category: "Physiology",
    question: "During blood clotting, which enzyme converts fibrinogen to fibrin?",
    answer: "Thrombin",
    explanation: "Thrombin is activated from prothrombin by thrombokinase/thromboplastin.",
    difficulty: "Hard"
  },
  {
    id: 162,
    category: "Physiology",
    question: "Which mineral is required for the blood clotting process?",
    answer: "Calcium ions (Ca2+)",
    explanation: "Calcium acts as a cofactor in several steps of the clotting cascade.",
    difficulty: "Medium"
  },
  {
    id: 163,
    category: "Physiology",
    question: "What is the name for a blood clot that remains stationary in a vessel?",
    answer: "Thrombus",
    explanation: "If it moves, it is called an embolus.",
    difficulty: "Medium"
  },
  {
    id: 164,
    category: "Physiology",
    question: "Which blood group is known as the 'Universal Recipient'?",
    answer: "Blood Group AB",
    explanation: "Type AB blood has both A and B antigens but no antibodies against them.",
    difficulty: "Easy"
  },
  {
    id: 165,
    category: "Physiology",
    question: "What is the protective double-layered membrane surrounding the heart?",
    answer: "Pericardium",
    explanation: "It contains pericardial fluid to reduce friction.",
    difficulty: "Easy"
  },
  {
    id: 166,
    category: "Physiology",
    question: "What is the largest artery in the human body?",
    answer: "Aorta",
    explanation: "It carries oxygenated blood from the left ventricle to the rest of the body.",
    difficulty: "Easy"
  },
  {
    id: 167,
    category: "Physiology",
    question: "Identify the three main layers of the human skin.",
    answer: "Epidermis, Dermis, and Subcutaneous layer (Hypodermis)",
    explanation: "The epidermis is the outermost layer, while the dermis contains blood vessels and glands.",
    difficulty: "Easy"
  },
  {
    id: 168,
    category: "Physiology",
    question: "Which layer of the skin contains the sweat glands and hair follicles?",
    answer: "Dermis",
    explanation: "It is the 'true skin' containing connective tissue and sensory receptors.",
    difficulty: "Medium"
  },
  {
    id: 169,
    category: "Microbiology",
    question: "What is the causative agent of Syphilis?",
    answer: "Treponema pallidum",
    explanation: "A spiral-shaped bacterium (spirochete).",
    difficulty: "Medium"
  },
  {
    id: 170,
    category: "Physiology",
    question: "What is 'Diastole' in the cardiac cycle?",
    answer: "The period when the heart muscle relaxes and chambers fill with blood.",
    explanation: "Systole is the period of contraction.",
    difficulty: "Medium"
  },
  {
    id: 171,
    category: "Botany",
    question: "A fruit that develops from a single ovary is called?",
    answer: "Simple fruit",
    explanation: "Example: Mango or Tomato.",
    difficulty: "Easy"
  },
  {
    id: 172,
    category: "Botany",
    question: "A fruit that develops from many ovaries of a single flower is called?",
    answer: "Aggregate fruit",
    explanation: "Example: Strawberry or Raspberry.",
    difficulty: "Medium"
  },
  {
    id: 173,
    category: "Botany",
    question: "What is 'Parthenocarpy'?",
    answer: "The development of fruit without fertilization.",
    explanation: "Results in seedless fruits like some varieties of bananas.",
    difficulty: "Hard"
  },
  {
    id: 174,
    category: "Botany",
    question: "What is 'Parthenogenesis'?",
    answer: "Development of an embryo from an unfertilized egg cell.",
    explanation: "Common in some insects like bees and some reptiles.",
    difficulty: "Hard"
  },
  {
    id: 175,
    category: "Physiology",
    question: "Which part of the brain controls reflex actions like coughing and sneezing?",
    answer: "Medulla Oblongata",
    explanation: "It also controls vital functions like breathing and heart rate.",
    difficulty: "Medium"
  },
  {
    id: 176,
    category: "Physiology",
    question: "What is the 'Refractory Period' of a neuron?",
    answer: "A short period after an impulse when the neuron cannot be stimulated again.",
    explanation: "Ensures that nerve impulses travel in only one direction.",
    difficulty: "Hard"
  },
  {
    id: 177,
    category: "Ecology",
    question: "What is the term for a plant that grows in salty soil or water?",
    answer: "Halophyte",
    explanation: "They have adaptations like salt-secreting glands and pneumatophores.",
    difficulty: "Medium"
  },
  {
    id: 178,
    category: "Ecology",
    question: "What are 'Pneumatophores'?",
    answer: "Breathing roots that grow upwards to obtain oxygen from the air.",
    explanation: "Found in mangrove plants in swampy areas.",
    difficulty: "Medium"
  },
  {
    id: 179,
    category: "Botany",
    question: "What is the name for the pore in a seed that allows water entry?",
    answer: "Micropyle",
    explanation: "It is also the opening through which the pollen tube enters the ovule.",
    difficulty: "Medium"
  },
  {
    id: 180,
    category: "Physiology",
    question: "Which hormone is produced by the pancreas to raise blood sugar levels?",
    answer: "Glucagon",
    explanation: "It stimulates the liver to convert glycogen back into glucose.",
    difficulty: "Easy"
  },
  {
    id: 181,
    category: "Taxonomy",
    question: "Which phylum is characterized by a water vascular system and tube feet?",
    answer: "Echinodermata",
    explanation: "Example: Starfish and Sea Urchins.",
    difficulty: "Medium"
  },
  {
    id: 182,
    category: "Taxonomy",
    question: "Which phylum includes the soft-bodied animals often protected by a shell?",
    answer: "Mollusca",
    explanation: "Example: Snails, Squids, and Oysters.",
    difficulty: "Easy"
  },
  {
    id: 183,
    category: "Physiology",
    question: "What is the name for the protein found in hair, nails, and the outer skin layer?",
    answer: "Keratin",
    explanation: "It provides waterproofing and structural strength.",
    difficulty: "Easy"
  },
  {
    id: 184,
    category: "Physiology",
    question: "Which part of the ear contains the 'Organ of Corti' for hearing?",
    answer: "Cochlea",
    explanation: "The snail-shaped part of the inner ear.",
    difficulty: "Medium"
  },
  {
    id: 185,
    category: "Physiology",
    question: "The semicircular canals of the inner ear are responsible for?",
    answer: "Balance (Equilibrium)",
    explanation: "They detect rotational movements of the head.",
    difficulty: "Medium"
  },
  {
    id: 186,
    category: "Evolution",
    question: "Structures that have a similar origin but different functions are?",
    answer: "Homologous structures",
    explanation: "Example: Pentadactyl limb in humans, bats, and whales.",
    difficulty: "Medium"
  },
  {
    id: 187,
    category: "Evolution",
    question: "Structures that have different origins but similar functions are?",
    answer: "Analogous structures",
    explanation: "Example: Wings of an insect and wings of a bird.",
    difficulty: "Medium"
  },
  {
    id: 188,
    category: "Evolution",
    question: "Evolution toward similar traits in unrelated species is called?",
    answer: "Convergent Evolution",
    explanation: "Example: Sharks (fish) and Dolphins (mammals) having similar body shapes.",
    difficulty: "Hard"
  },
  {
    id: 189,
    category: "Physiology",
    question: "What is the dental formula for a Rabbit?",
    answer: "2033/1023",
    explanation: "Rabbits have two pairs of upper incisors (the second pair is small) and no canines (diastema).",
    difficulty: "Hard"
  },
  {
    id: 190,
    category: "Physiology",
    question: "What is the name for the gap between the incisors and premolars in herbivores?",
    answer: "Diastema",
    explanation: "It allows for the manipulation of food by the tongue.",
    difficulty: "Medium"
  },
  {
    id: 191,
    category: "Nutrition",
    question: "Which test is used to detect the presence of reducing sugars (like glucose)?",
    answer: "Benedict's Test",
    explanation: "A brick-red precipitate indicates a positive result.",
    difficulty: "Medium"
  },
  {
    id: 192,
    category: "Nutrition",
    question: "Which test is used to detect the presence of protein?",
    answer: "Biuret Test",
    explanation: "A violet or purple color indicates a positive result.",
    difficulty: "Medium"
  },
  {
    id: 193,
    category: "Nutrition",
    question: "Which test is used to detect the presence of starch?",
    answer: "Iodine Test",
    explanation: "A blue-black color indicates a positive result.",
    difficulty: "Easy"
  },
  {
    id: 194,
    category: "Physiology",
    question: "Where is the 'Sinoatrial (SA) Node' located?",
    answer: "Right Atrium of the heart.",
    explanation: "It is the natural pacemaker that initiates the heartbeat.",
    difficulty: "Hard"
  },
  {
    id: 195,
    category: "Physiology",
    question: "What is 'Haemolysis'?",
    answer: "The bursting of red blood cells due to uptake of water by osmosis.",
    explanation: "Occurs when RBCs are placed in a hypotonic solution.",
    difficulty: "Medium"
  },
  {
    id: 196,
    category: "Physiology",
    question: "What is 'Plasmolysis'?",
    answer: "The shrinking of the plant cell cytoplasm away from the cell wall.",
    explanation: "Occurs when a plant cell is placed in a hypertonic solution.",
    difficulty: "Medium"
  },
  {
    id: 197,
    category: "Physiology",
    question: "What is the normal blood pressure for a healthy adult?",
    answer: "120/80 mmHg",
    explanation: "120 is systolic pressure; 80 is diastolic pressure.",
    difficulty: "Easy"
  },
  {
    id: 198,
    category: "Physiology",
    question: "Which hormone is known as the 'hormone of pregnancy'?",
    answer: "Progesterone",
    explanation: "It maintains the thick lining of the uterus (endometrium).",
    difficulty: "Medium"
  },
  {
    id: 199,
    category: "Physiology",
    question: "The first milk produced by a mother after birth is called?",
    answer: "Colostrum",
    explanation: "It is rich in antibodies to provide passive immunity to the newborn.",
    difficulty: "Medium"
  },
  {
    id: 200,
    category: "Taxonomy",
    question: "Which phylum is characterized by stinging cells called cnidocytes?",
    answer: "Cnidaria (or Coelenterata)",
    explanation: "Example: Jellyfish, Hydra, and Sea Anemones.",
    difficulty: "Medium"
  },
  {
    id: 201,
    category: "Taxonomy",
    question: "In the 5-kingdom classification, into which kingdom are bacteria placed?",
    answer: "Monera",
    explanation: "Monerans are prokaryotic organisms.",
    difficulty: "Easy"
  },
  {
    id: 202,
    category: "Taxonomy",
    question: "Which phylum has organisms with a 'mantle' and a 'radula'?",
    answer: "Mollusca",
    explanation: "The radula is a rasping organ used for feeding.",
    difficulty: "Hard"
  },
  {
    id: 203,
    category: "Physiology",
    question: "What is the name of the membrane that covers the lungs?",
    answer: "Pleura",
    explanation: "The pleural fluid reduces friction during breathing.",
    difficulty: "Easy"
  },
  {
    id: 204,
    category: "Ecology",
    question: "What is a 'Sere'?",
    answer: "The entire sequence of communities that replace one another in an ecosystem.",
    explanation: "A stage in the sere is called a seral stage.",
    difficulty: "Hard"
  },
  {
    id: 205,
    category: "Ecology",
    question: "What is a 'Climax Community'?",
    answer: "The final, stable stage of ecological succession.",
    explanation: "It remains unchanged as long as the environment remains stable.",
    difficulty: "Medium"
  },
  {
    id: 206,
    category: "Ecology",
    question: "What is 'Eutrophication'?",
    answer: "The excessive enrichment of water with nutrients, leading to algal blooms.",
    explanation: "This often results in oxygen depletion and death of aquatic life.",
    difficulty: "Medium"
  },
  {
    id: 207,
    category: "Physiology",
    question: "Which part of the brain is the link between the nervous and endocrine systems?",
    answer: "Hypothalamus",
    explanation: "It controls the pituitary gland and regulates thirst, hunger, and temperature.",
    difficulty: "Hard"
  },
  {
    id: 208,
    category: "Physiology",
    question: "What is the name of the 'Master Gland'?",
    answer: "Pituitary Gland (Hypophysis)",
    explanation: "It secretes hormones that stimulate other endocrine glands.",
    difficulty: "Easy"
  },
  {
    id: 209,
    category: "Physiology",
    question: "The deficiency of which hormone causes Diabetes Mellitus?",
    answer: "Insulin",
    explanation: "Insulin is required to allow glucose to enter cells from the blood.",
    difficulty: "Easy"
  },
  {
    id: 210,
    category: "Physiology",
    question: "The deficiency of which hormone causes Diabetes Insipidus?",
    answer: "Antidiuretic Hormone (ADH) / Vasopressin",
    explanation: "ADH controls water reabsorption in the kidneys.",
    difficulty: "Hard"
  },
  {
    id: 211,
    category: "Botany",
    question: "The transfer of pollen from the anther to the stigma of the same flower is?",
    answer: "Self-pollination",
    explanation: "Cross-pollination is transfer between different flowers of the same species.",
    difficulty: "Easy"
  },
  {
    id: 212,
    category: "Botany",
    question: "What is 'Anemophily'?",
    answer: "Pollination by wind.",
    explanation: "Wind-pollinated flowers have light pollen and feathery stigmas.",
    difficulty: "Medium"
  },
  {
    id: 213,
    category: "Botany",
    question: "What is 'Entomophily'?",
    answer: "Pollination by insects.",
    explanation: "Insect-pollinated flowers are often bright, scented, and produce nectar.",
    difficulty: "Medium"
  },
  {
    id: 214,
    category: "Botany",
    question: "A seed that has two cotyledons is called a?",
    answer: "Dicotyledonous seed (Dicot)",
    explanation: "Examples: Beans, Peanuts, Mango.",
    difficulty: "Easy"
  },
  {
    id: 215,
    category: "Taxonomy",
    question: "Which phylum includes roundworms like Ascaris?",
    answer: "Nematoda",
    explanation: "They are unsegmented worms with a pseudocoelom.",
    difficulty: "Medium"
  },
  {
    id: 216,
    category: "Physiology",
    question: "What is the name of the valve at the junction of the small and large intestine?",
    answer: "Ileocaecal Valve",
    explanation: "It prevents materials from the large intestine from flowing back into the small intestine.",
    difficulty: "Hard"
  },
  {
    id: 217,
    category: "Physiology",
    question: "Which organ stores and concentrates bile?",
    answer: "Gallbladder",
    explanation: "Bile is produced in the liver.",
    difficulty: "Easy"
  },
  {
    id: 218,
    category: "Physiology",
    question: "The breakdown of excess amino acids in the liver is called?",
    answer: "Deamination",
    explanation: "The amino group is removed and converted to urea.",
    difficulty: "Medium"
  },
  {
    id: 219,
    category: "Physiology",
    question: "What is 'Detoxification' in the liver?",
    answer: "The process of making poisonous substances harmless.",
    explanation: "Example: Converting alcohol or drugs into less toxic forms.",
    difficulty: "Medium"
  },
  {
    id: 220,
    category: "Physiology",
    question: "The structural and functional unit of the human lung is the?",
    answer: "Alveolus (plural: Alveoli)",
    explanation: "Gaseous exchange occurs across the thin alveolar walls.",
    difficulty: "Easy"
  },
  {
    id: 221,
    category: "Physiology",
    question: "Which muscle is primarily responsible for the breathing movements?",
    answer: "Diaphragm (and Intercostal muscles)",
    explanation: "Contraction of the diaphragm increases the volume of the chest cavity.",
    difficulty: "Medium"
  },
  {
    id: 222,
    category: "Physiology",
    question: "What is the function of the 'Ciliary Muscles' in the eye?",
    answer: "Accommodation (changing the shape of the lens to focus).",
    explanation: "They contract to make the lens thicker for near vision.",
    difficulty: "Medium"
  },
  {
    id: 223,
    category: "Physiology",
    question: "A person who can see near objects clearly but not distant ones has?",
    answer: "Myopia (Short-sightedness)",
    explanation: "Corrected with concave lenses.",
    difficulty: "Easy"
  },
  {
    id: 224,
    category: "Physiology",
    question: "A person who can see distant objects clearly but not near ones has?",
    answer: "Hypermetropia (Long-sightedness)",
    explanation: "Corrected with convex lenses.",
    difficulty: "Easy"
  },
  {
    id: 225,
    category: "Physiology",
    question: "Uneven curvature of the cornea or lens leads to?",
    answer: "Astigmatism",
    explanation: "Corrected with cylindrical lenses.",
    difficulty: "Medium"
  },
  {
    id: 226,
    category: "Physiology",
    question: "Loss of elasticity of the lens due to aging is called?",
    answer: "Presbyopia",
    explanation: "Commonly occurs in people over 40.",
    difficulty: "Medium"
  },
  {
    id: 227,
    category: "Genetics",
    question: "What is 'Locus' in genetics?",
    answer: "The specific position of a gene on a chromosome.",
    explanation: "Alleles of the same gene occupy the same locus on homologous chromosomes.",
    difficulty: "Medium"
  },
  {
    id: 228,
    category: "Genetics",
    question: "A condition where an individual has more than two sets of chromosomes is?",
    answer: "Polyploidy",
    explanation: "Common in plants (e.g., triploid, tetraploid).",
    difficulty: "Hard"
  },
  {
    id: 229,
    category: "Genetics",
    question: "Which nitrogenous bases are Purines?",
    answer: "Adenine and Guanine",
    explanation: "Pyrimidines are Cytosine, Thymine, and Uracil.",
    difficulty: "Hard"
  },
  {
    id: 230,
    category: "Genetics",
    question: "How many hydrogen bonds form between Adenine and Thymine?",
    answer: "Two",
    explanation: "Guanine and Cytosine form three hydrogen bonds.",
    difficulty: "Hard"
  },
  {
    id: 231,
    category: "Microbiology",
    question: "Which antibiotic was the first to be discovered?",
    answer: "Penicillin",
    explanation: "Discovered by Alexander Fleming in 1928 from the mold Penicillium.",
    difficulty: "Easy"
  },
  {
    id: 232,
    category: "Microbiology",
    question: "Viruses are described as 'obligate intracellular parasites'. What does this mean?",
    answer: "They can only reproduce inside a living host cell.",
    explanation: "They lack their own metabolic machinery.",
    difficulty: "Medium"
  },
  {
    id: 233,
    category: "Physiology",
    question: "What is the name of the bone in the upper arm?",
    answer: "Humerus",
    explanation: "It articulates with the scapula at the shoulder.",
    difficulty: "Easy"
  },
  {
    id: 234,
    category: "Physiology",
    question: "Identify the two bones of the lower arm.",
    answer: "Radius and Ulna",
    explanation: "The radius is on the thumb side.",
    difficulty: "Medium"
  },
  {
    id: 235,
    category: "Physiology",
    question: "The 'knee cap' is scientifically known as the?",
    answer: "Patella",
    explanation: "It is a sesamoid bone.",
    difficulty: "Easy"
  },
  {
    id: 236,
    category: "Physiology",
    question: "Which type of joint allows movement in only one plane (e.g., elbow)?",
    answer: "Hinge Joint",
    explanation: "The knee and elbow are examples.",
    difficulty: "Easy"
  },
  {
    id: 237,
    category: "Physiology",
    question: "Which type of joint allows rotation (e.g., between atlas and axis)?",
    answer: "Pivot Joint",
    explanation: "Allows the 'no' movement of the head.",
    difficulty: "Medium"
  },
  {
    id: 238,
    category: "Physiology",
    question: "Which type of joint allows the widest range of movement (e.g., shoulder)?",
    answer: "Ball and Socket Joint",
    explanation: "The hip and shoulder are examples.",
    difficulty: "Easy"
  },
  {
    id: 239,
    category: "Ecology",
    question: "What is 'Biological Control' of pests?",
    answer: "The use of natural enemies (predators/parasites) to control pest populations.",
    explanation: "It is an eco-friendly alternative to chemical pesticides.",
    difficulty: "Medium"
  },
  {
    id: 240,
    category: "Ecology",
    question: "What is 'Bioaccumulation'?",
    answer: "The buildup of a substance (e.g., pesticide) in the body of an organism.",
    explanation: "Occurs when an organism absorbs a substance faster than it can excrete it.",
    difficulty: "Medium"
  },
  {
    id: 241,
    category: "Taxonomy",
    question: "Which group of vertebrates is 'Poikilothermic' (cold-blooded)?",
    answer: "Fish, Amphibians, and Reptiles",
    explanation: "Their body temperature changes with the environment.",
    difficulty: "Easy"
  },
  {
    id: 242,
    category: "Taxonomy",
    question: "Which group of vertebrates is 'Homoiothermic' (warm-blooded)?",
    answer: "Birds and Mammals",
    explanation: "They maintain a constant internal body temperature.",
    difficulty: "Easy"
  },
  {
    id: 243,
    category: "Microbiology",
    question: "What is the causative agent of Anthrax?",
    answer: "Bacillus anthracis",
    explanation: "A spore-forming bacterium.",
    difficulty: "Hard"
  },
  {
    id: 244,
    category: "Physiology",
    question: "What is 'Oogenesis'?",
    answer: "The process of egg (ovum) formation in the ovaries.",
    explanation: "Produces one functional egg and three polar bodies.",
    difficulty: "Medium"
  },
  {
    id: 245,
    category: "Physiology",
    question: "What is 'Spermatogenesis'?",
    answer: "The process of sperm formation in the testes.",
    explanation: "Produces four functional sperm from one spermatocyte.",
    difficulty: "Medium"
  },
  {
    id: 246,
    category: "Botany",
    question: "The development of a new plant from a vegetative part (root, stem, leaf) is?",
    answer: "Vegetative Propagation",
    explanation: "A form of asexual reproduction.",
    difficulty: "Easy"
  },
  {
    id: 247,
    category: "Botany",
    question: "What is 'Double Fertilization'?",
    answer: "A process in flowering plants where one sperm fertilizes the egg and another fertilizes two polar nuclei.",
    explanation: "Leads to the formation of a zygote (2n) and endosperm (3n).",
    difficulty: "Hard"
  },
  {
    id: 248,
    category: "Botany",
    question: "What is the function of the 'Endosperm' in a seed?",
    answer: "To provide nourishment to the developing embryo.",
    explanation: "It is the food storage tissue.",
    difficulty: "Medium"
  },
  {
    id: 249,
    category: "Cell Biology",
    question: "Which organelle is known as the 'cell center' and organizes microtubules?",
    answer: "Centrosome (containing Centrioles)",
    explanation: "Crucial for spindle fiber formation during cell division.",
    difficulty: "Medium"
  },
  {
    id: 250,
    category: "Physiology",
    question: "Which hormone is secreted by the corpus luteum?",
    answer: "Progesterone",
    explanation: "Maintains the endometrium for potential implantation.",
    difficulty: "Medium"
  },
  {
    id: 251,
    category: "Physiology",
    question: "What is the name of the pigment in rods that is sensitive to low light?",
    answer: "Rhodopsin (Visual Purple)",
    explanation: "Synthesized from Vitamin A; deficiency leads to night blindness.",
    difficulty: "Hard"
  },
  {
    id: 252,
    category: "Physiology",
    question: "Which type of photoreceptor is responsible for color vision?",
    answer: "Cones",
    explanation: "There are three types of cones: red, green, and blue.",
    difficulty: "Easy"
  },
  {
    id: 253,
    category: "Physiology",
    question: "What is the name of the fluid in the 'sculpted' anterior chamber of the eye?",
    answer: "Aqueous Humor",
    explanation: "Vitreous humor is the jelly-like substance in the posterior chamber.",
    difficulty: "Medium"
  },
  {
    id: 254,
    category: "Physiology",
    question: "What is the function of the 'Eustachian Tube'?",
    answer: "To equalize pressure on both sides of the eardrum.",
    explanation: "It connects the middle ear to the pharynx.",
    difficulty: "Medium"
  },
  {
    id: 255,
    category: "Microbiology",
    question: "Which disease is characterized by a 'lockjaw' symptom?",
    answer: "Tetanus",
    explanation: "Caused by Clostridium tetani; affects the nervous system and causes muscle spasms.",
    difficulty: "Medium"
  },
  {
    id: 256,
    category: "Microbiology",
    question: "What is the mode of transmission for Infectious Hepatitis?",
    answer: "Contaminated food or water (Fecal-oral route)",
    explanation: "Applies to Hepatitis A; Hepatitis B is transmitted through blood/fluids.",
    difficulty: "Medium"
  },
  {
    id: 257,
    category: "Physiology",
    question: "Which enzyme is found in tears and saliva that kills bacteria?",
    answer: "Lysozyme",
    explanation: "It breaks down bacterial cell walls (peptidoglycan).",
    difficulty: "Hard"
  },
  {
    id: 258,
    category: "Physiology",
    question: "What is the name for the 'small brain' at the base of the cerebrum?",
    answer: "Cerebellum",
    explanation: "Coordinates movement and balance.",
    difficulty: "Easy"
  },
  {
    id: 259,
    category: "Physiology",
    question: "Which part of the brain is the center for intelligence and memory?",
    answer: "Cerebral Cortex",
    explanation: "The outer folded layer of the cerebrum.",
    difficulty: "Medium"
  },
  {
    id: 260,
    category: "Physiology",
    question: "What is the name of the 10th cranial nerve that regulates heart rate?",
    answer: "Vagus Nerve",
    explanation: "A major part of the parasympathetic nervous system.",
    difficulty: "Hard"
  },
  {
    id: 261,
    category: "Ecology",
    question: "What is 'Symbiosis'?",
    answer: "A close and long-term biological interaction between two different species.",
    explanation: "Includes mutualism, commensalism, and parasitism.",
    difficulty: "Easy"
  },
  {
    id: 262,
    category: "Ecology",
    question: "Give an example of Mutualism.",
    answer: "Nitrogen-fixing bacteria in root nodules (or Lichens).",
    explanation: "Both organisms benefit from the relationship.",
    difficulty: "Easy"
  },
  {
    id: 263,
    category: "Ecology",
    question: "What is 'Competition' in ecology?",
    answer: "Interaction between organisms for limited resources.",
    explanation: "Can be intraspecific (same species) or interspecific (different species).",
    difficulty: "Easy"
  },
  {
    id: 264,
    category: "Ecology",
    question: "What is an 'Ecological Pyramid'?",
    answer: "A graphical representation of the relationship between trophic levels.",
    explanation: "Can represent number, biomass, or energy.",
    difficulty: "Medium"
  },
  {
    id: 265,
    category: "Ecology",
    question: "Why is an 'Energy Pyramid' never inverted?",
    answer: "Because energy is lost as heat at each trophic level.",
    explanation: "Only about 10% of energy is passed to the next level.",
    difficulty: "Hard"
  },
  {
    id: 266,
    category: "Physiology",
    question: "Which mineral is required for the contraction of muscles?",
    answer: "Calcium",
    explanation: "Calcium ions trigger the interaction between actin and myosin filaments.",
    difficulty: "Medium"
  },
  {
    id: 267,
    category: "Physiology",
    question: "What is 'Oxygen Debt'?",
    answer: "The extra oxygen needed after exercise to break down lactic acid.",
    explanation: "Lactic acid builds up during anaerobic respiration in muscles.",
    difficulty: "Medium"
  },
  {
    id: 268,
    category: "Physiology",
    question: "What is the scientific name for 'Red Blood Cells'?",
    answer: "Erythrocytes",
    explanation: "They lack a nucleus at maturity in mammals.",
    difficulty: "Easy"
  },
  {
    id: 269,
    category: "Physiology",
    question: "What is the scientific name for 'White Blood Cells'?",
    answer: "Leukocytes",
    explanation: "They have a nucleus and play a key role in immunity.",
    difficulty: "Easy"
  },
  {
    id: 270,
    category: "Physiology",
    question: "What is the scientific name for 'Blood Platelets'?",
    answer: "Thrombocytes",
    explanation: "Essential for blood clotting.",
    difficulty: "Easy"
  },
  {
    id: 271,
    category: "Physiology",
    question: "What is 'Phagocytosis'?",
    answer: "The process by which white blood cells engulf and digest pathogens.",
    explanation: "Carried out by neutrophils and monocytes.",
    difficulty: "Medium"
  },
  {
    id: 272,
    category: "Physiology",
    question: "What is 'Diapedesis'?",
    answer: "The passage of white blood cells through the walls of capillaries.",
    explanation: "Allows them to reach the site of infection in tissues.",
    difficulty: "Hard"
  },
  {
    id: 273,
    category: "Physiology",
    question: "What is the name for the high blood pressure condition?",
    answer: "Hypertension",
    explanation: "Can lead to heart disease and stroke.",
    difficulty: "Easy"
  },
  {
    id: 274,
    category: "Physiology",
    question: "What is the name for the condition of low blood sugar?",
    answer: "Hypoglycemia",
    explanation: "Can cause dizziness and fainting.",
    difficulty: "Easy"
  },
  {
    id: 275,
    category: "Physiology",
    question: "Which hormone is secreted in response to low blood calcium levels?",
    answer: "Parathyroid Hormone (PTH)",
    explanation: "It increases calcium levels by acting on bones and kidneys.",
    difficulty: "Hard"
  },
  {
    id: 276,
    category: "Physiology",
    question: "Which hormone is secreted in response to high blood calcium levels?",
    answer: "Calcitonin",
    explanation: "Produced by the thyroid gland to lower blood calcium.",
    difficulty: "Hard"
  },
  {
    id: 277,
    category: "Botany",
    question: "What are 'Lenticels'?",
    answer: "Pores on the bark of woody stems for gas exchange.",
    explanation: "Equivalent to stomata but for woody tissues.",
    difficulty: "Medium"
  },
  {
    id: 278,
    category: "Botany",
    question: "The upward movement of sap in the xylem is called?",
    answer: "Ascent of Sap",
    explanation: "Driven by transpiration pull, cohesion, and adhesion.",
    difficulty: "Medium"
  },
  {
    id: 279,
    category: "Botany",
    question: "What is the 'Mass Flow Hypothesis'?",
    answer: "A theory explaining the movement of food in the phloem.",
    explanation: "Sugar moves from source (leaf) to sink (root/fruit) due to pressure gradient.",
    difficulty: "Hard"
  },
  {
    id: 280,
    category: "Taxonomy",
    question: "Which class of arthropods has 4 pairs of legs and no antennae?",
    answer: "Arachnida",
    explanation: "Example: Spiders, Scorpions, and Ticks.",
    difficulty: "Medium"
  },
  {
    id: 281,
    category: "Taxonomy",
    question: "Which class of arthropods has 3 pairs of legs and 1 pair of antennae?",
    answer: "Insecta",
    explanation: "The most diverse group of animals.",
    difficulty: "Easy"
  },
  {
    id: 282,
    category: "Taxonomy",
    question: "Which phylum of plants includes the ferns?",
    answer: "Pteridophyta",
    explanation: "They have vascular tissue but reproduce via spores.",
    difficulty: "Medium"
  },
  {
    id: 283,
    category: "Physiology",
    question: "What is the name of the first cervical vertebra?",
    answer: "Atlas",
    explanation: "It supports the skull.",
    difficulty: "Medium"
  },
  {
    id: 284,
    category: "Physiology",
    question: "What is the name of the second cervical vertebra?",
    answer: "Axis",
    explanation: "Allows the rotation of the head.",
    difficulty: "Medium"
  },
  {
    id: 285,
    category: "Physiology",
    question: "How many thoracic vertebrae are in a human?",
    answer: "12",
    explanation: "They correspond to the 12 pairs of ribs.",
    difficulty: "Medium"
  },
  {
    id: 286,
    category: "Physiology",
    question: "What is the name of the breastbone?",
    answer: "Sternum",
    explanation: "The ribs attach to it anteriorly.",
    difficulty: "Easy"
  },
  {
    id: 287,
    category: "Physiology",
    question: "Which type of ribs do not attach to the sternum at all?",
    answer: "Floating Ribs",
    explanation: "The last two pairs (11th and 12th).",
    difficulty: "Medium"
  },
  {
    id: 288,
    category: "Physiology",
    question: "What is 'Tidal Volume'?",
    answer: "The volume of air breathed in or out during normal breathing.",
    explanation: "About 500 ml in a healthy adult.",
    difficulty: "Medium"
  },
  {
    id: 289,
    category: "Physiology",
    question: "What is 'Vital Capacity'?",
    answer: "The maximum volume of air that can be exhaled after a maximum inhalation.",
    explanation: "A measure of lung health.",
    difficulty: "Hard"
  },
  {
    id: 290,
    category: "Nutrition",
    question: "Which enzyme in the stomach digests milk proteins in infants?",
    answer: "Rennin (Chymosin)",
    explanation: "It curdles milk to slow its passage through the digestive tract.",
    difficulty: "Medium"
  },
  {
    id: 291,
    category: "Nutrition",
    question: "What is the end product of fat digestion?",
    answer: "Fatty acids and Glycerol",
    explanation: "Absorbed into the lacteals of the villi.",
    difficulty: "Easy"
  },
  {
    id: 292,
    category: "Nutrition",
    question: "Which vitamin is synthesized by bacteria in the large intestine?",
    answer: "Vitamin K (and some B vitamins)",
    explanation: "Essential for blood clotting.",
    difficulty: "Medium"
  },
  {
    id: 293,
    category: "Physiology",
    question: "What is the pH of the stomach juice?",
    answer: "pH 1.5 to 2.5 (highly acidic)",
    explanation: "Due to the presence of Hydrochloric Acid (HCl).",
    difficulty: "Medium"
  },
  {
    id: 294,
    category: "Physiology",
    question: "What is the pH of the small intestine?",
    answer: "pH 7 to 8 (slightly alkaline)",
    explanation: "Maintained by bicarbonate ions in pancreatic juice and bile.",
    difficulty: "Medium"
  },
  {
    id: 295,
    category: "Microbiology",
    question: "Which organism causes African Sleeping Sickness?",
    answer: "Trypanosoma brucei",
    explanation: "Transmitted by the Tsetse fly.",
    difficulty: "Medium"
  },
  {
    id: 296,
    category: "Microbiology",
    question: "What is the vector for Bubonic Plague?",
    answer: "Rat Flea (Xenopsylla cheopis)",
    explanation: "The bacterium is Yersinia pestis.",
    difficulty: "Medium"
  },
  {
    id: 297,
    category: "Genetics",
    question: "What is 'Epistasis'?",
    answer: "When one gene masks or interferes with the expression of another gene.",
    explanation: "Example: Albinism masking hair color genes.",
    difficulty: "Hard"
  },
  {
    id: 298,
    category: "Genetics",
    question: "What is 'Pleiotropy'?",
    answer: "When a single gene affects multiple phenotypic traits.",
    explanation: "Example: Sickle cell anemia affecting blood, spleen, and heart.",
    difficulty: "Hard"
  },
  {
    id: 299,
    category: "Genetics",
    question: "Which chromosome abnormality causes Turner Syndrome?",
    answer: "Monosomy X (45, X0)",
    explanation: "The individual has only one X chromosome and is female.",
    difficulty: "Medium"
  },
  {
    id: 300,
    category: "Genetics",
    question: "Which chromosome abnormality causes Klinefelter Syndrome?",
    answer: "47, XXY",
    explanation: "The individual has an extra X chromosome and is male.",
    difficulty: "Medium"
  },
  {
    id: 301,
    category: "Ecology",
    question: "What is 'Carrying Capacity'?",
    answer: "The maximum number of individuals that an environment can support.",
    explanation: "Limited by food, water, and space.",
    difficulty: "Easy"
  },
  {
    id: 302,
    category: "Ecology",
    question: "What is 'Density-Dependent factor'?",
    answer: "A factor whose effect on population varies with population density.",
    explanation: "Example: Disease, competition, predation.",
    difficulty: "Medium"
  },
  {
    id: 303,
    category: "Ecology",
    question: "What is 'Density-Independent factor'?",
    answer: "A factor that affects population regardless of density.",
    explanation: "Example: Natural disasters like floods or fires.",
    difficulty: "Medium"
  },
  {
    id: 304,
    category: "Physiology",
    question: "What is the name of the bone in the thigh?",
    answer: "Femur",
    explanation: "The longest bone in the body.",
    difficulty: "Easy"
  },
  {
    id: 305,
    category: "Physiology",
    question: "What is the name of the shin bone?",
    answer: "Tibia",
    explanation: "The larger of the two lower leg bones.",
    difficulty: "Easy"
  },
  {
    id: 306,
    category: "Physiology",
    question: "What is the name of the calf bone?",
    answer: "Fibula",
    explanation: "The smaller bone on the outer side of the leg.",
    difficulty: "Easy"
  },
  {
    id: 307,
    category: "Physiology",
    question: "What are 'Carpals'?",
    answer: "Bones of the wrist.",
    explanation: "There are 8 carpals in each wrist.",
    difficulty: "Medium"
  },
  {
    id: 308,
    category: "Physiology",
    question: "What are 'Tarsals'?",
    answer: "Bones of the ankle.",
    explanation: "There are 7 tarsals in each ankle.",
    difficulty: "Medium"
  },
  {
    id: 309,
    category: "Physiology",
    question: "What are the bones of the fingers and toes called?",
    answer: "Phalanges",
    explanation: "Each finger/toe has 3, except the thumb/big toe which have 2.",
    difficulty: "Easy"
  },
  {
    id: 310,
    category: "Physiology",
    question: "Identify the three parts of the small intestine in order.",
    answer: "Duodenum, Jejunum, Ileum",
    explanation: "Digestion is completed in the duodenum, and absorption occurs in the ileum.",
    difficulty: "Medium"
  },
  {
    id: 311,
    category: "Physiology",
    question: "What is the name of the vestigial structure at the junction of the small and large intestine?",
    answer: "Appendix (Vermiform Appendix)",
    explanation: "Thought to have been useful for digesting cellulose in ancestors.",
    difficulty: "Easy"
  },
  {
    id: 312,
    category: "Physiology",
    question: "What is the function of the 'Large Intestine' (Colon)?",
    answer: "Absorption of water and formation of feces.",
    explanation: "No digestion occurs here.",
    difficulty: "Easy"
  },
  {
    id: 313,
    category: "Physiology",
    question: "What is 'Peristalsis'?",
    answer: "Wavelike muscular contractions that move food through the gut.",
    explanation: "Involuntary action of smooth muscles.",
    difficulty: "Easy"
  },
  {
    id: 314,
    category: "Physiology",
    question: "Which hormone stimulates the contraction of the uterus during labor?",
    answer: "Oxytocin",
    explanation: "Also stimulates milk ejection (let-down reflex).",
    difficulty: "Medium"
  },
  {
    id: 315,
    category: "Physiology",
    question: "What is 'Negative Feedback' in homeostasis?",
    answer: "A mechanism where a change in a variable triggers a response to counteract the change.",
    explanation: "Example: Regulation of body temperature or blood sugar.",
    difficulty: "Medium"
  },
  {
    id: 316,
    category: "Microbiology",
    question: "What is 'Innate Immunity'?",
    answer: "The non-specific defense system you are born with.",
    explanation: "Includes skin, mucous membranes, and phagocytes.",
    difficulty: "Medium"
  },
  {
    id: 317,
    category: "Microbiology",
    question: "What is 'Acquired Immunity'?",
    answer: "Specific immunity developed after exposure to a pathogen.",
    explanation: "Involves B-cells, T-cells, and memory cells.",
    difficulty: "Medium"
  },
  {
    id: 318,
    category: "Microbiology",
    question: "What is 'Active Immunity'?",
    answer: "Immunity where the body produces its own antibodies.",
    explanation: "Can be natural (infection) or artificial (vaccination).",
    difficulty: "Medium"
  },
  {
    id: 319,
    category: "Microbiology",
    question: "What is 'Passive Immunity'?",
    answer: "Immunity where antibodies are received from another source.",
    explanation: "Can be natural (mother to baby) or artificial (antiserum).",
    difficulty: "Medium"
  },
  {
    id: 320,
    category: "Ecology",
    question: "What is 'Nitrogen Fixation'?",
    answer: "The conversion of atmospheric nitrogen into nitrates.",
    explanation: "Done by Rhizobium bacteria or by lightning.",
    difficulty: "Medium"
  },
  {
    id: 321,
    category: "Ecology",
    question: "What is 'Nitrification'?",
    answer: "The conversion of ammonia into nitrites and then nitrates.",
    explanation: "Carried out by Nitrosomonas and Nitrobacter bacteria.",
    difficulty: "Hard"
  },
  {
    id: 322,
    category: "Ecology",
    question: "What is 'Ammonification'?",
    answer: "The conversion of organic nitrogen (from dead matter) into ammonia.",
    explanation: "Performed by putrefying bacteria and fungi.",
    difficulty: "Medium"
  },
  {
    id: 323,
    category: "Botany",
    question: "What is 'Vernalization'?",
    answer: "The stimulation of flowering by exposure to a period of low temperature.",
    explanation: "Common in some winter crops like wheat.",
    difficulty: "Hard"
  },
  {
    id: 324,
    category: "Botany",
    question: "What is 'Photoperiodism'?",
    answer: "The response of plants to the relative lengths of day and night.",
    explanation: "Plants are classified as short-day, long-day, or day-neutral.",
    difficulty: "Medium"
  },
  {
    id: 325,
    category: "Botany",
    question: "Which pigment is responsible for photoperiodism?",
    answer: "Phytochrome",
    explanation: "A protein pigment that detects light.",
    difficulty: "Hard"
  },
  {
    id: 326,
    category: "Physiology",
    question: "Identify the three bones of the pelvic girdle.",
    answer: "Ilium, Ischium, and Pubis",
    explanation: "They fuse together to form the hip bone.",
    difficulty: "Hard"
  },
  {
    id: 327,
    category: "Physiology",
    question: "What is the 'Acetabulum'?",
    answer: "The socket of the hip bone where the head of the femur fits.",
    explanation: "Forms a ball and socket joint.",
    difficulty: "Hard"
  },
  {
    id: 328,
    category: "Physiology",
    question: "What is the 'Glenoid Cavity'?",
    answer: "The socket of the shoulder blade where the humerus fits.",
    explanation: "Forms a ball and socket joint.",
    difficulty: "Hard"
  },
  {
    id: 329,
    category: "Physiology",
    question: "What is 'Synovial Fluid'?",
    answer: "Lubricating fluid found in the cavities of synovial joints.",
    explanation: "Reduces friction and nourishes joint cartilage.",
    difficulty: "Medium"
  },
  {
    id: 330,
    category: "Physiology",
    question: "What are 'Ligaments'?",
    answer: "Tough fibers that connect bone to bone.",
    explanation: "Provide stability to joints.",
    difficulty: "Easy"
  },
  {
    id: 331,
    category: "Physiology",
    question: "What are 'Tendons'?",
    answer: "Tough fibers that connect muscle to bone.",
    explanation: "Transmit the force of muscle contraction to the bone.",
    difficulty: "Easy"
  },
  {
    id: 332,
    category: "Ecology",
    question: "What is 'Habitat'?",
    answer: "The specific place where an organism lives.",
    explanation: "Provides the necessary food, water, and shelter.",
    difficulty: "Easy"
  },
  {
    id: 333,
    category: "Ecology",
    question: "What is 'Biosphere'?",
    answer: "The part of the Earth inhabited by living organisms.",
    explanation: "Includes land, water, and the lower atmosphere.",
    difficulty: "Easy"
  },
  {
    id: 334,
    category: "Ecology",
    question: "What is 'Abiotic component'?",
    answer: "The non-living part of an ecosystem.",
    explanation: "Example: Temperature, sunlight, soil, water.",
    difficulty: "Easy"
  },
  {
    id: 335,
    category: "Ecology",
    question: "What is 'Biotic component'?",
    answer: "The living part of an ecosystem.",
    explanation: "Example: Plants, animals, decomposers.",
    difficulty: "Easy"
  },
  {
    id: 336,
    category: "Botany",
    question: "What are 'Hydrophytes'?",
    answer: "Plants adapted to live in water.",
    explanation: "They have features like large air spaces (aerenchyma) and reduced roots.",
    difficulty: "Easy"
  },
  {
    id: 337,
    category: "Botany",
    question: "What are 'Mesophytes'?",
    answer: "Plants adapted to live in moderate water conditions.",
    explanation: "Most common terrestrial plants.",
    difficulty: "Easy"
  },
  {
    id: 338,
    category: "Physiology",
    question: "What is the function of 'Bile'?",
    answer: "To emulsify fats (break them into small droplets).",
    explanation: "Increases surface area for lipase action.",
    difficulty: "Medium"
  },
  {
    id: 339,
    category: "Physiology",
    question: "Which organ produces Urea?",
    answer: "Liver",
    explanation: "Urea is produced via the Ornithine cycle from ammonia.",
    difficulty: "Medium"
  },
  {
    id: 340,
    category: "Physiology",
    question: "Which organ excretes Urea?",
    answer: "Kidney (and some in skin via sweat).",
    explanation: "Urea is the main nitrogenous waste in humans.",
    difficulty: "Easy"
  },
  {
    id: 341,
    category: "Physiology",
    question: "What is the name for the 'windpipe' in insects?",
    answer: "Tracheae",
    explanation: "They open to the outside through spiracles.",
    difficulty: "Medium"
  },
  {
    id: 342,
    category: "Physiology",
    question: "What are 'Spiracles'?",
    answer: "Small openings on the sides of an insect's body for breathing.",
    explanation: "Lead into the tracheal system.",
    difficulty: "Medium"
  },
  {
    id: 343,
    category: "Physiology",
    question: "How many heart chambers does a Fish have?",
    answer: "Two (one atrium, one ventricle).",
    explanation: "Single circulation.",
    difficulty: "Easy"
  },
  {
    id: 344,
    category: "Physiology",
    question: "How many heart chambers does an Adult Amphibian have?",
    answer: "Three (two atria, one ventricle).",
    explanation: "Double circulation but with some mixing of blood.",
    difficulty: "Medium"
  },
  {
    id: 345,
    category: "Physiology",
    question: "How many heart chambers does a Crocodilian have?",
    answer: "Four (the only reptiles with 4 chambers).",
    explanation: "Most other reptiles have 3 or incompletely divided 4.",
    difficulty: "Hard"
  },
  {
    id: 346,
    category: "Physiology",
    question: "What is the name for the double circulation in humans?",
    answer: "Pulmonary and Systemic circulation.",
    explanation: "Blood passes through the heart twice in one complete circuit.",
    difficulty: "Easy"
  },
  {
    id: 347,
    category: "Physiology",
    question: "Which blood vessel has valves to prevent backflow?",
    answer: "Veins",
    explanation: "Arteries do not have valves (except at the base of the heart).",
    difficulty: "Easy"
  },
  {
    id: 348,
    category: "Physiology",
    question: "Which blood vessel has the thinnest walls?",
    answer: "Capillaries",
    explanation: "Only one cell thick to allow diffusion of materials.",
    difficulty: "Easy"
  },
  {
    id: 349,
    category: "Physiology",
    question: "What is 'Lymph'?",
    answer: "A colorless fluid containing white blood cells that bathes the tissues.",
    explanation: "Collected by the lymphatic system and returned to the blood.",
    difficulty: "Medium"
  },
  {
    id: 350,
    category: "Physiology",
    question: "What are 'Lymph Nodes'?",
    answer: "Small organs that filter lymph and produce lymphocytes.",
    explanation: "They swell during infections.",
    difficulty: "Medium"
  },
  {
    id: 351,
    category: "Genetics",
    question: "What is 'Recombinant DNA'?",
    answer: "DNA that has been formed artificially by combining constituents from different organisms.",
    explanation: "Used in biotechnology to produce insulin, GMOs, etc.",
    difficulty: "Hard"
  },
  {
    id: 352,
    category: "Genetics",
    question: "What is a 'Genetically Modified Organism' (GMO)?",
    answer: "An organism whose genetic material has been altered using genetic engineering techniques.",
    explanation: "Allows for traits like pest resistance or increased nutritional value.",
    difficulty: "Medium"
  },
  {
    id: 353,
    category: "Genetics",
    question: "What is 'Cloning'?",
    answer: "The process of producing genetically identical individuals.",
    explanation: "Can be done with cells or whole organisms (e.g., Dolly the sheep).",
    difficulty: "Medium"
  },
  {
    id: 354,
    category: "Genetics",
    question: "Which enzyme is used to cut DNA at specific sequences?",
    answer: "Restriction Enzyme (Restriction Endonuclease)",
    explanation: "Often called 'molecular scissors'.",
    difficulty: "Hard"
  },
  {
    id: 355,
    category: "Genetics",
    question: "Which enzyme is used to join DNA fragments together?",
    answer: "DNA Ligase",
    explanation: "Functions as 'molecular glue'.",
    difficulty: "Hard"
  },
  {
    id: 356,
    category: "Genetics",
    question: "What does 'PCR' stand for in molecular biology?",
    answer: "Polymerase Chain Reaction",
    explanation: "A technique used to amplify small segments of DNA.",
    difficulty: "Hard"
  },
  {
    id: 357,
    category: "Genetics",
    question: "What is 'Gel Electrophoresis' used for?",
    answer: "To separate DNA fragments based on their size and charge.",
    explanation: "Smaller fragments move faster and further through the gel.",
    difficulty: "Hard"
  },
  {
    id: 358,
    category: "Genetics",
    question: "What is 'DNA Fingerprinting'?",
    answer: "A technique used to identify individuals based on their unique DNA patterns.",
    explanation: "Used in forensics and paternity testing.",
    difficulty: "Medium"
  },
  {
    id: 359,
    category: "Genetics",
    question: "What are 'Exons'?",
    answer: "Coding regions of a gene that are expressed.",
    explanation: "Introns are non-coding regions that are removed during RNA splicing.",
    difficulty: "Hard"
  },
  {
    id: 360,
    category: "Genetics",
    question: "What is 'Translation' in protein synthesis?",
    answer: "The process of decoding mRNA into a sequence of amino acids.",
    explanation: "Occurs at the ribosomes.",
    difficulty: "Medium"
  },
  {
    id: 361,
    category: "Genetics",
    question: "What is 'Transcription' in protein synthesis?",
    answer: "The process of copying a segment of DNA into mRNA.",
    explanation: "Occurs in the nucleus.",
    difficulty: "Medium"
  },
  {
    id: 362,
    category: "Genetics",
    question: "What is a 'Codon'?",
    answer: "A sequence of three nucleotides in mRNA that codes for a specific amino acid.",
    explanation: "There are 64 possible codons for 20 amino acids.",
    difficulty: "Medium"
  },
  {
    id: 363,
    category: "Genetics",
    question: "What is the 'Start Codon' for most proteins?",
    answer: "AUG (codes for Methionine).",
    explanation: "Translation always begins at this sequence.",
    difficulty: "Hard"
  },
  {
    id: 364,
    category: "Genetics",
    question: "What are 'Stop Codons'?",
    answer: "UAA, UAG, and UGA.",
    explanation: "They signal the end of translation and do not code for any amino acid.",
    difficulty: "Hard"
  },
  {
    id: 365,
    category: "Botany",
    question: "What is 'Double Fertilization' unique to?",
    answer: "Angiosperms (Flowering plants).",
    explanation: "Leads to the formation of an embryo and a triploid endosperm.",
    difficulty: "Hard"
  },
  {
    id: 366,
    category: "Botany",
    question: "Which plant hormone promotes cell elongation and apical dominance?",
    answer: "Auxin",
    explanation: "Found in high concentrations in the tips of shoots.",
    difficulty: "Medium"
  },
  {
    id: 367,
    category: "Botany",
    question: "Which plant hormone promotes cell division and delay of leaf aging?",
    answer: "Cytokinin",
    explanation: "Often used in plant tissue culture.",
    difficulty: "Medium"
  },
  {
    id: 368,
    category: "Botany",
    question: "Which plant hormone promotes stem elongation and seed germination?",
    answer: "Gibberellin",
    explanation: "Used to increase fruit size and trigger germination.",
    difficulty: "Medium"
  },
  {
    id: 369,
    category: "Botany",
    question: "Which plant hormone inhibits growth and promotes seed dormancy?",
    answer: "Abscisic Acid (ABA)",
    explanation: "The 'stress hormone' that helps plants survive drought.",
    difficulty: "Medium"
  },
  {
    id: 370,
    category: "Botany",
    question: "What is 'Geotropism' (Gravitropism)?",
    answer: "Plant growth response to gravity.",
    explanation: "Roots are positively geotropic, and shoots are negatively geotropic.",
    difficulty: "Easy"
  },
  {
    id: 371,
    category: "Botany",
    question: "What is 'Thigmotropism'?",
    answer: "Plant growth response to touch.",
    explanation: "Seen in climbing plants with tendrils.",
    difficulty: "Easy"
  },
  {
    id: 372,
    category: "Botany",
    question: "What are 'Rhizomes'?",
    answer: "Horizontal underground stems (e.g., Ginger).",
    explanation: "Store food and are a form of vegetative propagation.",
    difficulty: "Medium"
  },
  {
    id: 373,
    category: "Botany",
    question: "What are 'Corms'?",
    answer: "Short, vertical underground stems (e.g., Cocoyam).",
    explanation: "A means of storage and asexual reproduction.",
    difficulty: "Medium"
  },
  {
    id: 374,
    category: "Botany",
    question: "What are 'Tubers'?",
    answer: "Swollen ends of underground stems (e.g., Yam, Irish Potato).",
    explanation: "Used for storage and vegetative reproduction.",
    difficulty: "Easy"
  },
  {
    id: 375,
    category: "Botany",
    question: "What are 'Bulbs'?",
    answer: "Short stems with fleshy leaves (e.g., Onion).",
    explanation: "Store food and provide for new growth.",
    difficulty: "Easy"
  },
  {
    id: 376,
    category: "Evolution",
    question: "What is 'Genetic Drift'?",
    answer: "Random changes in allele frequencies in small populations.",
    explanation: "Can lead to loss of genetic variation.",
    difficulty: "Hard"
  },
  {
    id: 377,
    category: "Evolution",
    question: "What is the 'Founder Effect'?",
    answer: "A type of genetic drift that occurs when a small group establishes a new population.",
    explanation: "The new population has different allele frequencies from the original.",
    difficulty: "Hard"
  },
  {
    id: 378,
    category: "Evolution",
    question: "What is 'Speciation'?",
    answer: "The process of formation of new species.",
    explanation: "Can occur due to geographical isolation (allopatric) or other barriers (sympatric).",
    difficulty: "Medium"
  },
  {
    id: 379,
    category: "Evolution",
    question: "What is 'Adaptive Radiation'?",
    answer: "The rapid evolution of many species from a common ancestor to fill different niches.",
    explanation: "Example: Darwin's Finches on the Galapagos Islands.",
    difficulty: "Medium"
  },
  {
    id: 380,
    category: "Evolution",
    question: "What is 'Coevolution'?",
    answer: "Two or more species evolve in response to each other.",
    explanation: "Example: Flowering plants and their pollinators.",
    difficulty: "Medium"
  },
  {
    id: 381,
    category: "Taxonomy",
    question: "Which phylum includes the mosses and liverworts?",
    answer: "Bryophyta",
    explanation: "They lack vascular tissue and true roots.",
    difficulty: "Easy"
  },
  {
    id: 382,
    category: "Taxonomy",
    question: "Which group of plants has covered seeds?",
    answer: "Angiosperms",
    explanation: "Seeds are enclosed within a fruit.",
    difficulty: "Easy"
  },
  {
    id: 383,
    category: "Taxonomy",
    question: "Which class of vertebrates has hair and mammary glands?",
    answer: "Mammalia",
    explanation: "Humans belong to this class.",
    difficulty: "Easy"
  },
  {
    id: 384,
    category: "Taxonomy",
    question: "Which class of vertebrates has feathers and lays hard-shelled eggs?",
    answer: "Aves (Birds)",
    explanation: "They are warm-blooded and have hollow bones for flight.",
    difficulty: "Easy"
  },
  {
    id: 385,
    category: "Taxonomy",
    question: "Which group of mammals lays eggs?",
    answer: "Monotremes",
    explanation: "Example: Platypus and Spiny Anteater.",
    difficulty: "Medium"
  },
  {
    id: 386,
    category: "Taxonomy",
    question: "Which group of mammals has a pouch for developing young?",
    answer: "Marsupials",
    explanation: "Example: Kangaroos and Koalas.",
    difficulty: "Easy"
  },
  {
    id: 387,
    category: "Physiology",
    question: "What is 'Gestation Period'?",
    answer: "The time during which an embryo develops in the uterus.",
    explanation: "In humans, it is about 9 months (280 days).",
    difficulty: "Easy"
  },
  {
    id: 388,
    category: "Physiology",
    question: "What is 'Parturition'?",
    answer: "The act of giving birth.",
    explanation: "Triggered by the hormone oxytocin.",
    difficulty: "Medium"
  },
  {
    id: 389,
    category: "Physiology",
    question: "Which organ connects the fetus to the mother for nutrient exchange?",
    answer: "Placenta",
    explanation: "Materials cross by diffusion; blood systems remain separate.",
    difficulty: "Easy"
  },
  {
    id: 390,
    category: "Physiology",
    question: "Which fluid surrounds and protects the fetus in the womb?",
    answer: "Amniotic Fluid",
    explanation: "Contained within the amnion membrane.",
    difficulty: "Easy"
  },
  {
    id: 391,
    category: "Physiology",
    question: "Identify the 5 types of sensory receptors in humans.",
    answer: "Mechanoreceptors, Chemoreceptors, Photoreceptors, Thermoreceptors, and Nociceptors.",
    explanation: "They detect touch, chemicals, light, temperature, and pain respectively.",
    difficulty: "Hard"
  },
  {
    id: 392,
    category: "Microbiology",
    question: "What is the causative agent of Typhoid Fever?",
    answer: "Salmonella typhi",
    explanation: "A bacterium transmitted through contaminated food and water.",
    difficulty: "Easy"
  },
  {
    id: 393,
    category: "Microbiology",
    question: "What is the causative agent of Malaria?",
    answer: "Plasmodium species (e.g., P. falciparum).",
    explanation: "A protozoan parasite.",
    difficulty: "Easy"
  },
  {
    id: 394,
    category: "Physiology",
    question: "What is 'Reflex Arc'?",
    answer: "The pathway followed by nerve impulses in a reflex action.",
    explanation: "Stimulus -> Receptor -> Sensory Neuron -> Relay Neuron -> Motor Neuron -> Effector -> Response.",
    difficulty: "Medium"
  },
  {
    id: 395,
    category: "Physiology",
    question: "Identify the main parts of a human eye from outside to inside.",
    answer: "Sclera, Choroid, Retina.",
    explanation: "The sclera is the white outer layer, choroid is pigmented, and retina contains photoreceptors.",
    difficulty: "Medium"
  },
  {
    id: 396,
    category: "Ecology",
    question: "What is 'Pioneer community'?",
    answer: "The first community to colonize a new area.",
    explanation: "Usually made of hardy organisms like lichens.",
    difficulty: "Easy"
  },
  {
    id: 397,
    category: "Ecology",
    question: "What is 'Ecological Pyramid of Numbers'?",
    answer: "A representation of the number of individual organisms at each trophic level.",
    explanation: "Can be inverted if the producer is very large (e.g., one tree supporting many insects).",
    difficulty: "Medium"
  },
  {
    id: 398,
    category: "Ecology",
    question: "What is 'Global Warming'?",
    answer: "The gradual increase in the Earth's average temperature due to greenhouse effect.",
    explanation: "Caused by increased CO2, methane, etc.",
    difficulty: "Easy"
  },
  {
    id: 399,
    category: "Ecology",
    question: "What is 'Acid Rain'?",
    answer: "Rain made acidic by air pollutants like sulfur dioxide and nitrogen oxides.",
    explanation: "Harms plants, aquatic life, and buildings.",
    difficulty: "Medium"
  },
  {
    id: 400,
    category: "Ecology",
    question: "What is 'Biodiversity'?",
    answer: "The variety of all living things on Earth.",
    explanation: "Includes genetic, species, and ecosystem diversity.",
    difficulty: "Easy"
  },
  {
    id: 401,
    category: "Botany",
    question: "A flower that has all four floral parts is called?",
    answer: "Complete flower",
    explanation: "Sepals, petals, stamens, and pistil are present.",
    difficulty: "Easy"
  },
  {
    id: 402,
    category: "Botany",
    question: "A flower that has either stamens or pistil but not both is?",
    answer: "Unisexual flower",
    explanation: "Can be staminate (male) or pistillate (female).",
    difficulty: "Easy"
  },
  {
    id: 403,
    category: "Botany",
    question: "What is 'Monoecious'?",
    answer: "Both male and female flowers on the same plant (e.g., Maize).",
    explanation: "Allows for self-pollination.",
    difficulty: "Medium"
  },
  {
    id: 404,
    category: "Botany",
    question: "What is 'Dioecious'?",
    answer: "Male and female flowers on separate plants (e.g., Pawpaw).",
    explanation: "Ensures cross-pollination.",
    difficulty: "Medium"
  },
  {
    id: 405,
    category: "Botany",
    question: "The fruit wall is known as the?",
    answer: "Pericarp",
    explanation: "Can be divided into exocarp, mesocarp, and endocarp.",
    difficulty: "Medium"
  },
  {
    id: 406,
    category: "Botany",
    question: "In a mango fruit, which part is edible?",
    answer: "Mesocarp",
    explanation: "The fleshy middle layer.",
    difficulty: "Easy"
  },
  {
    id: 407,
    category: "Botany",
    question: "What type of fruit is a Pineapple?",
    answer: "Multiple fruit (or Composite fruit).",
    explanation: "Develops from a whole inflorescence (cluster of flowers).",
    difficulty: "Medium"
  },
  {
    id: 408,
    category: "Botany",
    question: "What is 'Inflorescence'?",
    answer: "The arrangement of flowers on a floral axis.",
    explanation: "Common types: Raceme, Spike, Umbel.",
    difficulty: "Hard"
  },
  {
    id: 409,
    category: "Physiology",
    question: "The standard unit for measuring energy in food is?",
    answer: "Joule (or Calorie).",
    explanation: "1 calorie is about 4.2 Joules.",
    difficulty: "Easy"
  },
  {
    id: 410,
    category: "Physiology",
    question: "Which nutrient has the highest energy value per gram?",
    answer: "Fats (Lipids).",
    explanation: "Provide about 9 kcal/gram compared to 4 kcal/gram for carbs/proteins.",
    difficulty: "Easy"
  },
  {
    id: 411,
    category: "Physiology",
    question: "What is 'Basal Metabolic Rate' (BMR)?",
    answer: "The minimum energy required to keep the body alive at rest.",
    explanation: "Determined by age, sex, and weight.",
    difficulty: "Medium"
  },
  {
    id: 412,
    category: "Physiology",
    question: "Identify the 4 types of human teeth.",
    answer: "Incisors, Canines, Premolars, and Molars.",
    explanation: "Used for biting, tearing, grinding, and crushing respectively.",
    difficulty: "Easy"
  },
  {
    id: 413,
    category: "Physiology",
    question: "What is the hardest substance in the human body?",
    answer: "Tooth Enamel",
    explanation: "Protects the crown of the tooth.",
    difficulty: "Easy"
  },
  {
    id: 414,
    category: "Physiology",
    question: "Which blood group has no antigens on the red blood cells?",
    answer: "Blood Group O",
    explanation: "Has both anti-A and anti-B antibodies in the plasma.",
    difficulty: "Medium"
  },
  {
    id: 415,
    category: "Physiology",
    question: "Which blood group has both A and B antigens?",
    answer: "Blood Group AB",
    explanation: "Has no antibodies in the plasma.",
    difficulty: "Medium"
  },
  {
    id: 416,
    category: "Physiology",
    question: "What is 'Rhesus Factor'?",
    answer: "An antigen found on the surface of red blood cells in some people (Rh+).",
    explanation: "Can cause complications in pregnancy if mother is Rh- and fetus is Rh+.",
    difficulty: "Medium"
  },
  {
    id: 417,
    category: "Physiology",
    question: "The 'Heartbeat' sound (lub-dup) is caused by?",
    answer: "The closing of the heart valves.",
    explanation: '“Lub” is AV valves; “Dup” is semilunar valves.',
    difficulty: "Medium"
  },
  {
    id: 418,
    category: "Physiology",
    question: "What is 'Pulse'?",
    answer: "The rhythmic expansion and contraction of an artery.",
    explanation: "Corresponds to the heartbeat.",
    difficulty: "Easy"
  },
  {
    id: 419,
    category: "Physiology",
    question: "Which organ is the 'Graveyard' of red blood cells?",
    answer: "Spleen",
    explanation: "Old RBCs are broken down here and in the liver.",
    difficulty: "Medium"
  },
  {
    id: 420,
    category: "Microbiology",
    question: "What is 'Vaccination'?",
    answer: "The introduction of weakened or dead pathogens to stimulate immune response.",
    explanation: "Provides active artificial immunity.",
    difficulty: "Easy"
  },
  {
    id: 421,
    category: "Microbiology",
    question: "Identify a viral disease in plants.",
    answer: "Tobacco Mosaic Disease (TMV) (or Cassava Mosaic).",
    explanation: "TMV was the first virus ever discovered.",
    difficulty: "Medium"
  },
  {
    id: 422,
    category: "Microbiology",
    question: "Which organism is used in the production of Bread and Beer?",
    answer: "Yeast (Saccharomyces cerevisiae).",
    explanation: "Performs alcoholic fermentation.",
    difficulty: "Easy"
  },
  {
    id: 423,
    category: "Microbiology",
    question: "What are 'Bacteriophages'?",
    answer: "Viruses that infect bacteria.",
    explanation: "Used in research and potentially in therapy.",
    difficulty: "Hard"
  },
  {
    id: 424,
    category: "Physiology",
    question: "What is the function of 'Meninges'?",
    answer: "Protect the brain and spinal cord.",
    explanation: "There are three layers: Dura mater, Arachnoid mater, and Pia mater.",
    difficulty: "Hard"
  },
  {
    id: 425,
    category: "Physiology",
    question: "Which part of the brain is the center for thirst and body temperature?",
    answer: "Hypothalamus",
    explanation: "Also regulates sleep and emotional response.",
    difficulty: "Medium"
  },
  {
    id: 426,
    category: "Physiology",
    question: "What is 'Conditioned Reflex'?",
    answer: "A learned response to a stimulus (e.g., Pavlov's dogs).",
    explanation: "Requires repeated training.",
    difficulty: "Medium"
  },
  {
    id: 427,
    category: "Physiology",
    question: "Identify the 3 types of neurons based on function.",
    answer: "Sensory, Motor, and Relay (Interneurons).",
    explanation: "Sensory carry to CNS; Motor carry from CNS; Relay connect them.",
    difficulty: "Easy"
  },
  {
    id: 428,
    category: "Physiology",
    question: "What is the function of the 'Myelin Sheath' on a neuron?",
    answer: "To insulate the axon and speed up nerve impulses.",
    explanation: "Made of Schwann cells.",
    difficulty: "Medium"
  },
  {
    id: 429,
    category: "Botany",
    question: "Which plant part shows 'Positive Geotropism'?",
    answer: "Roots",
    explanation: "They grow toward the center of gravity.",
    difficulty: "Easy"
  },
  {
    id: 430,
    category: "Botany",
    question: "Which plant part shows 'Positive Phototropism'?",
    answer: "Shoots (Stems).",
    explanation: "They grow toward light.",
    difficulty: "Easy"
  },
  {
    id: 431,
    category: "Taxonomy",
    question: "Which phylum is the largest in the animal kingdom?",
    answer: "Arthropoda",
    explanation: "Includes insects, spiders, crustaceans, etc.",
    difficulty: "Easy"
  },
  {
    id: 432,
    category: "Taxonomy",
    question: "What is the main characteristic of Mammals that distinguishes them from Birds?",
    answer: "Mammary glands and Hair/Fur.",
    explanation: "Birds have feathers and lay eggs; most mammals give live birth.",
    difficulty: "Easy"
  },
  {
    id: 433,
    category: "Taxonomy",
    question: "Identify the two main groups of flowering plants.",
    answer: "Monocotyledons and Dicotyledons.",
    explanation: "Based on the number of seed leaves.",
    difficulty: "Easy"
  },
  {
    id: 434,
    category: "Botany",
    question: "Monocots have what type of leaf venation?",
    answer: "Parallel venation.",
    explanation: "Dicots have net/reticulate venation.",
    difficulty: "Easy"
  },
  {
    id: 435,
    category: "Botany",
    question: "Dicots have what type of root system?",
    answer: "Tap root system.",
    explanation: "Monocots have fibrous root systems.",
    difficulty: "Easy"
  },
  {
    id: 436,
    category: "Cell Biology",
    question: "What is 'Cytokinesis'?",
    answer: "The division of the cytoplasm after mitosis/meiosis.",
    explanation: "In animal cells, it occurs by furrowing; in plants, by cell plate formation.",
    difficulty: "Medium"
  },
  {
    id: 437,
    category: "Cell Biology",
    question: "What is 'Crossing Over'?",
    answer: "Exchange of genetic material between homologous chromosomes.",
    explanation: "Occurs during Prophase I of meiosis; increases variation.",
    difficulty: "Medium"
  },
  {
    id: 438,
    category: "Cell Biology",
    question: "How many daughter cells are produced in Meiosis?",
    answer: "Four haploid cells.",
    explanation: "Each is genetically unique.",
    difficulty: "Easy"
  },
  {
    id: 439,
    category: "Cell Biology",
    question: "How many daughter cells are produced in Mitosis?",
    answer: "Two diploid cells.",
    explanation: "They are genetically identical to the parent.",
    difficulty: "Easy"
  },
  {
    id: 440,
    category: "Physiology",
    question: "What is the function of the 'Seminal Vesicles'?",
    answer: "Produce a fluid that nourishes and activates sperm.",
    explanation: "Forms a major part of semen.",
    difficulty: "Medium"
  },
  {
    id: 441,
    category: "Physiology",
    question: "What is 'Implantation'?",
    answer: "The attachment of the embryo (blastocyst) to the uterine wall.",
    explanation: "Occurs about 6-7 days after fertilization.",
    difficulty: "Medium"
  },
  {
    id: 442,
    category: "Physiology",
    question: "Which hormone is detected in pregnancy tests?",
    answer: "hCG (human Chorionic Gonadotropin).",
    explanation: "Produced by the developing placenta.",
    difficulty: "Hard"
  },
  {
    id: 443,
    category: "Evolution",
    question: "What is 'Allopatric Speciation'?",
    answer: "Formation of new species due to geographic isolation.",
    explanation: "Example: Populations separated by a mountain range.",
    difficulty: "Hard"
  },
  {
    id: 444,
    category: "Evolution",
    question: "What is 'Sympatric Speciation'?",
    answer: "Formation of new species in the same geographic area.",
    explanation: "Can occur due to polyploidy or behavioral changes.",
    difficulty: "Hard"
  },
  {
    id: 445,
    category: "Evolution",
    question: "What are 'Analogous organs' evidences for?",
    answer: "Convergent Evolution.",
    explanation: "Unrelated species evolving similar traits for similar environments.",
    difficulty: "Medium"
  },
  {
    id: 446,
    category: "Ecology",
    question: "What is a 'Food Web'?",
    answer: "An interconnected network of food chains.",
    explanation: "Shows a more realistic representation of energy flow in an ecosystem.",
    difficulty: "Easy"
  },
  {
    id: 447,
    category: "Ecology",
    question: "What is 'Primary Productivity'?",
    answer: "The rate at which energy is converted by producers into organic substances.",
    explanation: "High in rainforests and wetlands.",
    difficulty: "Medium"
  },
  {
    id: 448,
    category: "Ecology",
    question: "Identify the three main layers of a forest.",
    answer: "Canopy, Understory, and Forest Floor.",
    explanation: "Each layer has its own microclimate and adapted organisms.",
    difficulty: "Easy"
  },
  {
    id: 449,
    category: "Physiology",
    question: "What is 'Antigen'?",
    answer: "Any substance that triggers an immune response.",
    explanation: "Usually proteins on the surface of pathogens.",
    difficulty: "Easy"
  },
  {
    id: 450,
    category: "Physiology",
    question: "What is 'Antibody' (Immunoglobulin)?",
    answer: "Proteins produced by B-lymphocytes to neutralize antigens.",
    explanation: "Highly specific to the antigen they fight.",
    difficulty: "Easy"
  },
  {
    id: 451,
    category: "Physiology",
    question: "What is 'Haemophilia'?",
    answer: "A genetic disorder where blood does not clot properly.",
    explanation: "A sex-linked recessive trait.",
    difficulty: "Easy"
  },
  {
    id: 452,
    category: "Physiology",
    question: "What is 'Sickle Cell Anemia' caused by?",
    answer: "A point mutation in the hemoglobin gene.",
    explanation: "Red blood cells become crescent-shaped and can block vessels.",
    difficulty: "Easy"
  },
  {
    id: 453,
    category: "Physiology",
    question: "What is the name for the protein that stores oxygen in muscles?",
    answer: "Myoglobin",
    explanation: "Gives red muscle its color.",
    difficulty: "Medium"
  },
  {
    id: 454,
    category: "Taxonomy",
    question: "Which phylum has organisms with 'radial symmetry'?",
    answer: "Cnidaria and Echinodermata (adults).",
    explanation: "Body parts arranged around a central axis.",
    difficulty: "Medium"
  },
  {
    id: 455,
    category: "Taxonomy",
    question: "Which phylum has organisms with 'bilateral symmetry'?",
    answer: "Most animals (e.g., Arthropods, Chordates, Annelids).",
    explanation: "Body can be divided into two equal halves in only one plane.",
    difficulty: "Easy"
  },
  {
    id: 456,
    category: "Physiology",
    question: "Identify the four main lobes of the human cerebrum.",
    answer: "Frontal, Parietal, Temporal, and Occipital.",
    explanation: "Occipital lobe is for vision; Temporal for hearing.",
    difficulty: "Hard"
  },
  {
    id: 457,
    category: "Physiology",
    question: "Where is the 'Adrenal Gland' located?",
    answer: "On top of each kidney.",
    explanation: "Produces adrenaline, cortisol, and aldosterone.",
    difficulty: "Easy"
  },
  {
    id: 458,
    category: "Physiology",
    question: "Which hormone is known as the 'Sleep Hormone'?",
    answer: "Melatonin",
    explanation: "Produced by the Pineal Gland in response to darkness.",
    difficulty: "Medium"
  },
  {
    id: 459,
    category: "Physiology",
    question: "What is the function of the 'Endometrium'?",
    answer: "To provide a site for implantation and nourishment of the embryo.",
    explanation: "It is shed during menstruation if pregnancy doesn't occur.",
    difficulty: "Medium"
  },
  {
    id: 460,
    category: "Physiology",
    question: "What is the name for the 'male menopause'?",
    answer: "Andropause",
    explanation: "Gradual decline in testosterone levels in aging men.",
    difficulty: "Medium"
  },
  {
    id: 461,
    category: "Botany",
    question: "What is 'Guttation'?",
    answer: "Exudation of water droplets from leaves through hydathodes.",
    explanation: "Occurs at night when soil moisture is high and transpiration is low.",
    difficulty: "Hard"
  },
  {
    id: 462,
    category: "Botany",
    question: "What are 'Hydathodes'?",
    answer: "Specialized pores for guttation.",
    explanation: "Found at the tips or margins of leaves.",
    difficulty: "Hard"
  },
  {
    id: 463,
    category: "Botany",
    question: "What is the term for a fruit that develops from a single flower with many carpels?",
    answer: "Aggregate fruit",
    explanation: "Example: Blackberry.",
    difficulty: "Medium"
  },
  {
    id: 464,
    category: "Physiology",
    question: "Which organ produces the hormone 'Erythropoietin' (EPO)?",
    answer: "Kidney",
    explanation: "EPO stimulates the production of red blood cells in bone marrow.",
    difficulty: "Hard"
  },
  {
    id: 465,
    category: "Physiology",
    question: "What is the name of the 'cramp' caused by involuntary muscle contraction?",
    answer: "Spasm (or Tetany).",
    explanation: "Can be caused by electrolyte imbalance.",
    difficulty: "Easy"
  },
  {
    id: 466,
    category: "Genetics",
    question: "What is 'Linkage' in genetics?",
    answer: "Genes located on the same chromosome tend to be inherited together.",
    explanation: "Violates Mendel's Law of Independent Assortment.",
    difficulty: "Hard"
  },
  {
    id: 467,
    category: "Genetics",
    question: "What is 'Lethal Gene'?",
    answer: "A gene that leads to the death of an organism.",
    explanation: "Usually recessive and expressed in homozygous state.",
    difficulty: "Hard"
  },
  {
    id: 468,
    category: "Genetics",
    question: "What is the name for a genotype with two different alleles (Aa)?",
    answer: "Heterozygous",
    explanation: "Homozygous has two identical alleles (AA or aa).",
    difficulty: "Easy"
  },
  {
    id: 469,
    category: "Microbiology",
    question: "What is the name for bacteria that require oxygen to survive?",
    answer: "Obligate Aerobes",
    explanation: "Obligate Anaerobes are killed by oxygen.",
    difficulty: "Medium"
  },
  {
    id: 470,
    category: "Microbiology",
    question: "What are 'Facultative Anaerobes'?",
    answer: "Bacteria that can live with or without oxygen.",
    explanation: "They switch to fermentation if oxygen is absent.",
    difficulty: "Medium"
  },
  {
    id: 471,
    category: "Ecology",
    question: "What is 'Ecological footprint'?",
    answer: "The impact of a person or community on the environment.",
    explanation: "Expressed as the amount of land required to sustain their use of resources.",
    difficulty: "Easy"
  },
  {
    id: 472,
    category: "Ecology",
    question: "What is 'Renewable Resource'?",
    answer: "A resource that can be replenished naturally over time.",
    explanation: "Example: Solar energy, wind, water, forests.",
    difficulty: "Easy"
  },
  {
    id: 473,
    category: "Ecology",
    question: "What is 'Non-renewable Resource'?",
    answer: "A resource that exists in finite amounts and cannot be easily replaced.",
    explanation: "Example: Fossil fuels, minerals.",
    difficulty: "Easy"
  },
  {
    id: 474,
    category: "Physiology",
    question: "What is 'Haemodialysis'?",
    answer: "The process of filtering blood artificially using a machine.",
    explanation: "Used for patients with kidney failure.",
    difficulty: "Medium"
  },
  {
    id: 475,
    category: "Physiology",
    question: "What is the name of the 'voice box' in Birds?",
    answer: "Syrinx",
    explanation: "Equivalent to the human larynx but located at the base of the trachea.",
    difficulty: "Hard"
  },
  {
    id: 476,
    category: "Physiology",
    question: "Identify the three main nitrogenous wastes excreted by animals.",
    answer: "Ammonia, Urea, and Uric Acid.",
    explanation: "Ammonia is most toxic (fish); Uric acid is least toxic (birds/reptiles).",
    difficulty: "Medium"
  },
  {
    id: 477,
    category: "Taxonomy",
    question: "Which phylum is characterized by a segmented body and a clitellum?",
    answer: "Annelida",
    explanation: "Example: Earthworms and Leeches.",
    difficulty: "Medium"
  },
  {
    id: 478,
    category: "Taxonomy",
    question: "Which class of vertebrates has gills in the larval stage and lungs in adults?",
    answer: "Amphibia",
    explanation: "Example: Frogs, Toads, and Salamanders.",
    difficulty: "Easy"
  },
  {
    id: 479,
    category: "Physiology",
    question: "Which part of the brain is responsible for thermoregulation?",
    answer: "Hypothalamus",
    explanation: "It acts as the body's thermostat.",
    difficulty: "Medium"
  },
  {
    id: 480,
    category: "Physiology",
    question: "What is 'Vasoconstriction'?",
    answer: "Narrowing of blood vessels to reduce heat loss.",
    explanation: "Occurs in the skin when the body is cold.",
    difficulty: "Medium"
  },
  {
    id: 481,
    category: "Physiology",
    question: "What is 'Vasodilation'?",
    answer: "Widening of blood vessels to increase heat loss.",
    explanation: "Occurs in the skin when the body is hot.",
    difficulty: "Medium"
  },
  {
    id: 482,
    category: "Botany",
    question: "What is 'Etiolation'?",
    answer: "The growth of a plant in total darkness.",
    explanation: "Characterized by long, weak stems and pale yellow leaves.",
    difficulty: "Medium"
  },
  {
    id: 483,
    category: "Botany",
    question: "What is 'Apical Dominance'?",
    answer: "The inhibition of lateral bud growth by the terminal bud.",
    explanation: "Controlled by the hormone Auxin.",
    difficulty: "Medium"
  },
  {
    id: 484,
    category: "Botany",
    question: "The study of the internal structure of plants is called?",
    answer: "Plant Anatomy",
    explanation: "Plant Physiology is the study of functions.",
    difficulty: "Easy"
  },
  {
    id: 485,
    category: "Physiology",
    question: "Identify the 3 main parts of a human ear.",
    answer: "Outer Ear, Middle Ear, and Inner Ear.",
    explanation: "Separated by the eardrum and the oval window.",
    difficulty: "Easy"
  },
  {
    id: 486,
    category: "Physiology",
    question: "Which part of the ear is responsible for capturing sound waves?",
    answer: "Pinna (Auricle).",
    explanation: "The visible part of the outer ear.",
    difficulty: "Easy"
  },
  {
    id: 487,
    category: "Physiology",
    question: "What is the scientific name for the 'Eardrum'?",
    answer: "Tympanic Membrane",
    explanation: "Vibrates when struck by sound waves.",
    difficulty: "Easy"
  },
  {
    id: 488,
    category: "Microbiology",
    question: "What is the causative agent of Ringworm?",
    answer: "Fungi (Microsporum or Trichophyton).",
    explanation: "It is a skin infection, not caused by a worm.",
    difficulty: "Easy"
  },
  {
    id: 489,
    category: "Microbiology",
    question: "What is the causative agent of Athlete's Foot?",
    answer: "Fungus (Tinea pedis).",
    explanation: "Affects the skin on the feet.",
    difficulty: "Easy"
  },
  {
    id: 490,
    category: "Microbiology",
    question: "Identify a sexually transmitted bacterial disease.",
    answer: "Gonorrhea (or Syphilis).",
    explanation: "Gonorrhea is caused by Neisseria gonorrhoeae.",
    difficulty: "Easy"
  },
  {
    id: 491,
    category: "Genetics",
    question: "What is 'Nondisjunction'?",
    answer: "Failure of chromosomes to separate during meiosis.",
    explanation: "Leads to daughter cells with abnormal chromosome numbers.",
    difficulty: "Hard"
  },
  {
    id: 492,
    category: "Genetics",
    question: "What is 'Inbreeding'?",
    answer: "Mating between closely related individuals.",
    explanation: "Can lead to increased expression of recessive harmful traits.",
    difficulty: "Medium"
  },
  {
    id: 493,
    category: "Genetics",
    question: "What is 'Outbreeding' (Crossbreeding)?",
    answer: "Mating between unrelated individuals.",
    explanation: "Increases genetic variation and hybrid vigor.",
    difficulty: "Medium"
  },
  {
    id: 494,
    category: "Ecology",
    question: "What is 'Xerosere'?",
    answer: "Ecological succession in dry environments.",
    explanation: "Hydrosere is succession in water.",
    difficulty: "Hard"
  },
  {
    id: 495,
    category: "Ecology",
    question: "What are 'Ectoparasites'?",
    answer: "Parasites that live on the outside of the host (e.g., Ticks, Lice).",
    explanation: "Endoparasites live inside (e.g., Tapeworms).",
    difficulty: "Easy"
  },
  {
    id: 496,
    category: "Ecology",
    question: "What is 'Interdependence' in an ecosystem?",
    answer: "The way organisms rely on each other for survival.",
    explanation: "Example: Plants provide O2 and food; animals provide CO2 and dispersal.",
    difficulty: "Easy"
  },
  {
    id: 497,
    category: "Physiology",
    question: "What is the function of the 'Cornea'?",
    answer: "To refract (bend) light entering the eye.",
    explanation: "It is the clear front part of the eye.",
    difficulty: "Easy"
  },
  {
    id: 498,
    category: "Physiology",
    question: "What is 'Pupillary Reflex'?",
    answer: "Automatic adjustment of pupil size in response to light intensity.",
    explanation: "Protects the retina from excessive light.",
    difficulty: "Medium"
  },
  {
    id: 499,
    category: "Physiology",
    question: "What is the function of 'Bartholin's glands'?",
    answer: "Produce lubricating fluid in the female reproductive system.",
    explanation: "Located at the entrance to the vagina.",
    difficulty: "Hard"
  },
  {
    id: 500,
    category: "Taxonomy",
    question: "What is the main difference between Prokaryotes and Eukaryotes?",
    answer: "Prokaryotes lack a membrane-bound nucleus and organelles.",
    explanation: "Eukaryotes have a defined nucleus (e.g., Plants, Animals, Fungi).",
    difficulty: "Easy"
  },
  {
    id: 501,
    category: "Physiology",
    question: "Which hormone inhibits the release of FSH and LH after ovulation?",
    answer: "Progesterone (and Estrogen).",
    explanation: "Prevents further eggs from being developed during the cycle.",
    difficulty: "Hard"
  },
  {
    id: 502,
    category: "Botany",
    question: "What is 'Turgor Pressure'?",
    answer: "The pressure of water inside the vacuole against the cell wall.",
    explanation: "Keeps plant cells firm and upright.",
    difficulty: "Medium"
  },
  {
    id: 503,
    category: "Physiology",
    question: "Which organ produces Insulin?",
    answer: "Islets of Langerhans (in the Pancreas).",
    explanation: "Specifically the Beta cells.",
    difficulty: "Medium"
  },
  {
    id: 504,
    category: "Microbiology",
    question: "Which part of a virus contains its genetic information?",
    answer: "The Core (Nucleic Acid).",
    explanation: "Surrounded by a protein coat called a Capsid.",
    difficulty: "Easy"
  },
  {
    id: 505,
    category: "General Bio",
    question: "What is the study of how organisms interact with each other and their environment?",
    answer: "Ecology",
    explanation: "Final bonus question: You're ready for the competition!",
    difficulty: "Easy"
  }
];
