export interface Tip {
  id: string
  title: string
  description: string
  tags: string[]
}

export interface Category {
  id: string
  title: string
  description: string
  icon: string
  color: string
  lightColor: string
  tips: Tip[]
}

export const categories: Category[] = [
  {
    id: 'classroom-management',
    title: 'Classroom Management',
    description: 'Build a structured, calm environment where every student can focus and thrive.',
    icon: '📚',
    color: '#3B82F6',
    lightColor: '#EFF6FF',
    tips: [
      {
        id: 'cm-1',
        title: 'Use a Visual Timer',
        description: 'Display a countdown timer on the board during activities. This helps students self-manage their time and reduces the need for constant reminders. Apps like ClassTimer or a simple projector countdown work great for any year level.',
        tags: ['Time Management', 'Routine'],
      },
      {
        id: 'cm-2',
        title: 'Establish Non-Verbal Signals',
        description: 'Create non-verbal hand signals for common requests — water, toilet, help, and finished. A simple signal system reduces interruptions, teaches self-advocacy, and keeps lessons flowing without constant verbal check-ins.',
        tags: ['Communication', 'Routine'],
      },
      {
        id: 'cm-3',
        title: 'Flexible Seating Rotations',
        description: 'Rotate seating arrangements weekly to build classroom community. Mix group tables, solo spots, and floor seating to cater to different learning styles. Let students choose within guidelines to build ownership of the space.',
        tags: ['Environment', 'Community'],
      },
      {
        id: 'cm-4',
        title: 'Morning Meeting Routine',
        description: 'Start each day with a 10-minute morning meeting: greeting, sharing, activity, and a daily message. This structure builds strong classroom community, surfaces pastoral concerns early, and sets a positive tone for the whole day.',
        tags: ['Community', 'Wellbeing'],
      },
    ],
  },
  {
    id: 'student-engagement',
    title: 'Student Engagement',
    description: 'Boost motivation and get every student actively participating in their learning.',
    icon: '💡',
    color: '#F59E0B',
    lightColor: '#FFFBEB',
    tips: [
      {
        id: 'se-1',
        title: 'Think-Pair-Share',
        description: 'Give students 60 seconds to think independently, then 90 seconds to discuss with a partner before sharing with the class. This dramatically increases participation from all learners — not just the confident ones.',
        tags: ['Discussion', 'Participation'],
      },
      {
        id: 'se-2',
        title: 'Student Choice Boards',
        description: 'Give students a 3×3 grid of activity options (tic-tac-toe style). They complete a row of their choice. This builds autonomy and ownership of learning while ensuring full curriculum coverage — great for differentiation.',
        tags: ['Differentiation', 'Autonomy'],
      },
      {
        id: 'se-3',
        title: 'Exit Tickets',
        description: 'End each lesson with a 2-minute exit ticket — one question or reflection prompt. Use responses to plan the next lesson and identify who needs extra support. Google Forms or sticky notes on the door both work brilliantly.',
        tags: ['Reflection', 'Formative'],
      },
      {
        id: 'se-4',
        title: 'Gamify with a Class Points System',
        description: 'Create a simple points system for effort, kindness, and participation — not just results. Weekly rewards like free reading time, choosing your seat, or a class game build motivation without undermining intrinsic engagement.',
        tags: ['Motivation', 'Positive Reinforcement'],
      },
    ],
  },
  {
    id: 'digital-learning',
    title: 'Digital Learning',
    description: 'Integrate technology meaningfully to extend and deepen student learning.',
    icon: '💻',
    color: '#8B5CF6',
    lightColor: '#F5F3FF',
    tips: [
      {
        id: 'dl-1',
        title: 'Padlet for Collaborative Thinking',
        description: 'Padlet lets students post ideas, images, links, and responses on a shared digital board. Perfect for brainstorming, gallery walks, and project sharing. Works well on Chromebooks, iPads, and any device with a browser.',
        tags: ['Collaboration', 'Tools'],
      },
      {
        id: 'dl-2',
        title: 'Record Short Video Explanations',
        description: 'Record 2–3 minute explainer videos for complex concepts. Students can rewatch at their own pace, pause and rewind as needed. Free tools like Screencastify or Loom make this simple directly from your Chrome browser.',
        tags: ['Video', 'Differentiation'],
      },
      {
        id: 'dl-3',
        title: 'Organise Google Classroom with Topics',
        description: 'Use the Topics feature in Google Classroom like folders — group posts by week, unit, or subject area. Students can quickly navigate to exactly what they need without endless scrolling. A small setup that saves major time.',
        tags: ['Google Classroom', 'Organisation'],
      },
      {
        id: 'dl-4',
        title: 'Digital Learning Stations',
        description: 'Set up 4–5 stations around the room, each with a different digital task. Rotate groups every 15 minutes. Each station can target a different skill or learning style — reading, creating, practising, or collaborating.',
        tags: ['Stations', 'Blended Learning'],
      },
    ],
  },
  {
    id: 'assessment-feedback',
    title: 'Assessment & Feedback',
    description: 'Give targeted, timely feedback that genuinely moves students forward.',
    icon: '✏️',
    color: '#10B981',
    lightColor: '#ECFDF5',
    tips: [
      {
        id: 'af-1',
        title: 'Two Stars and a Wish',
        description: 'When giving peer or teacher feedback, use the "Two Stars and a Wish" framework — two specific positives and one suggestion for improvement. Keeps feedback balanced, constructive, and easy for students to receive and act on.',
        tags: ['Feedback', 'Peer Assessment'],
      },
      {
        id: 'af-2',
        title: 'Traffic Light Check-Ins',
        description: 'Ask students to signal their understanding with red (confused), yellow (unsure), or green (got it) cards or coloured cups on their desks. A quick, visual, low-stakes way to gauge the whole room in under 30 seconds.',
        tags: ['Formative', 'Quick Check'],
      },
      {
        id: 'af-3',
        title: 'Single-Point Rubrics',
        description: 'Replace complex rubrics with a single-point rubric that describes just the proficiency standard. Students and teachers note evidence of what falls below or exceeds that standard. Simpler, faster, and more focused on growth.',
        tags: ['Rubrics', 'Self-Assessment'],
      },
      {
        id: 'af-4',
        title: 'Voice Feedback with Kaizena',
        description: 'Kaizena is a Google Docs add-on that lets you leave voice comments directly on student writing. Students consistently find audio feedback more personal, clearer, and easier to act on than written margin comments.',
        tags: ['Feedback', 'Digital Tools'],
      },
    ],
  },
  {
    id: 'inclusive-education',
    title: 'Inclusive Education',
    description: 'Ensure every student — regardless of need or background — can fully access learning.',
    icon: '🌍',
    color: '#06B6D4',
    lightColor: '#ECFEFF',
    tips: [
      {
        id: 'ie-1',
        title: 'Multiple Means of Expression',
        description: 'Let students demonstrate learning through writing, drawing, speaking, building, or video. Not every student expresses understanding through written tasks — offering choice reveals true learning and values diverse strengths.',
        tags: ['UDL', 'Differentiation'],
      },
      {
        id: 'ie-2',
        title: 'Clear, Structured Instructions',
        description: 'Write task steps on the board alongside verbal instructions. Break tasks into numbered steps. Photograph the steps and share in Google Classroom — especially valuable for EAL/D students, neurodiverse learners, and absent students.',
        tags: ['EAL/D', 'Accessibility'],
      },
      {
        id: 'ie-3',
        title: 'Build in Sensory Breaks',
        description: 'Schedule 2-minute movement or sensory breaks into longer lessons. Brain breaks — stretching, breathing exercises, or a quick game — reset focus and regulation, especially for students with ADHD, anxiety, or sensory differences.',
        tags: ['Wellbeing', 'ADHD Support'],
      },
      {
        id: 'ie-4',
        title: 'Culturally Responsive Resources',
        description: 'Include texts, examples, and images that reflect your students\' cultural backgrounds. In New Zealand classrooms, actively weave in te reo Māori, Pacific perspectives, and local contexts to show all cultures belong in the curriculum.',
        tags: ['NZ Curriculum', 'Te Tiriti'],
      },
    ],
  },
  {
    id: 'wellbeing-culture',
    title: 'Wellbeing & Culture',
    description: 'Cultivate a safe, connected, and caring classroom community for everyone.',
    icon: '🌿',
    color: '#EC4899',
    lightColor: '#FDF2F8',
    tips: [
      {
        id: 'wc-1',
        title: 'Daily Feelings Check-In',
        description: 'Start or end the day with a brief check-in using an emotion wheel or a simple 1–5 scale. Normalising emotional awareness helps students name and manage their feelings — and helps you spot who might need extra support today.',
        tags: ['SEL', 'Mental Health'],
      },
      {
        id: 'wc-2',
        title: 'Restorative Conversations',
        description: 'When conflict arises, use restorative questions: "What happened? How were you affected? What do you need? How can we make this right?" This builds accountability and empathy — and repairs relationships rather than just issuing consequences.',
        tags: ['Behaviour', 'Restorative Practice'],
      },
      {
        id: 'wc-3',
        title: 'Celebrate Effort, Not Just Achievement',
        description: 'Publicly acknowledge effort, persistence, and growth — not only top results. A verbal shout-out, a note home, or a class celebration board builds confidence and a growth mindset across all ability levels.',
        tags: ['Motivation', 'Growth Mindset'],
      },
      {
        id: 'wc-4',
        title: 'End-of-Week Gratitude Practice',
        description: 'Close Friday with a "3 Good Things" activity — each student (and teacher!) shares three positives from the week. This simple ritual builds a culture of appreciation, helps students notice good moments, and ends the week on a high.',
        tags: ['Positivity', 'Community'],
      },
    ],
  },
]
