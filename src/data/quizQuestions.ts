export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizData {
  [key: string]: QuizQuestion[];
}

export const quizItems: QuizData = {
  bangladeshQuiz: [
    {
      id: 1,
      question:
        'Which of these is a common traditional medicine practice in Bangladesh?',
      options: ['Ayurveda', 'Homeopathy', 'Unani', 'All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      id: 2,
      question: 'What is the primary healthcare system in Bangladesh?',
      options: [
        'Private clinics',
        'Public hospitals',
        'Community clinics',
        'NGO-run facilities'
      ],
      correctAnswer: 'Public hospitals'
    },
    {
      id: 3,
      question:
        'Which disease is a major public health concern in Bangladesh due to contaminated water?',
      options: ['Malaria', 'Dengue', 'Cholera', 'Tuberculosis'],
      correctAnswer: 'Cholera'
    },
    {
      id: 4,
      question:
        'What is the leading cause of maternal mortality in Bangladesh?',
      options: ['Hemorrhage', 'Infection', 'Eclampsia', 'Obstructed labor'],
      correctAnswer: 'Hemorrhage'
    },
    {
      id: 5,
      question:
        'Which health program in Bangladesh is known for its success in reducing child mortality?',
      options: [
        'Expanded Program on Immunization (EPI)',
        'National Nutrition Program',
        'Safe Motherhood Initiative',
        'Malaria Control Program'
      ],
      correctAnswer: 'Expanded Program on Immunization (EPI)'
    }
  ],
  japanQuiz: [
    {
      id: 6,
      question: "What is 'Kampo' in Japan?",
      options: [
        'A type of martial art',
        'Traditional Japanese herbal medicine',
        'A popular dish',
        'A form of ancient poetry'
      ],
      correctAnswer: 'Traditional Japanese herbal medicine'
    },
    {
      id: 7,
      question: 'Which of these is a leading cause of death in Japan?',
      options: ['Infectious diseases', 'Heart disease', 'Cancer', 'Diabetes'],
      correctAnswer: 'Cancer'
    },
    {
      id: 8,
      question:
        'Japan is known for its advanced research in which medical field?',
      options: [
        'Tropical diseases',
        'Regenerative medicine',
        'Traditional remedies',
        'Veterinary science'
      ],
      correctAnswer: 'Regenerative medicine'
    },
    {
      id: 9,
      question:
        "What is a key characteristic of Japan's healthcare system regarding patient access?",
      options: [
        'Long waiting lists for appointments',
        'Patients can directly access specialists',
        'Limited access to primary care',
        'High out-of-pocket costs'
      ],
      correctAnswer: 'Patients can directly access specialists'
    },
    {
      id: 10,
      question:
        'Which public health challenge is particularly prominent in Japan due to its aging population?',
      options: [
        'High birth rates',
        'Infectious disease outbreaks',
        'Increasing burden of chronic diseases',
        'Childhood obesity'
      ],
      correctAnswer: 'Increasing burden of chronic diseases'
    }
  ],
  australiaQuiz: [
    {
      id: 11,
      question:
        'Which unique venomous creature found in Australia requires immediate antivenom?',
      options: ['Kangaroo', 'Koala', 'Box Jellyfish', 'Platypus'],
      correctAnswer: 'Box Jellyfish'
    },
    {
      id: 12,
      question:
        'What is a significant health challenge for Indigenous Australians?',
      options: [
        'Obesity',
        'Chronic diseases',
        'Mental health issues',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      id: 13,
      question:
        'Australia has a strong focus on research for diseases prevalent in which climate?',
      options: ['Arctic', 'Tropical', 'Desert', 'Temperate'],
      correctAnswer: 'Tropical'
    },
    {
      id: 14,
      question:
        'What is the primary funding mechanism for healthcare in Australia?',
      options: [
        'Private insurance only',
        'A mix of public (Medicare) and private funding',
        'Out-of-pocket payments',
        'Charitable donations'
      ],
      correctAnswer: 'A mix of public (Medicare) and private funding'
    },
    {
      id: 15,
      question:
        'Which type of cancer has a high incidence rate in Australia, largely due to sun exposure?',
      options: ['Lung cancer', 'Breast cancer', 'Skin cancer', 'Colon cancer'],
      correctAnswer: 'Skin cancer'
    }
  ],
  swedenQuiz: [
    {
      id: 16,
      question:
        "Sweden is known for its universal healthcare system. What does 'universal' mean in this context?",
      options: [
        'Only for citizens',
        'Available to all residents',
        'Only for emergencies',
        'Only for children'
      ],
      correctAnswer: 'Available to all residents'
    },
    {
      id: 17,
      question:
        'Which Swedish company is a global leader in pharmaceutical research?',
      options: ['Volvo', 'IKEA', 'AstraZeneca', 'H&M'],
      correctAnswer: 'AstraZeneca'
    },
    {
      id: 18,
      question:
        'What is a common health initiative in Sweden to promote well-being?',
      options: [
        'Mandatory gym attendance',
        'Free public transport',
        'Emphasis on outdoor activities and nature',
        'Strict dietary regulations'
      ],
      correctAnswer: 'Emphasis on outdoor activities and nature'
    },
    {
      id: 19,
      question:
        'Sweden has a strong focus on preventative healthcare. What is an example of this?',
      options: [
        'Mandatory annual health check-ups',
        'Subsidized healthy food options',
        'Extensive public health campaigns on lifestyle diseases',
        'Free gym memberships'
      ],
      correctAnswer: 'Extensive public health campaigns on lifestyle diseases'
    },
    {
      id: 20,
      question: "What is a characteristic of Sweden's approach to elder care?",
      options: [
        'Primarily family-based care',
        'Extensive home care services and institutional care',
        'Limited government involvement',
        'Focus on private nursing homes'
      ],
      correctAnswer: 'Extensive home care services and institutional care'
    }
  ],
  spainQuiz: [
    {
      id: 21,
      question:
        "What is a key component of the 'Mediterranean Diet' often associated with Spain, known for its health benefits?",
      options: [
        'High red meat consumption',
        'Processed foods',
        'Olive oil, fruits, vegetables, and fish',
        'Sugary drinks'
      ],
      correctAnswer: 'Olive oil, fruits, vegetables, and fish'
    },
    {
      id: 22,
      question: "Spain's healthcare system is primarily funded by what?",
      options: [
        'Private insurance',
        'Out-of-pocket payments',
        'Taxes',
        'Donations'
      ],
      correctAnswer: 'Taxes'
    },
    {
      id: 23,
      question:
        'Which historical medical practice, with roots in Islamic Spain, greatly influenced European medicine?',
      options: [
        'Acupuncture',
        'Herbalism',
        'Surgery and pharmacology',
        'Bloodletting'
      ],
      correctAnswer: 'Surgery and pharmacology'
    },
    {
      id: 24,
      question:
        'What is a common public health challenge in Spain related to lifestyle?',
      options: [
        'High rates of infectious diseases',
        'Low life expectancy',
        'Increasing rates of obesity and associated chronic diseases',
        'Lack of access to clean water'
      ],
      correctAnswer:
        'Increasing rates of obesity and associated chronic diseases'
    },
    {
      id: 25,
      question:
        'Which area of medical research is particularly strong in Spain, often due to its climate and biodiversity?',
      options: [
        'Polar medicine',
        'Tropical disease research',
        'Oncology',
        'Space medicine'
      ],
      correctAnswer: 'Tropical disease research'
    }
  ],
  englandQuiz: [
    {
      id: 26,
      question:
        'What does NHS stand for in the context of healthcare in England?',
      options: [
        'National Health Service',
        'New Hospital System',
        'National Health Society',
        "Nurses' Health Support"
      ],
      correctAnswer: 'National Health Service'
    },
    {
      id: 27,
      question:
        'Which historical figure from England is considered the father of modern vaccination?',
      options: [
        'Alexander Fleming',
        'Joseph Lister',
        'Edward Jenner',
        'Florence Nightingale'
      ],
      correctAnswer: 'Edward Jenner'
    },
    {
      id: 28,
      question:
        'What is a common public health campaign in England related to smoking?',
      options: [
        'Smoke-free zones',
        'Free nicotine patches',
        'Quit smoking campaigns',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      id: 29,
      question:
        'What is a primary focus of current healthcare reforms in England?',
      options: [
        'Increasing private healthcare options',
        'Integrating health and social care services',
        'Reducing the size of the NHS',
        'Shifting focus to hospital-centric care'
      ],
      correctAnswer: 'Integrating health and social care services'
    },
    {
      id: 30,
      question:
        'Which major global health organization has a significant presence and influence in England?',
      options: [
        'Doctors Without Borders',
        'World Health Organization (WHO)',
        'Red Cross',
        'UNICEF'
      ],
      correctAnswer: 'World Health Organization (WHO)'
    }
  ]
};
