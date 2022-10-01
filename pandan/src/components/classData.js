const cyberClassNumbers = ["1350", "1351", "3102", "3380", "4103", "4330", "4101", "2259", "3304", 
                            "3501", "4402", "4501", "1550", "1552", "2090", "2262", "2362", "4360", 
                            "4362", "4562", "3200", "3302", "1001", "2000"];

const seClassNumbers = ["1350", "1351", "3102", "3304", "3380", "4402", "4330", "4332", "2259", 
                        "3501", "4101", "4103", "4351", "1550", "1552", "2090", "2262", "3302", 
                        "4103", "1001", "2000"];

const cscCourses = [
                    ["CSC 1350", 4, "Computer Science I for Majors", "3 hrs. lecture; 3 hrs. lab. Fundamentals of algorithm development, program design and structured programming using an object-oriented language.", null, "Credit or registration required in MATH 1550"],
                    [1351, 4, "Computer Science II for Majors", "3 hrs. lecture; 3 hrs. lab. Develops solutions to problems using an object-oriented approach and emphasizes the concepts of recursion; dynamic memory; data structures (lists, stacks, queues, trees); exception handling.", "Prerequisite of CSC 1350", "Credit or registration required in MATH 1550"],
                    [2259, 3, "Discrete Structures", "Set algebra including mappings and relations; algebraic structures including semigroups and groups; elements of the theory of directed and undirected graphs; Boolean algebra and propositional logic; these structures applied to various areas of computer science.", null, "Credit or registration required in CSC 1254 or CSC 1351 and MATH 1552"],
                    [2262, 3, "Numerical Methods", "Computer- oriented methods for solving numerical problems in science and engineering; numerical solutions to systems of simultaneous linear equations, nonlinear algebraic equations (root solving), differentiation and integration, ordinary differential equations, interpolation and curve fitting.", "Prerequisite of CSC 1254 or CSC 1351", "Credit or registration required in MATH 2090"],
                    [2362, 3, "Introduction to Cybersecurity and Cyber Defense", "Broad overview and basic principles of cybersecurity theory and practice: threats, vulnerabilities, and mitigation strategies.", "Prerequisite of CSC 1350 or CSC 1253", null],
                    [3102, 3, "Advanced Data Structures and Algorithm Analysis", "Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques.", "Prerequisite of CSC 1254 or CSC 1351", "Credit or registration required in CSC 2259 or EE 2740"],
                    [3200, 1, "Ethics in Computing", "Introduction to ethics theory, ethical decision-making as it relates to the computing professional, licensing, intellectual property, conflicts of interest, freedom of information and privacy, security.", "Prerequisite of CSC 3102; ENGL 1005 or ENGL 2000 or HNRS 2000"],
                    [3304, 3, "Introduction to Systems Programming", "Introduction to systems programming, using the C programming language: OS command and shell basics, process creation and control, system calls, signals, concurrency and virtualization.", null, "Credit or registration required in CSC 3102"],
                    [3380, 3, "Object Oriented Design", "Advanced object oriented software development; emphasis on the use of the unified modeling language as a design tool.", "Prerequisite of CSC 1254 or CSC 1351", null],
                    [3501, 3, "Computer Organization and Design", "Computer arithmetic, design of high-speed adders and multipliers, CPU concepts, instruction fetching and decoding, hardwired control, microprogramming control, main memory, I/O organization, assembly language programming techniques, CPU instruction sets and addressing modes.", "Prerequisite of CSC 2259", null],                        
                    [4101, 3, "Programming Languages", "Principles of programming language design; specification of syntax and semantics; underlying implementation of block structured languages; dynamic memory allocation for strings, lists and arrays; imperative versus applicative programming; logic programming; modern programming languages.", "Prerequisite of CSC 3102", null],
                    [4103, 3, "Operating Systems", "Design techniques, process management, processor scheduling; deadlocks, memory management, secondary memory management, file management; I/O systems, Unix systems.", "Prerequisite of CSC 3102", null],
                    [4330, 3, "Software Systems Development", "Software requirements analysis; design representation, programming methodologies; verification, validation, maintenance and software planning.", "Prerequisite of CSC 3102 and CSC 3380", null],
                    [4351, 3, "Compiler Construction", "Program language structures, translation, loading, execution and storage allocation; compilation of simple expressions and statements; organization of compiler including compile-time and run-time symbol tables, lexical scan, syntax scan, object code generation, error diagnostics, object code optimization techniques and overall design; use of compiler writing languages and bootstrapping.", "Prerequisite of CSC 4101", null],
                    [4360, 3, "Malware Analysis and Reverse Engineering", "Legal and ethical issues; categorization of malware; static methods for malware analysis and reverse engineering, including disassembly and decompilation; dynamic analysis strategies including debugging, sandboxes, and binary instrumentation circumvention of obfuscation and anti-analysis techniques.", "Prerequisite of CSC 4103", null],
                    [4362, 3, "Software Vulnerabilities and Exploitation", "Advanced topics in software vulnerabilities, software exploitation techniques, remote vs. local exploits, user-space and kernel-space exploit mitigation strategies.", "Prerequisite of CSC 4103", null],
                    [4402, 3, "Database Systems", "Fundamentals of the relational data model; the SQL query language; E-R modeling and database design theory; storage structures and query optimization; transaction processing and concurrency control.", "Prerequisite of CSC 3102", null],
                    [4501, 3, "Computer Networks", "Introduction to local, metropolitan and wide area networks using the standard OSI reference model as a framework; introduction to the Internet protocol suite and network tools and programming; discussion of various networking technologies.", "Prerequisite of CSC 3102", null],
                    [4562, 3, "Mobile Security and Applied Cryptography", "Principles, techniques and methods for securing mobile systems; cryptographic tools and protocols for ensuring information protection.", "Prerequisite of CSC 4103 and MATH 2090", null],
        
                            
                    [2463, 3, "Programming Digital Media", null, null, null],
                    [2533, 3, "Introduction to Engineering Computation", null, null, null ],
                    [2610, 3, "Cloud Fundamentals & Web Programming", null, null, null],
                    [2730, 3, "Data Science and Analytics", null, null, null],
                    [3730, 3, "Machine Learning and Data Analytics", null, null, null],
                    [4243, 3, "Interface Design and Technology", null, null, null],
                    [4263, 3, "Video Game Design", null, null, null],                            
                    [4332, 3, "Software Quality & Testing", null ,null, null],
                    [4343, 3, "Applied Deep Learning", null, null, null],
                    [4356, 3, "Interactive Computer Graphics", null, null, null],
                    [4357, 3, "Applied Computer Graphics", null, null, null],
                    [4370, 3, "Software Modeling Techniques", null, null, null],
                    [4444, 3, "Artificial Intelligence", null, null, null],
                    [4512, 3, "Optimization: Modeling Approaches, Algorithms and Applications", null, null, null],
                    [4585, 3, "Multicore Programming", null, null, null],
                    [4610, 3, "Cloud Systems and Virtualization", null, null, null],
                    [4740, 3, "Big Data Technologies", null, null, null],
                    [4890, 3, "Introduction to Theory of Computation", null, null, null],
        
                ];

export function getcscCourses() {
    return cscCourses;
}
const cyb = [
    [2021, [[["CSC 1350", 4], ["MATH 1550", 5], ["ENGL 1001", null], ["BIO", null], [null, null], [null,null] ],
    [5],
    [6],
    [5],
    [5],
    [5],
    [5],
    [5]]],
    [2022]
    ];
    export function getcyb() {
        return cyb;
    }