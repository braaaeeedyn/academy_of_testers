import type { SubjectReference } from './types'

export const AP_BIOLOGY_REFERENCE: SubjectReference = {
  subjectName: 'AP Biology',
  note: 'Key terms and exam breakdown for AP Biology. A formula sheet (with statistics) is provided on the exam.',
  glossary: [
    { term: 'Allele', definition: 'One of two or more alternative forms of a gene at a given locus.' },
    { term: 'Homeostasis', definition: 'The maintenance of a stable internal environment despite external change.' },
    { term: 'ATP', definition: 'Adenosine triphosphate — the cell’s main energy-carrying molecule.' },
    { term: 'Natural selection', definition: 'Differential survival and reproduction of individuals based on heritable traits.' },
    { term: 'Feedback (negative)', definition: 'A response that counteracts a change, returning a system toward its set point.' },
    { term: 'Gene expression', definition: 'The process by which information in a gene produces a functional product (transcription → translation).' },
    { term: 'Osmosis', definition: 'Diffusion of water across a selectively permeable membrane toward higher solute concentration.' },
    { term: 'Phenotype', definition: 'The observable characteristics of an organism, arising from genotype and environment.' },
  ],
  frequentlyTested: [
    { topic: 'Cellular energetics', weight: '12–16%', note: 'Enzymes, respiration, and photosynthesis.' },
    { topic: 'Heredity & gene expression', weight: '25–35%', note: 'Meiosis, Mendelian genetics, and regulation — the largest band.' },
    { topic: 'Natural selection', weight: '13–20%', note: 'Evidence for evolution, Hardy–Weinberg, and speciation.' },
    { topic: 'Cell structure & function', weight: '10–13%', note: 'Membranes, transport, and compartmentalization.' },
  ],
}

export const AP_CHEMISTRY_REFERENCE: SubjectReference = {
  subjectName: 'AP Chemistry',
  note: 'Core relationships for AP Chemistry. A formula sheet and periodic table are provided on the exam.',
  formulaGroups: [
    {
      title: 'Gases & solutions',
      items: [
        { name: 'Ideal gas law', latex: 'PV = nRT' },
        { name: 'Molarity', latex: 'M = \\frac{\\text{moles solute}}{\\text{liters solution}}' },
        { name: 'Dilution', latex: 'M_1 V_1 = M_2 V_2' },
      ],
    },
    {
      title: 'Equilibrium & thermo',
      items: [
        { name: 'pH', latex: '\\text{pH} = -\\log[\\text{H}^+]' },
        { name: 'Gibbs free energy', latex: '\\Delta G = \\Delta H - T\\Delta S' },
        { name: 'Equilibrium constant', latex: 'K = \\frac{[\\text{products}]}{[\\text{reactants}]}' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Atomic structure & periodicity', weight: '7–9%', note: 'Electron configuration and periodic trends.' },
    { topic: 'Equilibrium', weight: '7–9%', note: 'Le Châtelier, K, and reaction quotients.' },
    { topic: 'Acids & bases', weight: '11–15%', note: 'pH, titrations, and buffers — heavily tested.' },
    { topic: 'Thermodynamics', weight: '7–9%', note: 'Enthalpy, entropy, and free energy.' },
  ],
}

export const AP_ENVIRONMENTAL_SCIENCE_REFERENCE: SubjectReference = {
  subjectName: 'AP Environmental Science',
  note: 'Key terms and exam breakdown for AP Environmental Science.',
  glossary: [
    { term: 'Biodiversity', definition: 'The variety of life in an area — genetic, species, and ecosystem diversity.' },
    { term: 'Carrying capacity', definition: 'The maximum population an environment can sustain given its resources.' },
    { term: 'Eutrophication', definition: 'Nutrient over-enrichment of water causing algal blooms and oxygen depletion.' },
    { term: 'Keystone species', definition: 'A species with a disproportionately large effect on its ecosystem.' },
    { term: 'Externality', definition: 'A cost or benefit of an activity borne by parties who did not choose it.' },
    { term: 'Tragedy of the commons', definition: 'Overuse of a shared resource when individuals act in self-interest.' },
    { term: 'Primary succession', definition: 'Ecological development on newly exposed land with no prior soil.' },
  ],
  frequentlyTested: [
    { topic: 'Populations', weight: '10–15%', note: 'Growth models, carrying capacity, and demographics.' },
    { topic: 'Energy resources', weight: '10–15%', note: 'Fossil fuels, renewables, and efficiency calculations.' },
    { topic: 'Pollution', weight: '25–30%', note: 'Air, water, and waste — the largest tested band.' },
    { topic: 'Global change', weight: '15–20%', note: 'Climate change, ozone, and loss of biodiversity.' },
  ],
}

export const AP_PHYSICS_1_REFERENCE: SubjectReference = {
  subjectName: 'AP Physics 1',
  note: 'Core mechanics relationships for AP Physics 1. A formula sheet is provided on the exam.',
  formulaGroups: [
    {
      title: 'Kinematics',
      items: [
        { name: 'Velocity', latex: 'v = v_0 + at' },
        { name: 'Position', latex: 'x = x_0 + v_0 t + \\tfrac{1}{2}at^2' },
        { name: 'Velocity²', latex: 'v^2 = v_0^2 + 2a(x - x_0)' },
      ],
    },
    {
      title: 'Forces & energy',
      items: [
        { name: "Newton's 2nd law", latex: 'F_{net} = ma' },
        { name: 'Kinetic energy', latex: 'KE = \\tfrac{1}{2}mv^2' },
        { name: 'Momentum', latex: 'p = mv' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Kinematics & dynamics', weight: '~40%', note: 'Motion, forces, and Newton’s laws — the core of the course.' },
    { topic: 'Energy & momentum', weight: '~30%', note: 'Work–energy theorem and conservation laws.' },
    { topic: 'Rotation', weight: '~15%', note: 'Torque, rotational kinematics, and angular momentum.' },
  ],
}

export const AP_PHYSICS_2_REFERENCE: SubjectReference = {
  subjectName: 'AP Physics 2',
  note: 'Core relationships for AP Physics 2 (fluids, thermo, E&M, optics, modern).',
  formulaGroups: [
    {
      title: 'Fluids & thermo',
      items: [
        { name: 'Pressure', latex: 'P = \\frac{F}{A}' },
        { name: 'Ideal gas law', latex: 'PV = nRT' },
        { name: 'First law', latex: '\\Delta U = Q - W' },
      ],
    },
    {
      title: 'Electricity',
      items: [
        { name: "Coulomb's law", latex: 'F = k\\frac{q_1 q_2}{r^2}' },
        { name: "Ohm's law", latex: 'V = IR' },
        { name: 'Electric power', latex: 'P = IV' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Electrostatics & circuits', weight: '~35%', note: 'Fields, potential, and DC circuits.' },
    { topic: 'Fluids & thermodynamics', weight: '~25%', note: 'Pressure, buoyancy, and gas laws.' },
    { topic: 'Optics & modern', weight: '~20%', note: 'Reflection, refraction, and quantum/atomic physics.' },
  ],
}

export const AP_PHYSICS_C_EM_REFERENCE: SubjectReference = {
  subjectName: 'AP Physics C: E&M',
  note: 'Calculus-based electricity and magnetism. A formula sheet is provided on the exam.',
  formulaGroups: [
    {
      title: 'Fields & potential',
      items: [
        { name: "Gauss's law", latex: '\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0}' },
        { name: 'Electric field', latex: 'E = k\\frac{q}{r^2}' },
        { name: 'Capacitance', latex: 'C = \\frac{Q}{V}' },
      ],
    },
    {
      title: 'Circuits & magnetism',
      items: [
        { name: "Faraday's law", latex: '\\varepsilon = -\\frac{d\\Phi_B}{dt}' },
        { name: "Ampère's law", latex: '\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enc}' },
        { name: 'RC charging', latex: 'q(t) = Q(1 - e^{-t/RC})' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Electrostatics', weight: '~30%', note: 'Coulomb’s law, fields, and Gauss’s law.' },
    { topic: 'Circuits & capacitance', weight: '~25%', note: 'RC circuits and capacitors.' },
    { topic: 'Magnetism & induction', weight: '~25%', note: 'Ampère’s and Faraday’s laws.' },
  ],
}

export const AP_PHYSICS_C_MECH_REFERENCE: SubjectReference = {
  subjectName: 'AP Physics C: Mechanics',
  note: 'Calculus-based mechanics. A formula sheet is provided on the exam.',
  formulaGroups: [
    {
      title: 'Kinematics & dynamics',
      items: [
        { name: 'Velocity (calculus)', latex: 'v = \\frac{dx}{dt}, \\quad a = \\frac{dv}{dt}' },
        { name: "Newton's 2nd law", latex: '\\vec{F}_{net} = m\\vec{a}' },
        { name: 'Impulse–momentum', latex: 'J = \\int F\\,dt = \\Delta p' },
      ],
    },
    {
      title: 'Energy & rotation',
      items: [
        { name: 'Work', latex: 'W = \\int \\vec{F}\\cdot d\\vec{r}' },
        { name: 'Rotational 2nd law', latex: '\\tau = I\\alpha' },
        { name: 'Angular momentum', latex: 'L = I\\omega' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Kinematics & Newton’s laws', weight: '~35%', note: 'Motion and forces with calculus.' },
    { topic: 'Work, energy, power', weight: '~20%', note: 'Work–energy theorem and conservation.' },
    { topic: 'Rotation & oscillations', weight: '~25%', note: 'Torque, moment of inertia, and simple harmonic motion.' },
  ],
}
