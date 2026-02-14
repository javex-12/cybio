export interface Topic {
  title: string;
  slug: string;
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Theme {
  id: string;
  title: string;
  level: 'SS1' | 'SS2' | 'SS3';
  chapters: Chapter[];
}

export const syllabus: Theme[] = [
  // --- SS1 ---
  {
    id: 'theme-1',
    title: 'Organization of Life',
    level: 'SS1',
    chapters: [
      { id: 'chap-1', title: 'Introduction to Biology', topics: [{ title: 'Biology as a Science', slug: 'biological-foundation' }, { title: 'The Science of Hierarchy', slug: 'taxonomy-science' }, { title: 'The 5 Kingdoms', slug: 'five-kingdom-revolution' }] },
      { id: 'chap-2', title: 'The Cell', topics: [{ title: 'Cell Structure & Function', slug: 'cell-struct' }] },
      { id: 'chap-3', title: 'Cell and its Environment', topics: [{ title: 'Diffusion & Osmosis', slug: 'diffusion' }] }
    ]
  },
  {
    id: 'theme-2',
    title: 'Classification of Living Things',
    level: 'SS1',
    chapters: [
      { id: 'chap-4', title: 'Kingdom Monera & Protista', topics: [{ title: 'Micro-organisms', slug: 'monera' }] },
      { id: 'chap-5', title: 'Kingdom Fungi & Plantae', topics: [{ title: 'Plant Classification', slug: 'plantae-deep-dive' }] },
      { id: 'chap-6', title: 'Kingdom Animalia', topics: [{ title: 'Invertebrates', slug: 'animalia-invertebrates-deep' }, { title: 'Vertebrates', slug: 'animalia-vertebrates-deep' }] }
    ]
  },
  {
    id: 'theme-3',
    title: 'Ecology',
    level: 'SS1',
    chapters: [
      { id: 'chap-7', title: 'Basic Ecological Concepts', topics: [{ title: 'Ecosystems', slug: 'ecosystem' }] },
      { id: 'chap-8', title: 'Biomes', topics: [{ title: 'Local & World Biomes', slug: 'biomes' }] }
    ]
  },

  // --- SS2 ---
  {
    id: 'theme-4',
    title: 'Nutrition & Transport',
    level: 'SS2',
    chapters: [
      { id: 'chap-9', title: 'Plant Nutrition', topics: [{ title: 'Photosynthesis', slug: 'photosynthesis' }] },
      { id: 'chap-10', title: 'Animal Nutrition', topics: [{ title: 'Digestive System', slug: 'digestion' }] },
      { id: 'chap-11', title: 'Transport System', topics: [{ title: 'Blood & Circulatory', slug: 'transport' }] }
    ]
  },
  {
    id: 'theme-5',
    title: 'Respiration & Excretion',
    level: 'SS2',
    chapters: [
      { id: 'chap-12', title: 'Respiratory System', topics: [{ title: 'Mechanism of Breathing', slug: 'respiration' }] },
      { id: 'chap-13', title: 'Excretory System', topics: [{ title: 'Kidneys & Waste Control', slug: 'excretion' }] }
    ]
  },
  {
    id: 'theme-6',
    title: 'Regulation & Coordination',
    level: 'SS2',
    chapters: [
      { id: 'chap-14', title: 'Hormonal Coordination', topics: [{ title: 'Endocrine Glands', slug: 'hormones' }] },
      { id: 'chap-15', title: 'Nervous System', topics: [{ title: 'Brain & Reflexes', slug: 'nervous' }] },
      { id: 'chap-16', title: 'Sense Organs', topics: [{ title: 'Eye and Ear Anatomy', slug: 'senses' }] }
    ]
  },
  {
    id: 'theme-7',
    title: 'Reproduction',
    level: 'SS2',
    chapters: [
      { id: 'chap-17', title: 'Asexual Reproduction', topics: [{ title: 'Fission & Budding', slug: 'asexual' }] },
      { id: 'chap-18', title: 'Sexual Reproduction in Plants', topics: [{ title: 'Floral Parts', slug: 'plant-reproduction' }] },
      { id: 'chap-19', title: 'Sexual Reproduction in Humans', topics: [{ title: 'Male & Female Systems', slug: 'human-reproduction' }] }
    ]
  },

  // --- SS3 ---
  {
    id: 'theme-8',
    title: 'Continuity of Life',
    level: 'SS3',
    chapters: [
      { id: 'chap-20', title: 'Genetics', topics: [{ title: 'Mendelian Laws', slug: 'genetics-intro' }, { title: 'DNA & RNA', slug: 'dna' }] },
      { id: 'chap-21', title: 'Variation', topics: [{ title: 'Morphological Variation', slug: 'variation' }] }
    ]
  },
  {
    id: 'theme-9',
    title: 'Evolution',
    level: 'SS3',
    chapters: [
      { id: 'chap-22', title: 'Theories of Evolution', topics: [{ title: 'Darwin & Lamarck', slug: 'evolution-theories' }] },
      { id: 'chap-23', title: 'Evidence of Evolution', topics: [{ title: 'Fossil Records', slug: 'evolution-evidence' }] }
    ]
  },
  {
    id: 'theme-10',
    title: 'Ecology & Environment',
    level: 'SS3',
    chapters: [
      { id: 'chap-24', title: 'Nutrient Cycling', topics: [{ title: 'Nitrogen Cycle', slug: 'nitrogen' }] },
      { id: 'chap-25', title: 'Ecological Management', topics: [{ title: 'Pollution & Control', slug: 'pollution' }] },
      { id: 'chap-26', title: 'Conservation', topics: [{ title: 'Natural Resources', slug: 'conservation' }] },
      { id: 'chap-27', title: 'Micro-organisms in Action', topics: [{ title: 'Bio-remediation', slug: 'micro-action' }] },
      { id: 'chap-28', title: 'Public Health', topics: [{ title: 'Diseases & Control', slug: 'public-health' }] }
    ]
  }
];