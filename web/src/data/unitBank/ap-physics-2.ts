import type { SubjectUnitBank } from './types'

export const BANK_AP_PHYSICS_2: SubjectUnitBank = {
  "label": "AP Physics 2",
  "slug": "ap-physics-2",
  "units": [
    {
      "unitNumber": 1,
      "title": "Fluids",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "Density is defined as",
          "options": [
            "mass per unit volume",
            "force per area",
            "weight per length",
            "volume per mass"
          ],
          "correctAnswer": 0,
          "explanation": "Density is \\(\\rho = m/V\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "Pressure is defined as",
          "options": [
            "force per unit area",
            "force times area",
            "mass per volume",
            "force times distance"
          ],
          "correctAnswer": 0,
          "explanation": "Pressure is \\(P = F/A\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "The gauge pressure at depth \\(h\\) in a fluid is",
          "options": [
            "\\(P = \\rho g h\\)",
            "\\(P = gh\\)",
            "\\(P = \\rho/gh\\)",
            "\\(P = \\rho g/h\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Fluid gauge pressure increases with depth as \\(P = \\rho g h\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "Archimedes' principle states the buoyant force equals",
          "options": [
            "the weight of the displaced fluid",
            "the object's weight",
            "zero",
            "the object's volume"
          ],
          "correctAnswer": 0,
          "explanation": "The buoyant force equals the weight of the fluid displaced by the object.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "An object floats when its average density is",
          "options": [
            "less than the fluid's",
            "greater than the fluid's",
            "equal to zero",
            "infinite"
          ],
          "correctAnswer": 0,
          "explanation": "An object floats if its average density is less than the surrounding fluid's density.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "The continuity equation for incompressible flow is",
          "options": [
            "\\(A_1 v_1 = A_2 v_2\\)",
            "\\(P_1 = P_2\\)",
            "\\(v_1 = v_2\\)",
            "\\(A_1 = A_2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Continuity: \\(A_1 v_1 = A_2 v_2\\), conserving volume flow rate.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "Bernoulli's principle states that faster fluid flow corresponds to",
          "options": [
            "lower pressure",
            "higher pressure",
            "zero pressure",
            "the same pressure"
          ],
          "correctAnswer": 0,
          "explanation": "In a flowing fluid, higher speed corresponds to lower pressure.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "Pascal's principle states that pressure applied to a confined fluid is",
          "options": [
            "transmitted equally throughout",
            "lost immediately",
            "doubled",
            "reversed"
          ],
          "correctAnswer": 0,
          "explanation": "Pascal's principle: pressure applied to a confined fluid is transmitted undiminished throughout the fluid.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "The SI unit of pressure is the",
          "options": [
            "pascal",
            "newton",
            "joule",
            "watt"
          ],
          "correctAnswer": 0,
          "explanation": "Pressure is measured in pascals (Pa = N/m²).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "A fully submerged object displaces a fluid volume equal to",
          "options": [
            "its own volume",
            "its weight",
            "half its volume",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A fully submerged object displaces fluid equal to its entire volume.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "The gauge pressure at the bottom of a \\(5\\ \\text{m}\\) water column (\\(\\rho = 1000\\), \\(g = 10\\)) is",
          "options": [
            "\\(50{,}000\\ \\text{Pa}\\)",
            "\\(5000\\ \\text{Pa}\\)",
            "\\(500\\ \\text{Pa}\\)",
            "\\(100{,}000\\ \\text{Pa}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(P = \\rho g h = 1000 \\times 10 \\times 5 = 50{,}000\\ \\text{Pa}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "Water flows through a pipe that narrows to half its area. The speed in the narrow part is",
          "options": [
            "double the original",
            "half",
            "the same",
            "quadruple"
          ],
          "correctAnswer": 0,
          "explanation": "By continuity, halving the area doubles the speed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "A block floats with 3/4 of its volume submerged. Its density relative to the fluid is",
          "options": [
            "0.75 of the fluid's",
            "1.33 of the fluid's",
            "0.25 of the fluid's",
            "equal"
          ],
          "correctAnswer": 0,
          "explanation": "The submerged fraction equals the density ratio, so the block's density is 0.75 of the fluid's.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "A hydraulic system multiplies force because",
          "options": [
            "equal pressure acts over a larger area on the output piston",
            "fluids are compressible",
            "pressure decreases",
            "area is irrelevant"
          ],
          "correctAnswer": 0,
          "explanation": "Pascal's principle ensures equal pressure; a larger output area yields a larger force (\\(F = PA\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "An object weighs \\(50\\ \\text{N}\\) in air and \\(30\\ \\text{N}\\) submerged in water. The buoyant force is",
          "options": [
            "\\(20\\ \\text{N}\\)",
            "\\(50\\ \\text{N}\\)",
            "\\(30\\ \\text{N}\\)",
            "\\(80\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Buoyant force = weight loss = \\(50 - 30 = 20\\ \\text{N}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "Bernoulli's equation is fundamentally a statement of",
          "options": [
            "energy conservation for fluids",
            "momentum conservation",
            "mass creation",
            "Newton's third law"
          ],
          "correctAnswer": 0,
          "explanation": "Bernoulli's equation expresses conservation of energy per unit volume in a flowing fluid.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "Fluid pressure at a given depth depends on all EXCEPT",
          "options": [
            "the shape of the container",
            "the fluid density",
            "the depth",
            "g"
          ],
          "correctAnswer": 0,
          "explanation": "Pressure depends on depth, density, and g—not on the container's shape.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "An ice cube floats in water. When it melts, the water level",
          "options": [
            "stays about the same",
            "rises",
            "falls dramatically",
            "doubles"
          ],
          "correctAnswer": 0,
          "explanation": "The floating ice displaces its own weight of water; when melted, that same mass of water fills exactly the displaced volume, so the level is essentially unchanged.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "The volume flow rate through a pipe is",
          "options": [
            "\\(Q = Av\\)",
            "\\(Q = A/v\\)",
            "\\(Q = Pv\\)",
            "\\(Q = \\rho v\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Volume flow rate is \\(Q = Av\\) (area times speed).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "Two identical objects are submerged, one deeper than the other. The buoyant forces on them are",
          "options": [
            "equal (same displaced volume)",
            "greater on the deeper one",
            "greater on the shallower one",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Buoyant force depends on displaced volume, not depth, so fully submerged identical objects experience equal buoyancy.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "An object of volume \\(0.005\\ \\text{m}^3\\) and mass \\(3\\ \\text{kg}\\) is fully submerged in water. The net force on it is (use \\(g = 10\\), \\(\\rho_w = 1000\\))",
          "options": [
            "\\(20\\ \\text{N}\\) upward",
            "\\(30\\ \\text{N}\\) down",
            "\\(50\\ \\text{N}\\) up",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Weight \\(= 30\\ \\text{N}\\); buoyancy \\(= 1000(0.005)(10) = 50\\ \\text{N}\\). Net \\(= 50 - 30 = 20\\ \\text{N}\\) upward.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "Water exits a hole \\(0.8\\ \\text{m}\\) below an open tank's surface. Its efflux speed is (Torricelli, \\(g = 10\\))",
          "options": [
            "\\(4\\ \\text{m/s}\\)",
            "\\(8\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(16\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = \\sqrt{2gh} = \\sqrt{2(10)(0.8)} = \\sqrt{16} = 4\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "In a horizontal pipe, water speeds up entering a narrow section. Bernoulli's equation predicts the pressure there",
          "options": [
            "decreases",
            "increases",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "At the same height, faster flow means lower pressure by Bernoulli's principle.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "A hydraulic lift has input area \\(0.02\\ \\text{m}^2\\) and output area \\(0.4\\ \\text{m}^2\\). To lift a \\(4000\\ \\text{N}\\) car, the input force needed is",
          "options": [
            "\\(200\\ \\text{N}\\)",
            "\\(4000\\ \\text{N}\\)",
            "\\(80{,}000\\ \\text{N}\\)",
            "\\(20\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(F_1 = F_2(A_1/A_2) = 4000(0.02/0.4) = 200\\ \\text{N}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "Why does a steel ship float while a solid steel block sinks?",
          "options": [
            "The ship's hollow shape lowers its average density below water's",
            "steel floats naturally",
            "the ship is lighter than the block always",
            "water supports steel"
          ],
          "correctAnswer": 0,
          "explanation": "The hollow, air-filled ship has an average density less than water, so it floats, while solid steel (denser than water) sinks.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "A balloon filled with helium rises in air because",
          "options": [
            "the buoyant force from displaced air exceeds the balloon's total weight",
            "helium is massless",
            "gravity reverses",
            "of surface tension"
          ],
          "correctAnswer": 0,
          "explanation": "The balloon's average density is less than air's, so the buoyant force exceeds its weight, causing it to rise.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "Water flows at \\(2\\ \\text{m/s}\\) in a pipe of area \\(0.1\\ \\text{m}^2\\). Where the area drops to \\(0.04\\ \\text{m}^2\\), the speed is",
          "options": [
            "\\(5\\ \\text{m/s}\\)",
            "\\(0.8\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(10\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By continuity: \\(v_2 = \\frac{A_1 v_1}{A_2} = \\frac{0.1(2)}{0.04} = 5\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "An airplane wing produces lift partly because air travels ___ over the top, giving ___ pressure than below.",
          "options": [
            "faster; lower",
            "slower; higher",
            "faster; higher",
            "slower; lower"
          ],
          "correctAnswer": 0,
          "explanation": "Faster airflow over the top gives lower pressure there (Bernoulli); the pressure difference contributes to lift.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "Why does the buoyant force on a fully submerged object stay constant as it sinks deeper?",
          "options": [
            "The displaced volume is fixed, so the weight of displaced fluid is unchanged",
            "pressure cancels",
            "the object shrinks",
            "depth increases buoyancy"
          ],
          "correctAnswer": 0,
          "explanation": "A fully submerged object always displaces the same volume, so the buoyant force (weight of that fluid) does not change with depth.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "A U-tube contains water and oil (less dense) on opposite sides. At equilibrium, the oil column is",
          "options": [
            "taller than the water column",
            "shorter",
            "the same height",
            "absent"
          ],
          "correctAnswer": 0,
          "explanation": "Since pressures balance at the bottom (\\(\\rho gh\\) equal), the less dense oil must form a taller column than the denser water.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Thermodynamics",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "Temperature is a measure of the",
          "options": [
            "average kinetic energy of particles",
            "total energy",
            "pressure",
            "volume"
          ],
          "correctAnswer": 0,
          "explanation": "Temperature reflects the average kinetic energy of the particles in a substance.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "The ideal gas law is",
          "options": [
            "\\(PV = nRT\\)",
            "\\(PV = mRT\\)",
            "\\(P/V = nRT\\)",
            "\\(PV = R/T\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The ideal gas law: \\(PV = nRT\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "The first law of thermodynamics states that",
          "options": [
            "\\(\\Delta U = Q - W\\)",
            "\\(\\Delta U = Q + W\\) (always)",
            "energy is created",
            "heat equals work always"
          ],
          "correctAnswer": 0,
          "explanation": "The first law: change in internal energy equals heat added minus work done by the gas, \\(\\Delta U = Q - W\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "Heat naturally flows from",
          "options": [
            "higher to lower temperature",
            "lower to higher temperature",
            "cold to hot",
            "both directions equally"
          ],
          "correctAnswer": 0,
          "explanation": "Heat spontaneously flows from hot to cold objects.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "The second law of thermodynamics involves the concept of",
          "options": [
            "entropy (disorder) increasing",
            "energy creation",
            "perfect efficiency",
            "reversibility always"
          ],
          "correctAnswer": 0,
          "explanation": "The second law states that the total entropy of an isolated system tends to increase.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "An isothermal process occurs at constant",
          "options": [
            "temperature",
            "pressure",
            "volume",
            "entropy"
          ],
          "correctAnswer": 0,
          "explanation": "Isothermal means constant temperature.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "An adiabatic process is one in which",
          "options": [
            "no heat is exchanged with the surroundings",
            "temperature is constant",
            "pressure is constant",
            "volume is constant"
          ],
          "correctAnswer": 0,
          "explanation": "In an adiabatic process, Q = 0; no heat flows in or out.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "Work done by a gas equals",
          "options": [
            "the area under the P-V curve",
            "the temperature",
            "the entropy",
            "the number of moles"
          ],
          "correctAnswer": 0,
          "explanation": "Work done by a gas is \\(W = \\int P\\,dV\\), the area under the P-V curve.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "At absolute zero (0 K), the kinetic energy of particles is",
          "options": [
            "at its minimum",
            "at its maximum",
            "infinite",
            "unchanged"
          ],
          "correctAnswer": 0,
          "explanation": "At absolute zero, particle motion (and thus kinetic energy) is at its theoretical minimum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "A heat engine converts",
          "options": [
            "heat into work",
            "work into heat only",
            "matter into energy",
            "cold into hot"
          ],
          "correctAnswer": 0,
          "explanation": "A heat engine converts thermal energy (heat) into mechanical work.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "For an ideal gas at constant temperature, if the volume doubles, the pressure",
          "options": [
            "halves",
            "doubles",
            "stays the same",
            "quadruples"
          ],
          "correctAnswer": 0,
          "explanation": "Boyle's law (isothermal): \\(PV\\) constant, so doubling V halves P.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "In an isothermal process for an ideal gas, the change in internal energy is",
          "options": [
            "zero",
            "positive",
            "negative",
            "equal to the work"
          ],
          "correctAnswer": 0,
          "explanation": "Internal energy of an ideal gas depends only on temperature; at constant T, \\(\\Delta U = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "When a gas expands, it does ___ work on its surroundings.",
          "options": [
            "positive",
            "negative",
            "zero",
            "no"
          ],
          "correctAnswer": 0,
          "explanation": "A gas doing work by expanding does positive work on its surroundings.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "The efficiency of a heat engine is",
          "options": [
            "\\(e = W/Q_H\\)",
            "\\(e = Q_H/W\\)",
            "\\(e = Q_C/Q_H\\)",
            "\\(e = W Q_H\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Efficiency is the work output divided by heat input: \\(e = W/Q_H\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "The maximum possible efficiency of a heat engine operating between temperatures \\(T_H\\) and \\(T_C\\) is the Carnot efficiency",
          "options": [
            "\\(1 - T_C/T_H\\)",
            "\\(T_C/T_H\\)",
            "\\(1 - T_H/T_C\\)",
            "\\(T_H - T_C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Carnot efficiency is \\(e_{Carnot} = 1 - \\frac{T_C}{T_H}\\) (temperatures in kelvin).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "In an adiabatic expansion, a gas's temperature",
          "options": [
            "decreases",
            "increases",
            "stays constant",
            "doubles"
          ],
          "correctAnswer": 0,
          "explanation": "With no heat added (Q = 0) but work done by the expanding gas, internal energy and thus temperature decrease.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "For an ideal gas, if temperature (in kelvin) doubles at constant volume, the pressure",
          "options": [
            "doubles",
            "halves",
            "stays the same",
            "quadruples"
          ],
          "correctAnswer": 0,
          "explanation": "Gay-Lussac's law (constant V): \\(P \\propto T\\), so doubling T doubles P.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "Entropy is a measure of",
          "options": [
            "disorder or the number of microstates",
            "energy",
            "temperature",
            "pressure"
          ],
          "correctAnswer": 0,
          "explanation": "Entropy measures the disorder of a system, related to the number of accessible microstates.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "During an isovolumetric (constant volume) process, the work done by the gas is",
          "options": [
            "zero",
            "positive",
            "negative",
            "maximum"
          ],
          "correctAnswer": 0,
          "explanation": "With no change in volume (\\(\\Delta V = 0\\)), \\(W = \\int P\\,dV = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "Why can't a heat engine be 100% efficient?",
          "options": [
            "Some heat must always be rejected to a cold reservoir (second law)",
            "engines are poorly built",
            "of friction only",
            "energy is destroyed"
          ],
          "correctAnswer": 0,
          "explanation": "The second law requires that some heat always be discharged to a cold reservoir, so no engine can convert all input heat to work.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "A gas absorbs \\(500\\ \\text{J}\\) of heat and does \\(200\\ \\text{J}\\) of work. Its internal energy change is",
          "options": [
            "\\(+300\\ \\text{J}\\)",
            "\\(-300\\ \\text{J}\\)",
            "\\(+700\\ \\text{J}\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\Delta U = Q - W = 500 - 200 = +300\\ \\text{J}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "A Carnot engine operates between \\(600\\ \\text{K}\\) and \\(300\\ \\text{K}\\). Its maximum efficiency is",
          "options": [
            "50%",
            "30%",
            "60%",
            "100%"
          ],
          "correctAnswer": 0,
          "explanation": "\\(e = 1 - \\frac{300}{600} = 0.5 = 50\\%\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "In an isothermal expansion, the heat added to an ideal gas",
          "options": [
            "equals the work done by the gas",
            "is zero",
            "equals the internal energy change",
            "is negative"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\Delta U = 0\\) isothermally, the first law gives \\(Q = W\\); all heat added goes into work.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "The area enclosed by a cyclic P-V loop represents",
          "options": [
            "the net work done per cycle",
            "the internal energy",
            "the entropy",
            "the temperature"
          ],
          "correctAnswer": 0,
          "explanation": "For a thermodynamic cycle, the enclosed area on a P-V diagram equals the net work done per cycle.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "Why does the entropy of the universe increase in any real (irreversible) process?",
          "options": [
            "Real processes generate disorder that cannot be fully reversed",
            "entropy is created from nothing",
            "energy is destroyed",
            "the second law is violated"
          ],
          "correctAnswer": 0,
          "explanation": "Irreversible processes always produce a net increase in the total entropy of the universe—a statement of the second law.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "For an ideal monatomic gas, the internal energy is \\(U = \\tfrac{3}{2}nRT\\). If T triples at constant volume, U",
          "options": [
            "triples",
            "doubles",
            "halves",
            "stays the same"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(U \\propto T\\), tripling the temperature triples the internal energy.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "A refrigerator moves heat from cold to hot. This does not violate the second law because",
          "options": [
            "work input is required to drive the process",
            "heat naturally flows cold to hot",
            "entropy decreases everywhere",
            "no work is needed"
          ],
          "correctAnswer": 0,
          "explanation": "Moving heat from cold to hot requires work input; the second law is satisfied because the total entropy still increases when work is included.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "During an adiabatic compression, the work done on the gas",
          "options": [
            "increases its internal energy and temperature",
            "cools the gas",
            "does nothing",
            "escapes as heat"
          ],
          "correctAnswer": 0,
          "explanation": "With Q = 0, work done on the gas raises internal energy (\\(\\Delta U = -W\\)), so its temperature increases.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "Two identical gases are heated, one at constant pressure and one at constant volume, by the same amount. More heat is required for the",
          "options": [
            "constant-pressure process (some heat also does work)",
            "constant-volume process",
            "both equally",
            "neither"
          ],
          "correctAnswer": 0,
          "explanation": "At constant pressure, the gas also expands and does work, so more heat is needed than at constant volume for the same temperature rise.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "Why does the free (unrestrained) expansion of a gas into a vacuum increase entropy even though no heat is exchanged?",
          "options": [
            "The gas spreads into more available microstates, increasing disorder",
            "heat is added secretly",
            "work is done",
            "temperature rises"
          ],
          "correctAnswer": 0,
          "explanation": "In free expansion the gas occupies a larger volume with more accessible microstates, increasing entropy despite Q = 0 and W = 0.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Electric Force, Field, and Potential",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "Coulomb's law gives the force between charges as",
          "options": [
            "\\(F = \\frac{kq_1 q_2}{r^2}\\)",
            "\\(F = kqr\\)",
            "\\(F = \\frac{kq}{r}\\)",
            "\\(F = qE r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Coulomb's law: \\(F = \\frac{kq_1 q_2}{r^2}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "The electric field of a point charge is",
          "options": [
            "\\(E = \\frac{kq}{r^2}\\)",
            "\\(E = kqr\\)",
            "\\(E = \\frac{kq}{r}\\)",
            "\\(E = qF\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A point charge produces field \\(E = \\frac{kq}{r^2}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "The force on a charge in a field is",
          "options": [
            "\\(F = qE\\)",
            "\\(F = q/E\\)",
            "\\(F = E/q\\)",
            "\\(F = qE^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The force on a charge q in field E is \\(F = qE\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "Like charges ___ and opposite charges ___.",
          "options": [
            "repel; attract",
            "attract; repel",
            "both attract",
            "both repel"
          ],
          "correctAnswer": 0,
          "explanation": "Like charges repel; opposite charges attract.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "Electric field lines point",
          "options": [
            "away from positive and toward negative charges",
            "toward positive charges",
            "randomly",
            "only up"
          ],
          "correctAnswer": 0,
          "explanation": "Field lines emanate from positive charges and terminate on negative charges.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "Electric potential due to a point charge is",
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
          "id": "q-u3-easy-7",
          "question": "The unit of electric charge is the",
          "options": [
            "coulomb",
            "volt",
            "ampere",
            "tesla"
          ],
          "correctAnswer": 0,
          "explanation": "Charge is measured in coulombs (C).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "The electric field between two parallel plates is approximately",
          "options": [
            "uniform",
            "radial",
            "zero",
            "increasing with distance"
          ],
          "correctAnswer": 0,
          "explanation": "The field between closely spaced parallel plates is approximately uniform.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "Electric potential energy between two point charges is",
          "options": [
            "\\(U = \\frac{kq_1 q_2}{r}\\)",
            "\\(U = \\frac{kq_1 q_2}{r^2}\\)",
            "\\(U = kqr\\)",
            "\\(U = qE\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The potential energy of two charges is \\(U = \\frac{kq_1 q_2}{r}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "Inside a conductor in electrostatic equilibrium, the electric field is",
          "options": [
            "zero",
            "maximum",
            "radial",
            "uniform"
          ],
          "correctAnswer": 0,
          "explanation": "The field inside a conductor at equilibrium is zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "If the distance between two charges triples, the force between them becomes",
          "options": [
            "one-ninth",
            "one-third",
            "triple",
            "nine times"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(F \\propto 1/r^2\\), tripling r reduces the force to \\(1/9\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "The relationship between uniform field and potential difference across plates separated by d is",
          "options": [
            "\\(E = V/d\\)",
            "\\(E = Vd\\)",
            "\\(E = d/V\\)",
            "\\(E = V + d\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a uniform field, \\(E = V/d\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "Work done moving a charge q through a potential difference V is",
          "options": [
            "\\(W = qV\\)",
            "\\(W = q/V\\)",
            "\\(W = V/q\\)",
            "\\(W = qV^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The work is \\(W = qV\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "A positive charge released in a field moves toward",
          "options": [
            "lower potential",
            "higher potential",
            "perpendicular to the field",
            "zero field"
          ],
          "correctAnswer": 0,
          "explanation": "A positive charge accelerates in the direction of the field, toward lower potential.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "An equipotential surface is one where",
          "options": [
            "potential is constant, so no work is done moving along it",
            "the field is zero",
            "charge builds up",
            "potential varies"
          ],
          "correctAnswer": 0,
          "explanation": "On an equipotential surface V is constant, so no work is required to move a charge along it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "The electric field is always ___ to equipotential surfaces.",
          "options": [
            "perpendicular",
            "parallel",
            "at 45°",
            "tangent"
          ],
          "correctAnswer": 0,
          "explanation": "The field is perpendicular to equipotential surfaces, pointing toward decreasing potential.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "At the midpoint between two equal positive charges, the electric field is",
          "options": [
            "zero",
            "maximum",
            "directed toward one charge",
            "infinite"
          ],
          "correctAnswer": 0,
          "explanation": "The two equal fields point in opposite directions and cancel at the midpoint, giving zero net field.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "Gauss's law relates electric flux through a closed surface to",
          "options": [
            "the enclosed charge",
            "the surface area only",
            "the current",
            "the magnetic field"
          ],
          "correctAnswer": 0,
          "explanation": "Gauss's law: flux equals enclosed charge divided by \\(\\varepsilon_0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "A hollow conductor shields its interior cavity such that the field inside (no enclosed charge) is",
          "options": [
            "zero",
            "large",
            "radial",
            "equal to the outside field"
          ],
          "correctAnswer": 0,
          "explanation": "A hollow conductor acts as a Faraday cage; the field inside the empty cavity is zero.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "Two charges \\(+q\\) and \\(-q\\) close together form",
          "options": [
            "a dipole",
            "a monopole",
            "a conductor",
            "a capacitor"
          ],
          "correctAnswer": 0,
          "explanation": "Equal and opposite charges close together form an electric dipole.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "Two \\(+3\\ \\mu\\text{C}\\) charges are \\(0.1\\ \\text{m}\\) apart. The force between them is (use \\(k = 9\\times10^9\\))",
          "options": [
            "about \\(8.1\\ \\text{N}\\)",
            "\\(0.81\\ \\text{N}\\)",
            "\\(81\\ \\text{N}\\)",
            "\\(0.081\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(F = \\frac{(9\\times10^9)(3\\times10^{-6})^2}{(0.1)^2} = \\frac{9\\times10^9 \\times 9\\times10^{-12}}{0.01} = 8.1\\ \\text{N}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "A proton (charge e) is accelerated through \\(1000\\ \\text{V}\\). Its kinetic energy gained is",
          "options": [
            "\\(1000\\ \\text{eV}\\)",
            "\\(1\\ \\text{eV}\\)",
            "\\(10^6\\ \\text{eV}\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE = qV = e(1000\\ \\text{V}) = 1000\\ \\text{eV}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "A charged oil drop is suspended motionless between horizontal plates. The electric force must",
          "options": [
            "balance gravity (\\(qE = mg\\))",
            "exceed gravity",
            "be zero",
            "point downward"
          ],
          "correctAnswer": 0,
          "explanation": "For suspension, the upward electric force balances the drop's weight: \\(qE = mg\\)—the principle of Millikan's experiment.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "Why is the electric field zero inside a conductor even when placed in an external field?",
          "options": [
            "Charges redistribute to the surface, creating an internal field that cancels the external one",
            "the conductor blocks all fields",
            "charges disappear",
            "of gravity"
          ],
          "correctAnswer": 0,
          "explanation": "Free charges in the conductor move to the surface until their induced field exactly cancels the external field inside.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "The potential at a point due to multiple charges is found by",
          "options": [
            "adding the scalar potentials from each charge",
            "vector addition of forces",
            "subtracting the fields",
            "multiplying the charges"
          ],
          "correctAnswer": 0,
          "explanation": "Potential is a scalar, so total potential is the algebraic sum of the individual potentials \\(V = \\sum \\frac{kq_i}{r_i}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "A dipole placed in a uniform field experiences",
          "options": [
            "a torque but zero net force",
            "a net force but no torque",
            "neither",
            "a constant velocity"
          ],
          "correctAnswer": 0,
          "explanation": "In a uniform field, the equal and opposite forces on a dipole give zero net force but a torque that aligns it with the field.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "An electron and a proton are placed in the same uniform field. Compared to the proton, the electron experiences",
          "options": [
            "the same magnitude of force but opposite direction and much greater acceleration",
            "a larger force",
            "no force",
            "the same acceleration"
          ],
          "correctAnswer": 0,
          "explanation": "Both have the same charge magnitude, so equal force magnitude (opposite directions), but the electron's much smaller mass gives it a far greater acceleration.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "Field lines are closer together where the field is",
          "options": [
            "stronger",
            "weaker",
            "zero",
            "uniform"
          ],
          "correctAnswer": 0,
          "explanation": "The density of field lines represents field strength; closely spaced lines indicate a stronger field.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "Why does charge concentrate at sharp points on a conductor?",
          "options": [
            "The surface charge density and field are greatest where curvature is largest",
            "charge avoids flat areas",
            "of gravity",
            "points repel charge"
          ],
          "correctAnswer": 0,
          "explanation": "Charge density (and the field) is greatest at sharp points of high curvature—the basis of lightning rods.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "A charge moves along an equipotential surface. The work done by the electric force is",
          "options": [
            "zero",
            "positive",
            "negative",
            "maximum"
          ],
          "correctAnswer": 0,
          "explanation": "Since potential is constant along an equipotential, the potential difference is zero, so \\(W = q\\Delta V = 0\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Electric Circuits",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "Ohm's law states that",
          "options": [
            "\\(V = IR\\)",
            "\\(V = I/R\\)",
            "\\(V = I^2 R\\)",
            "\\(V = R/I\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Ohm's law: \\(V = IR\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "Electric current is the",
          "options": [
            "rate of flow of charge",
            "charge times voltage",
            "resistance",
            "power"
          ],
          "correctAnswer": 0,
          "explanation": "Current is the rate of charge flow, \\(I = Q/t\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "Power dissipated in a resistor is",
          "options": [
            "\\(P = IV = I^2 R = V^2/R\\)",
            "\\(P = IR\\)",
            "\\(P = I/R\\)",
            "\\(P = V/I\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Power can be written \\(P = IV = I^2 R = V^2/R\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "Resistors in series have total resistance equal to",
          "options": [
            "the sum of the resistances",
            "the reciprocal sum",
            "the product",
            "the smallest one"
          ],
          "correctAnswer": 0,
          "explanation": "Series resistances add: \\(R_{total} = R_1 + R_2 + \\dots\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "Resistors in parallel have total resistance from",
          "options": [
            "\\(\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}\\)",
            "\\(R = R_1 + R_2\\)",
            "\\(R = R_1 R_2\\)",
            "the largest resistor"
          ],
          "correctAnswer": 0,
          "explanation": "Parallel resistors add reciprocally.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "Kirchhoff's junction rule expresses conservation of",
          "options": [
            "charge",
            "energy",
            "momentum",
            "mass"
          ],
          "correctAnswer": 0,
          "explanation": "The junction rule (current in = current out) expresses conservation of charge.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "Kirchhoff's loop rule expresses conservation of",
          "options": [
            "energy",
            "charge",
            "momentum",
            "current"
          ],
          "correctAnswer": 0,
          "explanation": "The loop rule (voltage changes sum to zero) expresses conservation of energy.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "The unit of resistance is the",
          "options": [
            "ohm",
            "volt",
            "ampere",
            "watt"
          ],
          "correctAnswer": 0,
          "explanation": "Resistance is measured in ohms (Ω).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "A capacitor stores",
          "options": [
            "charge and electrical energy",
            "current",
            "magnetic energy",
            "resistance"
          ],
          "correctAnswer": 0,
          "explanation": "A capacitor stores charge and energy in its electric field.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "An ammeter is connected in ___ and a voltmeter in ___.",
          "options": [
            "series; parallel",
            "parallel; series",
            "series; series",
            "parallel; parallel"
          ],
          "correctAnswer": 0,
          "explanation": "Ammeters go in series (measure current); voltmeters go in parallel (measure voltage).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A \\(9\\ \\text{V}\\) battery drives current through a \\(3\\ \\Omega\\) resistor. The current is",
          "options": [
            "\\(3\\ \\text{A}\\)",
            "\\(27\\ \\text{A}\\)",
            "\\(0.33\\ \\text{A}\\)",
            "\\(12\\ \\text{A}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(I = V/R = 9/3 = 3\\ \\text{A}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "Two \\(4\\ \\Omega\\) resistors in parallel have equivalent resistance",
          "options": [
            "\\(2\\ \\Omega\\)",
            "\\(8\\ \\Omega\\)",
            "\\(4\\ \\Omega\\)",
            "\\(1\\ \\Omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For two equal resistors in parallel, \\(R = R/2 = 2\\ \\Omega\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "A \\(3\\ \\text{A}\\) current flows through a \\(4\\ \\Omega\\) resistor. The power dissipated is",
          "options": [
            "\\(36\\ \\text{W}\\)",
            "\\(12\\ \\text{W}\\)",
            "\\(1.3\\ \\text{W}\\)",
            "\\(48\\ \\text{W}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(P = I^2 R = 9 \\times 4 = 36\\ \\text{W}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "In a fully charged RC circuit (steady state), the current through the capacitor branch is",
          "options": [
            "zero",
            "maximum",
            "increasing",
            "equal to V/R"
          ],
          "correctAnswer": 0,
          "explanation": "A fully charged capacitor blocks DC, acting as an open circuit—no current flows through it at steady state.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "A real battery with internal resistance r has terminal voltage",
          "options": [
            "\\(V = \\varepsilon - Ir\\)",
            "\\(V = \\varepsilon + Ir\\)",
            "\\(V = \\varepsilon\\)",
            "\\(V = Ir\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Terminal voltage is the EMF minus the internal resistance drop: \\(V = \\varepsilon - Ir\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "In a series circuit, the current through each resistor is",
          "options": [
            "the same",
            "different",
            "zero",
            "doubled"
          ],
          "correctAnswer": 0,
          "explanation": "In series, the same current flows through all components.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "In a parallel circuit, the voltage across each branch is",
          "options": [
            "the same",
            "different",
            "zero",
            "doubled"
          ],
          "correctAnswer": 0,
          "explanation": "Parallel branches all share the same voltage.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "A resistor's resistance depends on length L and area A as",
          "options": [
            "\\(R = \\rho L/A\\)",
            "\\(R = \\rho A/L\\)",
            "\\(R = \\rho LA\\)",
            "\\(R = \\rho/(LA)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Resistance is \\(R = \\rho L/A\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "Immediately after a switch closes in an RC circuit (uncharged capacitor), the capacitor acts like",
          "options": [
            "a wire (short circuit)",
            "an open circuit",
            "a battery",
            "a large resistor"
          ],
          "correctAnswer": 0,
          "explanation": "An uncharged capacitor initially allows maximum current, behaving like a short circuit.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "The RC time constant is",
          "options": [
            "\\(\\tau = RC\\)",
            "\\(\\tau = R/C\\)",
            "\\(\\tau = C/R\\)",
            "\\(\\tau = RC^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The RC time constant is \\(\\tau = RC\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A \\(2\\ \\Omega\\) and \\(3\\ \\Omega\\) resistor are in series with a \\(10\\ \\text{V}\\) battery. The current is",
          "options": [
            "\\(2\\ \\text{A}\\)",
            "\\(5\\ \\text{A}\\)",
            "\\(1\\ \\text{A}\\)",
            "\\(0.5\\ \\text{A}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Total resistance \\(= 5\\ \\Omega\\); \\(I = 10/5 = 2\\ \\text{A}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "In a series circuit, the resistor with the larger resistance dissipates",
          "options": [
            "more power (\\(P = I^2 R\\), same I)",
            "less power",
            "equal power",
            "no power"
          ],
          "correctAnswer": 0,
          "explanation": "In series I is the same, so \\(P = I^2 R\\) is greater for the larger resistance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "In a parallel circuit, the resistor with the smaller resistance dissipates",
          "options": [
            "more power (\\(P = V^2/R\\), same V)",
            "less power",
            "equal power",
            "no power"
          ],
          "correctAnswer": 0,
          "explanation": "In parallel V is the same, so \\(P = V^2/R\\) is greater for the smaller resistance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "After one time constant, a charging capacitor reaches about",
          "options": [
            "63% of its final charge",
            "37%",
            "50%",
            "100%"
          ],
          "correctAnswer": 0,
          "explanation": "After \\(\\tau = RC\\), the capacitor reaches \\(1 - e^{-1} \\approx 63\\%\\) of its final charge.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "A \\(6\\ \\Omega\\) and \\(3\\ \\Omega\\) resistor are in parallel, connected to \\(12\\ \\text{V}\\). The total current from the battery is",
          "options": [
            "\\(6\\ \\text{A}\\)",
            "\\(2\\ \\text{A}\\)",
            "\\(4\\ \\text{A}\\)",
            "\\(12\\ \\text{A}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Parallel: \\(R = \\frac{(6)(3)}{9} = 2\\ \\Omega\\); \\(I = 12/2 = 6\\ \\text{A}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "When a capacitor fully discharges through a resistor, the energy dissipated equals",
          "options": [
            "the energy initially stored in the capacitor",
            "zero",
            "half the stored energy",
            "twice the stored energy"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, all the capacitor's stored energy \\(\\tfrac{1}{2}CV^2\\) is dissipated as heat in the resistor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "Adding a resistor in parallel to a circuit ___ the total resistance and ___ the total current drawn.",
          "options": [
            "decreases; increases",
            "increases; decreases",
            "doesn't change; doesn't change",
            "increases; increases"
          ],
          "correctAnswer": 0,
          "explanation": "Adding a parallel path decreases total resistance, so (for a fixed voltage) the total current drawn increases.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "A battery of EMF \\(\\varepsilon\\) and internal resistance r delivers maximum power to a load resistor when",
          "options": [
            "\\(R = r\\)",
            "\\(R = 0\\)",
            "\\(R \\to \\infty\\)",
            "\\(R = 2r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Maximum power transfer occurs when the load resistance matches the internal resistance, \\(R = r\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "Solving a multi-loop circuit generally requires",
          "options": [
            "applying both Kirchhoff's junction and loop rules",
            "only Ohm's law",
            "only the loop rule",
            "guessing"
          ],
          "correctAnswer": 0,
          "explanation": "Multi-loop circuits need junction-rule and loop-rule equations to form a solvable system for the currents.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "Increasing the resistance in an RC circuit (fixed C) causes the capacitor to charge",
          "options": [
            "more slowly (larger time constant)",
            "more quickly",
            "instantly",
            "not at all"
          ],
          "correctAnswer": 0,
          "explanation": "A larger R increases \\(\\tau = RC\\), so the capacitor charges more slowly.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Magnetism and Electromagnetic Induction",
      "questions": [
        {
          "id": "q-u5-easy-1",
          "question": "The magnetic force on a moving charge is",
          "options": [
            "\\(\\vec{F} = q\\vec{v}\\times\\vec{B}\\)",
            "\\(F = qE\\)",
            "\\(F = qB\\)",
            "\\(F = qv/B\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The magnetic force is \\(\\vec{F} = q\\vec{v}\\times\\vec{B}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "A charge moving parallel to a magnetic field experiences",
          "options": [
            "zero magnetic force",
            "maximum force",
            "a force toward the field",
            "a force along the field"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(F = qvB\\sin\\theta\\), the force is zero when velocity is parallel to B (\\(\\theta = 0\\)).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "A charged particle moving perpendicular to a uniform field follows a",
          "options": [
            "circular path",
            "straight line",
            "parabola",
            "spiral outward"
          ],
          "correctAnswer": 0,
          "explanation": "The magnetic force provides centripetal force, giving circular motion.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "Faraday's law states that an EMF is induced by a changing",
          "options": [
            "magnetic flux",
            "charge",
            "resistance",
            "temperature"
          ],
          "correctAnswer": 0,
          "explanation": "A changing magnetic flux through a loop induces an EMF.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "Lenz's law states the induced current opposes",
          "options": [
            "the change in flux that produced it",
            "all current",
            "the electric field",
            "the resistance"
          ],
          "correctAnswer": 0,
          "explanation": "The induced current opposes the change in flux, consistent with energy conservation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "The magnetic force on a current-carrying wire is",
          "options": [
            "\\(\\vec{F} = I\\vec{L}\\times\\vec{B}\\)",
            "\\(F = ILB^2\\)",
            "\\(F = IL/B\\)",
            "\\(F = qvB\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A wire carrying current I in field B experiences \\(\\vec{F} = I\\vec{L}\\times\\vec{B}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "Magnetic field lines form",
          "options": [
            "closed loops",
            "open lines from north poles",
            "straight lines",
            "radial patterns"
          ],
          "correctAnswer": 0,
          "explanation": "Because there are no magnetic monopoles, magnetic field lines always form closed loops.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "The unit of magnetic field is the",
          "options": [
            "tesla",
            "volt",
            "ampere",
            "weber"
          ],
          "correctAnswer": 0,
          "explanation": "Magnetic field is measured in teslas (T).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "A generator produces electricity by",
          "options": [
            "rotating a coil in a magnetic field",
            "using a static field",
            "storing charge",
            "dissipating heat"
          ],
          "correctAnswer": 0,
          "explanation": "A generator rotates a coil in a magnetic field, changing the flux and inducing an EMF.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "The magnetic force does ___ work on a moving charge.",
          "options": [
            "zero",
            "positive",
            "negative",
            "variable"
          ],
          "correctAnswer": 0,
          "explanation": "The magnetic force is always perpendicular to velocity, so it does no work.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "A charge q moving at speed v perpendicular to field B has circular-path radius",
          "options": [
            "\\(r = \\frac{mv}{qB}\\)",
            "\\(r = \\frac{qB}{mv}\\)",
            "\\(r = qvB\\)",
            "\\(r = \\frac{mv}{q}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Setting \\(qvB = mv^2/r\\) gives \\(r = \\frac{mv}{qB}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "Two parallel wires carrying current in the same direction",
          "options": [
            "attract",
            "repel",
            "exert no force",
            "rotate"
          ],
          "correctAnswer": 0,
          "explanation": "Parallel currents in the same direction attract each other.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "A magnetic flux changes from \\(0.1\\ \\text{Wb}\\) to \\(0.5\\ \\text{Wb}\\) in \\(0.2\\ \\text{s}\\). The average induced EMF is",
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
          "id": "q-u5-medium-4",
          "question": "A magnet pushed toward a coil induces a current whose field",
          "options": [
            "opposes the approaching magnet",
            "attracts it",
            "is zero",
            "is in the same direction"
          ],
          "correctAnswer": 0,
          "explanation": "By Lenz's law, the induced current opposes the increasing flux, repelling the approaching magnet.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "The magnetic field around a long straight current-carrying wire is",
          "options": [
            "\\(B = \\frac{\\mu_0 I}{2\\pi r}\\)",
            "\\(B = \\mu_0 I r\\)",
            "\\(B = \\frac{\\mu_0 I}{r^2}\\)",
            "\\(B = qvB\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a long straight wire, \\(B = \\frac{\\mu_0 I}{2\\pi r}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "A conducting rod of length L moving at speed v perpendicular to field B generates motional EMF",
          "options": [
            "\\(\\varepsilon = BLv\\)",
            "\\(\\varepsilon = BL/v\\)",
            "\\(\\varepsilon = B/(Lv)\\)",
            "\\(\\varepsilon = BLv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A moving rod generates \\(\\varepsilon = BLv\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "An EMF is induced in a loop by changing",
          "options": [
            "the field, the loop area, or its orientation",
            "only the resistance",
            "only the temperature",
            "only the charge"
          ],
          "correctAnswer": 0,
          "explanation": "Any change in flux—via field, area, or orientation—induces an EMF.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "A transformer changes voltage using",
          "options": [
            "mutual induction between two coils",
            "a static field",
            "resistors",
            "capacitors"
          ],
          "correctAnswer": 0,
          "explanation": "A transformer uses a changing flux shared between two coils to change the voltage.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "The period of a charged particle's circular motion in a magnetic field is",
          "options": [
            "independent of its speed",
            "proportional to speed",
            "proportional to radius squared",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "The period \\(T = \\frac{2\\pi m}{qB}\\) does not depend on the particle's speed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "Eddy currents in a moving conductor",
          "options": [
            "oppose the motion (Lenz's law), dissipating energy",
            "speed up the motion",
            "are always useful",
            "have no effect"
          ],
          "correctAnswer": 0,
          "explanation": "Induced eddy currents oppose the change producing them, causing a retarding force and energy dissipation as heat.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "A proton moving east enters a field pointing north. The magnetic force on it is directed",
          "options": [
            "upward",
            "downward",
            "west",
            "south"
          ],
          "correctAnswer": 0,
          "explanation": "Using the right-hand rule for \\(\\vec{v}\\times\\vec{B}\\) (east × north) on a positive charge gives an upward force.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "In a mass spectrometer, ions of equal charge and speed but different mass are separated because",
          "options": [
            "heavier ions follow larger-radius paths",
            "heavier ions move faster",
            "lighter ions stop",
            "mass has no effect"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(r = mv/(qB)\\), heavier ions curve in larger circles, separating them by mass.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "A rod slides on rails in a field, generating EMF. The induced current causes a force on the rod that",
          "options": [
            "opposes its motion",
            "speeds it up",
            "is perpendicular to the rails",
            "is zero"
          ],
          "correctAnswer": 0,
          "explanation": "By Lenz's law, the induced current experiences a force opposing the rod's motion, requiring work to keep it moving.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "A charged particle enters a field with velocity components both parallel and perpendicular to B. Its path is a",
          "options": [
            "helix",
            "circle",
            "straight line",
            "parabola"
          ],
          "correctAnswer": 0,
          "explanation": "The perpendicular component gives circular motion, and the parallel component gives uniform drift—combining into a helix.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-5",
          "question": "A velocity selector uses crossed E and B fields so that particles pass straight through when",
          "options": [
            "\\(v = E/B\\)",
            "\\(v = EB\\)",
            "\\(v = E + B\\)",
            "\\(v = B/E\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Balancing electric and magnetic forces (\\(qE = qvB\\)) selects particles with \\(v = E/B\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "A coil rotates at constant angular speed in a uniform field. The induced EMF is",
          "options": [
            "sinusoidal (alternating)",
            "constant",
            "exponential",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "As the flux varies sinusoidally, the induced EMF is sinusoidal—the principle of an AC generator.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "Why is the magnetic force unable to change a charged particle's speed?",
          "options": [
            "It is always perpendicular to velocity, so it does no work",
            "it is too weak",
            "it points along velocity",
            "it is a fictitious force"
          ],
          "correctAnswer": 0,
          "explanation": "Since the force is always perpendicular to velocity, it does no work and only changes direction, not speed.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "A generator's mechanical work input equals the electrical energy output (minus losses) because of",
          "options": [
            "conservation of energy",
            "conservation of momentum",
            "Ohm's law",
            "Coulomb's law"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, the mechanical work done against the induced (Lenz's law) force is converted into electrical energy.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "Increasing the number of turns in a coil ___ the induced EMF for a given rate of flux change.",
          "options": [
            "increases",
            "decreases",
            "does not change",
            "reverses"
          ],
          "correctAnswer": 0,
          "explanation": "For N turns, \\(\\varepsilon = -N\\frac{d\\Phi}{dt}\\), so more turns give a larger EMF.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "Two parallel wires carry opposite currents. They",
          "options": [
            "repel each other",
            "attract each other",
            "exert no force",
            "rotate"
          ],
          "correctAnswer": 0,
          "explanation": "Antiparallel currents (opposite directions) repel each other.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 6,
      "title": "Geometric and Physical Optics",
      "questions": [
        {
          "id": "q-u6-easy-1",
          "question": "Light travels fastest in",
          "options": [
            "a vacuum",
            "water",
            "glass",
            "diamond"
          ],
          "correctAnswer": 0,
          "explanation": "Light travels fastest in a vacuum; it slows in denser media.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-2",
          "question": "The law of reflection states that the angle of incidence equals the",
          "options": [
            "angle of reflection",
            "angle of refraction",
            "critical angle",
            "focal length"
          ],
          "correctAnswer": 0,
          "explanation": "For reflection, the angle of incidence equals the angle of reflection (measured from the normal).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-3",
          "question": "Refraction is the ___ of light as it passes between media.",
          "options": [
            "bending",
            "reflection",
            "absorption",
            "emission"
          ],
          "correctAnswer": 0,
          "explanation": "Refraction is the bending of light as it changes speed passing from one medium to another.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-4",
          "question": "The index of refraction of a material is",
          "options": [
            "\\(n = c/v\\)",
            "\\(n = v/c\\)",
            "\\(n = cv\\)",
            "\\(n = c + v\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The refractive index is \\(n = c/v\\), the ratio of the speed of light in vacuum to that in the medium.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-5",
          "question": "Snell's law relates the angles and indices as",
          "options": [
            "\\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\)",
            "\\(n_1\\theta_1 = n_2\\theta_2\\)",
            "\\(n_1\\cos\\theta_1 = n_2\\cos\\theta_2\\)",
            "\\(n_1 = n_2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Snell's law: \\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-6",
          "question": "A converging (convex) lens",
          "options": [
            "brings parallel rays to a focus",
            "spreads parallel rays apart",
            "reflects light",
            "absorbs light"
          ],
          "correctAnswer": 0,
          "explanation": "A convex (converging) lens focuses parallel light rays to a focal point.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-7",
          "question": "The visible light spectrum ranges from",
          "options": [
            "red (long wavelength) to violet (short wavelength)",
            "only red",
            "only blue",
            "infrared to ultraviolet"
          ],
          "correctAnswer": 0,
          "explanation": "Visible light ranges from red (longest wavelength) to violet (shortest).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-8",
          "question": "Diffraction is the ___ of waves around obstacles or through openings.",
          "options": [
            "bending or spreading",
            "reflection",
            "absorption",
            "polarization"
          ],
          "correctAnswer": 0,
          "explanation": "Diffraction is the bending and spreading of waves as they pass around obstacles or through openings.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-9",
          "question": "When two waves overlap, the resulting displacement is the sum of the individual displacements. This is called",
          "options": [
            "superposition",
            "reflection",
            "refraction",
            "dispersion"
          ],
          "correctAnswer": 0,
          "explanation": "The principle of superposition states that overlapping waves add their displacements.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-10",
          "question": "White light passing through a prism separates into colors because of",
          "options": [
            "dispersion (different wavelengths refract differently)",
            "reflection",
            "diffraction",
            "absorption"
          ],
          "correctAnswer": 0,
          "explanation": "Dispersion occurs because the refractive index varies with wavelength, bending different colors by different amounts.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-medium-1",
          "question": "Light passing from air into water (higher index) bends",
          "options": [
            "toward the normal",
            "away from the normal",
            "not at all",
            "backward"
          ],
          "correctAnswer": 0,
          "explanation": "Entering a denser (higher-n) medium, light slows and bends toward the normal.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-2",
          "question": "Total internal reflection can occur when light travels from a ___ to a ___ medium beyond the critical angle.",
          "options": [
            "higher-index; lower-index",
            "lower-index; higher-index",
            "vacuum; vacuum",
            "gas; gas"
          ],
          "correctAnswer": 0,
          "explanation": "Total internal reflection occurs when light in a higher-index medium hits the boundary with a lower-index medium at an angle beyond the critical angle.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-3",
          "question": "A real image formed by a converging lens is",
          "options": [
            "inverted and can be projected on a screen",
            "upright and virtual",
            "always the same size",
            "behind the lens on the same side as the object"
          ],
          "correctAnswer": 0,
          "explanation": "A real image is inverted and forms where light actually converges, so it can be projected onto a screen.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-4",
          "question": "In Young's double-slit experiment, bright fringes appear where the waves interfere",
          "options": [
            "constructively (in phase)",
            "destructively",
            "not at all",
            "randomly"
          ],
          "correctAnswer": 0,
          "explanation": "Bright fringes occur where light from the two slits arrives in phase (constructive interference).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-5",
          "question": "The thin-lens equation is",
          "options": [
            "\\(\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}\\)",
            "\\(f = d_o + d_i\\)",
            "\\(f = d_o d_i\\)",
            "\\(\\frac{1}{f} = d_o d_i\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The thin-lens equation is \\(\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-6",
          "question": "A diverging (concave) lens always forms an image that is",
          "options": [
            "virtual, upright, and reduced",
            "real and inverted",
            "larger than the object",
            "projected on a screen"
          ],
          "correctAnswer": 0,
          "explanation": "A concave (diverging) lens always produces a virtual, upright, reduced image.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-7",
          "question": "When light reflects off a medium of higher index (e.g., air to glass), it undergoes a phase shift of",
          "options": [
            "half a wavelength (180°)",
            "a full wavelength",
            "no shift",
            "a quarter wavelength"
          ],
          "correctAnswer": 0,
          "explanation": "Reflection off a higher-index medium causes a 180° (half-wavelength) phase shift, important in thin-film interference.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-8",
          "question": "The critical angle for total internal reflection depends on",
          "options": [
            "the ratio of the two indices of refraction",
            "only the wavelength",
            "the intensity",
            "the frequency only"
          ],
          "correctAnswer": 0,
          "explanation": "The critical angle satisfies \\(\\sin\\theta_c = n_2/n_1\\), depending on the ratio of refractive indices.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-9",
          "question": "Increasing the slit separation in a double-slit experiment makes the fringe spacing",
          "options": [
            "smaller",
            "larger",
            "zero",
            "unchanged"
          ],
          "correctAnswer": 0,
          "explanation": "Fringe spacing is inversely proportional to slit separation, so increasing the separation decreases the spacing.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-10",
          "question": "Polarization is a property of ___ waves.",
          "options": [
            "transverse (like light)",
            "longitudinal (like sound)",
            "all waves equally",
            "only water waves"
          ],
          "correctAnswer": 0,
          "explanation": "Only transverse waves (like light) can be polarized; longitudinal waves (like sound) cannot.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-hard-1",
          "question": "Light travels from glass (\\(n = 1.5\\)) to air. The critical angle is approximately",
          "options": [
            "\\(42°\\)",
            "\\(30°\\)",
            "\\(60°\\)",
            "\\(90°\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\sin\\theta_c = n_2/n_1 = 1/1.5 = 0.667\\), so \\(\\theta_c \\approx 42°\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-2",
          "question": "An object is placed at twice the focal length (\\(2f\\)) of a converging lens. The image is",
          "options": [
            "real, inverted, same size, at 2f on the other side",
            "virtual and upright",
            "larger than the object",
            "at the focal point"
          ],
          "correctAnswer": 0,
          "explanation": "At \\(d_o = 2f\\), the thin-lens equation gives \\(d_i = 2f\\) with magnification 1—a real, inverted, same-size image.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-3",
          "question": "In a double-slit experiment, the condition for constructive interference (bright fringes) is",
          "options": [
            "\\(d\\sin\\theta = m\\lambda\\)",
            "\\(d\\sin\\theta = (m + \\tfrac{1}{2})\\lambda\\)",
            "\\(d\\cos\\theta = m\\lambda\\)",
            "\\(d = m\\lambda\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Bright fringes occur when the path difference is a whole number of wavelengths: \\(d\\sin\\theta = m\\lambda\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-4",
          "question": "A soap film appears colored due to",
          "options": [
            "thin-film interference of light reflecting off its surfaces",
            "total internal reflection",
            "dispersion in a prism",
            "absorption"
          ],
          "correctAnswer": 0,
          "explanation": "Thin-film interference between light reflecting off the film's top and bottom surfaces reinforces certain wavelengths, producing colors.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-5",
          "question": "Why does the sky appear blue?",
          "options": [
            "Shorter (blue) wavelengths scatter more than longer ones (Rayleigh scattering)",
            "the sky emits blue light",
            "blue reflects off the ocean",
            "air absorbs red light"
          ],
          "correctAnswer": 0,
          "explanation": "Rayleigh scattering by air molecules is stronger for shorter wavelengths, so blue light scatters throughout the sky more than red.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-6",
          "question": "An object is placed inside the focal length of a converging lens (\\(d_o < f\\)). The image is",
          "options": [
            "virtual, upright, and enlarged (a magnifying glass)",
            "real and inverted",
            "reduced",
            "at infinity"
          ],
          "correctAnswer": 0,
          "explanation": "When the object is within f, a converging lens forms a virtual, upright, enlarged image—how a magnifying glass works.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-7",
          "question": "Fiber optic cables transmit light using",
          "options": [
            "total internal reflection",
            "refraction only",
            "diffraction",
            "dispersion"
          ],
          "correctAnswer": 0,
          "explanation": "Fiber optics guide light along the fiber by total internal reflection at the core-cladding boundary.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-8",
          "question": "When light enters a medium of higher index, its wavelength ___ while its frequency ___.",
          "options": [
            "decreases; stays the same",
            "increases; decreases",
            "stays the same; increases",
            "decreases; increases"
          ],
          "correctAnswer": 0,
          "explanation": "In a denser medium, light slows and its wavelength decreases, but its frequency (set by the source) remains unchanged.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-9",
          "question": "For a single slit, the first dark fringe (minimum) occurs at",
          "options": [
            "\\(a\\sin\\theta = \\lambda\\)",
            "\\(a\\sin\\theta = m\\lambda\\) with the same condition as bright",
            "\\(a = \\lambda\\)",
            "\\(a\\cos\\theta = \\lambda\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For single-slit diffraction, the first minimum occurs where \\(a\\sin\\theta = \\lambda\\) (a is the slit width).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-10",
          "question": "Why does using longer-wavelength light in a double-slit experiment increase the fringe spacing?",
          "options": [
            "Fringe spacing is proportional to wavelength",
            "longer wavelengths travel slower",
            "frequency increases",
            "the slits move apart"
          ],
          "correctAnswer": 0,
          "explanation": "Fringe spacing \\(\\propto \\lambda L/d\\), so increasing the wavelength increases the spacing between fringes.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 7,
      "title": "Quantum, Atomic, and Nuclear Physics",
      "questions": [
        {
          "id": "q-u7-easy-1",
          "question": "The photoelectric effect demonstrates that light behaves as",
          "options": [
            "particles (photons)",
            "only waves",
            "only a fluid",
            "sound"
          ],
          "correctAnswer": 0,
          "explanation": "The photoelectric effect shows that light delivers energy in discrete packets (photons), revealing its particle nature.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-2",
          "question": "The energy of a photon is",
          "options": [
            "\\(E = hf\\)",
            "\\(E = h/f\\)",
            "\\(E = mc\\)",
            "\\(E = hf^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A photon's energy is \\(E = hf\\), where h is Planck's constant and f is frequency.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-3",
          "question": "The mass-energy equivalence is expressed as",
          "options": [
            "\\(E = mc^2\\)",
            "\\(E = mc\\)",
            "\\(E = \\tfrac{1}{2}mc^2\\)",
            "\\(E = m/c^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Einstein's relation: \\(E = mc^2\\), relating mass and energy.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-4",
          "question": "An atom consists of a nucleus (protons and neutrons) surrounded by",
          "options": [
            "electrons",
            "only protons",
            "photons",
            "neutrinos"
          ],
          "correctAnswer": 0,
          "explanation": "Electrons occupy the region around the dense central nucleus of protons and neutrons.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-5",
          "question": "Radioactive decay is the process by which",
          "options": [
            "unstable nuclei emit particles or energy",
            "atoms gain electrons",
            "light is absorbed",
            "chemical bonds form"
          ],
          "correctAnswer": 0,
          "explanation": "Radioactive decay occurs when unstable nuclei emit radiation to become more stable.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-6",
          "question": "The three main types of radioactive decay are alpha, beta, and",
          "options": [
            "gamma",
            "delta",
            "photon",
            "proton"
          ],
          "correctAnswer": 0,
          "explanation": "The three main decay types are alpha (helium nuclei), beta (electrons/positrons), and gamma (high-energy photons).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-7",
          "question": "The half-life of a radioactive isotope is the time for",
          "options": [
            "half the sample to decay",
            "all of it to decay",
            "it to double",
            "nothing to happen"
          ],
          "correctAnswer": 0,
          "explanation": "The half-life is the time for half of a radioactive sample to decay.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-8",
          "question": "Electrons in an atom can only occupy certain",
          "options": [
            "discrete energy levels",
            "continuous energies",
            "any energy",
            "zero energy"
          ],
          "correctAnswer": 0,
          "explanation": "Electrons occupy quantized (discrete) energy levels, a key idea of quantum theory.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-9",
          "question": "When an electron drops to a lower energy level, it",
          "options": [
            "emits a photon",
            "absorbs a photon",
            "gains mass",
            "disappears"
          ],
          "correctAnswer": 0,
          "explanation": "An electron dropping to a lower level emits a photon whose energy equals the energy difference.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-10",
          "question": "Nuclear fission is the",
          "options": [
            "splitting of a heavy nucleus into lighter ones",
            "joining of nuclei",
            "emission of light",
            "loss of electrons"
          ],
          "correctAnswer": 0,
          "explanation": "Fission is the splitting of a heavy nucleus into lighter fragments, releasing energy.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-medium-1",
          "question": "In the photoelectric effect, increasing the light's intensity (same frequency above threshold) increases the",
          "options": [
            "number of ejected electrons",
            "kinetic energy of each electron",
            "threshold frequency",
            "work function"
          ],
          "correctAnswer": 0,
          "explanation": "Higher intensity means more photons, ejecting more electrons—but the energy per electron depends on frequency, not intensity.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-2",
          "question": "Below the threshold frequency, no electrons are ejected regardless of intensity because",
          "options": [
            "each photon lacks enough energy to free an electron",
            "the light is too dim",
            "electrons are too heavy",
            "the metal is too thick"
          ],
          "correctAnswer": 0,
          "explanation": "If each photon's energy \\(hf\\) is below the work function, no single photon can eject an electron, no matter how many arrive.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-3",
          "question": "A sample has a half-life of 10 years. After 30 years, the fraction remaining is",
          "options": [
            "1/8",
            "1/3",
            "1/6",
            "1/2"
          ],
          "correctAnswer": 0,
          "explanation": "30 years is 3 half-lives; \\((1/2)^3 = 1/8\\) remains.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-4",
          "question": "The wave-particle duality means that particles like electrons",
          "options": [
            "exhibit both wave and particle properties",
            "are only particles",
            "are only waves",
            "have no properties"
          ],
          "correctAnswer": 0,
          "explanation": "Wave-particle duality: electrons (and photons) exhibit both wave-like (interference) and particle-like behavior.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-5",
          "question": "The de Broglie wavelength of a particle is",
          "options": [
            "\\(\\lambda = h/p\\)",
            "\\(\\lambda = hp\\)",
            "\\(\\lambda = p/h\\)",
            "\\(\\lambda = h/E\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The de Broglie wavelength is \\(\\lambda = h/p\\), where p is momentum.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-6",
          "question": "In beta-minus decay, a neutron converts into a proton and emits",
          "options": [
            "an electron",
            "a photon",
            "an alpha particle",
            "a neutron"
          ],
          "correctAnswer": 0,
          "explanation": "In beta-minus decay, a neutron becomes a proton, emitting an electron (and an antineutrino).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-7",
          "question": "The energy released in nuclear reactions comes from",
          "options": [
            "a small conversion of mass into energy (\\(E = mc^2\\))",
            "chemical bonds",
            "electron transitions",
            "friction"
          ],
          "correctAnswer": 0,
          "explanation": "Nuclear energy comes from the conversion of a small amount of mass into energy according to \\(E = mc^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-8",
          "question": "A hydrogen atom emits light at specific wavelengths (a line spectrum) because",
          "options": [
            "electrons transition between discrete energy levels",
            "the atom is heated uniformly",
            "electrons move continuously",
            "of reflection"
          ],
          "correctAnswer": 0,
          "explanation": "Discrete electron energy levels mean transitions produce photons of specific energies, giving a characteristic line spectrum.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-9",
          "question": "Nuclear fusion is the process powering",
          "options": [
            "the Sun and stars",
            "light bulbs",
            "chemical reactions",
            "batteries"
          ],
          "correctAnswer": 0,
          "explanation": "Fusion—joining light nuclei into heavier ones—powers the Sun and other stars, releasing enormous energy.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-10",
          "question": "The stopping voltage in a photoelectric experiment measures the",
          "options": [
            "maximum kinetic energy of the ejected electrons",
            "number of electrons",
            "light intensity",
            "frequency"
          ],
          "correctAnswer": 0,
          "explanation": "The stopping voltage indicates the maximum kinetic energy of the photoelectrons (\\(KE_{max} = eV_{stop}\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-hard-1",
          "question": "In the photoelectric effect, the maximum kinetic energy of ejected electrons is",
          "options": [
            "\\(KE_{max} = hf - \\phi\\)",
            "\\(KE_{max} = hf + \\phi\\)",
            "\\(KE_{max} = \\phi - hf\\)",
            "\\(KE_{max} = hf\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By Einstein's photoelectric equation, \\(KE_{max} = hf - \\phi\\), where \\(\\phi\\) is the work function.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-2",
          "question": "A photon has energy \\(3.0\\ \\text{eV}\\) and strikes a metal with work function \\(2.0\\ \\text{eV}\\). The maximum electron kinetic energy is",
          "options": [
            "\\(1.0\\ \\text{eV}\\)",
            "\\(5.0\\ \\text{eV}\\)",
            "\\(2.0\\ \\text{eV}\\)",
            "\\(0.67\\ \\text{eV}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE_{max} = hf - \\phi = 3.0 - 2.0 = 1.0\\ \\text{eV}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-3",
          "question": "Why does a graph of photoelectron KE versus frequency have a slope equal to Planck's constant?",
          "options": [
            "\\(KE = hf - \\phi\\) is linear in f with slope h",
            "the metal determines the slope",
            "intensity sets the slope",
            "of the work function"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(KE_{max} = hf - \\phi\\), plotting KE against frequency gives a straight line whose slope is Planck's constant h.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-4",
          "question": "An electron and a proton have the same speed. Which has the longer de Broglie wavelength?",
          "options": [
            "the electron (smaller momentum)",
            "the proton",
            "they are equal",
            "neither has a wavelength"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\lambda = h/p\\) and the electron has smaller momentum (smaller mass at equal speed), it has the longer wavelength.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-5",
          "question": "In an alpha decay, the atomic number of the nucleus",
          "options": [
            "decreases by 2",
            "increases by 2",
            "stays the same",
            "decreases by 4"
          ],
          "correctAnswer": 0,
          "explanation": "An alpha particle is a helium nucleus (2 protons, 2 neutrons), so the parent's atomic number decreases by 2 (and mass number by 4).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-6",
          "question": "The binding energy of a nucleus is related to the ___ between the nucleus and its separate nucleons.",
          "options": [
            "mass difference (mass defect)",
            "charge difference",
            "volume difference",
            "speed difference"
          ],
          "correctAnswer": 0,
          "explanation": "The nuclear binding energy corresponds to the mass defect (\\(E = \\Delta m\\,c^2\\))—the mass lost when nucleons bind together.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-7",
          "question": "Why do both fission of heavy nuclei and fusion of light nuclei release energy?",
          "options": [
            "Both move nuclei toward the peak of the binding-energy-per-nucleon curve (iron)",
            "both create mass",
            "both destroy energy",
            "of chemical bonds"
          ],
          "correctAnswer": 0,
          "explanation": "Binding energy per nucleon peaks near iron; splitting very heavy nuclei or fusing very light ones both increase binding energy per nucleon, releasing energy.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-8",
          "question": "A radioactive sample's activity (decays per second) over time",
          "options": [
            "decreases exponentially",
            "stays constant",
            "increases",
            "is random with no pattern"
          ],
          "correctAnswer": 0,
          "explanation": "Radioactive decay is exponential: both the number of nuclei and the activity decrease exponentially with time.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-9",
          "question": "The line spectrum of an element is unique because",
          "options": [
            "each element has a distinct set of energy levels and thus distinct emission wavelengths",
            "all elements emit the same light",
            "spectra are random",
            "of reflection"
          ],
          "correctAnswer": 0,
          "explanation": "Each element has a characteristic set of quantized energy levels, producing a unique 'fingerprint' of emission/absorption wavelengths.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-10",
          "question": "The Heisenberg uncertainty principle states that one cannot simultaneously know a particle's exact",
          "options": [
            "position and momentum",
            "charge and mass",
            "energy and charge",
            "spin and mass"
          ],
          "correctAnswer": 0,
          "explanation": "The uncertainty principle states there is a fundamental limit to the precision with which position and momentum can be simultaneously known.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
