import type { SubjectUnitOverview, UnitOverview } from './types'

const AP_PHYSICS_C_EM_UNITS: UnitOverview[] = [
  {
    unitNumber: 8,
    title: 'Electric Charges & Fields: Gauss’s Law',
    subunits: [
      {
        id: '8-1',
        title: 'Electric Charge and Electric Force',
        summary:
          'Electric charge is an intrinsic property of matter that comes in two types: positive and negative. The fundamental unit of charge is the magnitude of the charge on an electron or proton, \\(e \\approx 1.60 \\times 10^{-19}\\) C. Coulomb\'s Law quantifies the electrostatic force between two stationary point charges as \\(\\vec{F}_e = k \\frac{q_1 q_2}{r^2} \\hat{r}\\), where \\(k\\) is the electrostatic constant (\\(1/4\\pi\\epsilon_0\\)). This law follows an inverse-square relationship, similar to Newton\'s Law of Universal Gravitation, but differs in that electric forces can be either attractive (opposite charges) or repulsive (like charges). In AP Physics C, we treat force as a vector quantity, requiring the use of superposition to find the net force on a charge when multiple source charges are present.',
        keyIdeas: [
          'Charge is quantized (\\(Q = ne\\)) and conserved in isolated systems.',
          'Coulomb\'s Law: \\(F = k \\frac{|q_1 q_2|}{r^2}\\) describes the magnitude of the interaction.',
          'Superposition Principle: The net force on a charge is the vector sum of all individual forces acting on it.',
          'The electrostatic constant \\(k\\) is approximately \\(9.0 \\times 10^9\\) N\\(\\cdot\\)m²/C².',
        ],
        exampleCode:
          'Example question: Two charges, \\(q_1 = +2\\mu\\text{C}\\) and \\(q_2 = -3\\mu\\text{C}\\), are separated by 0.5 m. Find the magnitude of the force.\n\n' +
          'Step 1: Convert units: \\(q_1 = 2 \\times 10^{-6}\\) C, \\(q_2 = 3 \\times 10^{-6}\\) C.\n' +
          'Step 2: Apply Coulomb\'s Law: \\(F = (9 \\times 10^9) \\frac{(2 \\times 10^{-6})(3 \\times 10^{-6})}{(0.5)^2}\\).\n' +
          'Step 3: Calculate: \\(F = (9 \\times 10^9) (6 \\times 10^{-12}) / 0.25 = 0.054 / 0.25 = 0.216\\) N.',
        exampleExplanation:
          'The force is attractive because the charges have opposite signs. We use the absolute values of charges for the magnitude and determine direction based on the sign of the charges.',
      },
      {
        id: '8-2',
        title: 'Electric Charge and the Process of Charging',
        summary:
          'Charging involves the transfer of electrons from one body to another; protons remain fixed in the nucleus. Materials are broadly classified as conductors, which allow charges to move freely (like metals), or insulators, which restrict charge movement (like rubber or glass). There are three primary methods of charging: friction, conduction, and induction. Charging by friction occurs when two different materials are rubbed together, transferring electrons based on their electron affinity. Charging by conduction involves direct contact between a charged object and a neutral conductor, resulting in the neutral object acquiring the same sign of charge as the source.\n\n' +
          'Charging by induction is a more complex process that does not require direct contact. When a charged object is brought near a neutral conductor, it causes a polarization of charges within that conductor. If the conductor is then grounded, electrons can flow to or from the earth, leaving the conductor with a net charge opposite to that of the inducing object. Additionally, insulators can undergo "polarization," where the electron clouds of individual atoms shift slightly in the presence of an external charge, creating a surface charge effect even though no net charge is transferred to the material.',
        keyIdeas: [
          'Conductors allow free electron flow; insulators do not.',
          'Conduction: Charging via contact; results in the same charge sign.',
          'Induction: Charging via proximity and grounding; results in the opposite charge sign.',
          'Grounding provides a path for electrons to move to or from a large reservoir (the Earth).',
          'Polarization is the separation of charge within an atom or a neutral object.',
        ],
        exampleCode:
          'Example question: A positively charged rod is brought near a neutral metallic sphere. The sphere is grounded while the rod is still near, then the ground is removed. What is the final charge on the sphere?\n\n' +
          'Step 1: The positive rod attracts electrons to the side of the sphere nearest the rod.\n' +
          'Step 2: Grounding allows electrons from the Earth to flow onto the sphere to neutralize the "pushed away" positive side.\n' +
          'Step 3: Removing the ground traps the excess electrons on the sphere.\n' +
          'Result: The sphere is now negatively charged.',
        exampleExplanation:
          'This is a classic example of charging by induction. The sphere ends up with the opposite charge of the inducing rod because electrons were drawn from the ground.',
      },
      {
        id: '8-3',
        title: 'Electric Fields',
        summary:
          'The electric field (\\(\\vec{E}\\)) is a vector field that mediates the force between charges; it exists at all points in space surrounding a charge. It is defined as the force per unit test charge: \\(\\vec{E} = \\vec{F}/q_0\\). For a point charge \\(Q\\), the field magnitude is \\(E = k|Q|/r^2\\), pointing radially away from positive charges and toward negative charges. Electric field lines are used to visualize the field: they begin on positive charges, end on negative charges, never cross, and their density indicates the field\'s strength. \n\n' +
          'A critical concept in AP Physics C is the behavior of charges in uniform electric fields, where the force \\(\\vec{F} = q\\vec{E}\\) is constant. This leads to constant acceleration (\\(\\vec{a} = q\\vec{E}/m\\)), allowing the use of standard kinematic equations. For a system of multiple point charges, the total electric field at any point is the vector sum of the individual fields produced by each charge. This superposition principle is essential for solving problems where the field must be calculated at a specific coordinate in a 2D or 3D arrangement. Note that the electric field inside a conductor in electrostatic equilibrium is always zero, as charges redistribute themselves on the surface to cancel any internal field.',
        keyIdeas: [
          'Definition: \\(\\vec{E} = \\vec{F}/q_0\\); units are N/C or V/m.',
          'Point charge field: \\(E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}\\).',
          'Field lines: Density equals strength; direction equals the force on a positive test charge.',
          'Superposition: \\(\\vec{E}_{\\text{net}} = \\sum \\vec{E}_i\\).',
          'In equilibrium, the electric field inside a conductor is zero.',
        ],
        exampleCode:
          'Example question: Find the electric field at a point 0.3 m to the right of a \\(+5\\mu\\text{C}\\) charge.\n\n' +
          'Step 1: Use the point charge formula: \\(E = kQ/r^2\\).\n' +
          'Step 2: \\(E = (9 \\times 10^9)(5 \\times 10^{-6}) / (0.3)^2\\).\n' +
          'Step 3: \\(E = 45,000 / 0.09 = 500,000\\) N/C.\n' +
          'Direction: Since the charge is positive, the field points away from it (to the right).',
        exampleExplanation:
          'The electric field exists independently of a second charge; it describes the "influence" the source charge has on the space surrounding it.',
      },
      {
        id: '8-4',
        title: 'Electric Fields of Charge Distributions',
        summary:
          'When dealing with continuous distributions of charge rather than discrete points, we must use calculus to find the total electric field. We divide the distribution into infinitesimal charge elements \\(dq\\) and integrate their contributions: \\(\\vec{E} = \\int d\\vec{E} = \\int \\frac{k\\,dq}{r^2} \\hat{r}\\). To perform this integration, we relate \\(dq\\) to the geometry of the object using charge density: linear density (\\(\\lambda = dQ/dL\\)), surface density (\\(\\sigma = dQ/dA\\)), or volume density (\\(\\rho = dQ/dV\\)). \n\n' +
          'Common distributions analyzed in this course include a thin ring of charge, a charged rod, and a disk of charge. For high-symmetry problems, components of the electric field often cancel out due to symmetry (e.g., the perpendicular components of the field from a ring cancel at a point on its central axis). This allows us to focus the integral on a single dimension. As the distance \\(r\\) from a distribution becomes very large (\\(r \\gg\\) size of object), the field should mathematically reduce to the formula for a point charge (\\(kQ/r^2\\)). This serves as a vital "sanity check" for derived integration results. Understanding these distributions is a prerequisite for moving into Gauss\'s Law, as it builds the intuition for how charge geometry dictates field geometry.',
        keyIdeas: [
          'Continuous charge distributions require integration: \\(\\vec{E} = \\int \\frac{k\\,dq}{r^2} \\hat{r}\\).',
          'Charge densities: \\(\\lambda\\) (C/m), \\(\\sigma\\) (C/m²), \\(\\rho\\) (C/m³).',
          'Symmetry arguments: Identify components that cancel to simplify the vector integral into a scalar integral.',
          'Standard results to know: Field of an infinite line (\\(E = \\frac{2k\\lambda}{r}\\)) and an infinite sheet (\\(E = \\frac{\\sigma}{2\\epsilon_0}\\)).',
        ],
        exampleCode:
          'Example question: Set up the integral for the electric field at a distance \\(x\\) from the center of a rod of length \\(L\\) and total charge \\(Q\\) along its axis.\n\n' +
          'Step 1: Define linear density \\(\\lambda = Q/L\\). So \\(dq = \\lambda dy\\).\n' +
          'Step 2: Distance from \\(dq\\) to point \\(P\\) is \\((x - y)\\).\n' +
          'Step 3: \\(dE = \\frac{k \\lambda dy}{(x-y)^2}\\).\n' +
          'Step 4: Integrate from \\(y=0\\) to \\(y=L\\): \\(E = \\int_0^L \\frac{k (Q/L) dy}{(x-y)^2}\\).',
        exampleExplanation:
          'This setup demonstrates how to transform a physical distribution into a mathematical expression by relating charge to position, which is then solved using standard integration techniques.',
      },
      {
        id: '8-5',
        title: 'Electric Flux',
        summary:
          'Electric flux (\\(\\Phi_E\\)) is a measure of the "number" of electric field lines passing through a given surface area. Mathematically, it is the dot product of the electric field vector and the area vector: \\(\\Phi_E = \\vec{E} \\cdot \\vec{A} = EA\\cos\\theta\\), where \\(\\theta\\) is the angle between the electric field and the normal (perpendicular) to the surface. For a non-uniform field or a curved surface, the flux is defined as the surface integral \\(\\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}\\). The area vector \\(d\\vec{A}\\) always points outward from a closed surface.\n\n' +
          'Understanding flux is crucial because it bridges the gap between the sources of a field (charges) and the field itself. If the electric field is parallel to the surface, the flux is zero because no field lines "pierce" the area. If the field is perpendicular to the surface, the flux is maximized (\\(EA\\)). For a closed surface (a "Gaussian surface"), the net flux is the sum of the flux through all parts of the surface. Positive net flux indicates a net source of field lines inside (positive charge), while negative net flux indicates a net sink (negative charge). If the net flux is zero, it implies either no charge is enclosed or the total positive charge equals the total negative charge within the volume.',
        keyIdeas: [
          'Definition: \\(\\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}\\). Units: N\\(\\cdot\\)m²/C.',
          'Dot product: Only the component of the field perpendicular to the surface contributes to flux.',
          'Area vector \\(\\vec{A}\\): Its magnitude is the area, and its direction is normal to the surface.',
          'For closed surfaces, flux is positive for lines leaving the volume and negative for lines entering.',
        ],
        exampleCode:
          'Example question: A uniform electric field \\(\\vec{E} = 300\\hat{i}\\) N/C passes through a rectangular area of \\(0.2\\) m by \\(0.3\\) m in the \\(yz\\)-plane. Find the flux.\n\n' +
          'Step 1: Identify the area vector. Since it lies in the \\(yz\\)-plane, the normal is \\(\\hat{i}\\). \\(\\vec{A} = (0.2 \\times 0.3)\\hat{i} = 0.06\\hat{i}\\) m².\n' +
          'Step 2: Calculate dot product: \\(\\Phi_E = \\vec{E} \\cdot \\vec{A} = (300\\hat{i}) \\cdot (0.06\\hat{i})\\).\n' +
          'Step 3: \\(\\Phi_E = 300 \\times 0.06 = 18\\) N\\(\\cdot\\)m²/C.',
        exampleExplanation:
          'Because the field and the area normal are perfectly aligned, the flux is simply the product of the field magnitude and the area.',
      },
      {
        id: '8-6',
        title: 'Gauss’s Law',
        summary:
          'Gauss\'s Law is one of Maxwell\'s four fundamental equations of electromagnetism. It provides a direct relationship between the net electric flux through any closed surface and the net enclosed charge: \\(\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}\\). While always true, Gauss\'s Law is most powerful when used to find the electric field of highly symmetric charge distributions, such as spheres, infinite cylinders, or infinite planes. In these cases, we choose a "Gaussian surface" such that the electric field magnitude \\(E\\) is constant over the surface and the angle between \\(\\vec{E}\\) and \\(d\\vec{A}\\) is either \\(0^{\\circ}\\) or \\(90^{\\circ}\\).\n\n' +
          'This allows the integral \\(\\oint \\vec{E} \\cdot d\\vec{A}\\) to simplify to \\(E \\oint dA\\), and eventually \\(E \\times (\\text{Surface Area}) = Q_{\\text{enc}}/\\epsilon_0\\). For a point charge or sphere, the Gaussian surface is a concentric sphere (\\(A = 4\\pi r^2\\)). For a line of charge, the surface is a cylinder (\\(A = 2\\pi r L\\)). Gauss\'s Law also explains why charge resides on the surface of a conductor: since \\(E=0\\) inside, the flux through any surface inside the conductor must be zero, meaning no net charge can be enclosed within the bulk of the material. This unit represents the peak of conceptual understanding in electrostatics, as it links local charge density to global field patterns through the geometry of flux.',
        keyIdeas: [
          'Gauss\'s Law: \\(\\Phi_{\\text{net}} = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}\\).',
          'Strategic symmetry: Choose spherical, cylindrical, or planar surfaces to make the integral easy to solve.',
          '\\(Q_{\\text{enc}}\\) only includes charges *inside* the closed surface; outside charges contribute zero to the *net* flux.',
          'Inside a uniform shell of charge, the electric field is zero (Shell Theorem).',
          'At the surface of a conductor, the electric field is \\(E = \\sigma/\\epsilon_0\\).',
        ],
        exampleCode:
          'Example question: Use Gauss\'s Law to find the electric field at a distance \\(r\\) from an infinite sheet of charge with surface density \\(\\sigma\\).\n\n' +
          'Step 1: Choose a cylindrical "pillbox" surface piercing the sheet.\n' +
          'Step 2: Flux exists only through the two end caps (Area \\(A\\) each). \\(\\Phi = 2EA\\).\n' +
          'Step 3: Enclosed charge \\(Q_{\\text{enc}} = \\sigma A\\).\n' +
          'Step 4: Set up Gauss\'s Law: \\(2EA = \\sigma A / \\epsilon_0\\).\n' +
          'Step 5: Solve for \\(E\\): \\(E = \\frac{\\sigma}{2\\epsilon_0}\\).',
        exampleExplanation:
          'The resulting field is constant and independent of distance \\(r\\), which is a unique property of the infinite planar symmetry.',
      },
    ],
  },
  {
    unitNumber: 9,
    title: 'Electric Potential',
    subunits: [
      {
        id: '9-1',
        title: 'Electric Potential Energy',
        summary:
          'Electric potential energy (\\(U_e\\)) is a scalar form of energy that a system of charges possesses due to their relative positions. Similar to gravitational potential energy, it represents the work done by an external agent to assemble a configuration of charges from infinite separation. For two point charges, the potential energy is given by \\(U_e = k \\frac{q_1 q_2}{r}\\). Because it is a scalar, the total potential energy of a system of multiple charges is simply the algebraic sum of the potential energies of every unique pair: \\(U_{\\text{total}} = \\sum_{i < j} k \\frac{q_i q_j}{r_{ij}}\\).\n\n' +
          'In AP Physics C, the relationship between a conservative force and its associated potential energy is expressed through calculus as \\(\\Delta U = -W_{\\text{int}} = -\\int \\vec{F}_e \\cdot d\\vec{r}\\). This means the change in electric potential energy is the negative of the work done by the internal electrostatic force. If the charges have the same sign, work must be done *on* the system to bring them closer, increasing \\(U_e\\) (positive value). If the charges have opposite signs, the system naturally "wants" to move together, and \\(U_e\\) becomes more negative as they approach. This unit transitions the study of electrostatics from vector-based forces to scalar-based energy, which often simplifies complex problems involving motion.',
        keyIdeas: [
          'Potential energy is a scalar quantity: \\(U_e = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r}\\).',
          'For a system of \\(N\\) charges, you must sum the energy of all possible pairs.',
          'Relationship to force: \\(\\vec{F} = -\\nabla U\\) (force is the negative gradient of potential energy).',
          'Potential energy is zero when charges are infinitely far apart (\\(r \\to \\infty\\)).',
          'Positive \\(U_e\\) implies a repulsive system (requires work to assemble); negative \\(U_e\\) implies an attractive system.',
        ],
        exampleCode:
          'Example question: Calculate the work required to move a \\(+2\\mu\\text{C}\\) charge from a distance of 2.0 m to 1.0 m away from a fixed \\(+5\\mu\\text{C}\\) charge.\n\n' +
          'Step 1: Calculate initial energy: \\(U_i = k \\frac{(2\\times 10^{-6})(5\\times 10^{-6})}{2.0} = (9 \\times 10^9)(5 \\times 10^{-12}) = 0.045\\) J.\n' +
          'Step 2: Calculate final energy: \\(U_f = k \\frac{(2\\times 10^{-6})(5\\times 10^{-6})}{1.0} = 0.090\\) J.\n' +
          'Step 3: Work required \\(W_{\\text{ext}} = \\Delta U = U_f - U_i = 0.090 - 0.045 = 0.045\\) J.',
        exampleExplanation:
          'Because both charges are positive, they repel each other. Moving them closer requires positive external work, which increases the total potential energy of the configuration.',
      },
      {
        id: '9-2',
        title: 'Electric Potential',
        summary:
          'Electric potential (\\(V\\)), often confused with potential energy, is the electric potential energy *per unit charge* (\\(V = U_e/q\\)). While potential energy is a property of a system of charges, electric potential is a property of the space surrounding a source charge distribution. For a single point charge, the potential is \\(V = kQ/r\\). The unit for potential is the Volt (V), where 1 V = 1 J/C. Just like the electric field, electric potential follows the principle of superposition; however, as a scalar, you sum the values directly without needing to resolve components.\n\n' +
          'The connection between the electric field and electric potential is fundamental: \\(\\Delta V = -\\int_A^B \\vec{E} \\cdot d\\vec{s}\\). Conversely, the electric field is the negative gradient of the potential: \\(\\vec{E} = -\\nabla V\\). This implies that electric field lines always point in the direction of decreasing electric potential. Points of equal potential in space form "equipotential surfaces." For a point charge, these are concentric spheres. A key rule is that equipotential surfaces are always perpendicular to electric field lines. For a conductor in electrostatic equilibrium, the entire volume and surface are at the same potential (\\(V\\) is constant), which explains why the electric field inside is zero and the field at the surface is perpendicular to it.',
        keyIdeas: [
          'Electric Potential (scalar): \\(V = \\sum \\frac{k q_i}{r_i}\\).',
          'Relationship to E-field: \\(\\Delta V = -\\int \\vec{E} \\cdot d\\vec{r}\\) and \\(E_x = -dV/dx\\).',
          'Equipotential lines are always perpendicular to electric field lines.',
          'A positive charge naturally moves from high potential to low potential; a negative charge moves from low to high.',
          'Inside a conductor, the potential is constant (not necessarily zero), while the electric field is zero.',
        ],
        exampleCode:
          'Example question: The electric potential in a region of space is given by \\(V(x, y) = 5x^2 - 3y\\). Find the electric field vector at the point (1, 2).\n\n' +
          'Step 1: Find the x-component: \\(E_x = -\\partial V/\\partial x = -10x\\). At \\(x=1\\), \\(E_x = -10\\).\n' +
          'Step 2: Find the y-component: \\(E_y = -\\partial V/\\partial y = -(-3) = 3\\).\n' +
          'Step 3: Combine into a vector: \\(\\vec{E} = -10\\hat{i} + 3\\hat{j}\\) V/m.',
        exampleExplanation:
          'By taking the negative partial derivatives of the potential function with respect to each coordinate, we derive the vector components of the electric field at any specific location.',
      },
      {
        id: '9-3',
        title: 'Conservation of Electric Energy',
        summary:
          'When a charged particle moves through an electric field, its mechanical energy is conserved provided no non-conservative forces (like friction or external battery work) are acting on it. The Law of Conservation of Energy states that \\(\\Delta K + \\Delta U_e = 0\\), or \\(K_i + qV_i = K_f + qV_f\\). This principle allows us to solve for the final speed of an electron or proton accelerated through a "potential difference" or voltage. In many AP Physics C problems, particles are "accelerated from rest," meaning \\(K_i = 0\\).\n\n' +
          'A common unit of energy used in this context is the electron-volt (eV), which is the work required to move one elementary charge through a potential difference of one volt (\\(1 \\text{ eV} = 1.6 \\times 10^{-19}\\) J). When applying conservation of energy to particles like electrons, it is crucial to keep track of the charge\'s sign; a negative charge "falls up" the potential hill toward higher potential. Furthermore, if the particle is part of a system of multiple charges, the \\(U_e\\) term must account for the interaction with all other charges in the vicinity. This subunit synthesizes everything learned about work, potential, and kinematics into a robust method for predicting particle dynamics without needing to integrate time-varying forces.',
        keyIdeas: [
          'Conservation Law: \\(\\frac{1}{2}mv_i^2 + qV_i = \\frac{1}{2}mv_f^2 + qV_f\\).',
          'Work done by the field: \\(W_{\\text{field}} = -q\\Delta V = \\Delta K\\).',
          'Voltage (\\(V\\)) is synonymous with potential difference (\\(\\Delta V\\)).',
          'Negative charges experience a force in the opposite direction of the E-field, moving toward higher potential.',
          'Energy conversion: \\(1 \\text{ eV} = 1.6 \\times 10^{-19}\\) Joules.',
        ],
        exampleCode:
          'Example question: An electron (\\(m = 9.1 \\times 10^{-31}\\) kg, \\(q = -1.6 \\times 10^{-19}\\) C) is accelerated from rest through a potential difference of 100 V. What is its final speed?\n\n' +
          'Step 1: Set up energy conservation: \\(0 + qV_i = \\frac{1}{2}mv_f^2 + qV_f\\).\n' +
          'Step 2: \\(\\Delta K = -q\\Delta V\\). Since the electron moves toward higher potential, \\(\\Delta V = +100\\) V.\n' +
          'Step 3: \\(\\frac{1}{2}mv_f^2 = -(-1.6 \\times 10^{-19})(100) = 1.6 \\times 10^{-17}\\) J.\n' +
          'Step 4: \\(v_f = \\sqrt{2(1.6 \\times 10^{-17}) / (9.1 \\times 10^{-31})} \\approx 5.9 \\times 10^6\\) m/s.',
        exampleExplanation:
          'The potential energy lost by the electron as it moves through the voltage is converted entirely into kinetic energy, resulting in a very high speed due to the electron\'s tiny mass.',
      },
    ],
  },
  {
    unitNumber: 10,
    title: 'Conductors and Capacitors',
    subunits: [
      {
        id: '10-1',
        title: 'Electrostatics with Conductors',
        summary:
          'Conductors are materials containing a vast number of free charges (usually electrons) that move easily under the influence of an electric field. In electrostatic equilibrium, several fundamental properties emerge: 1) The electric field inside the bulk of the conductor is exactly zero. 2) Any net charge resides exclusively on the surface. 3) The electric field just outside the surface is perpendicular to that surface with a magnitude \\(E = \\sigma/\\epsilon_0\\). 4) The entire conductor is an equipotential volume, meaning the potential difference between any two points within or on the surface of the conductor is zero.\n\n' +
          'These properties arise because charges will redistribute themselves almost instantaneously until they cancel any internal electric field. On a non-spherical conductor, charge density is not uniform; instead, charge tends to accumulate at sharp points or regions of high curvature, leading to extremely high local electric fields (the "lightning rod" effect). In AP Physics C, we use Gauss’s Law to prove these properties, showing that any Gaussian surface inside a conductor encloses zero net charge, and therefore all excess charge must be "pushed" to the outer boundaries by mutual repulsion.',
        keyIdeas: [
          'Electrostatic Equilibrium: \\(\\vec{E}_{\\text{in}} = 0\\) and \\(V\\) is constant throughout.',
          'Net charge resides only on the surface of a conductor.',
          'Surface Electric Field: \\(\\vec{E}\\) is perpendicular to the surface and proportional to surface charge density \\(\\sigma\\).',
          'Charge density \\(\\sigma\\) is highest at points of greatest curvature (sharp tips).',
          'Cavities within conductors: If a cavity contains no charge, the field inside the cavity is zero.',
        ],
        exampleCode:
          'Example question: A solid conducting sphere of radius \\(R\\) has a total charge \\(+Q\\). What is the electric field and potential at a distance \\(r < R\\)?\n\n' +
          'Step 1: Inside a conductor in equilibrium, \\(\\vec{E} = 0\\) for all \\(r < R\\).\n' +
          'Step 2: Since \\(V\\) is constant inside and equal to the value at the surface, \\(V_{\\text{in}} = V_{\\text{surface}}\\).\n' +
          'Step 3: Using the potential formula for a sphere: \\(V = kQ/R\\).\n' +
          'Result: \\(E = 0\\) and \\(V = kQ/R\\).',
        exampleExplanation:
          'This highlights that while the field drops to zero inside, the potential does not; it remains at the same value it reached at the surface to ensure no work is required to move charges within the object.',
      },
      {
        id: '10-2',
        title: 'Redistribution of Charge Between Conductors',
        summary:
          'When two conductors are brought into contact or connected by a thin conducting wire, charges will flow between them until they reach the same electric potential (\\(V_1 = V_2\\)). This process is driven by the potential difference; charges move from a region of high potential to low potential (for positive charges) or vice versa (for electrons). It is vital to remember that charge is conserved during this process: \\(Q_{\\text{total}} = Q_{1i} + Q_{2i} = Q_{1f} + Q_{2f}\\).\n\n' +
          'Because the final potential is identical but the geometries (like radii) may differ, the final charge distribution is typically not equal. For two spheres of radii \\(R_1\\) and \\(R_2\\), the condition \\(kQ_1/R_1 = kQ_2/R_2\\) implies that \\(Q_1/R_1 = Q_2/R_2\\). Consequently, the larger sphere will hold more charge, but the smaller sphere will actually have a higher surface charge density (\\(\\sigma\\)) and a stronger electric field at its surface. This phenomenon explains why charge "leaks" from sharp points: as the radius of curvature approaches zero, the surface field becomes strong enough to ionize the surrounding air.',
        keyIdeas: [
          'Equilibrium condition: Connected conductors must reach the same electric potential.',
          'Charge Conservation: Total charge before contact equals total charge after contact.',
          'For spheres: \\(Q \\propto R\\) at equilibrium, but \\(E_{\\text{surface}} \\propto 1/R\\).',
          'Smaller radii of curvature result in higher surface charge densities and stronger local electric fields.',
          'Grounding: Connecting a conductor to the Earth (an infinite reservoir) brings its potential to zero.',
        ],
        exampleCode:
          'Example question: A sphere of radius \\(R\\) with charge \\(Q\\) is connected to an uncharged sphere of radius \\(2R\\). What is the final charge on each?\n\n' +
          'Step 1: Conservation: \\(Q_1 + Q_2 = Q\\).\n' +
          'Step 2: Equal Potential: \\(kQ_1/R = kQ_2/(2R) \\implies Q_2 = 2Q_1\\).\n' +
          'Step 3: Substitute: \\(Q_1 + 2Q_1 = Q \\implies 3Q_1 = Q\\).\n' +
          'Result: \\(Q_1 = Q/3\\) and \\(Q_2 = 2Q/3\\).',
        exampleExplanation:
          'The larger sphere ends up with twice the charge of the smaller one because it requires more charge to reach the same electrical potential level as the smaller sphere.',
      },
      {
        id: '10-3',
        title: 'Capacitor Basics and Capacitance',
        summary:
          'A capacitor is a device designed to store electric charge and potential energy, consisting of two isolated conductors with equal and opposite charges (\\(+Q\\) and \\(-Q\\)). Capacitance (\\(C\\)) is defined as the ratio of the magnitude of charge on one plate to the potential difference between the plates: \\(C = Q/\\Delta V\\). The unit of capacitance is the Farad (F), where 1 F = 1 C/V. Crucially, capacitance is a purely geometric property; it does not depend on the charge or voltage applied, but rather on the shape, size, and separation of the conductors.\n\n' +
          'The most common geometry is the parallel-plate capacitor. Using Gauss’s Law and the relationship between field and potential (\\(\\Delta V = Ed\\)), we derive \\(C = \\epsilon_0 A/d\\). To increase capacitance, one must increase the area (\\(A\\)) of the plates or decrease the separation distance (\\(d\\)). Other geometries include cylindrical capacitors (coaxial cables) and spherical capacitors (concentric shells), each requiring the integration of the electric field to determine the potential difference before applying the \\(C=Q/V\\) definition. Capacitors are essential in circuits for filtering, timing, and energy storage.',
        keyIdeas: [
          'Definition: \\(C = Q/V\\) (Capacitance is always positive).',
          'Parallel Plate Formula: \\(C = \\epsilon_0 A/d\\).',
          'Capacitance is determined by geometry (size, shape, spacing) and the medium between plates.',
          'Units: 1 Farad (F) = 1 Coulomb per Volt.',
          'Electric field between large parallel plates is uniform: \\(E = \\sigma/\\epsilon_0 = Q/(\\epsilon_0 A)\\).',
        ],
        exampleCode:
          'Example question: A parallel-plate capacitor has plates of area 0.01 m² separated by 0.001 m. Calculate its capacitance.\n\n' +
          'Step 1: Use \\(C = \\epsilon_0 A/d\\).\n' +
          'Step 2: \\(C = (8.85 \\times 10^{-12})(0.01) / 0.001\\).\n' +
          'Step 3: \\(C = (8.85 \\times 10^{-14}) / 10^{-3} = 8.85 \\times 10^{-11}\\) F.\n' +
          'Result: \\(C = 88.5\\) pF.',
        exampleExplanation:
          'Capacitance values in real-world components are typically very small, often measured in microfarads (\\(\\mu\\)F), nanofarads (nF), or picofarads (pF).',
      },
      {
        id: '10-4',
        title: 'Energy Stored in Capacitors',
        summary:
          'Charging a capacitor requires work to move charges against the growing electric field between the plates. This work is stored as electric potential energy (\\(U_C\\)) in the electric field itself. Because the voltage increases linearly with charge (\\(V = q/C\\)), the work required to add a small charge \\(dq\\) is \\(dW = V dq = (q/C) dq\\). Integrating this from 0 to \\(Q\\) yields the total stored energy: \\(U_C = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}\\). These three forms are algebraically equivalent, and the choice of which to use depends on which variables (\\(Q\\), \\(C\\), or \\(V\\)) remain constant in a given problem.\n\n' +
          'Beyond the total energy, we can define "energy density" (\\(u_E\\)), which is the energy per unit volume stored in the space between the plates. For a parallel-plate capacitor, \\(u_E = \\frac{1}{2}\\epsilon_0 E^2\\). This is a profound result because it suggests that energy is not just a property of the charges, but is actually stored in the electric field itself, a concept that extends to electromagnetic waves. In problems where the geometry of a capacitor changes (e.g., pulling plates apart), we must track whether the capacitor is "isolated" (constant \\(Q\\)) or "connected to a battery" (constant \\(V\\)) to correctly determine how the stored energy changes.',
        keyIdeas: [
          'Stored Energy Formulas: \\(U_C = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV\\).',
          'Energy density: \\(u_E = \\frac{1}{2}\\epsilon_0 E^2\\) (units: J/m³).',
          'If \\(V\\) is constant (battery connected), \\(U \\propto C\\).',
          'If \\(Q\\) is constant (isolated), \\(U \\propto 1/C\\).',
          'Energy is stored in the electric field between the conductors.',
        ],
        exampleCode:
          'Example question: An isolated capacitor stores energy \\(U\\). If the distance between the plates is doubled, what is the new energy?\n\n' +
          'Step 1: Isolated means \\(Q\\) is constant. Use \\(U = Q^2/2C\\).\n' +
          "Step 2: \\(C = \\epsilon_0 A/d\\). If \\(d\\) doubles, \\(C\\) is halved (\\(C' = C/2\\)).\n" +
          "Step 3: \\(U' = Q^2 / 2(C/2) = 2(Q^2/2C) = 2U\\).\n" +
          'Result: Stored energy doubles.',
        exampleExplanation:
          'Since the charge is trapped, pulling the plates apart requires external work to overcome the attractive force between them. This work is converted into the additional potential energy stored in the field.',
      },
      {
        id: '10-5',
        title: 'Dielectrics',
        summary:
          'A dielectric is an insulating material that, when inserted between the plates of a capacitor, increases its capacitance by a factor called the dielectric constant (\\(\\kappa\\), or \\(K\\)). When placed in an external electric field, the molecules of the dielectric polarize, creating an internal induced electric field that opposes the external field. This reduces the net electric field between the plates (\\(E = E_0/\\kappa\\)) and thus reduces the potential difference for a given charge (\\(V = V_0/\\kappa\\)). Since \\(C = Q/V\\), a lower voltage for the same charge results in a higher capacitance: \\(C = \\kappa C_0 = \\kappa \\epsilon_0 A/d\\).\n\n' +
          'The behavior of a dielectric-filled capacitor depends on its connection to a power source. If the capacitor is isolated, the charge \\(Q\\) stays constant, the voltage \\(V\\) drops, and the stored energy \\(U\\) decreases (as the dielectric is "sucked in" by the field). If it remains connected to a battery, the voltage \\(V\\) stays constant, more charge \\(Q\\) flows from the battery onto the plates, and the stored energy \\(U\\) increases. Dielectrics also serve a practical purpose: they prevent the plates from touching and increase the "dielectric strength," allowing the capacitor to withstand higher voltages before electrical breakdown (sparking) occurs.',
        keyIdeas: [
          'Dielectric constant \\(\\kappa\\) is always \\(> 1\\) for matter (\\(\\kappa = 1\\) for vacuum).',
          'Capacitance always increases: \\(C = \\kappa C_0\\).',
          'Induced surface charge \\(\\sigma_{\\text{ind}} = \\sigma(1 - 1/\\kappa)\\) reduces the net field.',
          'Electric field reduction: \\(E_{\\text{net}} = E_{\\text{ext}} - E_{\\text{induced}} = E_{\\text{ext}}/\\kappa\\).',
          'Permittivity of the material: \\(\\epsilon = \\kappa \\epsilon_0\\).',
        ],
        exampleCode:
          'Example question: A capacitor is connected to a 12V battery. A slab with \\(\\kappa = 3\\) is inserted, filling the space. What happens to the charge and energy?\n\n' +
          'Step 1: Battery connected means \\(V = 12\\)V is constant.\n' +
          "Step 2: \\(C\\) triples (\\(C' = 3C\\)).\n" +
          "Step 3: \\(Q = CV \\implies Q' = (3C)V = 3Q\\). Charge triples.\n" +
          "Step 4: \\(U = \\frac{1}{2}CV^2 \\implies U' = \\frac{1}{2}(3C)V^2 = 3U\\). Energy triples.",
        exampleExplanation:
          'The battery must do work to move the extra charge onto the plates, which is why the system\'s total energy increases in this scenario.',
      },
      {
        id: '10-6',
        title: 'Capacitor Combinations and Applications',
        summary:
          'Capacitors can be arranged in series or parallel to achieve a specific "equivalent capacitance" (\\(C_{\\text{eq}}\\)). In a parallel combination, all capacitors share the same potential difference (\\(V_{\\text{eq}} = V_1 = V_2\\)), and the total charge is the sum of individual charges. This results in \\(C_{\\text{eq}} = C_1 + C_2 + \\dots\\), effectively increasing the total plate area. In a series combination, the capacitors share the same charge (\\(Q_{\\text{eq}} = Q_1 = Q_2\\)), and the total potential difference is the sum of individual voltages. This leads to \\(1/C_{\\text{eq}} = 1/C_1 + 1/C_2 + \\dots\\), which always results in an equivalent capacitance smaller than the smallest individual capacitor.\n\n' +
          'Solving complex circuits involves reducing clusters of capacitors step-by-step using these rules until a single equivalent \\(C_{\\text{eq}}\\) is found. From there, you can "unroll" the circuit to find the specific \\(Q\\) and \\(V\\) for each component. Applications of capacitors include "flash" lamps in cameras (releasing energy quickly), power supply filtering (smoothing out voltage fluctuations), and sensors (where a change in plate distance \\(d\\) or dielectric \\(\\kappa\\) changes the capacitance, which the electronics then measure). This subunit consolidates the theoretical properties of capacitors into practical circuit analysis skills.',
        keyIdeas: [
          'Parallel: \\(V\\) is same; \\(Q_{\\text{tot}} = \\sum Q_i\\); \\(C_{\\text{eq}} = \\sum C_i\\) (adds like resistors in series).',
          'Series: \\(Q\\) is same; \\(V_{\\text{tot}} = \\sum V_i\\); \\(1/C_{\\text{eq}} = \\sum 1/C_i\\) (adds like resistors in parallel).',
          'Charge on series capacitors must be the same because the intermediate plates are isolated.',
          'Total energy stored: \\(U_{\\text{tot}} = \\sum U_i = \\frac{1}{2}C_{\\text{eq}}V_{\\text{tot}}^2\\).',
        ],
        exampleCode:
          'Example question: Two capacitors, 3 \\(\\mu\\)F and 6 \\(\\mu\\)F, are connected in series to a 9V battery. Find the charge on each.\n\n' +
          'Step 1: Calculate \\(C_{\\text{eq}}\\): \\(1/C_{\\text{eq}} = 1/3 + 1/6 = 3/6 \\implies C_{\\text{eq}} = 2\\) \\(\\mu\\)F.\n' +
          'Step 2: Find total charge: \\(Q_{\\text{tot}} = C_{\\text{eq}}V = (2 \\times 10^{-6})(9) = 18\\) \\(\\mu\\)C.\n' +
          'Step 3: In series, \\(Q_1 = Q_2 = Q_{\\text{tot}}\\).\n' +
          'Result: Both have 18 \\(\\mu\\)C of charge.',
        exampleExplanation:
          'Even though they have different capacitances, the nature of the series connection forces them to hold the exact same amount of charge; however, they will have different voltages (6V and 3V respectively).',
      },
    ],
  },
  {
    unitNumber: 11,
    title: 'Electric Circuits',
    subunits: [
      {
        id: '11-1',
        title: 'Electric Current',
        summary:
          'Electric current (\\(I\\)) is defined as the rate at which net charge flows through a cross-sectional area per unit time: \\(I = dQ/dt\\). The SI unit is the Ampere (A), where 1 A = 1 C/s. By convention, current is defined as the flow of positive charge (conventional current), which is opposite to the actual physical direction of electron flow in metallic conductors. While we often treat current as a steady stream, it is actually the result of an electric field established nearly instantaneously throughout a wire, exerting a force on the sea of mobile electrons.\n\n' +
          'On a microscopic level, current is related to the "drift velocity" (\\(v_d\\)) of the charge carriers. Although individual electrons move at high thermal speeds in random directions, the applied electric field causes them to drift slowly in one direction. This relationship is quantified as \\(I = nqv_d A\\), where \\(n\\) is the number density of charge carriers, \\(q\\) is the charge per carrier, and \\(A\\) is the cross-sectional area of the conductor. Despite the drift velocity being surprisingly slow (often millimeters per second), the signal travels at relativistic speeds because the electric field pushes all electrons simultaneously across the entire circuit.',
        keyIdeas: [
          'Definition: \\(I = dQ/dt\\) (scalar quantity with direction of conventional current).',
          'Conventional current flows from high potential (+) to low potential (-).',
          'Microscopic model: \\(I = nqv_d A\\).',
          'Drift velocity is the average velocity of charge carriers in an electric field.',
          'Current is conserved along any single branch of a circuit (it does not get "used up").',
        ],
        exampleCode:
          'Example question: A steady current of 2.5 A flows through a wire for 4.0 minutes. How much total charge and how many electrons pass through the cross-section?\n\n' +
          'Step 1: Convert time to seconds: \\(t = 4.0 \\times 60 = 240\\) s.\n' +
          'Step 2: Calculate charge: \\(Q = It = (2.5)(240) = 600\\) C.\n' +
          'Step 3: Calculate number of electrons: \\(N = Q/e = 600 / (1.6 \\times 10^{-19}) = 3.75 \\times 10^{21}\\) electrons.',
        exampleExplanation:
          'This calculation links the macroscopic measurement of current (Amperes) to the total quantity of charge and the massive number of individual particles required to sustain that flow.',
      },
      {
        id: '11-2',
        title: 'Electric Circuits (Fundamentals)',
        summary:
          'A circuit is a closed loop that allows for the continuous flow of charge. To maintain this flow, a circuit requires a source of Electromotive Force (EMF), such as a battery or power supply, which acts like a "charge pump" to increase the potential energy of carriers. EMF (represented by \\(\\mathcal{E}\\)) is measured in Volts and represents the work done per unit charge. Real voltage sources often have an "internal resistance" (\\(r\\)), meaning the "terminal voltage" (\\(V_{ab}\\)) delivered to the external circuit is lower than the ideal EMF: \\(V_{ab} = \\mathcal{E} - Ir\\).\n\n' +
          'A complete circuit consists of a source, conducting paths (wires), and loads (resistors, bulbs, etc.). In AP Physics C, we assume ideal wires have zero resistance unless specified. A circuit must be a closed loop to function; an "open circuit" has a break in the path, resulting in zero current, while a "short circuit" is a path with zero or negligible resistance, which can lead to dangerously high current levels. Understanding these basics is essential before applying the more mathematical laws of Ohm and Kirchhoff to determine specific voltages and currents within the system.',
        keyIdeas: [
          'EMF (\\(\\mathcal{E}\\)) is the potential difference provided by an ideal source.',
          'Terminal Voltage: \\(V = \\mathcal{E} - Ir\\) accounts for energy lost inside the battery.',
          'A closed loop is required for current to flow.',
          'Ideal wires are treated as equipotential surfaces (\\(V\\) is constant along the wire).',
          'An ammeter measures current and is placed in series; a voltmeter measures potential difference and is placed in parallel.',
        ],
        exampleCode:
          'Example question: A battery has an EMF of 12.0 V and an internal resistance of 0.5 \\(\\Omega\\). When connected to a circuit drawing 2.0 A, what is the voltage across its terminals?\n\n' +
          'Step 1: Identify given values: \\(\\mathcal{E} = 12.0\\), \\(r = 0.5\\), \\(I = 2.0\\).\n' +
          'Step 2: Apply terminal voltage formula: \\(V = 12.0 - (2.0)(0.5)\\).\n' +
          'Step 3: Calculate: \\(V = 12.0 - 1.0 = 11.0\\) V.',
        exampleExplanation:
          'The "missing" 1.0 Volt is dropped across the internal resistance of the battery, appearing as heat within the battery itself rather than useful energy for the external circuit.',
      },
      {
        id: '11-3',
        title: 'Resistance, Resistivity, and Ohm’s Law',
        summary:
          'Resistance (\\(R\\)) is the measure of an object\'s opposition to the flow of electric current. For many materials (Ohmic materials), the current is directly proportional to the potential difference across them, a relationship known as Ohm\'s Law: \\(V = IR\\). Resistance is measured in Ohms (\\(\\Omega\\)). While Ohm\'s Law is a functional definition of resistance, it is not a fundamental law of physics like Gauss\'s Law, as many materials (like diodes or transistors) are non-Ohmic and show a non-linear relationship between \\(V\\) and \\(I\\).\n\n' +
          'The resistance of a specific component depends on its intrinsic material properties and its geometry. This is quantified by resistivity (\\(\\rho\\)), where \\(R = \\rho L/A\\). Here, \\(L\\) is the length of the conductor and \\(A\\) is the cross-sectional area. Resistivity is an intrinsic property that typically increases with temperature for metals because increased atomic vibrations impede the flow of electrons. In AP Physics C, you may be asked to integrate to find the resistance of non-uniform objects (e.g., a truncated cone) by treating them as a series of infinitesimal disks with varying cross-sections \\(A(x)\\).',
        keyIdeas: [
          'Ohm\'s Law: \\(V = IR\\) (valid for Ohmic conductors).',
          'Resistance formula: \\(R = \\rho L/A\\) (depends on length, area, and material).',
          'Resistivity (\\(\\rho\\)) vs. Conductivity (\\(\\sigma\\)): \\(\\rho = 1/\\sigma\\).',
          'Temperature dependence: \\(\\rho = \\rho_0 [1 + \\alpha(T - T_0)]\\).',
          'Resistance increases with length and decreases as the cross-section gets wider.',
        ],
        exampleCode:
          'Example question: A copper wire (\\(\\rho = 1.7 \\times 10^{-8} \\Omega\\cdot m\\)) has a length of 10 m and a diameter of 2 mm. Calculate its resistance.\n\n' +
          'Step 1: Calculate radius \\(r = 0.001\\) m. Calculate Area \\(A = \\pi r^2 = \\pi (10^{-3})^2 = 3.14 \\times 10^{-6}\\) m².\n' +
          'Step 2: Apply \\(R = \\rho L/A\\).\n' +
          'Step 3: \\(R = (1.7 \\times 10^{-8})(10) / (3.14 \\times 10^{-6}) \\approx 0.054 \\Omega\\).',
        exampleExplanation:
          'This illustrates why thick, short wires are used for high-current applications; they minimize energy loss by keeping the total resistance as low as possible.',
      },
      {
        id: '11-4',
        title: 'Electric Power',
        summary:
          'Electric power (\\(P\\)) is the rate at which electrical energy is converted into other forms, such as heat, light, or mechanical work. Since potential difference is energy per unit charge (\\(V = dU/dq\\)) and current is the rate of charge flow (\\(I = dq/dt\\)), the power dissipated by any circuit element is the product of the two: \\(P = IV\\). The unit of power is the Watt (W), where 1 W = 1 J/s. This formula is universal and applies to both power sources (batteries) and power sinks (resistors).\n\n' +
          'For purely resistive loads that obey Ohm\'s Law, we can substitute \\(V=IR\\) to derive two additional forms: \\(P = I^2 R\\) and \\(P = V^2/R\\). The \\(I^2 R\\) form is particularly useful when analyzing power loss in transmission lines (Joule heating), while the \\(V^2/R\\) form is helpful for devices connected to a constant voltage source like a wall outlet. It is crucial to remember that energy is the integral of power over time (\\(E = \\int P dt\\)). In the context of circuits, the Law of Conservation of Energy dictates that the total power supplied by the EMF sources must exactly equal the total power dissipated by all resistances in the circuit.',
        keyIdeas: [
          'Fundamental formula: \\(P = IV\\) (applies to all circuit components).',
          'Resistive power (Ohmic): \\(P = I^2 R\\) and \\(P = V^2/R\\).',
          'Total energy \\(E = Pt\\) (for constant power).',
          'Brightness in light bulbs is determined by the power dissipated, not just the voltage or current.',
          'Internal power loss in a battery: \\(P_{\\text{lost}} = I^2 r\\).',
        ],
        exampleCode:
          'Example question: A 60 W light bulb is designed for a 120 V circuit. What is its resistance and the current flowing through it?\n\n' +
          'Step 1: Use \\(P = IV\\) to find current: \\(I = P/V = 60/120 = 0.5\\) A.\n' +
          'Step 2: Use \\(V = IR\\) to find resistance: \\(R = V/I = 120/0.5 = 240 \\Omega\\).\n' +
          'Alternative: \\(R = V^2/P = 120^2/60 = 14400/60 = 240 \\Omega\\).',
        exampleExplanation:
          'This calculation shows how manufacturers use specific resistances to "program" the power consumption of a device when connected to standard household voltages.',
      },
      {
        id: '11-5',
        title: 'Series and Parallel Circuits',
        summary:
          'Circuit components can be arranged in two fundamental ways. In a series circuit, components are connected end-to-end, forming a single path for current. Consequently, the current is identical through every component (\\(I_{\\text{tot}} = I_1 = I_2\\)). The total potential difference is divided among the resistors (\\(V_{\\text{tot}} = V_1 + V_2\\)), leading to an equivalent resistance that is the sum of individual resistances: \\(R_{\\text{eq}} = R_1 + R_2 + \\dots\\). Adding more resistors in series increases the total resistance and decreases the overall current.\n\n' +
          'In a parallel circuit, components are connected across the same two nodes, meaning they all share the same potential difference (\\(V_{\\text{tot}} = V_1 = V_2\\)). The total current is the sum of the currents through each branch (\\(I_{\\text{tot}} = I_1 + I_2\\)). This results in an equivalent resistance defined by the reciprocal rule: \\(1/R_{\\text{eq}} = 1/R_1 + 1/R_2 + \\dots\\). Paradoxically, adding a resistor in parallel *decreases* the equivalent resistance of the circuit because it provides an additional "lane" for charge to flow. \\(R_{\\text{eq}}\\) in parallel will always be smaller than the smallest individual resistor in that combination.',
        keyIdeas: [
          'Series: Current is constant; \\(V\\) adds up; \\(R_{\\text{eq}} = \\sum R_i\\).',
          'Parallel: Voltage is constant; \\(I\\) adds up; \\(1/R_{\\text{eq}} = \\sum 1/R_i\\).',
          'Standard Parallel shortcut for two resistors: \\(R_{\\text{eq}} = (R_1 R_2) / (R_1 + R_2)\\).',
          'In series, the largest resistor drops the most voltage; in parallel, the smallest resistor draws the most current.',
          'House wiring is done in parallel so that devices can operate independently at the same voltage.',
        ],
        exampleCode:
          'Example question: A 10 \\(\\Omega\\) and 20 \\(\\Omega\\) resistor are connected in parallel to a 12 V source. Find \\(R_{\\text{eq}}\\) and the total current.\n\n' +
          'Step 1: \\(R_{\\text{eq}} = (10 \\times 20) / (10 + 20) = 200/30 = 6.67 \\Omega\\).\n' +
          'Step 2: \\(I_{\\text{tot}} = V/R_{\\text{eq}} = 12 / 6.67 = 1.8\\) A.\n' +
          'Alternative: \\(I_1 = 12/10 = 1.2\\) A, \\(I_2 = 12/20 = 0.6\\) A. \\(I_{\\text{tot}} = 1.2 + 0.6 = 1.8\\) A.',
        exampleExplanation:
          'The parallel arrangement allows each resistor to draw current independently based on its own resistance, resulting in a total current that is the sum of the individual branch currents.',
      },
      {
        id: '11-6',
        title: 'Complex (Mixed) Circuit Networks',
        summary:
          'Many real-world circuits are neither purely series nor purely parallel but are "mixed" networks. To analyze these, one must use the method of "Successive Reduction." This involves identifying clusters of resistors that are clearly in series or clearly in parallel, replacing them with their equivalent resistance, and redrawing the circuit. This process is repeated until the entire network is simplified into a single equivalent resistance \\(R_{\\text{eq}}\\) connected to the voltage source. Once the total current is found (\\(I_{\\text{tot}} = V/R_{\\text{eq}}\\)), you work backward through the stages of reduction to find the individual \\(I\\) and \\(V\\) for each specific resistor.\n\n' +
          'A vital skill in mixed circuits is recognizing nodes and branches. A node is any junction where three or more wires meet. The voltage is the same for all components connected directly between the same two nodes. When "unrolling" the circuit, remember that if a group of resistors was in series, they share the current of their replacement; if they were in parallel, they share the voltage of their replacement. This systematic approach ensures that the laws of Ohm and conservation are satisfied at every level of the circuit architecture.',
        keyIdeas: [
          'Successive Reduction: Simplify from the "inside out" or furthest from the battery.',
          'Redraw the circuit at every step to avoid bookkeeping errors.',
          'Identify nodes to determine which components share the same potential difference.',
          'Voltage Dividers: In series, \\(V_x = V_{\\text{tot}} (R_x / R_{\\text{eq}})\\).',
          'Current Dividers: In parallel (two resistors), \\(I_1 = I_{\\text{tot}} (R_2 / (R_1 + R_2))\\).',
        ],
        exampleCode:
          'Example question: A 4 \\(\\Omega\\) resistor is in series with a parallel pair of 6 \\(\\Omega\\) and 12 \\(\\Omega\\) resistors. The whole set is connected to a 24 V battery.\n\n' +
          'Step 1: Simplify parallel pair: \\(R_p = (6 \\times 12) / (6 + 12) = 72/18 = 4 \\Omega\\).\n' +
          'Step 2: Total resistance \\(R_{\\text{eq}} = 4 (\\text{series}) + 4 (\\text{parallel}) = 8 \\Omega\\).\n' +
          'Step 3: Total current \\(I = 24/8 = 3\\) A.\n' +
          'Step 4: Voltage across 4 \\(\\Omega\\) resistor: \\(V = 3 \\times 4 = 12\\) V. Voltage across parallel pair: \\(24 - 12 = 12\\) V.',
        exampleExplanation:
          'By reducing the parallel branch first, the circuit becomes a simple series problem, allowing us to find the total current and then step back into the branches to find specific values.',
      },
      {
        id: '11-7',
        title: 'Kirchhoff’s Loop Rule',
        summary:
          'Kirchhoff\'s Loop Rule is a statement of the Law of Conservation of Energy applied to circuits. It states that the algebraic sum of the potential differences (voltages) around any closed loop in a circuit must be zero: \\(\\sum \\Delta V = 0\\). This means that all the energy supplied by the EMF sources in a loop is exactly accounted for by the potential drops across the resistors and other components in that same loop. To apply this rule, one must first define a direction for the current and a direction for "traveling" around the loop.\n\n' +
          'The sign conventions are crucial: 1) Crossing a resistor in the direction of current results in a drop (\\(-IR\\)). 2) Crossing a resistor opposite to the current results in a gain (\\(+IR\\)). 3) Crossing a battery from the negative to positive terminal results in a gain (\\(+\\mathcal{E}\\)). 4) Crossing a battery from positive to negative results in a drop (\\(-\\mathcal{E}\\)). For circuits with multiple loops and multiple batteries where successive reduction fails, the Loop Rule provides the necessary independent equations to solve for the unknown currents using systems of linear equations.',
        keyIdeas: [
          'Conservation of Energy: \\(\\sum V_{\\text{loop}} = 0\\).',
          'Sign convention depends on the direction of travel relative to current and battery polarity.',
          'The Loop Rule can be applied to any closed path, even if it is just a sub-part of a larger network.',
          'Number of independent loop equations = Number of "windows" in the circuit diagram.',
        ],
        exampleCode:
          'Example question: A loop has a 10 V battery, a 2 \\(\\Omega\\) resistor, and a 3 \\(\\Omega\\) resistor. Write the loop equation.\n\n' +
          'Step 1: Assume clockwise current \\(I\\) and travel clockwise.\n' +
          'Step 2: Start at negative terminal: \\(+10 (\\text{battery}) - I(2) (\\text{resistor}) - I(3) (\\text{resistor}) = 0\\).\n' +
          'Step 3: Simplify: \\(10 = 5I \\implies I = 2\\) A.',
        exampleExplanation:
          'The loop rule ensures that as a charge makes a full trip around the circuit, the "uphill" push from the battery is perfectly balanced by the "downhill" drops across the resistors.',
      },
      {
        id: '11-8',
        title: 'Kirchhoff’s Junction Rule',
        summary:
          'Kirchhoff\'s Junction Rule is a statement of the Law of Conservation of Charge. It states that at any junction (node) in a circuit, the total current entering the junction must equal the total current leaving it: \\(\\sum I_{\\text{in}} = \\sum I_{\\text{out}}\\). Since charge cannot build up or disappear at a point, the flow must be continuous. This rule allows us to relate the currents in different branches of a multi-loop circuit.\n\n' +
          'When setting up a problem, you can assign arbitrary directions to the currents in each branch. If your final calculated value for a current is negative, it simply means the actual physical current flows in the opposite direction to what you originally assumed. To solve a complex multi-loop circuit, you typically need to combine Junction Rule equations with Loop Rule equations. For a circuit with \\(n\\) nodes, the Junction Rule provides \\(n-1\\) independent equations. This unit serves as the analytical core of AP Physics C circuit theory, providing a foolproof (albeit algebraically intensive) method for solving any DC network regardless of complexity.',
        keyIdeas: [
          'Conservation of Charge: \\(\\sum I_{\\text{in}} = \\sum I_{\\text{out}}\\).',
          'Applied at nodes where three or more conductors meet.',
          'Provides relationships between branch currents (\\(I_1, I_2, I_3\\)).',
          'Essential for solving non-reducible circuits (e.g., Bridge circuits or multiple-battery systems).',
        ],
        exampleCode:
          'Example question: At a junction, current \\(I_1\\) enters from the left, while \\(I_2\\) and \\(I_3\\) leave to the right. If \\(I_1 = 5\\) A and \\(I_2 = 2\\) A, find \\(I_3\\).\n\n' +
          'Step 1: Set up the equation: \\(I_1 = I_2 + I_3\\).\n' +
          'Step 2: Substitute values: \\(5 = 2 + I_3\\).\n' +
          'Step 3: Solve: \\(I_3 = 3\\) A.',
        exampleExplanation:
          'The junction rule acts like a "flow meter" for the circuit, ensuring that the total number of Coulombs per second entering a point is the same as the number leaving it.',
      },
      {
        id: '11-9',
        title: 'RC Circuits (Charging and Discharging)',
        summary:
          'RC circuits contain both resistors and capacitors, resulting in time-dependent behavior as the capacitor charges or discharges. When a battery is first connected to an uncharged capacitor through a resistor, the current is initially maximized (\\(I_0 = \\mathcal{E}/R\\)) because the capacitor acts like a wire (zero voltage). As charge builds up, the capacitor’s voltage (\\(V_C = q/C\\)) opposes the battery, causing the current to decay exponentially: \\(I(t) = I_0 e^{-t/\\tau}\\). The charge on the capacitor grows toward its maximum (\\(Q_f = C\\mathcal{E}\\)) according to \\(q(t) = Q_f(1 - e^{-t/\\tau})\\).\n\n' +
          'The "time constant" \\(\\tau = RC\\) determines the speed of the process; after one time constant (\\(t = \\tau\\)), the capacitor is approximately 63% charged. When discharging a charged capacitor through a resistor, both charge and current decay exponentially from their initial values: \\(q(t) = Q_0 e^{-t/\\tau}\\). In the "long-term" limit (\\(t \\to \\infty\\)), a charging capacitor acts like an open circuit (zero current), and a discharging capacitor reaches zero charge. AP Physics C students are expected to derive these equations by setting up and solving first-order differential equations using the Loop Rule: \\(\\mathcal{E} - IR - q/C = 0\\).',
        keyIdeas: [
          'Time constant \\(\\tau = RC\\) (seconds). Higher resistance or capacitance slows the process.',
          'Initial state (\\(t=0\\)): Capacitor acts like a wire (short); \\(V_C = 0\\).',
          'Final state (\\(t \\to \\infty\\)): Capacitor acts like an open switch; \\(I = 0\\).',
          'Exponential behavior: \\(e^{-t/\\tau}\\) describes the rate of change.',
          'Charging \\(q(t) = Q_{\\text{max}}(1 - e^{-t/\\tau})\\); Discharging \\(q(t) = Q_0 e^{-t/\\tau}\\).',
        ],
        exampleCode:
          'Example question: A 2 \\(\\mu\\)F capacitor is charged through a 1 M\\(\\Omega\\) resistor by a 10 V battery. Find the time constant and the charge after 2 seconds.\n\n' +
          'Step 1: \\(\\tau = RC = (1 \\times 10^6)(2 \\times 10^{-6}) = 2\\) seconds.\n' +
          'Step 2: \\(Q_{\\text{max}} = CV = (2 \\times 10^{-6})(10) = 20\\ \\mu\\text{C}\\).\n' +
          'Step 3: At \\(t = 2\\) s, \\(t = \\tau\\). \\(q(2) = 20(1 - e^{-1}) \\approx 20(1 - 0.37) = 12.6\\ \\mu\\text{C}\\).',
        exampleExplanation:
          'After exactly one time constant, the capacitor has reached about 63% of its final charge. This exponential modeling allows for precise timing in electronic circuits.',
      },
    ],
  },
  {
    unitNumber: 12,
    title: 'Magnetic Fields & Electromagnetism',
    subunits: [
      {
        id: '12-1',
        title: 'Magnetic Fields',
        summary:
          'A magnetic field (\\(\\vec{B}\\)) is a vector field that exerts forces on moving charges and magnetic dipoles. Unlike electric fields, which originate from static charges, magnetic fields are produced by moving charges (currents) or intrinsic magnetic moments of particles. The SI unit for the magnetic field is the Tesla (T), where 1 T = 1 N/(A·m). Magnetic field lines are used to visualize the field, following a set of strict rules: they form continuous closed loops, exiting from the "North" pole and entering at the "South" pole of a magnet, and their density represents the field strength. \n\n' +
          'Crucially, there are no isolated magnetic "monopoles" (a North pole cannot exist without a South pole); Gauss’s Law for Magnetism states that the net magnetic flux through any closed surface is zero (\\(\\oint \\vec{B} \\cdot d\\vec{A} = 0\\)). This reflects the physical reality that magnetic field lines do not have a beginning or end, but rather circulate. In AP Physics C, we use these field representations to understand the environment in which charges move before calculating the specific forces and torques that arise from their interaction with the field.',
        keyIdeas: [
          'Magnetic fields are vector fields produced by moving charges or permanent magnets.',
          'Field lines exit North and enter South, forming closed loops.',
          'Magnetic flux through a closed surface is always zero (No monopoles).',
          'The Earth acts as a giant magnetic dipole, with its magnetic South pole located near the geographic North Pole.',
        ],
        exampleCode:
          'Example question: A magnetic field line is drawn in a region. If a small compass is placed at a point on that line, in which direction will its North needle point?\n\n' +
          'Step 1: Identify the direction of the magnetic field line at that specific point.\n' +
          'Result: The North needle of a compass always aligns itself tangent to the magnetic field line, pointing in the direction of the field (\\(\\vec{B}\\)).',
        exampleExplanation:
          'Compass needles are essentially tiny magnetic dipoles that rotate to minimize their potential energy by aligning with the external \\(\\vec{B}\\) field.',
      },
      {
        id: '12-2',
        title: 'Force on Moving Charges',
        summary:
          'When a point charge \\(q\\) moves with velocity \\(\\vec{v}\\) through an external magnetic field \\(\\vec{B}\\), it experiences a magnetic force given by the Lorentz force law: \\(\\vec{F}_m = q(\\vec{v} \\times \\vec{B})\\). The magnitude of this force is \\(F_m = |q|vB\\sin\\theta\\), where \\(\\theta\\) is the angle between the velocity and the magnetic field. This formula implies two critical conditions: 1) The force is zero if the charge is stationary (\\(v=0\\)). 2) The force is zero if the charge moves parallel or anti-parallel to the field lines (\\(\\sin 0^\\circ = 0\\)). \n\n' +
          'The direction of the force is determined by the Right-Hand Rule (RHR): point your fingers in the direction of \\(\\vec{v}\\), curl them toward \\(\\vec{B}\\), and your thumb points in the direction of the force for a positive charge. If the charge is negative (like an electron), the force is in the opposite direction of your thumb. Because the magnetic force is always perpendicular to the velocity (\\(\\vec{F} \\perp \\vec{v}\\)), the magnetic field does zero work on the charge (\\(W = \\int \\vec{F} \\cdot d\\vec{s} = 0\\)). Consequently, a magnetic field can change the direction of a particle\'s motion but can never change its speed or kinetic energy. This perpendicular force often results in uniform circular motion or helical paths.',
        keyIdeas: [
          'Magnetic force: \\(\\vec{F}_m = q(\\vec{v} \\times \\vec{B})\\). Magnitude: \\(F = qvB\\sin\\theta\\).',
          'Right-Hand Rule: \\(\\vec{v}\\) (fingers) \\(\\to\\) \\(\\vec{B}\\) (palm/curl) \\(\\to\\) \\(\\vec{F}\\) (thumb).',
          'Magnetic forces do no work on free charges; speed remains constant.',
          'Direction of force is reversed for negative charges.',
          'The force is always perpendicular to both \\(\\vec{v}\\) and \\(\\vec{B}\\).',
        ],
        exampleCode:
          'Example question: A proton (\\(q = +e\\)) moves at \\(3 \\times 10^6\\) m/s into a 0.5 T magnetic field. If the velocity is perpendicular to the field, calculate the force.\n\n' +
          'Step 1: Identify \\(\\theta = 90^\\circ\\), so \\(\\sin\\theta = 1\\).\n' +
          'Step 2: \\(F = qvB = (1.6 \\times 10^{-19})(3 \\times 10^6)(0.5)\\).\n' +
          'Step 3: \\(F = 2.4 \\times 10^{-13}\\) N.',
        exampleExplanation:
          'The perpendicular orientation maximizes the force. Since the force is always perpendicular to the velocity, the proton will begin a circular orbit with this force acting as the centripetal force.',
      },
      {
        id: '12-3',
        title: 'Force on Current-Carrying Wires',
        summary:
          'Since an electric current is a collection of moving charges, a wire carrying a current \\(I\\) will experience a collective magnetic force when placed in an external \\(\\vec{B}\\) field. For a straight wire segment of length \\(L\\), the force is \\(\\vec{F}_m = I(\\vec{L} \\times \\vec{B})\\), where \\(\\vec{L}\\) is a vector in the direction of the conventional current with magnitude equal to the length of the wire. The magnitude of this force is \\(F = ILB\\sin\\theta\\). If the wire is not straight or the field is not uniform, we must use the differential form: \\(d\\vec{F} = I(d\\vec{l} \\times \\vec{B})\\) and integrate over the length of the wire.\n\n' +
          'This principle is the foundational mechanism behind electric motors, where magnetic forces exert torques on loops of wire. For a rectangular loop of area \\(A\\) carrying current \\(I\\) in a uniform field, the maximum torque is \\(\\tau = IAB\\sin\\phi\\), where \\(\\phi\\) is the angle between the magnetic field and the normal to the loop\'s plane. We define the "magnetic dipole moment" as \\(\\vec{\\mu} = IA\\) (pointing in the direction given by the RHR for the loop), which allows the torque to be written concisely as \\(\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}\\). The potential energy of such a dipole in a field is \\(U = -\\vec{\\mu} \\cdot \\vec{B}\\), showing that the system is most stable when the loop\'s magnetic moment aligns with the external field.',
        keyIdeas: [
          'Force on a straight wire: \\(\\vec{F} = I\\vec{L} \\times \\vec{B}\\).',
          'Differential force for curved paths: \\(d\\vec{F} = I d\\vec{l} \\times \\vec{B}\\).',
          'Magnetic Dipole Moment: \\(\\vec{\\mu} = IA\\) (for a single loop).',
          'Torque on a loop: \\(\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}\\). Magnitude: \\(\\tau = \\mu B\\sin\\theta\\).',
          'Potential Energy: \\(U = -\\vec{\\mu} \\cdot \\vec{B} = -\\mu B\\cos\\theta\\).',
        ],
        exampleCode:
          'Example question: A 0.5 m wire carries a 2.0 A current toward the top of the page in a 0.1 T magnetic field pointing out of the page. Find the magnitude and direction of the force.\n\n' +
          'Step 1: Angle \\(\\theta = 90^\\circ\\), so \\(F = ILB = (2.0)(0.5)(0.1) = 0.1\\) N.\n' +
          'Step 2: RHR: Fingers "Up" (\\(I\\)), curl "Out" (\\(\\vec{B}\\)), Thumb points "Right".\n' +
          'Result: 0.1 N to the right.',
        exampleExplanation:
          'The wire experiences a lateral push. In a real circuit, this force must be balanced by mechanical supports, or it will cause the wire to accelerate.',
      },
      {
        id: '12-4',
        title: 'Magnetic Fields of Current-Carrying Wires (Biot–Savart Law)',
        summary:
          'The Biot–Savart Law describes how a small element of current \\(I\\,d\\vec{l}\\) contributes to the total magnetic field at a point in space. It is the magnetic analog to Coulomb’s Law for electric fields. The law states: \\(d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\,d\\vec{l} \\times \\hat{r}}{r^2}\\), where \\(\\mu_0 = 4\\pi \\times 10^{-7}\\) T·m/A is the permeability of free space. To find the total field \\(\\vec{B}\\), one must integrate this vector expression over the entire current distribution. This law is particularly useful for geometries that lack high symmetry, such as the center of a circular loop or a finite wire segment.\n\n' +
          'Applying Biot–Savart to an infinite straight wire results in the formula \\(B = \\frac{\\mu_0 I}{2\\pi r}\\), where the field lines form concentric circles around the wire. For a circular loop of radius \\(R\\) at its center, the field is \\(B = \\frac{\\mu_0 I}{2R}\\). A key skill in AP Physics C is determining the direction of these fields using the "Second Right-Hand Rule": point your thumb in the direction of the current, and your fingers curl in the direction of the magnetic field lines. This subunit emphasizes the inverse-square nature of magnetic field production and requires strong vector calculus skills to set up the cross-product integrals for various shapes.',
        keyIdeas: [
          'Biot–Savart Law: \\(d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\,d\\vec{l} \\times \\hat{r}}{r^2}\\).',
          'Permeability of free space: \\(\\mu_0 = 4\\pi \\times 10^{-7}\\) T·m/A.',
          'Infinite straight wire: \\(B = \\frac{\\mu_0 I}{2\\pi r}\\).',
          'Center of a circular loop: \\(B = \\frac{\\mu_0 I}{2R}\\).',
          'RHR for wires: Thumb = Current; Fingers = Direction of \\(\\vec{B}\\) loops.',
        ],
        exampleCode:
          'Example question: Calculate the magnetic field 0.1 m away from a long wire carrying 5.0 A.\n\n' +
          'Step 1: Use infinite wire formula: \\(B = \\mu_0 I / (2\\pi r)\\).\n' +
          'Step 2: \\(B = (4\\pi \\times 10^{-7})(5.0) / (2\\pi \\times 0.1)\\).\n' +
          'Step 3: \\(B = (2 \\times 10^{-7})(5.0) / 0.1 = 10 \\times 10^{-7} / 0.1 = 1 \\times 10^{-5}\\) T.\n' +
          'Result: 10 \\(\\mu\\)T.',
        exampleExplanation:
          'The magnetic field produced by standard household currents is quite small (the Earth\'s field is roughly 50 \\(\\mu\\)T), requiring sensitive equipment or very high currents to measure easily.',
      },
      {
        id: '12-5',
        title: 'Ampère’s Law',
        summary:
          'Ampère’s Law provides a highly efficient alternative to the Biot–Savart Law for calculating magnetic fields in systems with high degrees of symmetry. It states that the line integral of the magnetic field \\(\\vec{B}\\) around any closed "Amperian loop" is proportional to the net current enclosed by that loop: \\(\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}\\). This is the magnetic equivalent of Gauss’s Law. For the law to be useful, the symmetry must allow \\(\\vec{B}\\) to be constant in magnitude and either parallel or perpendicular to the path elements \\(d\\vec{l}\\), simplifying the integral to \\(B \\oint dl = \\mu_0 I_{\\text{enc}}\\).\n\n' +
          'Classic applications include finding the field inside a long solenoid (\\(B = \\mu_0 n I\\), where \\(n\\) is turns per unit length) and a toroid (\\(B = \\frac{\\mu_0 N I}{2\\pi r}\\)). Ampère’s Law also allows us to find the field *inside* a thick wire carrying a uniform current density: by choosing an Amperian loop with radius \\(r < R\\), only a fraction of the total current is enclosed (\\(I_{\\text{enc}} = I \\cdot r^2/R^2\\)), leading to a field that increases linearly with \\(r\\). This subunit is critical for understanding the "packaging" of magnetic fields in electrical components like inductors and electromagnets.',
        keyIdeas: [
          'Ampère’s Law: \\(\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}\\).',
          'Ideal Solenoid Field: \\(B = \\mu_0 n I\\) (field is uniform inside, zero outside).',
          'Toroid Field: \\(B = \\frac{\\mu_0 N I}{2\\pi r}\\) (field is circular and contained inside the "donut").',
          'Current Enclosed: Only current passing through the surface bounded by the loop counts.',
          'Symmetry selection: Choose loops that are concentric circles or rectangles aligned with the field.',
        ],
        exampleCode:
          'Example question: A solenoid has 1000 turns over a length of 0.5 m and carries 2.0 A. Find the field inside.\n\n' +
          'Step 1: Calculate turn density \\(n = N/L = 1000 / 0.5 = 2000\\) turns/m.\n' +
          'Step 2: Apply solenoid formula: \\(B = \\mu_0 n I\\).\n' +
          'Step 3: \\(B = (4\\pi \\times 10^{-7})(2000)(2.0) = 1.6\\pi \\times 10^{-3} \\approx 5.03 \\times 10^{-3}\\) T.',
        exampleExplanation:
          'The solenoid "concentrates" the magnetic field into a strong, uniform region, which is why it is the standard geometry for creating controlled magnetic environments.',
      },
      {
        id: '12-6',
        title: 'Applications of Magnetic Forces and Motion',
        summary:
          'This subunit synthesizes the dynamics of particles and wires in magnetic fields to explain modern technology and natural phenomena. A primary application is the "Velocity Selector," where crossed electric and magnetic fields are adjusted so that only particles with a specific speed (\\(v = E/B\\)) pass through undeflected. When this is combined with a semicircular path in a second magnetic field, it creates a "Mass Spectrometer," a device that identifies isotopes by measuring their orbital radius (\\(r = mv/qB\\)). Because the radius is proportional to mass, different ions strike a detector at different locations.\n\n' +
          'Other applications include the Cyclotron (a particle accelerator that uses a constant frequency \\(f = qB/2\\pi m\\) to time acceleration kicks) and the Hall Effect. The Hall Effect occurs when a current-carrying conductor is placed in a magnetic field; the magnetic force pushes charge carriers to one side of the conductor, creating a measurable "Hall Voltage" across its width. This voltage allows physicists to determine whether the charge carriers in a material are positive or negative and to measure their concentration. This unit highlights the role of electromagnetism as a tool for probing the microscopic properties of matter and the fundamental laws of motion.',
        keyIdeas: [
          'Velocity Selector: \\(F_e = F_m \\implies qE = qvB \\implies v = E/B\\).',
          'Mass Spectrometer: Combines velocity selection with circular motion to find \\(m/q\\).',
          'Cyclotron Frequency: \\(f = qB / (2\\pi m)\\); independent of the particle\'s speed and radius.',
          'Magnetic Bottle/Helical Motion: Occurs when \\(\\vec{v}\\) has a component parallel to \\(\\vec{B}\\).',
          'Hall Effect: \\(V_H = I B / (n q t)\\), where \\(t\\) is the thickness of the conductor.',
        ],
        exampleCode:
          'Example question: An alpha particle (\\(q = +2e, m = 6.64 \\times 10^{-27}\\) kg) enters a 1.0 T field at \\(2 \\times 10^6\\) m/s. What is the radius of its path?\n\n' +
          'Step 1: Use \\(r = mv / qB\\).\n' +
          'Step 2: \\(r = (6.64 \\times 10^{-27})(2 \\times 10^6) / [(2 \\times 1.6 \\times 10^{-19})(1.0)]\\).\n' +
          'Step 3: \\(r = (1.328 \\times 10^{-20}) / (3.2 \\times 10^{-19}) = 0.0415\\) m.\n' +
          'Result: 4.15 cm.',
        exampleExplanation:
          'The radius provides a direct measurement of the particle\'s momentum-to-charge ratio, making magnetic fields essential for particle identification in high-energy physics.',
      },
    ],
  },
  {
    unitNumber: 13,
    title: 'Electromagnetic Induction',
    subunits: [
      {
        id: '13-1',
        title: 'Magnetic Flux',
        summary:
          'Magnetic flux (\\(\\Phi_B\\)) is a fundamental scalar quantity that measures the total magnetic field passing through a specific surface area. Mathematically, it is defined as the surface integral of the magnetic field over an area: \\(\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}\\). For a uniform magnetic field and a flat surface, this simplifies to \\(\\Phi_B = BA\\cos\\theta\\), where \\(\\theta\\) is the angle between the magnetic field vector and the normal (perpendicular) to the surface. The SI unit of magnetic flux is the Weber (Wb), where 1 Wb = 1 T·m².\n\n' +
          'It is crucial to visualize flux as the "number of field lines" piercing a loop. If the loop is oriented perpendicular to the field, flux is maximized; if it is parallel, no lines pass through, and flux is zero. In AP Physics C, we often deal with time-varying flux, which can occur if the magnetic field strength changes, the area of the loop changes (e.g., a sliding bar), or the orientation of the loop changes (e.g., a rotating generator). Understanding how to calculate flux for non-uniform fields often requires integrating \\(B(r)\\,dA\\) over the geometry of the loop, such as a rectangular loop placed near a long current-carrying wire.',
        keyIdeas: [
          'Definition: \\(\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}\\). For uniform fields: \\(\\Phi_B = BA\\cos\\theta\\).',
          'Area vector \\(\\vec{A}\\) is always perpendicular to the surface of the loop.',
          'Flux can be changed by varying \\(B\\), \\(A\\), or the angle \\(\\theta\\).',
          'Units: Weber (Wb) or Tesla-meters squared (T\\(\\cdot\\)m²).',
          'Gauss’s Law for Magnetism: The net flux through any *closed* surface is always zero.',
        ],
        exampleCode:
          'Example question: A circular loop of radius 0.2 m is in a 0.5 T field. Calculate the flux when the field is 30° to the *plane* of the loop.\n\n' +
          'Step 1: Identify the angle \\(\\theta\\) between \\(\\vec{B}\\) and the area normal. If \\(\\vec{B}\\) is 30° to the plane, it is 60° to the normal. So \\(\\theta = 60^\\circ\\).\n' +
          'Step 2: Calculate Area \\(A = \\pi r^2 = \\pi (0.2)^2 = 0.04\\pi \\approx 0.126\\) m².\n' +
          'Step 3: \\(\\Phi_B = BA\\cos(60^\\circ) = (0.5)(0.126)(0.5) = 0.0315\\) Wb.',
        exampleExplanation:
          'Always be careful with the angle description; the formula uses the angle relative to the normal, not the surface itself.',
      },
      {
        id: '13-2',
        title: 'Electromagnetic Induction',
        summary:
          'Electromagnetic induction is the process by which a changing magnetic flux through a loop induces an Electromotive Force (EMF) and, if the circuit is closed, a current. This is governed by Faraday’s Law of Induction: \\(\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}\\), where \\(N\\) is the number of turns in the coil. The negative sign in the equation represents Lenz’s Law, which states that the direction of the induced EMF and resulting current will be such that they create a magnetic field that opposes the change in the original flux.\n\n' +
          'Induction can occur via "transformer EMF" (stationary loop, changing \\(B\\)) or "motional EMF" (moving loop, constant \\(B\\)). For a conductor of length \\(L\\) moving at velocity \\(v\\) perpendicular to a magnetic field \\(B\\), the induced motional EMF is \\(\\mathcal{E} = BLv\\). This is a direct consequence of the magnetic force on the free charges within the moving conductor. In AP Physics C, you will frequently use calculus to evaluate \\(d\\Phi_B/dt\\) for systems where the rate of change is not constant, such as a loop rotating at a constant angular velocity \\(\\omega\\), where \\(\\Phi_B(t) = BA\\cos(\\omega t)\\), leading to an oscillating EMF: \\(\\mathcal{E}(t) = NBA\\omega\\sin(\\omega t)\\).',
        keyIdeas: [
          'Faraday’s Law: \\(\\mathcal{E} = -d\\Phi_B/dt\\). The magnitude of EMF depends on the *rate* of flux change.',
          'Lenz’s Law: Induced effects always oppose the *change* that produced them (Nature is "lazy").',
          'Motional EMF: \\(\\mathcal{E} = BLv\\) for a rod moving through a field.',
          'Induced Electric Fields: A changing magnetic field creates a non-conservative electric field: \\(\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_B/dt\\).',
          'Eddy Currents: Circular currents induced in bulk solid conductors when exposed to changing flux.',
        ],
        exampleCode:
          'Example question: A 50-turn coil with an area of 0.01 m² is in a magnetic field that decreases from 0.8 T to 0.2 T in 0.1 seconds. Find the induced EMF.\n\n' +
          'Step 1: \\(\\Delta\\Phi_B = A\\Delta B = (0.01)(0.2 - 0.8) = -0.006\\) Wb.\n' +
          'Step 2: \\(d\\Phi_B/dt \\approx \\Delta\\Phi_B/\\Delta t = -0.006 / 0.1 = -0.06\\) Wb/s.\n' +
          'Step 3: \\(\\mathcal{E} = -N(d\\Phi_B/dt) = -(50)(-0.06) = 3.0\\) V.',
        exampleExplanation:
          'The coil acts like a 3V battery during the 0.1-second interval while the magnetic field is actively changing.',
      },
      {
        id: '13-3',
        title: 'Induced Currents and Magnetic Forces',
        summary:
          'When an EMF is induced in a conductive loop with resistance \\(R\\), an induced current flows (\\(I = \\mathcal{E}/R\\)). This current, in turn, interacts with the external magnetic field to produce a magnetic force (\\(F = ILB\\)) or torque. A central theme in these problems is the principle of energy conservation: the mechanical work done to move a conductor through a field is exactly equal to the electrical energy dissipated as heat in the resistor. For a bar sliding on rails at constant velocity \\(v\\), the external force required to maintain that motion is \\(F_{\\text{ext}} = B^2 L^2 v / R\\).\n\n' +
          'If the external force is removed, the induced magnetic force acts as a braking force, causing the conductor to decelerate. This results in a first-order differential equation for velocity: \\(m(dv/dt) = -B^2 L^2 v / R\\), which leads to an exponential decay of speed over time: \\(v(t) = v_0 e^{-t/\\tau}\\). This subunit requires a mastery of linking several concepts: Faraday’s Law to find \\(\\mathcal{E}\\), Ohm’s Law to find \\(I\\), the magnetic force formula to find \\(F\\), and Newton’s Second Law to describe the resulting dynamics. This is the mechanical-electrical bridge that defines much of power generation and electromagnetic braking technology.',
        keyIdeas: [
          'Induced Current: \\(I = \\frac{BLv}{R}\\) (for a sliding bar).',
          'Magnetic Braking: The induced force \\(F_m = I L B\\) always opposes the motion of the conductor.',
          'Power balance: \\(P_{\\text{mechanical}} = Fv = P_{\\text{electrical}} = I^2 R\\).',
          'Lenz\'s Law application: Use the RHR to find current direction such that the induced \\(B_{\\text{ind}}\\) opposes the \\(\\Delta\\Phi_B\\).',
          'Terminal Velocity: If a rod falls under gravity through a field, it eventually reaches a speed where \\(F_m = mg\\).',
        ],
        exampleCode:
          'Example question: A 0.2 kg rod of length 0.5 m and resistance 2 \\(\\Omega\\) slides at 4 m/s through a 1.0 T field. What is the magnetic force opposing it?\n\n' +
          'Step 1: \\(\\mathcal{E} = BLv = (1.0)(0.5)(4) = 2.0\\) V.\n' +
          'Step 2: \\(I = \\mathcal{E}/R = 2.0 / 2 = 1.0\\) A.\n' +
          'Step 3: \\(F_m = ILB = (1.0)(0.5)(1.0) = 0.5\\) N.',
        exampleExplanation:
          'An external agent must pull with exactly 0.5 N of force to keep the rod moving at a constant 4 m/s; otherwise, the induced current will drain the rod\'s kinetic energy and stop it.',
      },
      {
        id: '13-4',
        title: 'Inductance',
        summary:
          'Inductance is the property of a circuit that opposes changes in current. Self-inductance (\\(L\\)) occurs because a changing current in a loop creates a changing magnetic field, which in turn induces a "back EMF" in that same loop to oppose the change. The inductance is defined as \\(L = N\\Phi_B/I\\), and the self-induced EMF is \\(\\mathcal{E}_L = -L(dI/dt)\\). The SI unit of inductance is the Henry (H), where 1 H = 1 V·s/A. Like capacitance, inductance is a purely geometric property of the conductor.\n\n' +
          'For an ideal solenoid, the inductance is \\(L = \\mu_0 n^2 A l\\), where \\(n\\) is the turn density. Inductors store energy in the magnetic field created by the current, with the stored potential energy given by \\(U_L = \\frac{1}{2}LI^2\\). This is mathematically analogous to the energy stored in a capacitor (\\(\\frac{1}{2}CV^2\\)). In complex systems, we also consider "Mutual Inductance" (\\(M\\)), where a changing current in one coil induces an EMF in a neighboring coil, a principle that forms the basis of electrical transformers. In AP Physics C, you are expected to derive inductance for various geometries by first finding the magnetic field (\\(B\\)), then the flux (\\(\\Phi_B\\)), and finally applying the \\(L = N\\Phi_B/I\\) definition.',
        keyIdeas: [
          'Self-Inductance: \\(L = N\\Phi_B/I\\). Units: Henry (H).',
          'Back EMF: \\(\\mathcal{E} = -L(dI/dt)\\); opposes any change in current.',
          'Solenoid Inductance: \\(L = \\mu_0 N^2 A / l\\) (proportional to \\(N^2\\)).',
          'Stored Energy: \\(U_L = \\frac{1}{2}LI^2\\) (stored in the magnetic field).',
          'Inductors act as "current flywheels," preventing instantaneous jumps in current.',
        ],
        exampleCode:
          'Example question: A 0.5 H inductor has a current that increases from 0 to 10 A in 2 seconds. What is the average back EMF?\n\n' +
          'Step 1: \\(dI/dt \\approx \\Delta I/\\Delta t = 10 / 2 = 5\\) A/s.\n' +
          'Step 2: \\(\\mathcal{E} = -L(dI/dt) = -(0.5)(5) = -2.5\\) V.',
        exampleExplanation:
          'The negative sign indicates that the inductor is pushing back against the power source to slow down the rate at which the current rises.',
      },
      {
        id: '13-5',
        title: 'RL Circuits',
        summary:
          'An RL circuit contains a resistor and an inductor in series. Because the inductor produces a back EMF proportional to \\(dI/dt\\), the current in the circuit cannot change instantaneously. When a battery is first connected (\\(t=0\\)), the inductor acts as an "open circuit" (\\(I=0\\)) because it perfectly opposes the sudden jump in current. As time progresses, the current grows toward its maximum Ohmic value (\\(I_{\\text{max}} = \\mathcal{E}/R\\)) according to the exponential function \\(I(t) = \\frac{\\mathcal{E}}{R}(1 - e^{-t/\\tau})\\).\n\n' +
          'The time constant for an RL circuit is \\(\\tau = L/R\\). After one time constant, the current has reached approximately 63% of its maximum value. When the battery is removed and the circuit is completed (discharging the inductor\'s energy), the current decays according to \\(I(t) = I_0 e^{-t/\\tau}\\). Note the inverse relationship compared to RC circuits: in RL circuits, a large resistance makes the time constant *smaller* (the current changes faster) because the resistor dissipates the energy more quickly and reduces the dominance of the inductor’s back EMF. Solving these requires setting up the loop rule differential equation: \\(\\mathcal{E} - IR - L(dI/dt) = 0\\).',
        keyIdeas: [
          'Time constant: \\(\\tau = L/R\\).',
          'Initial state (\\(t=0\\)): Inductor acts like a break/open switch (\\(I=0\\), but \\(V_L\\) is max).',
          'Steady state (\\(t \\to \\infty\\)): Inductor acts like a simple wire/short (\\(I\\) is max, but \\(V_L = 0\\)).',
          'Charging current: \\(I(t) = I_{\\text{max}}(1 - e^{-t/\\tau})\\).',
          'Discharging current: \\(I(t) = I_0 e^{-t/\\tau}\\).',
        ],
        exampleCode:
          'Example question: A 10V battery is connected to a 5 \\(\\Omega\\) resistor and a 20 H inductor. Find the current after 4 seconds.\n\n' +
          'Step 1: \\(\\tau = L/R = 20 / 5 = 4\\) seconds.\n' +
          'Step 2: \\(I_{\\text{max}} = V/R = 10 / 5 = 2\\) A.\n' +
          'Step 3: Since \\(t = \\tau = 4\\) s, \\(I(4) = 2(1 - e^{-1}) \\approx 2(0.63) = 1.26\\) A.',
        exampleExplanation:
          'In one time constant, the current climbs from zero to 63% of its eventual steady-state value of 2 Amperes.',
      },
      {
        id: '13-6',
        title: 'LC Circuits',
        summary:
          'An LC circuit consists of a charged capacitor and an inductor connected together with negligible resistance. This system acts as an electromagnetic oscillator, where energy sloshes back and forth between the electric field of the capacitor (\\(U_C = q^2/2C\\)) and the magnetic field of the inductor (\\(U_L = \\frac{1}{2}LI^2\\)). Because there is no resistor to dissipate energy as heat, the total mechanical energy is conserved: \\(U_{\\text{tot}} = q^2/2C + \\frac{1}{2}LI^2 = \\text{constant}\\). This leads to a second-order differential equation: \\(-L(d^2q/dt^2) = q/C\\), which is the exact mathematical form of Simple Harmonic Motion.\n\n' +
          'The charge on the capacitor oscillates sinusoidally: \\(q(t) = Q_{\\text{max}}\\cos(\\omega t + \\phi)\\), with an angular frequency of \\(\\omega = 1/\\sqrt{LC}\\). The period of oscillation is \\(T = 2\\pi\\sqrt{LC}\\). In this state, the current is 90° out of phase with the charge; when the capacitor is fully charged (\\(q=Q\\)), the current is zero, and when the capacitor is empty (\\(q=0\\)), the current is at its maximum (\\(I=I_{\\text{max}}\\)). Real-world circuits always have some resistance (RLC circuits), which causes the oscillations to be "damped," eventually decaying to zero as energy is lost to heat. LC circuits are the foundational components for radio tuning and frequency generation in electronic devices.',
        keyIdeas: [
          'Resonance frequency: \\(\\omega = 1/\\sqrt{LC}\\) or \\(f = 1/(2\\pi\\sqrt{LC})\\).',
          'Energy Conservation: Energy is 100% in \\(C\\) when \\(I=0\\), and 100% in \\(L\\) when \\(q=0\\).',
          'Phase relationship: \\(I(t)\\) is the derivative of \\(q(t)\\), so it is a sine function if \\(q(t)\\) is a cosine.',
          'Total Energy: \\(U = Q_{\\text{max}}^2 / 2C = \\frac{1}{2}L I_{\\text{max}}^2\\).',
          'The system is the electrical analog of a mass-spring system (\\(L \\leftrightarrow m\\), \\(1/C \\leftrightarrow k\\)).',
        ],
        exampleCode:
          'Example question: A 10 \\(\\mu\\)F capacitor is charged to \\(50\\ \\mu\\text{C}\\) and then connected to a 0.1 H inductor. What is the maximum current that will flow?\n\n' +
          'Step 1: Use energy conservation: \\(Q^2 / 2C = \\frac{1}{2}L I^2\\).\n' +
          'Step 2: \\(I = \\sqrt{Q^2 / (LC)} = Q / \\sqrt{LC}\\).\n' +
          'Step 3: \\(I = (50 \\times 10^{-6}) / \\sqrt{(0.1)(10 \\times 10^{-6})}\\).\n' +
          'Step 4: \\(I = (50 \\times 10^{-6}) / \\sqrt{10^{-6}} = (50 \\times 10^{-6}) / 10^{-3} = 0.05\\) A.\n' +
          'Result: 50 mA.',
        exampleExplanation:
          'All the energy initially stored in the capacitor\'s electric field is transferred to the inductor\'s magnetic field at the moment the current reaches its peak.',
      },
    ],
  },
]

export const AP_PHYSICS_C_EM_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics C: E&M',
  units: AP_PHYSICS_C_EM_UNITS,
  features: { latex: true, codeExamples: false },
}