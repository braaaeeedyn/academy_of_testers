import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

// AP science FRQs are scored point-by-point per part. Prompts use plain-text notation; describe any
// graph or diagram in words.

export const AP_BIOLOGY_FRQ: SubjectFrqSet = {
  subjectName: 'AP Biology',
  note: 'Scored point-by-point like the official AP Biology FRQ. Emphasize claim–evidence–reasoning and experimental design.',
  prompts: [
    {
      id: 'bio-frq-enzyme',
      essayType: 'Long FRQ',
      title: 'Enzyme activity and temperature',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions:
        'Researchers measure the rate of an enzyme-catalyzed reaction at temperatures from 10°C to'
        + ' 60°C and find the rate peaks at 37°C, then falls sharply. Answer all parts.',
      rubric: pointBased([
        { name: '(a) Describe', maxPoints: 1, criteria: 'Correctly describes the relationship between temperature and reaction rate (rises to an optimum near 37°C, then falls).' },
        { name: '(b) Explain', maxPoints: 2, criteria: '1 point for explaining increased rate with temperature (more collisions/kinetic energy); 1 point for explaining the sharp drop (denaturation of the enzyme’s active site).' },
        { name: '(c) Predict', maxPoints: 1, criteria: 'Predicts an outcome for an enzyme from an organism adapted to high temperature, with reasoning.' },
        { name: '(d) Design', maxPoints: 2, criteria: '1 point for identifying a valid control/variable; 1 point for a testable prediction for a follow-up experiment (e.g. varying pH).' },
      ]),
    },
  ],
}

export const AP_CHEMISTRY_FRQ: SubjectFrqSet = {
  subjectName: 'AP Chemistry',
  note: 'Scored point-by-point like the official AP Chemistry FRQ. Show calculations with units and correct significant figures.',
  prompts: [
    {
      id: 'chem-frq-titration',
      essayType: 'Long FRQ',
      title: 'Acid–base titration',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions:
        'A 25.0 mL sample of HCl is titrated with 0.100 M NaOH, reaching the equivalence point at'
        + ' 30.0 mL. Answer all parts, showing your work with units.',
      rubric: pointBased([
        { name: '(a) Moles of base', maxPoints: 1, criteria: 'Correctly computes moles NaOH = 0.100 M × 0.0300 L = 3.00×10⁻³ mol.' },
        { name: '(b) Concentration of acid', maxPoints: 2, criteria: '1 point for the 1:1 stoichiometry (mol HCl = mol NaOH); 1 point for [HCl] = 3.00×10⁻³ mol / 0.0250 L = 0.120 M.' },
        { name: '(c) pH at equivalence', maxPoints: 1, criteria: 'States that the equivalence point of a strong acid–strong base titration has pH ≈ 7, with reasoning.' },
        { name: '(d) Indicator', maxPoints: 1, criteria: 'Selects an indicator whose range brackets the equivalence pH and justifies the choice.' },
      ]),
    },
  ],
}

export const AP_ENVIRONMENTAL_SCIENCE_FRQ: SubjectFrqSet = {
  subjectName: 'AP Environmental Science',
  note: 'Scored point-by-point like the official APES FRQ. Support claims with data and show calculations with units.',
  prompts: [
    {
      id: 'apes-frq-energy',
      essayType: 'Long FRQ',
      title: 'Energy and a coal-fired plant',
      year: 'Sample prompt',
      suggestedMinutes: 22,
      directions:
        'A town is considering replacing a coal-fired power plant with a solar installation. Answer'
        + ' all parts, showing any calculations with units.',
      rubric: pointBased([
        { name: '(a) Identify', maxPoints: 1, criteria: 'Identifies one air pollutant released by coal combustion and its environmental effect.' },
        { name: '(b) Calculate', maxPoints: 2, criteria: '1 point for correct setup; 1 point for a correct calculation (e.g. annual energy from stated capacity and hours, with units).' },
        { name: '(c) Explain trade-off', maxPoints: 1, criteria: 'Explains one drawback or limitation of the solar alternative (intermittency, land use, materials).' },
        { name: '(d) Propose', maxPoints: 1, criteria: 'Proposes one feasible mitigation or policy and justifies how it reduces environmental impact.' },
      ]),
    },
  ],
}

export const AP_PHYSICS_1_FRQ: SubjectFrqSet = {
  subjectName: 'AP Physics 1',
  note: 'Scored point-by-point like the official AP Physics 1 FRQ. Include reasoning; describe graphs and free-body diagrams in words.',
  prompts: [
    {
      id: 'phys1-frq-incline',
      essayType: 'Long FRQ',
      title: 'Block on an incline',
      year: 'Sample prompt',
      suggestedMinutes: 18,
      directions:
        'A 2.0 kg block is released from rest on a frictionless incline angled at 30° above the'
        + ' horizontal. Answer all parts (use g = 9.8 m/s²).',
      rubric: pointBased([
        { name: '(a) Free-body diagram', maxPoints: 1, criteria: 'Describes a correct free-body diagram (gravity down, normal force perpendicular to the surface).' },
        { name: '(b) Acceleration', maxPoints: 2, criteria: '1 point for a = g·sin(θ); 1 point for the correct value a ≈ 4.9 m/s².' },
        { name: '(c) Speed', maxPoints: 1, criteria: 'Correctly finds the speed after a given distance using kinematics or energy conservation.' },
        { name: '(d) Friction reasoning', maxPoints: 1, criteria: 'Explains how adding friction would change the acceleration, with correct direction.' },
      ]),
    },
  ],
}

export const AP_PHYSICS_2_FRQ: SubjectFrqSet = {
  subjectName: 'AP Physics 2',
  note: 'Scored point-by-point like the official AP Physics 2 FRQ. Include reasoning and units.',
  prompts: [
    {
      id: 'phys2-frq-gas',
      essayType: 'Long FRQ',
      title: 'Ideal gas in a cylinder',
      year: 'Sample prompt',
      suggestedMinutes: 18,
      directions:
        'A fixed quantity of ideal gas in a sealed cylinder is heated at constant volume. Answer all'
        + ' parts with reasoning.',
      rubric: pointBased([
        { name: '(a) Pressure change', maxPoints: 1, criteria: 'States that at constant volume, pressure increases as temperature increases (Gay-Lussac / ideal gas law).' },
        { name: '(b) Microscopic explanation', maxPoints: 2, criteria: '1 point for relating temperature to average kinetic energy of molecules; 1 point for connecting more/faster collisions to higher pressure.' },
        { name: '(c) Calculation', maxPoints: 1, criteria: 'Uses PV = nRT (or the ratio form) to correctly compute a requested quantity with units.' },
        { name: '(d) First law', maxPoints: 1, criteria: 'Applies the first law of thermodynamics (ΔU = Q − W) correctly for the constant-volume process (W = 0).' },
      ]),
    },
  ],
}

export const AP_PHYSICS_C_EM_FRQ: SubjectFrqSet = {
  subjectName: 'AP Physics C: E&M',
  note: 'Scored point-by-point like the official AP Physics C: E&M FRQ. Calculus-based reasoning is expected.',
  prompts: [
    {
      id: 'physcem-frq-capacitor',
      essayType: 'Long FRQ',
      title: 'Parallel-plate capacitor',
      year: 'Sample prompt',
      suggestedMinutes: 18,
      directions:
        'A parallel-plate capacitor with plate area A and separation d is connected to a battery of'
        + ' voltage V. Answer all parts with reasoning.',
      rubric: pointBased([
        { name: '(a) Capacitance', maxPoints: 1, criteria: 'States C = ε₀A/d.' },
        { name: '(b) Field & charge', maxPoints: 2, criteria: '1 point for E = V/d; 1 point for the stored charge Q = CV with correct substitution.' },
        { name: '(c) Energy', maxPoints: 1, criteria: 'Correctly gives the stored energy U = ½CV² with reasoning.' },
        { name: '(d) Dielectric', maxPoints: 1, criteria: 'Explains how inserting a dielectric (while connected to the battery) changes capacitance and stored charge, with correct direction.' },
      ]),
    },
  ],
}

export const AP_PHYSICS_C_MECH_FRQ: SubjectFrqSet = {
  subjectName: 'AP Physics C: Mechanics',
  note: 'Scored point-by-point like the official AP Physics C: Mechanics FRQ. Calculus-based reasoning is expected.',
  prompts: [
    {
      id: 'physcmech-frq-projectile',
      essayType: 'Long FRQ',
      title: 'Projectile with a velocity function',
      year: 'Sample prompt',
      suggestedMinutes: 18,
      directions:
        'A particle moves along the x-axis with velocity v(t) = 6t − 3t² (m/s) for t ≥ 0. Answer all'
        + ' parts, showing your calculus.',
      rubric: pointBased([
        { name: '(a) Acceleration', maxPoints: 1, criteria: 'Differentiates to get a(t) = 6 − 6t and evaluates correctly if asked.' },
        { name: '(b) Turning point', maxPoints: 2, criteria: '1 point for setting v(t)=0; 1 point for the correct time t = 2 s where the particle changes direction.' },
        { name: '(c) Displacement', maxPoints: 2, criteria: '1 point for setting up the integral of v(t); 1 point for the correct displacement over a stated interval.' },
        { name: '(d) Reasoning', maxPoints: 1, criteria: 'Correctly distinguishes displacement from total distance traveled, given the direction change.' },
      ]),
    },
  ],
}
