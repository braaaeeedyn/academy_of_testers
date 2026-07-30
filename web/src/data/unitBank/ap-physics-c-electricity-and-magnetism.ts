import type { SubjectUnitBank } from './types'

export const BANK_AP_PHYSICS_C_ELECTRICITY_AND_MAGNETISM: SubjectUnitBank = {
  "label": "AP Physics C: Electricity and Magnetism",
  "slug": "ap-physics-c-electricity-and-magnetism",
  "units": [
    {
      "unitNumber": 1,
      "title": "Electrostatics",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "Coulomb's law gives the force between two point charges as",
          "options": [
            "\\(F = \\frac{kq_1 q_2}{r^2}\\)",
            "\\(F = kqr\\)",
            "\\(F = \\frac{kq}{r}\\)",
            "\\(F = qE r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Coulomb's law: \\(F = \\frac{kq_1 q_2}{r^2}\\), the electrostatic force between two point charges.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "The electric field due to a point charge is",
          "options": [
            "\\(E = \\frac{kq}{r^2}\\)",
            "\\(E = kqr\\)",
            "\\(E = \\frac{kq}{r}\\)",
            "\\(E = qF\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A point charge produces a field \\(E = \\frac{kq}{r^2}\\), directed radially.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "The force on a charge \\(q\\) in an electric field \\(E\\) is",
          "options": [
            "\\(F = qE\\)",
            "\\(F = q/E\\)",
            "\\(F = qE^2\\)",
            "\\(F = E/q\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The force on a charge in a field is \\(F = qE\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "Like charges ___ and opposite charges ___.",
          "options": [
            "repel; attract",
            "attract; repel",
            "both attract",
            "both repel"
          ],
          "correctAnswer": 0,
          "explanation": "Like charges repel each other while opposite charges attract.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "Electric field lines point",
          "options": [
            "away from positive charges and toward negative charges",
            "toward positive charges",
            "in random directions",
            "only downward"
          ],
          "correctAnswer": 0,
          "explanation": "By convention, field lines emanate from positive charges and terminate on negative charges.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "Gauss's law relates electric flux through a closed surface to",
          "options": [
            "the enclosed charge",
            "the surface area only",
            "the magnetic field",
            "the current"
          ],
          "correctAnswer": 0,
          "explanation": "Gauss's law: \\(\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0}\\), relating flux to enclosed charge.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "Electric potential energy between two point charges is",
          "options": [
            "\\(U = \\frac{kq_1 q_2}{r}\\)",
            "\\(U = \\frac{kq_1 q_2}{r^2}\\)",
            "\\(U = kqr\\)",
            "\\(U = qE\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The potential energy of two point charges is \\(U = \\frac{kq_1 q_2}{r}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "The electric potential (voltage) due to a point charge is",
          "options": [
            "\\(V = \\frac{kq}{r}\\)",
            "\\(V = \\frac{kq}{r^2}\\)",
            "\\(V = kqr\\)",
            "\\(V = qE\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A point charge creates potential \\(V = \\frac{kq}{r}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "The SI unit of electric charge is the",
          "options": [
            "coulomb",
            "volt",
            "ampere",
            "newton"
          ],
          "correctAnswer": 0,
          "explanation": "Electric charge is measured in coulombs (C).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Electric flux is defined as",
          "options": [
            "\\(\\Phi = \\int \\vec{E}\\cdot d\\vec{A}\\)",
            "\\(\\Phi = EA^2\\)",
            "\\(\\Phi = E/A\\)",
            "\\(\\Phi = qE\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Electric flux is \\(\\Phi = \\int \\vec{E}\\cdot d\\vec{A}\\), the field integrated over an area.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "If the distance between two point charges doubles, the electrostatic force between them",
          "options": [
            "decreases to one-fourth",
            "halves",
            "doubles",
            "quadruples"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(F \\propto 1/r^2\\), doubling r reduces the force to \\(1/4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "The relationship between electric field and potential is",
          "options": [
            "\\(E = -\\frac{dV}{dr}\\)",
            "\\(E = \\frac{dV}{dr}\\)",
            "\\(E = V r\\)",
            "\\(E = V/q\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The field is the negative gradient of potential: \\(E = -\\frac{dV}{dr}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "Gauss's law is most useful for finding the field when the charge distribution has",
          "options": [
            "high symmetry (spherical, cylindrical, planar)",
            "no symmetry",
            "only one charge",
            "random arrangement"
          ],
          "correctAnswer": 0,
          "explanation": "Gauss's law simplifies field calculations for symmetric distributions, allowing the flux integral to be evaluated easily.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "Inside a uniformly charged conducting sphere (in electrostatic equilibrium), the electric field is",
          "options": [
            "zero",
            "maximum",
            "radial and large",
            "constant nonzero"
          ],
          "correctAnswer": 0,
          "explanation": "By Gauss's law, the field inside a conductor in equilibrium is zero (no enclosed charge in the interior).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "The electric field from an infinite line of charge varies with distance as",
          "options": [
            "\\(1/r\\)",
            "\\(1/r^2\\)",
            "\\(r\\)",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "Using Gauss's law with a cylinder, an infinite line of charge gives \\(E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r} \\propto 1/r\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "The electric field from an infinite sheet of charge is",
          "options": [
            "uniform (independent of distance)",
            "\\(1/r\\)",
            "\\(1/r^2\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "An infinite charged sheet produces a uniform field \\(E = \\frac{\\sigma}{2\\varepsilon_0}\\), independent of distance.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "Two charges of \\(+2\\ \\mu\\text{C}\\) and \\(-2\\ \\mu\\text{C}\\) separated by a small distance form a",
          "options": [
            "dipole",
            "monopole",
            "conductor",
            "capacitor plate"
          ],
          "correctAnswer": 0,
          "explanation": "Two equal and opposite charges separated by a distance form an electric dipole.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "Work done moving a charge between two points equals",
          "options": [
            "\\(q\\Delta V\\)",
            "\\(qE\\)",
            "\\(q/V\\)",
            "\\(V/q\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The work done by an external agent moving charge q through a potential difference is \\(W = q\\Delta V\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "An equipotential surface is one where",
          "options": [
            "the potential is constant, so no work is done moving along it",
            "the field is zero",
            "charge accumulates",
            "the potential varies"
          ],
          "correctAnswer": 0,
          "explanation": "On an equipotential surface, V is constant, so no work is done moving a charge along it; the field is perpendicular to it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "The electric field is always ___ to equipotential surfaces.",
          "options": [
            "perpendicular",
            "parallel",
            "at 45°",
            "tangent"
          ],
          "correctAnswer": 0,
          "explanation": "The electric field points in the direction of steepest potential decrease, which is always perpendicular to equipotential surfaces.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "A charge \\(Q\\) is uniformly distributed throughout a nonconducting sphere of radius \\(R\\). Inside (\\(r < R\\)), the field is proportional to",
          "options": [
            "\\(r\\)",
            "\\(1/r^2\\)",
            "\\(1/r\\)",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "By Gauss's law, enclosed charge \\(\\propto r^3\\), so \\(E \\propto r^3/r^2 = r\\) inside a uniformly charged sphere.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "To find the potential at a point due to a continuous charge distribution, one",
          "options": [
            "integrates \\(dV = \\frac{k\\,dq}{r}\\) over the distribution",
            "adds the charges",
            "uses \\(F = qE\\)",
            "differentiates the field"
          ],
          "correctAnswer": 0,
          "explanation": "The potential is found by integrating contributions \\(dV = \\frac{k\\,dq}{r}\\) from each charge element over the distribution.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "The field just outside a charged conductor's surface is \\(E = \\sigma/\\varepsilon_0\\), while an infinite sheet gives \\(\\sigma/2\\varepsilon_0\\). The factor-of-2 difference arises because",
          "options": [
            "a conductor's charge resides on one surface with field only outside, while a sheet has field on both sides",
            "the conductor has more charge",
            "the sheet is thicker",
            "of measurement error"
          ],
          "correctAnswer": 0,
          "explanation": "A conductor's surface charge produces field only on the outside (zero inside), concentrating all flux there, unlike an isolated sheet with field on both sides.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "Two point charges \\(+q\\) and \\(+q\\) are separated by distance \\(d\\). At the midpoint, the electric field is",
          "options": [
            "zero",
            "maximum",
            "\\(kq/d^2\\)",
            "directed toward one charge"
          ],
          "correctAnswer": 0,
          "explanation": "At the midpoint, the two equal fields point in opposite directions and cancel, giving zero net field (though the potential is nonzero).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "A dipole with moment \\(p\\) in a uniform field \\(E\\) experiences",
          "options": [
            "a torque \\(\\tau = pE\\sin\\theta\\) but zero net force",
            "a net force but no torque",
            "neither",
            "a constant translation"
          ],
          "correctAnswer": 0,
          "explanation": "In a uniform field, the equal and opposite forces on a dipole produce zero net force but a torque \\(\\tau = pE\\sin\\theta\\) that tends to align it.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "The potential energy of a dipole in a uniform field is minimized when the dipole is",
          "options": [
            "aligned with the field",
            "perpendicular to the field",
            "anti-aligned with the field",
            "at 45°"
          ],
          "correctAnswer": 0,
          "explanation": "\\(U = -pE\\cos\\theta\\) is minimized (most negative) when \\(\\theta = 0\\), i.e., the dipole is aligned with the field.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "For a spherical shell of charge, the field at a point outside is the same as if",
          "options": [
            "all the charge were concentrated at the center",
            "the charge were spread out",
            "the field were zero",
            "the shell were a point at the surface"
          ],
          "correctAnswer": 0,
          "explanation": "By Gauss's law (and the shell theorem), outside a spherically symmetric shell the field is identical to that of a point charge at the center.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "The electric field can be derived from the potential by \\(E_x = -\\frac{\\partial V}{\\partial x}\\). This means the field points",
          "options": [
            "in the direction of decreasing potential",
            "toward higher potential",
            "along equipotentials",
            "randomly"
          ],
          "correctAnswer": 0,
          "explanation": "The negative gradient means the field points from high to low potential—the direction of steepest decrease in V.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A proton is released from rest in a uniform field. As it accelerates, it moves toward",
          "options": [
            "lower potential (in the direction of the field)",
            "higher potential",
            "perpendicular to the field",
            "a region of zero field"
          ],
          "correctAnswer": 0,
          "explanation": "A positive charge accelerates in the direction of the field, moving toward regions of lower potential, converting electric PE to kinetic energy.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "The flux through a closed surface enclosing no net charge is",
          "options": [
            "zero, even if fields pass through it",
            "always positive",
            "equal to the field",
            "infinite"
          ],
          "correctAnswer": 0,
          "explanation": "By Gauss's law, if the enclosed charge is zero, the net flux is zero—incoming and outgoing flux cancel even if fields pass through.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Conductors, Capacitors, Dielectrics",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "In electrostatic equilibrium, the electric field inside a conductor is",
          "options": [
            "zero",
            "maximum",
            "uniform and nonzero",
            "radial"
          ],
          "correctAnswer": 0,
          "explanation": "In a conductor at equilibrium, charges rearrange until the internal field is zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "Excess charge on an isolated conductor resides",
          "options": [
            "on its outer surface",
            "throughout its volume",
            "at its center",
            "only inside"
          ],
          "correctAnswer": 0,
          "explanation": "Excess charge on a conductor distributes entirely on the outer surface, since like charges repel and the interior field is zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "A capacitor stores",
          "options": [
            "electric charge and energy",
            "current",
            "magnetic energy only",
            "resistance"
          ],
          "correctAnswer": 0,
          "explanation": "A capacitor stores charge on its plates and energy in the electric field between them.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "Capacitance is defined as",
          "options": [
            "\\(C = Q/V\\)",
            "\\(C = QV\\)",
            "\\(C = V/Q\\)",
            "\\(C = Q/V^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Capacitance is the ratio of charge to voltage: \\(C = Q/V\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "The capacitance of a parallel-plate capacitor is",
          "options": [
            "\\(C = \\frac{\\varepsilon_0 A}{d}\\)",
            "\\(C = \\frac{\\varepsilon_0 d}{A}\\)",
            "\\(C = \\varepsilon_0 A d\\)",
            "\\(C = QV\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a parallel-plate capacitor, \\(C = \\frac{\\varepsilon_0 A}{d}\\) (area A, plate separation d).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "A dielectric inserted between capacitor plates",
          "options": [
            "increases the capacitance",
            "decreases the capacitance",
            "has no effect",
            "removes the charge"
          ],
          "correctAnswer": 0,
          "explanation": "A dielectric increases capacitance by a factor of the dielectric constant \\(\\kappa\\): \\(C = \\kappa C_0\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "The energy stored in a capacitor is",
          "options": [
            "\\(U = \\tfrac{1}{2}CV^2\\)",
            "\\(U = CV\\)",
            "\\(U = QV^2\\)",
            "\\(U = C/V\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The energy stored is \\(U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}QV = \\frac{Q^2}{2C}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "The SI unit of capacitance is the",
          "options": [
            "farad",
            "volt",
            "coulomb",
            "ohm"
          ],
          "correctAnswer": 0,
          "explanation": "Capacitance is measured in farads (F), where \\(1\\ \\text{F} = 1\\ \\text{C/V}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "The surface of a conductor in electrostatic equilibrium is an",
          "options": [
            "equipotential surface",
            "insulator",
            "source of current",
            "area of high field inside"
          ],
          "correctAnswer": 0,
          "explanation": "A conductor's surface is an equipotential; the field just outside is perpendicular to it.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "For capacitors in parallel, the total capacitance is",
          "options": [
            "the sum of the individual capacitances",
            "the reciprocal sum",
            "the product",
            "the smallest one"
          ],
          "correctAnswer": 0,
          "explanation": "Capacitors in parallel add directly: \\(C_{total} = C_1 + C_2 + \\dots\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "A parallel-plate capacitor has its plate separation doubled (charge held constant). The capacitance",
          "options": [
            "halves",
            "doubles",
            "stays the same",
            "quadruples"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(C = \\frac{\\varepsilon_0 A}{d}\\), doubling d halves the capacitance.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "For capacitors in series, the total capacitance is found from",
          "options": [
            "\\(\\frac{1}{C_{total}} = \\frac{1}{C_1} + \\frac{1}{C_2}\\)",
            "\\(C_{total} = C_1 + C_2\\)",
            "\\(C_{total} = C_1 C_2\\)",
            "\\(C_{total} = C_1 - C_2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Capacitors in series add reciprocally: \\(\\frac{1}{C_{total}} = \\sum \\frac{1}{C_i}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "A \\(2\\ \\mu\\text{F}\\) capacitor is charged to \\(10\\ \\text{V}\\). The charge stored is",
          "options": [
            "\\(20\\ \\mu\\text{C}\\)",
            "\\(5\\ \\mu\\text{C}\\)",
            "\\(2\\ \\mu\\text{C}\\)",
            "\\(100\\ \\mu\\text{C}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(Q = CV = (2\\ \\mu\\text{F})(10\\ \\text{V}) = 20\\ \\mu\\text{C}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "A charged capacitor (isolated, constant Q) has a dielectric inserted. The voltage across it",
          "options": [
            "decreases",
            "increases",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "With Q constant and C increased by the dielectric, \\(V = Q/C\\) decreases.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "Why does a conductor placed in an external field develop induced surface charges?",
          "options": [
            "Charges rearrange to cancel the field inside the conductor",
            "charges are created",
            "the conductor melts",
            "the field passes through unchanged"
          ],
          "correctAnswer": 0,
          "explanation": "Free charges in the conductor redistribute to the surface, creating an internal field that cancels the external one, keeping the interior field zero.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "The energy stored in a \\(4\\ \\mu\\text{F}\\) capacitor at \\(5\\ \\text{V}\\) is",
          "options": [
            "\\(50\\ \\mu\\text{J}\\)",
            "\\(20\\ \\mu\\text{J}\\)",
            "\\(100\\ \\mu\\text{J}\\)",
            "\\(10\\ \\mu\\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(4)(5)^2 = 50\\ \\mu\\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "The dielectric constant \\(\\kappa\\) of a material is always",
          "options": [
            "greater than or equal to 1",
            "less than 1",
            "exactly 1",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "The dielectric constant is \\(\\kappa \\geq 1\\); it increases capacitance relative to vacuum (\\(\\kappa = 1\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "For a hollow charged conductor, the electric field in the cavity (with no charge inside) is",
          "options": [
            "zero",
            "equal to the outside field",
            "radial",
            "large"
          ],
          "correctAnswer": 0,
          "explanation": "Inside a hollow conductor's cavity (no enclosed charge), the field is zero—the basis of electrostatic shielding.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "When a capacitor is connected to a battery (constant V) and a dielectric is inserted, the charge stored",
          "options": [
            "increases",
            "decreases",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "With V fixed by the battery and C increased by the dielectric, \\(Q = CV\\) increases.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "Charge tends to concentrate at",
          "options": [
            "sharp points on a conductor",
            "flat regions",
            "the interior",
            "regions of low curvature"
          ],
          "correctAnswer": 0,
          "explanation": "Surface charge density (and field) is greatest where a conductor's curvature is sharpest—the basis of lightning rods.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "Two capacitors, \\(3\\ \\mu\\text{F}\\) and \\(6\\ \\mu\\text{F}\\), are connected in series. The equivalent capacitance is",
          "options": [
            "\\(2\\ \\mu\\text{F}\\)",
            "\\(9\\ \\mu\\text{F}\\)",
            "\\(18\\ \\mu\\text{F}\\)",
            "\\(4.5\\ \\mu\\text{F}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{C} = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}\\), so \\(C = 2\\ \\mu\\text{F}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "An isolated charged capacitor has its plate separation increased. The energy stored",
          "options": [
            "increases (work is done pulling the plates apart)",
            "decreases",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "With Q fixed, \\(U = \\frac{Q^2}{2C}\\) and C decreases as d increases, so U increases—the work done separating the attracting plates is stored as energy.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "The energy density (energy per unit volume) in an electric field is",
          "options": [
            "\\(u = \\tfrac{1}{2}\\varepsilon_0 E^2\\)",
            "\\(u = \\varepsilon_0 E\\)",
            "\\(u = \\tfrac{1}{2}\\varepsilon_0 E\\)",
            "\\(u = E^2/\\varepsilon_0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The energy density stored in an electric field is \\(u = \\tfrac{1}{2}\\varepsilon_0 E^2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "A dielectric increases capacitance because it",
          "options": [
            "becomes polarized, reducing the net field and allowing more charge at a given voltage",
            "conducts current",
            "adds charge",
            "increases plate separation"
          ],
          "correctAnswer": 0,
          "explanation": "The dielectric polarizes, partially canceling the field between plates, so more charge can be stored at the same voltage—raising capacitance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "Faraday's ice-pail experiment and electrostatic shielding both demonstrate that",
          "options": [
            "the field inside a hollow conductor's cavity is zero",
            "conductors amplify fields",
            "charge accumulates inside",
            "fields pass through conductors"
          ],
          "correctAnswer": 0,
          "explanation": "Both illustrate that a hollow conductor shields its interior cavity, where the field is zero regardless of external charges—the principle of the Faraday cage.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "For a spherical capacitor (concentric shells of radii a and b), the capacitance is proportional to",
          "options": [
            "\\(\\frac{ab}{b - a}\\)",
            "\\(a + b\\)",
            "\\(b - a\\)",
            "\\(1/(ab)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A spherical capacitor has \\(C = 4\\pi\\varepsilon_0 \\frac{ab}{b - a}\\), proportional to \\(\\frac{ab}{b-a}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "Two identical capacitors, one charged to voltage V and one uncharged, are connected in parallel. The final voltage is",
          "options": [
            "\\(V/2\\)",
            "\\(V\\)",
            "\\(2V\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Charge is conserved and shared over doubled capacitance: \\(V_f = \\frac{Q}{2C} = V/2\\) (and some energy is lost).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "When two capacitors sharing charge reach a common voltage, the total stored energy",
          "options": [
            "decreases (energy is dissipated)",
            "increases",
            "stays the same",
            "doubles"
          ],
          "correctAnswer": 0,
          "explanation": "Redistributing charge between capacitors to a common voltage dissipates energy (as heat/radiation in the connecting wires), so total stored energy decreases.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "A conductor with a cavity containing a point charge \\(+q\\) induces on the inner cavity wall a total charge of",
          "options": [
            "\\(-q\\)",
            "\\(+q\\)",
            "zero",
            "\\(-2q\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By Gauss's law (field zero within the conductor), the inner cavity surface must carry induced charge \\(-q\\) to cancel the enclosed \\(+q\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "Why does the electric field just outside a conductor equal \\(\\sigma/\\varepsilon_0\\) rather than \\(\\sigma/2\\varepsilon_0\\)?",
          "options": [
            "The field exists only outside (zero inside the conductor), so all the flux is on one side",
            "the conductor doubles the charge",
            "of a calculation error",
            "the surface has two sides with field"
          ],
          "correctAnswer": 0,
          "explanation": "Because the field inside the conductor is zero, all the flux from the surface charge emerges outward, giving \\(E = \\sigma/\\varepsilon_0\\) just outside.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Electric Circuits",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "Ohm's law states that",
          "options": [
            "\\(V = IR\\)",
            "\\(V = I/R\\)",
            "\\(V = I^2 R\\)",
            "\\(V = R/I\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Ohm's law relates voltage, current, and resistance: \\(V = IR\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "Electric current is defined as the",
          "options": [
            "rate of flow of charge, \\(I = dQ/dt\\)",
            "charge times voltage",
            "resistance",
            "power"
          ],
          "correctAnswer": 0,
          "explanation": "Current is the rate of charge flow: \\(I = \\frac{dQ}{dt}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "Electric power dissipated in a resistor is",
          "options": [
            "\\(P = I^2 R = IV = V^2/R\\)",
            "\\(P = IR\\)",
            "\\(P = I/R\\)",
            "\\(P = V/I\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Power in a resistor can be written \\(P = IV = I^2 R = V^2/R\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "For resistors in series, the total resistance is",
          "options": [
            "the sum of the individual resistances",
            "the reciprocal sum",
            "the product",
            "the smallest one"
          ],
          "correctAnswer": 0,
          "explanation": "Resistors in series add: \\(R_{total} = R_1 + R_2 + \\dots\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "For resistors in parallel, the total resistance is found from",
          "options": [
            "\\(\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2}\\)",
            "\\(R_{total} = R_1 + R_2\\)",
            "\\(R_{total} = R_1 R_2\\)",
            "the largest resistor"
          ],
          "correctAnswer": 0,
          "explanation": "Resistors in parallel add reciprocally: \\(\\frac{1}{R_{total}} = \\sum \\frac{1}{R_i}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "Kirchhoff's current law (junction rule) states that",
          "options": [
            "the sum of currents into a junction equals the sum out",
            "voltage around a loop is zero",
            "current always increases",
            "resistance is conserved"
          ],
          "correctAnswer": 0,
          "explanation": "Kirchhoff's junction rule expresses charge conservation: current in equals current out at any junction.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "Kirchhoff's voltage law (loop rule) states that",
          "options": [
            "the sum of voltage changes around a closed loop is zero",
            "current in equals current out",
            "power is conserved",
            "resistance adds"
          ],
          "correctAnswer": 0,
          "explanation": "Kirchhoff's loop rule expresses energy conservation: the total voltage change around any closed loop is zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "The SI unit of resistance is the",
          "options": [
            "ohm",
            "volt",
            "ampere",
            "watt"
          ],
          "correctAnswer": 0,
          "explanation": "Resistance is measured in ohms (Ω), where \\(1\\ \\Omega = 1\\ \\text{V/A}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "In an RC circuit, the capacitor charges",
          "options": [
            "exponentially toward its final voltage",
            "instantly",
            "linearly",
            "never"
          ],
          "correctAnswer": 0,
          "explanation": "In an RC circuit, the capacitor voltage rises exponentially: \\(V(t) = V_0(1 - e^{-t/RC})\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "The time constant of an RC circuit is",
          "options": [
            "\\(\\tau = RC\\)",
            "\\(\\tau = R/C\\)",
            "\\(\\tau = C/R\\)",
            "\\(\\tau = RC^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The RC time constant is \\(\\tau = RC\\), the time for the capacitor to charge to about 63% of its final value.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "A \\(12\\ \\text{V}\\) battery drives current through a \\(4\\ \\Omega\\) resistor. The current is",
          "options": [
            "\\(3\\ \\text{A}\\)",
            "\\(48\\ \\text{A}\\)",
            "\\(0.33\\ \\text{A}\\)",
            "\\(16\\ \\text{A}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(I = V/R = 12/4 = 3\\ \\text{A}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "Two \\(6\\ \\Omega\\) resistors in parallel have equivalent resistance",
          "options": [
            "\\(3\\ \\Omega\\)",
            "\\(12\\ \\Omega\\)",
            "\\(6\\ \\Omega\\)",
            "\\(2\\ \\Omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For two equal resistors in parallel, \\(R = R/2 = 6/2 = 3\\ \\Omega\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "A \\(2\\ \\text{A}\\) current flows through a \\(5\\ \\Omega\\) resistor. The power dissipated is",
          "options": [
            "\\(20\\ \\text{W}\\)",
            "\\(10\\ \\text{W}\\)",
            "\\(2.5\\ \\text{W}\\)",
            "\\(50\\ \\text{W}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(P = I^2 R = (2)^2(5) = 20\\ \\text{W}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "In a fully charged RC circuit (steady state), the current through the capacitor is",
          "options": [
            "zero",
            "maximum",
            "increasing",
            "equal to V/R"
          ],
          "correctAnswer": 0,
          "explanation": "At steady state, the capacitor is fully charged and acts like an open circuit, so no current flows through it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "When a capacitor in an RC circuit discharges, its voltage",
          "options": [
            "decays exponentially as \\(V_0 e^{-t/RC}\\)",
            "stays constant",
            "increases",
            "drops linearly"
          ],
          "correctAnswer": 0,
          "explanation": "During discharge, \\(V(t) = V_0 e^{-t/RC}\\), an exponential decay with time constant RC.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "An ammeter should be connected in ___ with a circuit element, and a voltmeter in ___.",
          "options": [
            "series; parallel",
            "parallel; series",
            "series; series",
            "parallel; parallel"
          ],
          "correctAnswer": 0,
          "explanation": "An ammeter (measuring current) goes in series; a voltmeter (measuring potential difference) goes in parallel.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "A resistor's resistance depends on its length L and cross-sectional area A as",
          "options": [
            "\\(R = \\rho L/A\\)",
            "\\(R = \\rho A/L\\)",
            "\\(R = \\rho L A\\)",
            "\\(R = \\rho/(LA)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Resistance is \\(R = \\frac{\\rho L}{A}\\), where \\(\\rho\\) is the resistivity.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "An ideal ammeter has ___ resistance and an ideal voltmeter has ___ resistance.",
          "options": [
            "zero; infinite",
            "infinite; zero",
            "zero; zero",
            "infinite; infinite"
          ],
          "correctAnswer": 0,
          "explanation": "An ideal ammeter has zero resistance (no voltage drop) and an ideal voltmeter has infinite resistance (draws no current).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "A real battery with internal resistance \\(r\\) delivers terminal voltage",
          "options": [
            "\\(V = \\varepsilon - Ir\\)",
            "\\(V = \\varepsilon + Ir\\)",
            "\\(V = \\varepsilon\\)",
            "\\(V = Ir\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Terminal voltage is the EMF minus the drop across internal resistance: \\(V = \\varepsilon - Ir\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "In an RC circuit, increasing R (with C fixed) causes the capacitor to charge",
          "options": [
            "more slowly",
            "more quickly",
            "instantly",
            "not at all"
          ],
          "correctAnswer": 0,
          "explanation": "A larger R increases the time constant \\(\\tau = RC\\), so the capacitor charges more slowly.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "An RC circuit has \\(R = 1000\\ \\Omega\\) and \\(C = 2\\ \\mu\\text{F}\\). After one time constant, the capacitor has charged to about",
          "options": [
            "63% of its final voltage",
            "37%",
            "50%",
            "100%"
          ],
          "correctAnswer": 0,
          "explanation": "After one time constant \\(\\tau = RC\\), the capacitor reaches \\(1 - e^{-1} \\approx 63\\%\\) of its final charge.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "Immediately after a switch closes in an RC circuit (capacitor initially uncharged), the capacitor acts like",
          "options": [
            "a wire (short circuit)",
            "an open circuit",
            "a battery",
            "a resistor"
          ],
          "correctAnswer": 0,
          "explanation": "An uncharged capacitor initially allows maximum current, behaving like a short circuit (zero voltage across it) at t = 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "Three \\(3\\ \\Omega\\) resistors are connected in parallel. Their equivalent resistance is",
          "options": [
            "\\(1\\ \\Omega\\)",
            "\\(9\\ \\Omega\\)",
            "\\(3\\ \\Omega\\)",
            "\\(6\\ \\Omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For n equal resistors in parallel, \\(R = R/n = 3/3 = 1\\ \\Omega\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "In a circuit with two resistors in series, the resistor with the larger resistance dissipates",
          "options": [
            "more power (since \\(P = I^2 R\\) and I is the same)",
            "less power",
            "equal power",
            "no power"
          ],
          "correctAnswer": 0,
          "explanation": "In series, current I is the same, so \\(P = I^2 R\\) is greater for the larger resistance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "In a parallel combination, the resistor with the smaller resistance dissipates",
          "options": [
            "more power (since \\(P = V^2/R\\) and V is the same)",
            "less power",
            "equal power",
            "no power"
          ],
          "correctAnswer": 0,
          "explanation": "In parallel, voltage V is the same, so \\(P = V^2/R\\) is greater for the smaller resistance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "The total charge that flows through a discharging capacitor over all time equals",
          "options": [
            "the initial charge \\(Q_0\\) on the capacitor",
            "zero",
            "infinite",
            "\\(Q_0/2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrating the exponentially decaying current over all time recovers the total initial charge \\(Q_0\\) stored on the capacitor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "A battery of EMF \\(\\varepsilon\\) and internal resistance \\(r\\) delivers maximum power to an external resistor R when",
          "options": [
            "\\(R = r\\)",
            "\\(R = 0\\)",
            "\\(R \\to \\infty\\)",
            "\\(R = 2r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By the maximum power transfer theorem, power delivered to the load is maximized when the external resistance matches the internal resistance, \\(R = r\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "Using Kirchhoff's rules to solve a multi-loop circuit requires",
          "options": [
            "applying the junction rule and loop rule to generate enough equations",
            "only Ohm's law",
            "only the loop rule",
            "guessing the currents"
          ],
          "correctAnswer": 0,
          "explanation": "Multi-loop circuits are solved by writing junction-rule (current) and loop-rule (voltage) equations to obtain a solvable system for the unknown currents.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "When a capacitor discharges through a resistor, the energy dissipated in the resistor over all time equals",
          "options": [
            "the energy initially stored in the capacitor",
            "zero",
            "half the stored energy",
            "twice the stored energy"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, all the energy \\(\\tfrac{1}{2}CV_0^2\\) initially stored in the capacitor is eventually dissipated as heat in the resistor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "In an RC charging circuit, the current as a function of time is",
          "options": [
            "\\(I(t) = \\frac{\\varepsilon}{R}e^{-t/RC}\\)",
            "\\(I(t) = \\frac{\\varepsilon}{R}(1 - e^{-t/RC})\\)",
            "\\(I(t) = \\varepsilon R e^{-t/RC}\\)",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "During charging, current starts at \\(\\varepsilon/R\\) and decays exponentially: \\(I(t) = \\frac{\\varepsilon}{R}e^{-t/RC}\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Magnetic Fields",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "The magnetic force on a charge moving in a magnetic field is",
          "options": [
            "\\(\\vec{F} = q\\vec{v}\\times\\vec{B}\\)",
            "\\(F = qE\\)",
            "\\(F = qB\\)",
            "\\(F = qv/B\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The magnetic force is \\(\\vec{F} = q\\vec{v}\\times\\vec{B}\\), perpendicular to both velocity and field.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "The magnetic force on a moving charge is zero when the velocity is",
          "options": [
            "parallel to the magnetic field",
            "perpendicular to the field",
            "at 45° to the field",
            "zero only"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(F = qvB\\sin\\theta\\), the force is zero when \\(\\theta = 0\\) (velocity parallel to B).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "A charged particle moving perpendicular to a uniform magnetic field follows a",
          "options": [
            "circular path",
            "straight line",
            "parabola",
            "spiral outward"
          ],
          "correctAnswer": 0,
          "explanation": "The magnetic force provides centripetal force, causing circular motion perpendicular to B.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "The magnetic force on a current-carrying wire is",
          "options": [
            "\\(\\vec{F} = I\\vec{L}\\times\\vec{B}\\)",
            "\\(F = ILB^2\\)",
            "\\(F = IL/B\\)",
            "\\(F = qvB\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A wire carrying current I in a field B experiences \\(\\vec{F} = I\\vec{L}\\times\\vec{B}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "The magnetic field around a long straight current-carrying wire is given by",
          "options": [
            "\\(B = \\frac{\\mu_0 I}{2\\pi r}\\)",
            "\\(B = \\mu_0 I r\\)",
            "\\(B = \\frac{\\mu_0 I}{r^2}\\)",
            "\\(B = qvB\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Ampère's law gives \\(B = \\frac{\\mu_0 I}{2\\pi r}\\) around a long straight wire.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "Magnetic field lines form",
          "options": [
            "closed loops with no beginning or end",
            "lines starting on north poles only",
            "straight lines",
            "radial patterns from a point"
          ],
          "correctAnswer": 0,
          "explanation": "Because there are no magnetic monopoles, magnetic field lines always form closed loops.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "Ampère's law relates the magnetic field around a loop to",
          "options": [
            "the enclosed current",
            "the enclosed charge",
            "the voltage",
            "the resistance"
          ],
          "correctAnswer": 0,
          "explanation": "Ampère's law: \\(\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enc}\\), relating the field to enclosed current.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "The SI unit of magnetic field is the",
          "options": [
            "tesla",
            "volt",
            "ampere",
            "weber"
          ],
          "correctAnswer": 0,
          "explanation": "Magnetic field (flux density) is measured in teslas (T).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "Inside a long solenoid, the magnetic field is",
          "options": [
            "approximately uniform and parallel to the axis",
            "zero",
            "radial",
            "circular"
          ],
          "correctAnswer": 0,
          "explanation": "A long solenoid produces a nearly uniform axial field inside, \\(B = \\mu_0 n I\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "The direction of the magnetic force on a positive charge is found using",
          "options": [
            "the right-hand rule",
            "the left-hand rule always",
            "a random guess",
            "Coulomb's law"
          ],
          "correctAnswer": 0,
          "explanation": "The right-hand rule gives the direction of \\(\\vec{v}\\times\\vec{B}\\) for the force on a positive charge.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A charge \\(q\\) moves at speed \\(v\\) perpendicular to field \\(B\\). The radius of its circular path is",
          "options": [
            "\\(r = \\frac{mv}{qB}\\)",
            "\\(r = \\frac{qB}{mv}\\)",
            "\\(r = qvB\\)",
            "\\(r = \\frac{mv}{q}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Setting magnetic force equal to centripetal force: \\(qvB = \\frac{mv^2}{r}\\), so \\(r = \\frac{mv}{qB}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "A proton moving east enters a magnetic field pointing north. The magnetic force on it is directed",
          "options": [
            "upward (out of the horizontal plane)",
            "downward",
            "north",
            "east"
          ],
          "correctAnswer": 0,
          "explanation": "Using the right-hand rule for \\(\\vec{v}\\times\\vec{B}\\) (east × north), the force on the positive proton points upward.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "The magnetic force does no work on a moving charge because it is always",
          "options": [
            "perpendicular to the velocity",
            "parallel to the velocity",
            "zero",
            "in the direction of motion"
          ],
          "correctAnswer": 0,
          "explanation": "Since the magnetic force is always perpendicular to velocity, \\(W = \\vec{F}\\cdot\\vec{d} = 0\\); it changes direction but not speed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "Two parallel wires carrying current in the same direction",
          "options": [
            "attract each other",
            "repel each other",
            "exert no force",
            "rotate"
          ],
          "correctAnswer": 0,
          "explanation": "Parallel currents in the same direction attract; opposite currents repel, due to their magnetic fields.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "The magnetic field at the center of a circular current loop of radius R is",
          "options": [
            "\\(B = \\frac{\\mu_0 I}{2R}\\)",
            "\\(B = \\frac{\\mu_0 I}{2\\pi R}\\)",
            "\\(B = \\mu_0 I R\\)",
            "\\(B = \\frac{\\mu_0 I}{R^2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The field at the center of a single circular loop is \\(B = \\frac{\\mu_0 I}{2R}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "The period of a charged particle's circular motion in a magnetic field is",
          "options": [
            "independent of its speed",
            "proportional to speed",
            "proportional to radius squared",
            "inversely proportional to charge squared"
          ],
          "correctAnswer": 0,
          "explanation": "The period \\(T = \\frac{2\\pi m}{qB}\\) is independent of the particle's speed (faster particles move in larger circles).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "A velocity selector uses ___ fields to select particles of a specific velocity.",
          "options": [
            "perpendicular electric and magnetic",
            "only magnetic",
            "only electric",
            "parallel electric and magnetic"
          ],
          "correctAnswer": 0,
          "explanation": "A velocity selector balances electric and magnetic forces (\\(qE = qvB\\)), passing only particles with \\(v = E/B\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "Ampère's law is most useful for finding B when the current distribution has",
          "options": [
            "high symmetry",
            "no symmetry",
            "zero current",
            "random arrangement"
          ],
          "correctAnswer": 0,
          "explanation": "Like Gauss's law for E, Ampère's law simplifies calculations for symmetric current distributions (wires, solenoids, toroids).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "The magnetic field inside an ideal solenoid depends on",
          "options": [
            "the number of turns per length and the current",
            "the length only",
            "the radius only",
            "the resistance"
          ],
          "correctAnswer": 0,
          "explanation": "Inside a solenoid, \\(B = \\mu_0 n I\\), where n is turns per unit length and I is the current.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "A current loop in a magnetic field experiences",
          "options": [
            "a torque that tends to align its magnetic moment with the field",
            "a net force always",
            "no torque",
            "a force toward the field source"
          ],
          "correctAnswer": 0,
          "explanation": "A current loop has a magnetic moment; in a uniform field it experiences a torque \\(\\tau = \\mu B\\sin\\theta\\) that aligns it with the field.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A proton (\\(m = 1.67\\times10^{-27}\\ \\text{kg}\\), \\(q = 1.6\\times10^{-19}\\ \\text{C}\\)) moves at \\(2\\times10^6\\ \\text{m/s}\\) perpendicular to a \\(0.5\\ \\text{T}\\) field. Its orbital radius is about",
          "options": [
            "\\(0.042\\ \\text{m}\\)",
            "\\(4.2\\ \\text{m}\\)",
            "\\(0.0042\\ \\text{m}\\)",
            "\\(42\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(r = \\frac{mv}{qB} = \\frac{(1.67\\times10^{-27})(2\\times10^6)}{(1.6\\times10^{-19})(0.5)} \\approx 0.042\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "A charged particle enters a magnetic field with a velocity component both parallel and perpendicular to B. Its path is a",
          "options": [
            "helix",
            "circle",
            "straight line",
            "parabola"
          ],
          "correctAnswer": 0,
          "explanation": "The perpendicular component gives circular motion and the parallel component gives uniform translation, combining into a helical path.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "Using Ampère's law for a long straight wire, the field's \\(1/r\\) dependence arises because",
          "options": [
            "the enclosed current is constant while the loop circumference grows as \\(2\\pi r\\)",
            "current increases with r",
            "the field is uniform",
            "of the wire's resistance"
          ],
          "correctAnswer": 0,
          "explanation": "Ampère's law gives \\(B(2\\pi r) = \\mu_0 I\\); since I is fixed and the path length is \\(2\\pi r\\), \\(B \\propto 1/r\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "In a mass spectrometer, ions of the same charge and speed but different masses are separated because",
          "options": [
            "heavier ions follow larger-radius circular paths",
            "heavier ions move faster",
            "lighter ions stop",
            "mass has no effect"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(r = \\frac{mv}{qB}\\), for equal charge and speed, heavier ions travel in larger circles, separating them by mass.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "The force per unit length between two parallel wires separated by distance d, each carrying current I, is",
          "options": [
            "\\(\\frac{\\mu_0 I^2}{2\\pi d}\\)",
            "\\(\\frac{\\mu_0 I}{2\\pi d}\\)",
            "\\(\\mu_0 I^2 d\\)",
            "\\(\\frac{\\mu_0 I^2}{d^2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Each wire sits in the other's field \\(B = \\frac{\\mu_0 I}{2\\pi d}\\), giving force per length \\(\\frac{F}{L} = \\frac{\\mu_0 I^2}{2\\pi d}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "The Biot-Savart law is used to",
          "options": [
            "calculate the magnetic field from an arbitrary current distribution",
            "find the electric field",
            "compute resistance",
            "find capacitance"
          ],
          "correctAnswer": 0,
          "explanation": "The Biot-Savart law, \\(d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}\\), gives the field from any current element, useful when symmetry is lacking.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "Why does the period of circular motion in a magnetic field not depend on the particle's speed?",
          "options": [
            "A faster particle travels a proportionally larger circle, so the time to complete a loop is unchanged",
            "the field adjusts",
            "speed does affect it",
            "charge cancels speed"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(r \\propto v\\), a faster particle covers a proportionally larger circumference at higher speed, keeping the period \\(T = 2\\pi m/(qB)\\) constant.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "The magnetic dipole moment of a current loop of area A carrying current I is",
          "options": [
            "\\(\\mu = IA\\)",
            "\\(\\mu = I/A\\)",
            "\\(\\mu = IA^2\\)",
            "\\(\\mu = I + A\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The magnetic moment of a current loop is \\(\\mu = IA\\), directed perpendicular to the loop by the right-hand rule.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "A charged particle in crossed E and B fields moves in a straight line when",
          "options": [
            "\\(qE = qvB\\), i.e., \\(v = E/B\\)",
            "\\(E = B\\)",
            "\\(v = EB\\)",
            "\\(q = 0\\) only"
          ],
          "correctAnswer": 0,
          "explanation": "The electric and magnetic forces balance when \\(qE = qvB\\), so the particle passes straight through if \\(v = E/B\\)—a velocity selector.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "Inside a toroid with N turns carrying current I, Ampère's law gives a field that",
          "options": [
            "varies as \\(1/r\\) within the toroid",
            "is uniform",
            "is zero",
            "increases with r"
          ],
          "correctAnswer": 0,
          "explanation": "Applying Ampère's law to a toroid gives \\(B = \\frac{\\mu_0 N I}{2\\pi r}\\), so the field decreases as \\(1/r\\) across the toroid's cross-section.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Electromagnetism",
      "questions": [
        {
          "id": "q-u5-easy-1",
          "question": "Faraday's law states that an EMF is induced by a changing",
          "options": [
            "magnetic flux",
            "electric charge",
            "resistance",
            "temperature"
          ],
          "correctAnswer": 0,
          "explanation": "Faraday's law: a changing magnetic flux through a loop induces an EMF, \\(\\varepsilon = -\\frac{d\\Phi_B}{dt}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "Magnetic flux is defined as",
          "options": [
            "\\(\\Phi_B = \\int \\vec{B}\\cdot d\\vec{A}\\)",
            "\\(\\Phi_B = BA^2\\)",
            "\\(\\Phi_B = B/A\\)",
            "\\(\\Phi_B = qvB\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Magnetic flux is \\(\\Phi_B = \\int \\vec{B}\\cdot d\\vec{A}\\), the field integrated over an area.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "Lenz's law states that the induced current opposes",
          "options": [
            "the change in magnetic flux that produced it",
            "all current",
            "the electric field",
            "the resistance"
          ],
          "correctAnswer": 0,
          "explanation": "Lenz's law: the induced current flows in a direction that opposes the change in flux, consistent with energy conservation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "Which of the following can induce an EMF in a loop?",
          "options": [
            "changing the magnetic field, area, or orientation",
            "a constant field",
            "zero flux",
            "a static charge"
          ],
          "correctAnswer": 0,
          "explanation": "An EMF is induced whenever the flux changes—by varying the field strength, the loop area, or its orientation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "Inductance relates the EMF in a coil to",
          "options": [
            "the rate of change of current, \\(\\varepsilon = -L\\frac{dI}{dt}\\)",
            "the charge",
            "the resistance",
            "the voltage directly"
          ],
          "correctAnswer": 0,
          "explanation": "A changing current in an inductor induces \\(\\varepsilon = -L\\frac{dI}{dt}\\), where L is the inductance.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "The energy stored in an inductor is",
          "options": [
            "\\(U = \\tfrac{1}{2}LI^2\\)",
            "\\(U = LI\\)",
            "\\(U = \\tfrac{1}{2}CV^2\\)",
            "\\(U = I^2 R\\)"
          ],
          "correctAnswer": 0,
          "explanation": "An inductor stores energy \\(U = \\tfrac{1}{2}LI^2\\) in its magnetic field.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "A generator produces electricity by",
          "options": [
            "rotating a coil in a magnetic field to change the flux",
            "using a static field",
            "storing charge",
            "dissipating heat"
          ],
          "correctAnswer": 0,
          "explanation": "A generator rotates a coil in a magnetic field, continuously changing the flux and inducing an alternating EMF.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "The SI unit of inductance is the",
          "options": [
            "henry",
            "farad",
            "tesla",
            "ohm"
          ],
          "correctAnswer": 0,
          "explanation": "Inductance is measured in henries (H), where \\(1\\ \\text{H} = 1\\ \\text{V·s/A}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "In an inductor, the current cannot change",
          "options": [
            "instantaneously",
            "at all",
            "slowly",
            "in a circuit"
          ],
          "correctAnswer": 0,
          "explanation": "Because an inductor opposes changes in current (inducing an opposing EMF), the current through it cannot change instantaneously.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "The time constant of an RL circuit is",
          "options": [
            "\\(\\tau = L/R\\)",
            "\\(\\tau = RL\\)",
            "\\(\\tau = R/L\\)",
            "\\(\\tau = LC\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The RL time constant is \\(\\tau = L/R\\), governing how quickly current builds up or decays.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "A magnetic flux through a loop changes from \\(0.2\\ \\text{Wb}\\) to \\(0.6\\ \\text{Wb}\\) in \\(0.2\\ \\text{s}\\). The average induced EMF is",
          "options": [
            "\\(2\\ \\text{V}\\)",
            "\\(0.4\\ \\text{V}\\)",
            "\\(4\\ \\text{V}\\)",
            "\\(0.8\\ \\text{V}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\varepsilon = \\frac{\\Delta\\Phi}{\\Delta t} = \\frac{0.4}{0.2} = 2\\ \\text{V}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "A magnet pushed toward a coil induces a current that, by Lenz's law, creates a magnetic field",
          "options": [
            "opposing the approaching magnet",
            "attracting the magnet",
            "in the same direction",
            "that is zero"
          ],
          "correctAnswer": 0,
          "explanation": "By Lenz's law, the induced current opposes the increasing flux, creating a field that repels the approaching magnet.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "A conducting rod of length \\(L\\) moves at speed \\(v\\) perpendicular to a field \\(B\\). The motional EMF is",
          "options": [
            "\\(\\varepsilon = BLv\\)",
            "\\(\\varepsilon = BL/v\\)",
            "\\(\\varepsilon = B/(Lv)\\)",
            "\\(\\varepsilon = BLv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A rod moving through a field generates a motional EMF \\(\\varepsilon = BLv\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "In an RL circuit, immediately after a switch closes, the inductor acts like",
          "options": [
            "an open circuit (opposing current change)",
            "a wire",
            "a battery",
            "a capacitor"
          ],
          "correctAnswer": 0,
          "explanation": "At t = 0, the inductor strongly opposes the sudden current change, acting like an open circuit (zero current initially).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "In a long-time (steady-state) RL circuit, the inductor acts like",
          "options": [
            "a plain wire (short circuit)",
            "an open circuit",
            "a resistor",
            "a capacitor"
          ],
          "correctAnswer": 0,
          "explanation": "At steady state, current is constant, so \\(\\frac{dI}{dt} = 0\\) and the ideal inductor has no voltage drop—acting like a wire.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "The negative sign in Faraday's law expresses",
          "options": [
            "Lenz's law (the induced EMF opposes the flux change)",
            "energy creation",
            "a measurement error",
            "the field direction only"
          ],
          "correctAnswer": 0,
          "explanation": "The minus sign in \\(\\varepsilon = -\\frac{d\\Phi}{dt}\\) encodes Lenz's law: the induced EMF opposes the change in flux.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "A transformer changes voltage using",
          "options": [
            "the mutual induction between two coils",
            "a static field",
            "resistors",
            "capacitors"
          ],
          "correctAnswer": 0,
          "explanation": "A transformer uses a changing flux in a shared core to induce a voltage in a secondary coil, with the ratio set by the turns.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "An LC circuit (inductor and capacitor) exhibits",
          "options": [
            "oscillations of charge and current",
            "exponential decay only",
            "constant current",
            "no current"
          ],
          "correctAnswer": 0,
          "explanation": "An ideal LC circuit oscillates as energy transfers back and forth between the capacitor's electric field and the inductor's magnetic field.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "Eddy currents are induced currents that",
          "options": [
            "circulate in conductors and oppose changes in flux",
            "flow through resistors",
            "are always useful",
            "increase efficiency"
          ],
          "correctAnswer": 0,
          "explanation": "Eddy currents are loops of induced current in bulk conductors that oppose flux changes (Lenz's law) and can cause energy loss as heat.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "Increasing the number of turns in a coil ___ the induced EMF for a given rate of flux change.",
          "options": [
            "increases",
            "decreases",
            "does not change",
            "reverses"
          ],
          "correctAnswer": 0,
          "explanation": "For N turns, \\(\\varepsilon = -N\\frac{d\\Phi}{dt}\\), so more turns increase the total induced EMF.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "A conducting rod slides on rails in a field B, generating a motional EMF. The induced current causes a force on the rod that",
          "options": [
            "opposes its motion (Lenz's law)",
            "speeds it up",
            "is perpendicular to the rails",
            "is zero"
          ],
          "correctAnswer": 0,
          "explanation": "By Lenz's law, the induced current experiences a magnetic force opposing the rod's motion, requiring work to keep it moving.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "In an RL circuit, the current after closing the switch grows as",
          "options": [
            "\\(I(t) = \\frac{\\varepsilon}{R}(1 - e^{-Rt/L})\\)",
            "\\(I(t) = \\frac{\\varepsilon}{R}e^{-Rt/L}\\)",
            "\\(I(t) = \\varepsilon R t\\)",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "Current rises exponentially toward \\(\\varepsilon/R\\): \\(I(t) = \\frac{\\varepsilon}{R}(1 - e^{-t/(L/R)})\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "The angular frequency of oscillation in an ideal LC circuit is",
          "options": [
            "\\(\\omega = \\frac{1}{\\sqrt{LC}}\\)",
            "\\(\\omega = \\sqrt{LC}\\)",
            "\\(\\omega = LC\\)",
            "\\(\\omega = \\frac{L}{C}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "An LC circuit oscillates at \\(\\omega = \\frac{1}{\\sqrt{LC}}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "A coil rotates in a uniform magnetic field at constant angular speed. The induced EMF is",
          "options": [
            "sinusoidal (alternating)",
            "constant",
            "exponential",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "As the flux \\(\\Phi = BA\\cos(\\omega t)\\) varies sinusoidally, the induced EMF \\(\\varepsilon = NBA\\omega\\sin(\\omega t)\\) is sinusoidal—the principle of an AC generator.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-5",
          "question": "Why must the work done to move the rod in a rail-and-magnet generator equal the electrical energy produced?",
          "options": [
            "Energy conservation: mechanical work becomes electrical energy (minus resistive losses)",
            "energy is created",
            "the rod loses mass",
            "of a measurement error"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, the mechanical work done against the Lenz's-law force is converted into electrical energy dissipated in the circuit—generators convert mechanical to electrical energy.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "The self-inductance of a long solenoid is proportional to",
          "options": [
            "the square of the number of turns per length",
            "the current",
            "the resistance",
            "the inverse of the length"
          ],
          "correctAnswer": 0,
          "explanation": "A solenoid's inductance \\(L = \\mu_0 n^2 A \\ell\\) depends on the square of the turn density n, since both the flux and the number of linked turns scale with n.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "In an LC circuit, when the capacitor is fully charged, the energy is",
          "options": [
            "entirely in the capacitor's electric field, with zero current",
            "entirely in the inductor",
            "split evenly",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "When the capacitor is fully charged, current is momentarily zero, and all the energy is stored in the capacitor's electric field—then it transfers to the inductor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "A changing magnetic field induces an electric field. This is expressed by",
          "options": [
            "\\(\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}\\)",
            "\\(\\oint \\vec{E}\\cdot d\\vec{A} = Q/\\varepsilon_0\\)",
            "\\(\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I\\)",
            "\\(F = qE\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Faraday's law in field form states that a changing magnetic flux creates a circulating (non-conservative) electric field: \\(\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "The electric field induced by a changing magnetic field differs from an electrostatic field in that it",
          "options": [
            "is non-conservative (its loop integral is nonzero)",
            "is stronger",
            "points radially",
            "is conservative"
          ],
          "correctAnswer": 0,
          "explanation": "Unlike an electrostatic field, an induced electric field is non-conservative—its integral around a closed loop is nonzero, equal to the negative rate of flux change.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "Maxwell's addition to Ampère's law introduces the displacement current, showing that a changing electric field",
          "options": [
            "produces a magnetic field",
            "produces charge",
            "dissipates energy",
            "stops current"
          ],
          "correctAnswer": 0,
          "explanation": "Maxwell added the displacement current term, showing that a changing electric field, like a real current, produces a magnetic field—completing the symmetry of electromagnetism and predicting electromagnetic waves.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
