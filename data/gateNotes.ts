export interface GateNote {
  id: string;
  subject: string;
  description: string;
  topics: string[];
  icon: string;
  pdfPath: string;
}

export const gateNotes: GateNote[] = [
  {
    id: 'discrete-mathematics',
    subject: 'Discrete Mathematics',
    description: 'Mathematical structures, logic, graph theory, combinatorics',
    topics: ['Sets', 'Relations', 'Functions', 'Graphs', 'Combinatorics', 'Logic'],
    icon: '📐',
    pdfPath: '/gate-notes/discrete-mathematics.pdf',
  },
  {
    id: 'engineering-mathematics',
    subject: 'Engineering Mathematics',
    description: 'Linear algebra, calculus, probability and statistics',
    topics: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics'],
    icon: '🔢',
    pdfPath: '/gate-notes/engineering-mathematics.pdf',
  },
  {
    id: 'digital-logic',
    subject: 'Digital Logic',
    description: 'Boolean algebra, combinational and sequential circuits',
    topics: ['Boolean Algebra', 'Logic Gates', 'Circuits', 'Sequential Logic'],
    icon: '💾',
    pdfPath: '/gate-notes/digital-logic.pdf',
  },
  {
    id: 'computer-architecture',
    subject: 'Computer Architecture',
    description: 'Computer organization, memory hierarchy, pipelining, I/O',
    topics: ['CPU Design', 'Memory', 'Pipelining', 'Cache', 'I/O Systems'],
    icon: '🖥️',
    pdfPath: '/gate-notes/computer-architecture.pdf',
  },
  {
    id: 'data-structures-algorithms',
    subject: 'Data Structures & Algorithms',
    description: 'Arrays, trees, graphs, sorting, searching, dynamic programming',
    topics: ['Arrays', 'Trees', 'Graphs', 'Sorting', 'DP', 'Complexity'],
    icon: '🌳',
    pdfPath: '/gate-notes/data-structures-algorithms.pdf',
  },
  {
    id: 'theory-of-computation',
    subject: 'Theory of Computation',
    description: 'Automata, regular languages, context-free grammars, Turing machines',
    topics: ['Automata', 'Regular Languages', 'CFG', 'Turing Machines'],
    icon: '🤖',
    pdfPath: '/gate-notes/theory-of-computation.pdf',
  },
  {
    id: 'compiler-design',
    subject: 'Compiler Design',
    description: 'Lexical analysis, parsing, syntax-directed translation, code generation',
    topics: ['Lexical Analysis', 'Parsing', 'Syntax', 'Code Generation'],
    icon: '⚙️',
    pdfPath: '/gate-notes/compiler-design.pdf',
  },
  {
    id: 'operating-system',
    subject: 'Operating System',
    description: 'Process management, memory management, file systems, deadlocks',
    topics: ['Processes', 'Threads', 'Memory', 'File Systems', 'Deadlocks'],
    icon: '💻',
    pdfPath: '/gate-notes/operating-system.pdf',
  },
  {
    id: 'database-systems',
    subject: 'Database Systems',
    description: 'ER model, relational algebra, SQL, normalization, transactions',
    topics: ['ER Model', 'SQL', 'Normalization', 'Transactions', 'Indexing'],
    icon: '🗄️',
    pdfPath: '/gate-notes/database-systems.pdf',
  },
  {
    id: 'computer-networks',
    subject: 'Computer Networks',
    description: 'OSI model, TCP/IP, routing protocols, network security',
    topics: ['OSI Model', 'TCP/IP', 'Routing', 'Security', 'Protocols'],
    icon: '🌐',
    pdfPath: '/gate-notes/computer-networks.pdf',
  },
];
