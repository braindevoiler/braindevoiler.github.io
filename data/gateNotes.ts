export interface GateNote {
  id: string;
  subject: string;
  description: string;
  topics: string[];
  icon: string;
  notes: {
    handwritten?: string;
    digitized?: string;
  };
}

export const gateNotes: GateNote[] = [
  {
    id: 'discrete-mathematics',
    subject: 'Discrete Mathematics',
    description: 'Mathematical structures, logic, graph theory, combinatorics',
    topics: ['Sets', 'Relations', 'Functions', 'Graphs', 'Combinatorics', 'Logic'],
    icon: '📐',
    notes: {
      handwritten: '/gate-notes/discrete-mathematics-handwritten.pdf',
      digitized: '/gate-notes/discrete-mathematics-digitized.pdf',
    },
  },
  {
    id: 'engineering-mathematics',
    subject: 'Engineering Mathematics',
    description: 'Linear algebra, calculus, probability and statistics',
    topics: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics'],
    icon: '🔢',
    notes: {
      handwritten: '/gate-notes/engineering-mathematics-handwritten.pdf',
      digitized: '/gate-notes/engineering-mathematics-digitized.pdf',
    },
  },
  {
    id: 'digital-logic',
    subject: 'Digital Logic',
    description: 'Boolean algebra, combinational and sequential circuits',
    topics: ['Boolean Algebra', 'Logic Gates', 'Circuits', 'Sequential Logic'],
    icon: '💾',
    notes: {
      handwritten: '/gate-notes/digital-logic-handwritten.pdf',
      digitized: '/gate-notes/digital-logic-digitized.pdf',
    },
  },
  {
    id: 'computer-architecture',
    subject: 'Computer Architecture',
    description: 'Computer organization, memory hierarchy, pipelining, I/O',
    topics: ['CPU Design', 'Memory', 'Pipelining', 'Cache', 'I/O Systems'],
    icon: '🖥️',
    notes: {
      handwritten: '/gate-notes/computer-architecture-handwritten.pdf',
      digitized: '/gate-notes/computer-architecture-digitized.pdf',
    },
  },
  {
    id: 'data-structures-algorithms',
    subject: 'Data Structures & Algorithms',
    description: 'Arrays, trees, graphs, sorting, searching, dynamic programming',
    topics: ['Arrays', 'Trees', 'Graphs', 'Sorting', 'DP', 'Complexity'],
    icon: '🌳',
    notes: {
      handwritten: '/gate-notes/data-structures-algorithms-handwritten.pdf',
      digitized: '/gate-notes/data-structures-algorithms-digitized.pdf',
    },
  },
  {
    id: 'theory-of-computation',
    subject: 'Theory of Computation',
    description: 'Automata, regular languages, context-free grammars, Turing machines',
    topics: ['Automata', 'Regular Languages', 'CFG', 'Turing Machines'],
    icon: '🤖',
    notes: {
      handwritten: '/gate-notes/theory-of-computation-handwritten.pdf',
      digitized: '/gate-notes/theory-of-computation-digitized.pdf',
    },
  },
  {
    id: 'compiler-design',
    subject: 'Compiler Design',
    description: 'Lexical analysis, parsing, syntax-directed translation, code generation',
    topics: ['Lexical Analysis', 'Parsing', 'Syntax', 'Code Generation'],
    icon: '⚙️',
    notes: {
      handwritten: '/gate-notes/compiler-design-handwritten.pdf',
      digitized: '/gate-notes/compiler-design-digitized.pdf',
    },
  },
  {
    id: 'operating-system',
    subject: 'Operating System',
    description: 'Process management, memory management, file systems, deadlocks',
    topics: ['Processes', 'Threads', 'Memory', 'File Systems', 'Deadlocks'],
    icon: '💻',
    notes: {
      handwritten: '/gate-notes/operating-system-handwritten.pdf',
      digitized: '/gate-notes/operating-system-digitized.pdf',
    },
  },
  {
    id: 'database-systems',
    subject: 'Database Systems',
    description: 'ER model, relational algebra, SQL, normalization, transactions',
    topics: ['ER Model', 'SQL', 'Normalization', 'Transactions', 'Indexing'],
    icon: '🗄️',
    notes: {
      handwritten: '/gate-notes/database-systems-handwritten.pdf',
      digitized: '/gate-notes/database-systems-digitized.pdf',
    },
  },
  {
    id: 'computer-networks',
    subject: 'Computer Networks',
    description: 'OSI model, TCP/IP, routing protocols, network security',
    topics: ['OSI Model', 'TCP/IP', 'Routing', 'Security', 'Protocols'],
    icon: '🌐',
    notes: {
      handwritten: '/gate-notes/computer-networks-handwritten.pdf',
      digitized: '/gate-notes/computer-networks-digitized.pdf',
    },
  },
];
